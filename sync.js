// sync.js
(function () {
  const STORE_LIST = [
    "todos",
    "journal",
    "projects",
    "actions",
    "habits",
    "habitCompletions",
    "meals",
    "mealPlans",
    "notes",
    "settings"
  ];

  function isOnline() {
    return typeof navigator !== "undefined" ? navigator.onLine : false;
  }

  function nowMs() {
    return Date.now();
  }

  function safeDateTime(ts) {
    try {
      const d = new Date(ts);
      if (Number.isNaN(d.getTime())) return "";
      const pad = (n) => String(n).padStart(2, "0");
      return `${pad(d.getDate())}/${pad(d.getMonth() + 1)} ${pad(d.getHours())}:${pad(d.getMinutes())}`;
    } catch {
      return "";
    }
  }

  function setLastSyncAt(ts) {
    try {
      window.DB?.setSetting?.("ui.lastSyncAt", ts);
    } catch {}
    try {
      window.dispatchEvent(new CustomEvent("sync:updated", { detail: { ts } }));
    } catch {}
  }

  function getUser() {
    try {
      return window.fbAuth?.currentUser || null;
    } catch {
      return null;
    }
  }

  function getFirestore() {
    try {
      return window.fbDb || window.firebaseDb || null;
    } catch {
      return null;
    }
  }

  function hasFirebase() {
    return !!(getUser() && getFirestore() && window.firebase);
  }

  function docRefPath(uid, storeName, id) {
    return `users/${uid}/stores/${storeName}/items/${id}`;
  }

  function storeMetaPath(uid, storeName) {
    return `users/${uid}/stores/${storeName}/meta`;
  }

  async function ensureReady() {
    if (!window.DB) throw new Error("DB not initialised");
    if (!isOnline()) throw new Error("Offline");
    if (!hasFirebase()) throw new Error("Not signed in");
  }

  async function listLocal(storeName) {
    const all = await window.DB.getAll(window.DB.STORES[storeName] || storeName);
    return Array.isArray(all) ? all : [];
  }

  function itemId(storeName, obj) {
    if (!obj) return null;
    if (storeName === "journal") return obj.date || null;
    if (storeName === "settings") return obj.key || null;
    return obj.id || null;
  }

  function normaliseForCloud(storeName, obj) {
    const id = itemId(storeName, obj);
    if (!id) return null;
    return { ...obj };
  }

  function normaliseForLocal(storeName, obj) {
    return { ...obj };
  }

  async function pushStore(uid, fs, storeName) {
    const localItems = await listLocal(storeName);
    const batch = fs.batch();

    const col = fs.collection(`users/${uid}/stores/${storeName}/items`);
    for (const obj of localItems) {
      const id = itemId(storeName, obj);
      if (!id) continue;
      const payload = normaliseForCloud(storeName, obj);
      if (!payload) continue;
      const ref = col.doc(String(id));
      batch.set(ref, payload, { merge: true });
    }

    const metaRef = fs.doc(storeMetaPath(uid, storeName));
    batch.set(metaRef, { lastPushedAt: nowMs() }, { merge: true });

    await batch.commit();
  }

  async function pullStore(uid, fs, storeName) {
    const col = fs.collection(`users/${uid}/stores/${storeName}/items`);
    const snap = await col.get();

    const cloudItems = [];
    snap.forEach((doc) => {
      const data = doc.data();
      if (data) cloudItems.push(data);
    });

    const local = await listLocal(storeName);
    const localMap = new Map();
    for (const obj of local) {
      const id = itemId(storeName, obj);
      if (!id) continue;
      localMap.set(String(id), obj);
    }

    for (const c of cloudItems) {
      const id = itemId(storeName, c);
      if (!id) continue;
      const lid = String(id);
      const l = localMap.get(lid);

      const cUpdated = Number(c.updatedAt || 0);
      const lUpdated = Number(l?.updatedAt || 0);

      if (!l || cUpdated >= lUpdated) {
        const toSave = normaliseForLocal(storeName, c);
        await window.DB.put(window.DB.STORES[storeName] || storeName, toSave);
      }
      localMap.delete(lid);
    }

    // Remaining local-only items are left as-is; push step will upload them.
  }

  async function syncNow(opts = {}) {
    await ensureReady();
    const user = getUser();
    const fs = getFirestore();
    const uid = user.uid;

    const order = Array.isArray(opts.storeOrder) ? opts.storeOrder : STORE_LIST;

    // Pull then push (bi-directional, last-write-wins by updatedAt)
    for (const storeName of order) {
      await pullStore(uid, fs, storeName);
    }

    for (const storeName of order) {
      await pushStore(uid, fs, storeName);
    }

    const ts = nowMs();
    setLastSyncAt(ts);
    return { ok: true, at: ts };
  }

  async function getLastSyncDisplay() {
    try {
      const ts = await window.DB.getSetting("ui.lastSyncAt", 0);
      if (!ts) return "";
      return safeDateTime(ts);
    } catch {
      return "";
    }
  }

  async function setTopbarSyncMeta() {
    const el = document.getElementById("syncMeta");
    if (!el) return;
    const txt = await getLastSyncDisplay();
    if (!txt) {
      el.textContent = "";
      return;
    }
    el.textContent = `Synced: ${txt}`;
  }

  window.syncNow = syncNow;

  window.addEventListener("sync:updated", () => {
    setTopbarSyncMeta();
  });

  window.addEventListener("online", () => {
    setTopbarSyncMeta();
  });

  window.addEventListener("offline", () => {
    setTopbarSyncMeta();
  });

  document.addEventListener("DOMContentLoaded", () => {
    setTopbarSyncMeta();
  });
})();
