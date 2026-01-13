// app.js
(function () {
  const $ = (id) => document.getElementById(id);

  const views = ["dashboard", "todo", "journal", "actions", "habits", "meals", "notes"];

  /* ---------------------------------------------------------
     DOM references (match your new index.html)
  --------------------------------------------------------- */

  // Topbar
  const topbarMeta = $("topbarMeta");
  const syncStamp = $("syncStamp");
  const btnRefreshDashboard = $("btnRefreshDashboard");
  const btnTheme = $("btnTheme");
  const btnExportPDF = $("btnExportPDF");
  const btnSettings = $("btnSettings");
  const btnAccount = $("btnAccount");
  const btnTabsMenu = $("btnTabsMenu");
  const btnSyncNow = $("btnSyncNow");

  // Tabs menu
  const tabsMenu = $("tabsMenu");
  const tabsMenuBackdrop = $("tabsMenuBackdrop");
  const tabsMenuItems = $("tabsMenuItems");
  const btnSaveTabsMenu = $("btnSaveTabsMenu");

  // Theme modal
  const themeModal = $("themeModal");
  const themeBackdrop = $("themeBackdrop");
  const btnCloseTheme = $("btnCloseTheme");
  const themeSelect = $("themeSelect");
  const fontSelect = $("fontSelect");
  const btnApplyTheme = $("btnApplyTheme");

  // Settings modal (JSON import/export)
  const settingsModal = $("settingsModal");
  const settingsBackdrop = $("settingsBackdrop");
  const btnCloseSettings = $("btnCloseSettings");
  const btnExport = $("btnExport");
  const btnImport = $("btnImport");
  const importFile = $("importFile");
  const exportArea = $("exportArea");

  // Account modal (Firebase assumed by your prior code)
  const accountModal = $("accountModal");
  const accountBackdrop = $("accountBackdrop");
  const btnCloseAccount = $("btnCloseAccount");
  const btnSignIn = $("btnSignIn");
  const btnSignUp = $("btnSignUp");
  const btnSignOut = $("btnSignOut");
  const authEmail = $("authEmail");
  const authPassword = $("authPassword");
  const authStatus = $("authStatus");

  // Export PDF modal
  const exportPdfModal = $("exportPdfModal");
  const exportPdfBackdrop = $("exportPdfBackdrop");
  const btnCloseExportPdf = $("btnCloseExportPdf");
  const expTodo = $("expTodo");
  const expJournal = $("expJournal");
  const expActions = $("expActions");
  const expMeals = $("expMeals");
  const expNotes = $("expNotes");
  const btnRunPdfExport = $("btnRunPdfExport");

  // Dashboard metrics
  const mTodoToday = $("mTodoToday");
  const mTodoWeek = $("mTodoWeek");
  const mTodoPeriodLabel = $("mTodoPeriodLabel");
  const mOpenToday = $("mOpenToday");
  const mHabitWeek = $("mHabitWeek");
  const mHabitPeriodLabel = $("mHabitPeriodLabel");
  const dashPeriodWeek = $("dashPeriodWeek");
  const dashPeriodMonth = $("dashPeriodMonth");
  const dashPeriodYear = $("dashPeriodYear");

  // To-do
  const todoIndexCard = $("todoIndexCard");
  const todoDetailCard = $("todoDetailCard");
  const todoDateList = $("todoDateList");
  const todoDetailDateLabel = $("todoDetailDateLabel");
  const todoNewText = $("todoNewText");
  const btnAddTodo = $("btnAddTodo");
  const btnTodoBack = $("btnTodoBack");
  const btnTodoNewList = $("btnTodoNewList");
  const btnTodoToday = $("btnTodoToday");
  const todoSort = $("todoSort");
  const todoList = $("todoList");

  // To-do new list modal
  const todoNewListModal = $("todoNewListModal");
  const todoNewListBackdrop = $("todoNewListBackdrop");
  const btnCloseTodoNewList = $("btnCloseTodoNewList");
  const todoNewListDate = $("todoNewListDate");
  const btnCreateTodoList = $("btnCreateTodoList");

  // Journal
  const journalIndexCard = $("journalIndexCard");
  const journalDetailCard = $("journalDetailCard");
  const journalDateList = $("journalDateList");
  const journalDetailDateLabel = $("journalDetailDateLabel");
  const jGratitude = $("jGratitude");
  const jObjectives = $("jObjectives");
  const jReflections = $("jReflections");
  const btnSaveJournal = $("btnSaveJournal"); // hidden now, but keep for compatibility
  const btnJournalBack = $("btnJournalBack");
  const btnJournalNewEntry = $("btnJournalNewEntry");

  // Journal new entry modal
  const journalNewEntryModal = $("journalNewEntryModal");
  const journalNewEntryBackdrop = $("journalNewEntryBackdrop");
  const btnCloseJournalNewEntry = $("btnCloseJournalNewEntry");
  const journalNewEntryDate = $("journalNewEntryDate");
  const btnCreateJournalEntry = $("btnCreateJournalEntry");

  // Projects / Actions
  const btnActionsViewProjects = $("btnActionsViewProjects");
  const btnActionsViewActions = $("btnActionsViewActions");
  const btnAddProject = $("btnAddProject");
  const btnAddAction = $("btnAddAction");
  const actionsProjectsWrap = $("actionsProjectsWrap");
  const actionsActionsWrap = $("actionsActionsWrap");
  const projectList = $("projectList");

  // Project detail pane
  const projectTitle = $("projectTitle");
  const projectMeta = $("projectMeta");
  const projectNotes = $("projectNotes");
  const actionList2 = $("actionList2");
  const actionSort2 = $("actionSort2");

  // Project pane multi-filters (priority + status)
  const actionFilterPriorityBtn2 = $("actionFilterPriorityBtn2");
  const actionFilterPriorityPanel2 = $("actionFilterPriorityPanel2");
  const actionFilterStatusBtn2 = $("actionFilterStatusBtn2");
  const actionFilterStatusPanel2 = $("actionFilterStatusPanel2");

  // All actions view
  const actionList = $("actionList");
  const actionSort = $("actionSort");
  const btnRefreshActions = $("btnRefreshActions");

  const actionFilterProjectBtn = $("actionFilterProjectBtn");
  const actionFilterProjectPanel = $("actionFilterProjectPanel");
  const actionFilterPriorityBtn = $("actionFilterPriorityBtn");
  const actionFilterPriorityPanel = $("actionFilterPriorityPanel");
  const actionFilterStatusBtn = $("actionFilterStatusBtn");
  const actionFilterStatusPanel = $("actionFilterStatusPanel");

  // Action modal
  const actionModal = $("actionModal");
  const actionBackdrop = $("actionBackdrop");
  const btnCloseActionModal = $("btnCloseActionModal");
  const modalActionTitle = $("modalActionTitle");
  const modalActionProject = $("modalActionProject");
  const modalActionDue = $("modalActionDue");
  const modalActionPriority = $("modalActionPriority");
  const modalActionStatus = $("modalActionStatus");
  const modalActionNotes = $("modalActionNotes");
  const btnSaveModalAction = $("btnSaveModalAction");
  const btnDeleteAction = $("btnDeleteAction");
  const actionModalTitle = $("actionModalTitle");

  // Habits (daily view removed; weekly/monthly only)
  const habitName = $("habitName");
  const habitFreq = $("habitFreq");
  const btnAddHabit = $("btnAddHabit");
  const btnRefreshHabits = $("btnRefreshHabits");
  const habitList = $("habitList");
  const btnToggleHabits = $("btnToggleHabits");
  const habitArchivedList = $("habitArchivedList");
  const habitViewWeekly = $("habitViewWeekly");
  const habitViewMonthly = $("habitViewMonthly");
  const habitRefDate = $("habitRefDate");
  const habitWeeklyWrap = $("habitWeeklyWrap");
  const habitMonthlyWrap = $("habitMonthlyWrap");
  const monthlyViewMode = $("monthlyViewMode");
  const monthlyHabitSelectWrap = $("monthlyHabitSelectWrap");
  const monthlyHabitSelect = $("monthlyHabitSelect");

  // Meals
  const mealViewDaily = $("mealViewDaily");
  const mealViewWeekly = $("mealViewWeekly");
  const mealNewName = $("mealNewName");
  const btnAddMeal = $("btnAddMeal");
  const mealRefDate = $("mealRefDate");
  const btnRefreshMeals = $("btnRefreshMeals");
  const mealList = $("mealList");
  const mealsWrap = document.querySelector(".mealsWrap");
  const btnToggleMeals = $("btnToggleMeals");

  const mealDailyWrap = $("mealDailyWrap");
  const mealWeeklyWrap = $("mealWeeklyWrap");

  // Meal modal (edit notes)
  const mealModal = $("mealModal");
  const mealBackdrop = $("mealBackdrop");
  const btnCloseMealModal = $("btnCloseMealModal");
  const mealModalName = $("mealModalName");
  const mealModalNotes = $("mealModalNotes");
  const btnSaveMealModal = $("btnSaveMealModal");
  const btnDeleteMealModal = $("btnDeleteMealModal");
  let editingMealId = null;

  // Notes (iOS-style: index -> detail)
  const notesIndexCard = $("notesIndexCard");
  const notesDetailCard = $("notesDetailCard");
  const btnNewNote = $("btnNewNote");
  const notesList = $("notesList");
  const btnNotesBack = $("btnNotesBack");
  const noteTitle = $("noteTitle");
  const noteBody = $("noteBody");
  const noteCreated = $("noteCreated");
  const noteUpdated = $("noteUpdated");
  const btnSaveNote = $("btnSaveNote"); // hidden now, but keep
  const btnDeleteNote = $("btnDeleteNote");

  /* ---------------------------------------------------------
     State
  --------------------------------------------------------- */

  let dashboardPeriod = "Week";
  let mealsListHidden = false;
  let habitsHidden = false;


  let currentTodoDate = null;
  let currentJournalDate = null;

  let actionsMode = "projects";
  let selectedProjectId = null;

  let editingActionId = null;
  let currentNoteId = null;

  // Debounce timers for autosave
  const debounceTimers = new Map();

  // Multi-select filter state
  const filterState = {
    actionsProject: new Set(["__ALL__"]),
    actionsPriority: new Set(["Low", "Medium", "High"]),
    actionsStatus: new Set(["Open", "In Progress", "Completed"]),
    projectPriority: new Set(["Low", "Medium", "High"]),
    projectStatus: new Set(["Open", "In Progress", "Completed"])
  };

  /* ---------------------------------------------------------
     Utilities
  --------------------------------------------------------- */

  function showModal(modal) { modal?.classList.remove("hidden"); }
  function hideModal(modal) { modal?.classList.add("hidden"); }

  function escapeHtml(s) {
    return String(s || "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;");
  }

  function pad2(n) { return String(n).padStart(2, "0"); }

  function todayStrISO() {
    const d = new Date();
    return `${d.getFullYear()}-${pad2(d.getMonth() + 1)}-${pad2(d.getDate())}`;
  }

  function parseISO(yyyyMmDd) {
    const [y, m, d] = (yyyyMmDd || "").split("-").map(Number);
    return new Date(y, (m || 1) - 1, d || 1);
  }

  function isoToDDMMYYYY(iso) {
    if (!iso) return "—";
    const d = parseISO(iso);
    return `${pad2(d.getDate())}/${pad2(d.getMonth() + 1)}/${d.getFullYear()}`;
  }

  function ddmmyyyyForDate(d) {
    return `${pad2(d.getDate())}/${pad2(d.getMonth() + 1)}/${d.getFullYear()}`;
  }

  function weekdayName(d) {
    return ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][d.getDay()];
  }

  function startOfWeek(date) {
    const d = new Date(date);
    const day = d.getDay(); // 0 Sun..6 Sat
    const diff = (day === 0 ? -6 : 1 - day);
    d.setDate(d.getDate() + diff);
    d.setHours(0, 0, 0, 0);
    return d;
  }

  function startOfMonth(date) {
    const d = new Date(date.getFullYear(), date.getMonth(), 1);
    d.setHours(0, 0, 0, 0);
    return d;
  }

  function startOfYear(date) {
    const d = new Date(date.getFullYear(), 0, 1);
    d.setHours(0, 0, 0, 0);
    return d;
  }

  function dateToISO(d) {
    return `${d.getFullYear()}-${pad2(d.getMonth() + 1)}-${pad2(d.getDate())}`;
  }

  function daysBetweenInclusive(a, b) {
    const da = new Date(a); da.setHours(0, 0, 0, 0);
    const db = new Date(b); db.setHours(0, 0, 0, 0);
    const diff = Math.round((db - da) / (24 * 3600 * 1000));
    return diff + 1;
  }

  function fmtPct(n) {
    if (!isFinite(n)) return "—";
    return `${Math.round(n * 100)}%`;
  }

  function prioRank(p) {
    if (p === "High") return 3;
    if (p === "Medium") return 2;
    return 1;
  }

  function cycleStatus(s) {
    if (s === "Open") return "In Progress";
    if (s === "In Progress") return "Completed";
    return "Open";
  }

  function cyclePriority(p) {
    if (p === "Low") return "Medium";
    if (p === "Medium") return "High";
    return "Low";
  }

  function statusClass(s) {
    if (s === "In Progress") return "status-inprogress";
    if (s === "Completed") return "status-completed";
    return "status-open";
  }

  function prioClass(p) {
    if (p === "High") return "prio-high";
    if (p === "Medium") return "prio-medium";
    return "prio-low";
  }

  function setPressed(btn, on) { btn?.setAttribute("aria-pressed", on ? "true" : "false"); }

  function autosizeTextarea(el) {
    if (!el) return;
    el.style.height = "auto";
    el.style.height = Math.min(el.scrollHeight, 800) + "px";
  }

  function wireAutosize() {
    document.querySelectorAll("textarea.autosize").forEach((ta) => {
      autosizeTextarea(ta);
      ta.addEventListener("input", () => autosizeTextarea(ta));
    });
  }

  function debounce(key, ms, fn) {
    if (debounceTimers.has(key)) clearTimeout(debounceTimers.get(key));
    const t = setTimeout(fn, ms);
    debounceTimers.set(key, t);
  }

  function updateSyncStamp(ts, label = "Last synced") {
    if (!syncStamp) return;
    if (!ts) { syncStamp.textContent = `${label}: —`; return; }
    syncStamp.textContent = `${label}: ${new Date(ts).toLocaleString()}`;
  }

  /* ---------------------------------------------------------
     Multi-select filter helper (Excel-like)
  --------------------------------------------------------- */

  function buildMultiFilter({ button, panel, title, options, stateSet, onApply }) {
    if (!button || !panel) return;

    function renderLabel() {
      const sel = Array.from(stateSet);
      if (!sel.length) return `${title}: None`;
      if (sel.length === options.length) return `${title}: All`;
      return `${title}: ${sel.join(", ")}`;
    }

    function close() {
      panel.classList.add("hidden");
    }

    function open() {
      panel.classList.remove("hidden");
      panel.focus?.();
    }

    function toggle() {
      panel.classList.contains("hidden") ? open() : close();
    }

    function renderPanel() {
      panel.innerHTML = "";
      const h = document.createElement("div");
      h.className = "fpTitle";
      h.textContent = title;
      panel.appendChild(h);

      for (const opt of options) {
        const row = document.createElement("div");
        row.className = "fpItem";

        const lab = document.createElement("label");
        lab.textContent = opt;

        const cb = document.createElement("input");
        cb.type = "checkbox";
        cb.checked = stateSet.has(opt);

        cb.addEventListener("change", () => {
          if (cb.checked) stateSet.add(opt);
          else stateSet.delete(opt);
        });

        row.appendChild(lab);
        row.appendChild(cb);
        panel.appendChild(row);
      }

      const actions = document.createElement("div");
      actions.className = "fpActions";

      const btnClear = document.createElement("button");
      btnClear.type = "button";
      btnClear.className = "btn btn--ghost";
      btnClear.textContent = "Clear";
      btnClear.addEventListener("click", () => {
        stateSet.clear();
        renderPanel();
      });

      const btnAll = document.createElement("button");
      btnAll.type = "button";
      btnAll.className = "btn btn--ghost";
      btnAll.textContent = "All";
      btnAll.addEventListener("click", () => {
        stateSet.clear();
        options.forEach(o => stateSet.add(o));
        renderPanel();
      });

      const btnApply = document.createElement("button");
      btnApply.type = "button";
      btnApply.className = "btn btn--primary";
      btnApply.textContent = "Apply";
      btnApply.addEventListener("click", () => {
        // Guard: if none selected, treat as all (more usable)
        if (!stateSet.size) options.forEach(o => stateSet.add(o));
        button.textContent = renderLabel();
        close();
        onApply?.();
      });

      actions.appendChild(btnClear);
      actions.appendChild(btnAll);
      actions.appendChild(btnApply);
      panel.appendChild(actions);

      button.textContent = renderLabel();
    }

    button.addEventListener("click", () => {
      renderPanel();
      toggle();
    });

    panel.addEventListener("keydown", (e) => {
      if (e.key === "Escape") close();
      if (e.key === "Enter") {
        e.preventDefault();
        // Apply on Enter
        if (!stateSet.size) options.forEach(o => stateSet.add(o));
        button.textContent = renderLabel();
        close();
        onApply?.();
      }
    });

    document.addEventListener("click", (e) => {
      if (panel.classList.contains("hidden")) return;
      if (panel.contains(e.target) || button.contains(e.target)) return;
      close();
    });

    // Initial label
    button.textContent = renderLabel();
  }

  /* ---------------------------------------------------------
     Topbar / Auth / Sync
  --------------------------------------------------------- */

  function setAuthStatus(text) { if (authStatus) authStatus.textContent = text; }

  function updateTopbar() {
    const online = navigator.onLine ? "Online" : "Offline";
    const user = window.fbAuth && window.fbAuth.currentUser;
    const who = user ? user.email : "Not signed in";
    if (topbarMeta) topbarMeta.textContent = `${online} • ${who}`;
    if (btnSyncNow) btnSyncNow.disabled = !navigator.onLine || !user;
  }

  btnAccount?.addEventListener("click", () => showModal(accountModal));
  btnCloseAccount?.addEventListener("click", () => hideModal(accountModal));
  accountBackdrop?.addEventListener("click", () => hideModal(accountModal));

  btnSignIn?.addEventListener("click", async () => {
    if (!window.fbAuth) { alert("Firebase not initialised."); return; }
    try {
      await window.fbAuth.signInWithEmailAndPassword(authEmail.value.trim(), authPassword.value);
    } catch (e) {
      alert(e.message || String(e));
    }
  });

  btnSignUp?.addEventListener("click", async () => {
    if (!window.fbAuth) { alert("Firebase not initialised."); return; }
    try {
      await window.fbAuth.createUserWithEmailAndPassword(authEmail.value.trim(), authPassword.value);
    } catch (e) {
      alert(e.message || String(e));
    }
  });

  btnSignOut?.addEventListener("click", async () => {
    if (!window.fbAuth) return;
    await window.fbAuth.signOut();
  });

  if (window.fbAuth) {
    window.fbAuth.onAuthStateChanged(async () => {
      updateTopbar();
      const user = window.fbAuth.currentUser;
      if (user) setAuthStatus(`Signed in as ${user.email}`);
      else setAuthStatus("Not signed in.");
    });
  }

  window.addEventListener("online", updateTopbar);
  window.addEventListener("offline", updateTopbar);

  // Manual sync
  btnSyncNow?.addEventListener("click", async () => {
    try {
      btnSyncNow.disabled = true;
      btnSyncNow.textContent = "Syncing…";
      if (window.syncNow) await window.syncNow(() => {});
      const ts = Date.now();
      await window.DB.setSetting("sync.lastAt", ts);
      updateSyncStamp(ts, "Last synced");
      btnSyncNow.textContent = "Sync";
      updateTopbar();
      refreshDashboard();
    } catch (e) {
      btnSyncNow.textContent = "Sync";
      updateTopbar();
      alert(e.message || String(e));
    }
  });

  // Autosync every 30 seconds (as requested)
  let autoSyncTimer = null;
  function startAutoSync() {
    if (autoSyncTimer) clearInterval(autoSyncTimer);
    autoSyncTimer = setInterval(async () => {
      try {
        if (!navigator.onLine) return;
        const user = window.fbAuth && window.fbAuth.currentUser;
        if (!user) return;
        if (window.syncNow) await window.syncNow(() => {});
        const ts = Date.now();
        await window.DB.setSetting("sync.lastAt", ts);
        updateSyncStamp(ts, "Last synced");
        updateTopbar();
      } catch {
        updateTopbar();
      }
    }, 30000);
  }

  /* ---------------------------------------------------------
     Tabs visibility (Show/Hide tabs) - fix
  --------------------------------------------------------- */

  const tabLabels = {
    dashboard: "Dashboard",
    todo: "To-do",
    journal: "Journal",
    actions: "Projects",
    habits: "Habits",
    meals: "Meals",
    notes: "Notes"
  };

  async function applyTabVisibility() {
    const hidden = (await window.DB.getSetting("ui.hiddenTabs", [])) || [];
    const hiddenSet = new Set(hidden);

    for (const v of views) {
      const btn = $("tab-" + v);
      if (!btn) continue;
      btn.classList.toggle("hidden", hiddenSet.has(v));
    }

    const currentActive = document.querySelector(".tab.active");
    if (currentActive && currentActive.classList.contains("hidden")) {
      const firstVisible = views.find(v => !$("tab-" + v)?.classList.contains("hidden"));
      if (firstVisible) setTab(firstVisible);
    }
  }

  function showMenu(menu) { menu?.classList.remove("hidden"); }
  function hideMenu(menu) { menu?.classList.add("hidden"); }

  async function openTabsMenu() {
    tabsMenuItems.innerHTML = "";
    const hidden = new Set(((await window.DB.getSetting("ui.hiddenTabs", [])) || []).slice());

    for (const v of views) {
      const row = document.createElement("div");
      row.className = "menuItem";

      const lab = document.createElement("label");
      lab.textContent = tabLabels[v] || v;

      const cb = document.createElement("input");
      cb.type = "checkbox";
      cb.checked = !hidden.has(v);
      cb.addEventListener("change", () => {
        if (cb.checked) hidden.delete(v);
        else hidden.add(v);
      });

      row.appendChild(lab);
      row.appendChild(cb);
      tabsMenuItems.appendChild(row);
    }

    btnSaveTabsMenu.onclick = async () => {
      await window.DB.setSetting("ui.hiddenTabs", Array.from(hidden));
      hideMenu(tabsMenu);
      await applyTabVisibility();
    };

    showMenu(tabsMenu);
  }

  btnTabsMenu?.addEventListener("click", openTabsMenu);
  tabsMenuBackdrop?.addEventListener("click", () => hideMenu(tabsMenu));

  /* ---------------------------------------------------------
     Theme & font
  --------------------------------------------------------- */

  function applyThemeAndFont(theme, font) {
    document.body.setAttribute("data-theme", theme);
    document.body.setAttribute("data-font", font);
  }

  btnTheme?.addEventListener("click", async () => {
    const theme = (await window.DB.getSetting("ui.theme", "aurora")) || "aurora";
    const font = (await window.DB.getSetting("ui.font", "system")) || "system";
    themeSelect.value = theme;
    fontSelect.value = font;
    showModal(themeModal);
  });

  themeBackdrop?.addEventListener("click", () => hideModal(themeModal));
  btnCloseTheme?.addEventListener("click", () => hideModal(themeModal));
  btnApplyTheme?.addEventListener("click", async () => {
    const theme = themeSelect.value || "aurora";
    const font = fontSelect.value || "system";
    await window.DB.setSetting("ui.theme", theme);
    await window.DB.setSetting("ui.font", font);
    applyThemeAndFont(theme, font);
    hideModal(themeModal);
  });

  /* ---------------------------------------------------------
     Settings modal (JSON import/export)
  --------------------------------------------------------- */

  btnSettings?.addEventListener("click", () => showModal(settingsModal));
  btnCloseSettings?.addEventListener("click", () => hideModal(settingsModal));
  settingsBackdrop?.addEventListener("click", () => hideModal(settingsModal));

  btnExport?.addEventListener("click", async () => {
    const dump = await window.DB.exportAll();
    exportArea.value = JSON.stringify(dump, null, 2);
  });

  btnImport?.addEventListener("click", async () => {
    const file = importFile.files && importFile.files[0];
    if (!file) { alert("Select a JSON file first."); return; }
    const ok = confirm("This will overwrite your local database. Continue?");
    if (!ok) return;
    const txt = await file.text();
    const data = JSON.parse(txt);
    await window.DB.importAll(data, { overwrite: true });
    alert("Imported.");
    refreshDashboard();
    refreshTodoIndex();
    refreshJournalIndex();
    refreshProjectsAndActions();
    refreshHabits();
    refreshMeals();
    refreshNotes();
  });

  /* ---------------------------------------------------------
     Export PDF (extended to include Notes)
  --------------------------------------------------------- */

  btnExportPDF?.addEventListener("click", () => showModal(exportPdfModal));
  exportPdfBackdrop?.addEventListener("click", () => hideModal(exportPdfModal));
  btnCloseExportPdf?.addEventListener("click", () => hideModal(exportPdfModal));

  btnRunPdfExport?.addEventListener("click", async () => {
    hideModal(exportPdfModal);

    const dump = await window.DB.exportAll();
    const todos = (dump.todos || []).filter(x => !x._deleted).sort((a, b) => (a.date || "").localeCompare(b.date || "") || (a.createdAt || 0) - (b.createdAt || 0));
    const journal = (dump.journal || []).filter(x => !x._deleted).sort((a, b) => (a.date || "").localeCompare(b.date || ""));
    const actions = (dump.actions || []).filter(x => !x._deleted).sort((a, b) => (a.createdAt || 0) - (b.createdAt || 0));
    const projects = (dump.projects || []).filter(x => !x._deleted).sort((a, b) => (a.name || "").localeCompare(b.name || ""));
    const meals = (dump.meals || []).filter(x => !x._deleted).sort((a, b) => (a.name || "").localeCompare(b.name || ""));
    const mealPlans = (dump.mealPlans || []).filter(x => !x._deleted);
    const notes = (dump.notes || []).filter(x => !x._deleted).sort((a, b) => (b.updatedAt || 0) - (a.updatedAt || 0));

    const projName = (id) => (projects.find(p => p.id === id)?.name) || "—";
    const esc = (s) => String(s || "").replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");

    const w = window.open("", "_blank");
    if (!w) { alert("Popup blocked. Allow popups then try again."); return; }

    const groupByDate = (arr, key) => {
      const m = new Map();
      for (const x of arr) {
        const d = x[key] || "";
        if (!m.has(d)) m.set(d, []);
        m.get(d).push(x);
      }
      return Array.from(m.entries()).sort((a, b) => a[0].localeCompare(b[0]));
    };

    let html = `
      <html><head><meta charset="utf-8">
      <title>Offline Planner Export</title>
      <style>
        body{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Arial,sans-serif;color:#111827;margin:28px}
        h1{margin:0 0 10px 0}
        h2{margin:18px 0 8px 0}
        .muted{color:#6b7280;font-size:12px}
        .box{border:1px solid #e5e7eb;border-radius:12px;padding:12px;margin:10px 0}
        ul{padding-left:18px;margin:8px 0}
        li{margin:6px 0}
        .pb{page-break-before:always}
      </style>
      </head><body>
      <h1>Offline Planner Export</h1>
      <div class="muted">Generated: ${new Date().toLocaleString()}</div>
    `;

    if (expTodo.checked) {
      const todoGroups = groupByDate(todos, "date");
      html += `<h2>To-dos</h2>`;
      if (!todoGroups.length) html += `<div class="box muted">No to-dos.</div>`;
      for (const [date, items] of todoGroups) {
        html += `<div class="box"><strong>${esc(isoToDDMMYYYY(date))}</strong><ul>`;
        for (const t of items) {
          html += `<li>
            <strong>${esc(t.text)}</strong>
            <div class="muted">Status: ${esc(t.status)} • Priority: ${esc(t.priority)} • Due: ${esc(t.dueDate ? isoToDDMMYYYY(t.dueDate) : "—")} • Project: ${esc(projName(t.projectId))}</div>
            ${t.notes ? `<div>${esc(t.notes).replaceAll("\n","<br>")}</div>` : ``}
          </li>`;
        }
        html += `</ul></div>`;
      }
    }

    if (expActions.checked) {
      html += `<h2 class="pb">Projects & actions</h2>`;
      if (!projects.length) html += `<div class="box muted">No projects.</div>`;
      else {
        html += `<div class="box"><strong>Projects</strong><ul>`;
        for (const p of projects) html += `<li>${esc(p.name)}</li>`;
        html += `</ul></div>`;
      }

      if (!actions.length) html += `<div class="box muted">No actions.</div>`;
      else {
        for (const a of actions) {
          html += `<div class="box">
            <div><strong>${esc(a.title)}</strong></div>
            <div class="muted">Project: ${esc(projName(a.projectId))} • Priority: ${esc(a.priority)} • Due: ${esc(a.dueDate ? isoToDDMMYYYY(a.dueDate) : "—")}</div>
            <div class="muted">Status: ${esc(a.status)}</div>
            ${a.notes ? `<div style="margin-top:8px">${esc(a.notes).replaceAll("\n","<br>")}</div>` : ``}
          </div>`;
        }
      }
    }

    if (expJournal.checked) {
      html += `<h2 class="pb">Journal</h2>`;
      if (!journal.length) html += `<div class="box muted">No journal entries.</div>`;
      else {
        let first = true;
        for (const j of journal) {
          html += `${first ? `` : `<div class="pb"></div>`}`;
          first = false;
          html += `
            <h2>${esc(isoToDDMMYYYY(j.date))}</h2>
            <div class="box"><div><strong>Gratitude</strong></div><div>${esc(j.gratitude).replaceAll("\n","<br>")}</div></div>
            <div class="box"><div><strong>Objectives</strong></div><div>${esc(j.objectives).replaceAll("\n","<br>")}</div></div>
            <div class="box"><div><strong>Reflections</strong></div><div>${esc(j.reflections).replaceAll("\n","<br>")}</div></div>
          `;
        }
      }
    }

    if (expMeals.checked) {
      html += `<h2 class="pb">Meals</h2>`;
      if (!meals.length) html += `<div class="box muted">No meals.</div>`;
      else {
        html += `<div class="box"><strong>Meals list</strong><ul>`;
        for (const m of meals) html += `<li>${esc(m.name)}</li>`;
        html += `</ul></div>`;
      }

      const byDate = groupByDate(mealPlans, "date");
      if (!byDate.length) html += `<div class="box muted">No meal plans.</div>`;
      for (const [date, items] of byDate) {
        const slotName = (s) => ({ breakfast: "Breakfast", lunch: "Lunch", snack: "Snack", dinner: "Dinner" }[s] || s);
        const mealName = (id) => meals.find(m => m.id === id)?.name || "—";
        html += `<div class="box"><strong>${esc(isoToDDMMYYYY(date))}</strong><ul>`;
        for (const it of items) html += `<li>${esc(slotName(it.slot))}: ${esc(mealName(it.mealId))}</li>`;
        html += `</ul></div>`;
      }
    }

    if (expNotes.checked) {
      html += `<h2 class="pb">Notes</h2>`;
      if (!notes.length) html += `<div class="box muted">No notes.</div>`;
      else {
        for (const n of notes) {
          html += `<div class="box">
            <div><strong>${esc(n.title || "Untitled")}</strong></div>
            <div class="muted">Edited: ${esc(n.updatedAt ? new Date(n.updatedAt).toLocaleString() : "—")}</div>
            <div style="margin-top:8px">${esc(n.body || "").replaceAll("\n","<br>")}</div>
          </div>`;
        }
      }
    }

    html += `</body></html>`;
    w.document.open();
    w.document.write(html);
    w.document.close();
    w.focus();
    w.print();
  });

  /* ---------------------------------------------------------
     Tabs
  --------------------------------------------------------- */

  function setTab(tab) {
    for (const t of views) {
      const v = $("view-" + t);
      const btn = $("tab-" + t);
      if (!v || !btn) continue;
      if (t === tab) {
        v.classList.remove("hidden");
        btn.classList.add("active");
      } else {
        v.classList.add("hidden");
        btn.classList.remove("active");
      }
    }

    if (tab === "dashboard") refreshDashboard();
    if (tab === "todo") refreshTodoIndex();
    if (tab === "journal") refreshJournalIndex();
    if (tab === "actions") refreshProjectsAndActions();
    if (tab === "habits") { refreshHabits(); refreshHabitTrack(); }
    if (tab === "meals") refreshMeals();
    if (tab === "notes") refreshNotes();
  }

  function initTabs() {
    for (const t of views) {
      const btn = $("tab-" + t);
      if (!btn) continue;
      btn.addEventListener("click", () => setTab(t));
    }
  }

  // Service worker (optional)
  async function initServiceWorker() {
    if (!("serviceWorker" in navigator)) return;
    try { await navigator.serviceWorker.register("service-worker.js"); } catch { /* ignore */ }
  }

  /* ---------------------------------------------------------
     Dashboard
  --------------------------------------------------------- */

  function setDashboardPeriod(p) {
    dashboardPeriod = p;
    setPressed(dashPeriodWeek, p === "Week");
    setPressed(dashPeriodMonth, p === "Month");
    setPressed(dashPeriodYear, p === "Year");
    refreshDashboard();
  }
  dashPeriodWeek?.addEventListener("click", () => setDashboardPeriod("Week"));
  dashPeriodMonth?.addEventListener("click", () => setDashboardPeriod("Month"));
  dashPeriodYear?.addEventListener("click", () => setDashboardPeriod("Year"));

  async function refreshDashboard() {
    const dump = await window.DB.exportAll();
    const todos = (dump.todos || []).filter(x => !x._deleted);
    const habits = (dump.habits || []).filter(x => !x._deleted && !x.archived);
    const completions = (dump.habitCompletions || []).filter(x => !x._deleted);

    const nowD = new Date();
    const today = todayStrISO();

    function todoCompletionForDates(dates) {
      const relevant = todos.filter(t => dates.includes(t.date));
      const total = relevant.length;
      const done = relevant.filter(t => t.status === "Completed").length;
      return total ? done / total : NaN;
    }

    let periodLabel = "This week";
    let dates = [];
    if (dashboardPeriod === "Week") {
      const startW = startOfWeek(nowD);
      for (let i = 0; i < 7; i++) {
        const d = new Date(startW);
        d.setDate(d.getDate() + i);
        dates.push(dateToISO(d));
      }
      periodLabel = "This week";
    } else if (dashboardPeriod === "Month") {
      const start = startOfMonth(nowD);
      const end = new Date(nowD.getFullYear(), nowD.getMonth() + 1, 0);
      for (let d = new Date(start); d <= end; d.setDate(d.getDate() + 1)) dates.push(dateToISO(d));
      periodLabel = "This month";
    } else {
      const start = startOfYear(nowD);
      const end = new Date(nowD.getFullYear(), 11, 31);
      for (let d = new Date(start); d <= end; d.setDate(d.getDate() + 1)) dates.push(dateToISO(d));
      periodLabel = "This year";
    }

    if (mTodoToday) mTodoToday.textContent = fmtPct(todoCompletionForDates([today]));
    if (mTodoWeek) mTodoWeek.textContent = fmtPct(todoCompletionForDates(dates));
    if (mTodoPeriodLabel) mTodoPeriodLabel.textContent = periodLabel;

    const openToday = todos.filter(t => t.date === today && t.status !== "Completed").length;
    if (mOpenToday) mOpenToday.textContent = String(openToday);

    function periodStatsHabits(startDate) {
      const start = startDate;
      const days = daysBetweenInclusive(start, nowD);
      const denom = habits.length * days;
      if (!denom) return NaN;
      const startStr = dateToISO(start);
      const endStr = dateToISO(nowD);
      const ticks = completions.filter(c => c.date >= startStr && c.date <= endStr).length;
      return ticks / denom;
    }

    let habitStart = startOfWeek(nowD);
    let habitLabel = "This week";
    if (dashboardPeriod === "Month") { habitStart = startOfMonth(nowD); habitLabel = "This month"; }
    if (dashboardPeriod === "Year") { habitStart = startOfYear(nowD); habitLabel = "This year"; }

    if (mHabitWeek) mHabitWeek.textContent = fmtPct(periodStatsHabits(habitStart));
    if (mHabitPeriodLabel) mHabitPeriodLabel.textContent = habitLabel;

    updateTopbar();
  }

  btnRefreshDashboard?.addEventListener("click", refreshDashboard);

  /* ---------------------------------------------------------
     To-do lists
     - Fix: index now shows created lists (uses todoLists store)
     - Priority filter is multi-select (Excel-like)
     - Clicking a to-do item opens Action modal (no separate to-do modal in new HTML)
  --------------------------------------------------------- */


  function showTodoIndex() {
    todoDetailCard?.classList.add("hidden");
    todoIndexCard?.classList.remove("hidden");
    currentTodoDate = null;
  }

  function showTodoDetail(dateISO) {
    currentTodoDate = dateISO;
    if (todoDetailDateLabel) todoDetailDateLabel.textContent = isoToDDMMYYYY(dateISO);
    todoIndexCard?.classList.add("hidden");
    todoDetailCard?.classList.remove("hidden");
    if (todoNewText) todoNewText.value = "";
    refreshTodoDetail();
  }

  btnTodoBack?.addEventListener("click", refreshTodoIndex);

  btnTodoNewList?.addEventListener("click", () => {
    if (todoNewListDate) todoNewListDate.value = todayStrISO();
    showModal(todoNewListModal);
  });
  todoNewListBackdrop?.addEventListener("click", () => hideModal(todoNewListModal));
  btnCloseTodoNewList?.addEventListener("click", () => hideModal(todoNewListModal));

  btnCreateTodoList?.addEventListener("click", async () => {
    const d = (todoNewListDate?.value) || todayStrISO();
    await window.DB.ensureTodoList(d);
    hideModal(todoNewListModal);
    showTodoDetail(d);
  });

  btnTodoToday?.addEventListener("click", async () => {
    const d = todayStrISO();
    await window.DB.ensureTodoList(d);
    showTodoDetail(d);
  });

  todoSort?.addEventListener("change", refreshTodoIndex);

  async function refreshTodoIndex() {
    showTodoIndex();

    const lists = (await window.DB.getAll(window.DB.STORES.todoLists)).filter(x => !x._deleted);
    const todos = (await window.DB.getAll(window.DB.STORES.todos)).filter(x => !x._deleted);

    const sortMode = todoSort?.value || "dateDesc";
    

    const rows = lists
      .map(l => {
        const items = todos.filter(t => t.date === l.date);
        const done = items.filter(t => t.status === "Completed").length;
        return { date: l.date, total: items.length, done };
      })

    rows.sort((a, b) => sortMode === "dateAsc" ? a.date.localeCompare(b.date) : b.date.localeCompare(a.date));

    todoDateList.innerHTML = "";
    if (!rows.length) {
      const li = document.createElement("li");
      li.innerHTML = `<div class="list__left"><div class="muted">No to-do lists yet.</div></div>`;
      todoDateList.appendChild(li);
      return;
    }

    for (const x of rows) {
      const li = document.createElement("li");
      li.innerHTML = `
        <div class="list__left">
          <div class="titleClamp">
            <div><strong>${isoToDDMMYYYY(x.date)}</strong></div>
            <div class="muted">${x.done}/${x.total} completed</div>
          </div>
        </div>
        <div class="list__right">
          <span class="pill">${x.total} items</span>
        </div>
      `;
      li.addEventListener("click", async () => {
        await window.DB.ensureTodoList(x.date);
        showTodoDetail(x.date);
      });
      todoDateList.appendChild(li);
    }
  }

  async function refreshTodoDetail() {
    if (!currentTodoDate) return;

    const items = (await window.DB.getByIndex(window.DB.STORES.todos, window.DB.idx.todosByDate, currentTodoDate))
      .filter(x => !x._deleted)
   
    items.sort((a, b) => prioRank(b.priority || "Medium") - prioRank(a.priority || "Medium") || (a.createdAt || 0) - (b.createdAt || 0));

    todoList.innerHTML = "";
    if (!items.length) {
      const li = document.createElement("li");
      li.innerHTML = `<div class="list__left"><div class="muted">No tasks yet. Add one above.</div></div>`;
      todoList.appendChild(li);
      return;
    }

    for (const t of items) {
      const li = document.createElement("li");

      const left = document.createElement("div");
      left.className = "list__left";

      const dot = document.createElement("div");
      dot.className = "todoDot" + (t.status === "Completed" ? " done" : "");

      const title = document.createElement("div");
      title.className = "titleClamp";

      const due = t.dueDate ? isoToDDMMYYYY(t.dueDate) : "—";
      title.innerHTML = `
        <div class="todoText ${t.status === "Completed" ? "done" : ""}"><strong>${escapeHtml(t.text)}</strong></div>
        <div class="muted">Due: ${escapeHtml(due)}</div>
      `;

      left.appendChild(dot);
      left.appendChild(title);

      const right = document.createElement("div");
      right.className = "list__right";

      const prio = document.createElement("div");
      prio.className = `prioDot ${prioClass(t.priority || "Medium")}`;
      prio.title = `Priority: ${t.priority || "Medium"}`;

      const statusBtn = document.createElement("button");
      statusBtn.type = "button";
      statusBtn.className = `statusBtn ${statusClass(t.status || "Open")}`;
      statusBtn.textContent = t.status || "Open";

      if (t.notes && t.notes.trim()) {
        const note = document.createElement("div");
        note.className = "notesIcon";
        note.title = "Has notes";
        note.textContent = "✎";
        right.appendChild(note);
      }

      right.appendChild(prio);
      right.appendChild(statusBtn);

      li.appendChild(left);
      li.appendChild(right);

      // 🗑 Delete task (delete canonical action to prevent regeneration)
const delBtn = document.createElement("button");
delBtn.type = "button";
delBtn.className = "iconBtn";
delBtn.title = "Delete task";
delBtn.textContent = "🗑";

delBtn.addEventListener("click", async (ev) => {
  ev.stopPropagation();
  const ok = confirm("Delete this task?");
  if (!ok) return;

  if (t.actionId) {
    await window.DB.deleteAction(t.actionId);
  } else {
    await window.DB.deleteTodo(t.id);
  }

  await refreshTodoDetail();
  await refreshProjectsAndActions();
  await refreshDashboard();
});

right.appendChild(delBtn);

      dot.addEventListener("click", async (ev) => {
        ev.stopPropagation();
        const next = t.status === "Completed" ? "Open" : "Completed";
        await window.DB.updateTodo(t.id, { status: next });
        await refreshTodoDetail();
        await refreshProjectsAndActions();
        await refreshDashboard();
      });

      statusBtn.addEventListener("click", async (ev) => {
        ev.stopPropagation();
        const next = cycleStatus(t.status || "Open");
        await window.DB.updateTodo(t.id, { status: next });
        await refreshTodoDetail();
        await refreshProjectsAndActions();
        await refreshDashboard();
      });

      prio.addEventListener("click", async (ev) => {
        ev.stopPropagation();
        const next = cyclePriority(t.priority || "Medium");
        await window.DB.updateTodo(t.id, { priority: next });
        await refreshTodoDetail();
        await refreshProjectsAndActions();
      });

      // In the new UI, clicking a to-do opens the Action modal (same underlying record via actionId)
      li.addEventListener("click", async () => {
        if (t.actionId) openActionModal(t.actionId);
        else {
          // Ensure linkage exists (db.js upsertTodo normally ensures it, but guard anyway)
          const saved = await window.DB.upsertTodo({ id: t.id, date: t.date, text: t.text, status: t.status, priority: t.priority, dueDate: t.dueDate, notes: t.notes, projectId: t.projectId });
          if (saved?.actionId) openActionModal(saved.actionId);
        }
      });

      todoList.appendChild(li);
    }
  }

  btnAddTodo?.addEventListener("click", async () => {
    if (!currentTodoDate) return;
    const text = (todoNewText.value || "").trim();
    if (!text) return;

    await window.DB.ensureTodoList(currentTodoDate);

    await window.DB.upsertTodo({
      date: currentTodoDate,
      text,
      status: "Open",
      priority: "Medium",
      notes: "",
      dueDate: "",
      projectId: null
    });

    todoNewText.value = "";
    await refreshTodoDetail();
    await refreshProjectsAndActions();
    await refreshDashboard();
  });

  todoNewText?.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      btnAddTodo.click();
    }
  });

  /* ---------------------------------------------------------
     Journal
     - Index -> detail
     - Autosave while typing (no manual Save required)
  --------------------------------------------------------- */

  function showJournalIndex() {
    journalDetailCard?.classList.add("hidden");
    journalIndexCard?.classList.remove("hidden");
    currentJournalDate = null;
  }

  function showJournalDetail(dateISO) {
    currentJournalDate = dateISO;
    if (journalDetailDateLabel) journalDetailDateLabel.textContent = isoToDDMMYYYY(dateISO);
    journalIndexCard?.classList.add("hidden");
    journalDetailCard?.classList.remove("hidden");
    loadJournalDetail();
  }

  btnJournalBack?.addEventListener("click", refreshJournalIndex);

  btnJournalNewEntry?.addEventListener("click", () => {
    if (journalNewEntryDate) journalNewEntryDate.value = todayStrISO();
    showModal(journalNewEntryModal);
  });
  journalNewEntryBackdrop?.addEventListener("click", () => hideModal(journalNewEntryModal));
  btnCloseJournalNewEntry?.addEventListener("click", () => hideModal(journalNewEntryModal));

  btnCreateJournalEntry?.addEventListener("click", async () => {
    const d = journalNewEntryDate.value || todayStrISO();
    hideModal(journalNewEntryModal);
    showJournalDetail(d);
  });

  async function refreshJournalIndex() {
    showJournalIndex();
    const all = await window.DB.getAll(window.DB.STORES.journal);
    const dates = Array.from(new Set(all.filter(x => !x._deleted).map(x => x.date))).sort((a, b) => b.localeCompare(a));
    journalDateList.innerHTML = "";

    if (!dates.length) {
      const li = document.createElement("li");
      li.innerHTML = `<div class="list__left"><div class="muted">No journal entries yet.</div></div>`;
      journalDateList.appendChild(li);
      return;
    }

    for (const d of dates) {
      const rec = all.find(x => !x._deleted && x.date === d);
      const preview = (rec?.reflections || rec?.objectives || rec?.gratitude || "").slice(0, 64);
      const li = document.createElement("li");
      li.innerHTML = `
        <div class="list__left">
          <div class="titleClamp">
            <div><strong>${isoToDDMMYYYY(d)}</strong></div>
            <div class="muted">${preview ? escapeHtml(preview) + (preview.length === 64 ? "…" : "") : "—"}</div>
          </div>
        </div>
        <div class="list__right"><span class="pill">Entry</span></div>
      `;
      li.addEventListener("click", () => showJournalDetail(d));
      journalDateList.appendChild(li);
    }
  }

  async function loadJournalDetail() {
    if (!currentJournalDate) return;
    const rec = (await window.DB.getOne(window.DB.STORES.journal, currentJournalDate));
    jGratitude.value = rec?.gratitude || "";
    jObjectives.value = rec?.objectives || "";
    jReflections.value = rec?.reflections || "";
    autosizeTextarea(jGratitude);
    autosizeTextarea(jObjectives);
    autosizeTextarea(jReflections);
  }

  async function autosaveJournal() {
    if (!currentJournalDate) return;
    await window.DB.upsertJournal({
      date: currentJournalDate,
      gratitude: jGratitude.value,
      objectives: jObjectives.value,
      reflections: jReflections.value
    });
  }

  [jGratitude, jObjectives, jReflections].forEach((el) => {
    if (!el) return;
    el.addEventListener("input", () => {
      autosizeTextarea(el);
      debounce("journal_autosave", 300, autosaveJournal);
    });
  });

  // Keep button for backwards compatibility, but not required
  btnSaveJournal?.addEventListener("click", async () => {
    await autosaveJournal();
    alert("Saved.");
    await refreshJournalIndex();
  });

  /* ---------------------------------------------------------
     Projects & Actions
     - Actions created from to-dos automatically via DB layer
     - +Action reliably shows in list (refresh after save)
     - Filters are multi-select (Project, Priority, Status)
     - Project pane: add/view notes; see actions for selected project
  --------------------------------------------------------- */

  function setActionsMode(mode) {
    actionsMode = mode;
    const isProjects = mode === "projects";
    setPressed(btnActionsViewProjects, isProjects);
    setPressed(btnActionsViewActions, !isProjects);
    actionsProjectsWrap?.classList.toggle("hidden", !isProjects);
    actionsActionsWrap?.classList.toggle("hidden", isProjects);
  }

  btnActionsViewProjects?.addEventListener("click", () => { setActionsMode("projects"); refreshProjectsAndActions(); });
  btnActionsViewActions?.addEventListener("click", () => { setActionsMode("actions"); refreshProjectsAndActions(); });

  async function getProjectsActive() {
return (await window.DB.getAll(window.DB.STORES.projects))
  .filter(p => !p._deleted && !p.archived)
      .sort((a, b) => (a.name || "").localeCompare(b.name || ""));
  }

  async function populateProjectSelect(selectEl, includeNone = true) {
    const projects = await getProjectsActive();
    selectEl.innerHTML = "";
    if (includeNone) {
      const o = document.createElement("option");
      o.value = "None";
      o.textContent = "No project";
      selectEl.appendChild(o);
    }
    for (const p of projects) {
      const o = document.createElement("option");
      o.value = p.id;
      o.textContent = p.name;
      selectEl.appendChild(o);
    }
  }

  function buildProjectFilterPanel(projects) {
    // Project filter includes: All, None, each project
    const opts = ["All", "None", ...projects.map(p => p.name)];
    // Store selected by special tokens: "__ALL__", "__NONE__", or projectId values.
    // For UI display we map back.
    const state = filterState.actionsProject;

    buildMultiFilter({
      button: actionFilterProjectBtn,
      panel: actionFilterProjectPanel,
      title: "Project",
      options: opts,
      stateSet: (function () {
        // A proxy Set of labels for panel toggling; on Apply we reconcile to ids.
        // To keep this simple, we store labels in a hidden temp set and convert.
        const labelSet = new Set();
        if (state.has("__ALL__")) labelSet.add("All");
        if (state.has("__NONE__")) labelSet.add("None");
        for (const p of projects) if (state.has(p.id)) labelSet.add(p.name);
        // Replace methods to keep panel in sync
        labelSet._commit = () => {
          state.clear();
          if (labelSet.has("All")) state.add("__ALL__");
          if (labelSet.has("None")) state.add("__NONE__");
          for (const p of projects) if (labelSet.has(p.name)) state.add(p.id);
        };
        return labelSet;
      })(),
      onApply: () => {
        // Commit label selections into id selections
        const labelSet = arguments.callee.caller?.arguments?.[0]?.stateSet; // not reliable
        // Instead: rebuild from panel checkboxes by reading the panel DOM
        const picked = new Set();
        actionFilterProjectPanel.querySelectorAll("input[type=checkbox]").forEach((cb, i) => {
          if (!cb.checked) return;
          const label = opts[i];
          picked.add(label);
        });
        filterState.actionsProject.clear();
        if (picked.has("All") || !picked.size) filterState.actionsProject.add("__ALL__");
        if (picked.has("None")) filterState.actionsProject.add("__NONE__");
        for (const p of projects) if (picked.has(p.name)) filterState.actionsProject.add(p.id);
        refreshActionsUI();
      }
    });
  }

  buildMultiFilter({
    button: actionFilterPriorityBtn,
    panel: actionFilterPriorityPanel,
    title: "Priority",
    options: ["Low", "Medium", "High"],
    stateSet: filterState.actionsPriority,
    onApply: () => refreshActionsUI()
  });

  buildMultiFilter({
    button: actionFilterStatusBtn,
    panel: actionFilterStatusPanel,
    title: "Status",
    options: ["Open", "In Progress", "Completed"],
    stateSet: filterState.actionsStatus,
    onApply: () => refreshActionsUI()
  });

  buildMultiFilter({
    button: actionFilterPriorityBtn2,
    panel: actionFilterPriorityPanel2,
    title: "Priority",
    options: ["Low", "Medium", "High"],
    stateSet: filterState.projectPriority,
    onApply: () => refreshActionsForProject()
  });

  buildMultiFilter({
    button: actionFilterStatusBtn2,
    panel: actionFilterStatusPanel2,
    title: "Status",
    options: ["Open", "In Progress", "Completed"],
    stateSet: filterState.projectStatus,
    onApply: () => refreshActionsForProject()
  });

  btnAddProject?.addEventListener("click", async () => {
    const name = prompt("Project name:");
    if (!name) return;
    const p = await window.DB.ensureProject(name.trim());
    selectedProjectId = p.id;
    await refreshProjectsAndActions();
  });

  btnAddAction?.addEventListener("click", async () => {
    await refreshProjectsAndActions(); // ensure modal project list is current
    openActionModal(null);
  });

  function openActionModal(editId = null) {
    editingActionId = editId;

    if (!editId) {
      actionModalTitle.textContent = "New action";
      modalActionTitle.value = "";
      modalActionDue.value = "";
      modalActionNotes.value = "";
      modalActionPriority.value = "Medium";
      modalActionStatus.value = "Open";
      modalActionProject.value = "None";
      btnDeleteAction.classList.add("hidden");
      showModal(actionModal);
      autosizeTextarea(modalActionNotes);
      return;
    }

    actionModalTitle.textContent = "Edit action";
    btnDeleteAction.classList.remove("hidden");
    showModal(actionModal);
    loadActionIntoModal(editId);
  }

  async function loadActionIntoModal(id) {
    const a = await window.DB.getOne(window.DB.STORES.actions, id);
    if (!a || a._deleted) return;

    await populateProjectSelect(modalActionProject, true);

    modalActionTitle.value = a.title || "";
    modalActionDue.value = a.dueDate || "";
    modalActionPriority.value = a.priority || "Medium";
    modalActionStatus.value = a.status || "Open";
    modalActionNotes.value = a.notes || "";
    modalActionProject.value = a.projectId || "None";
    autosizeTextarea(modalActionNotes);
  }

  btnCloseActionModal?.addEventListener("click", () => hideModal(actionModal));
  actionBackdrop?.addEventListener("click", () => hideModal(actionModal));

  btnSaveModalAction?.addEventListener("click", async () => {
    const title = (modalActionTitle.value || "").trim();
    if (!title) { alert("Title required."); return; }

    const projectId = (modalActionProject.value === "None") ? null : (modalActionProject.value || null);
    const dueDate = modalActionDue.value || "";
    const notes = modalActionNotes.value || "";
    const priority = modalActionPriority.value || "Medium";
    const status = modalActionStatus.value || "Open";

    const saved = await window.DB.upsertAction({
      id: editingActionId || undefined,
      title,
      projectId,
      status,
      priority,
      dueDate,
      notes
    });

    hideModal(actionModal);

    // Sync linked to-dos from action changes (db.js provides helper)
    if (saved?.id) await window.DB.syncTodosFromAction(saved.id);

    await refreshProjectsAndActions(); // critical to fix “created action not showing”
    await refreshTodoDetail();
    await refreshDashboard();
  });

  btnDeleteAction?.addEventListener("click", async () => {
    if (!editingActionId) return;
    const ok = confirm("Delete this action?");
    if (!ok) return;
    await window.DB.deleteAction(editingActionId);
    hideModal(actionModal);
    await refreshProjectsAndActions();
    await refreshTodoDetail();
    await refreshDashboard();
  });

  btnRefreshActions?.addEventListener("click", refreshActionsUI);
  actionSort?.addEventListener("change", refreshActionsUI);
  actionSort2?.addEventListener("change", refreshActionsForProject);

  async function refreshProjectsAndActions() {
  const projects = await getProjectsActive();

  await populateProjectSelect(modalActionProject, true);
  buildProjectFilterPanel(projects);

  projectList.innerHTML = "";

  if (!projects.length) {
    const li = document.createElement("li");
    li.innerHTML = `<div class="list__left"><div class="muted">No projects yet.</div></div>`;
    projectList.appendChild(li);
    selectedProjectId = null;
  } else {
    if (!selectedProjectId) selectedProjectId = projects[0].id;

    for (const p of projects) {
      const li = document.createElement("li");
      li.innerHTML = `
        <div class="list__left">
          <div class="titleClamp">
            <div><strong>${escapeHtml(p.name)}</strong></div>
            <div class="muted">Tap to view</div>
          </div>
        </div>
        <div class="list__right">
          <span class="pill">Project</span>
          <button class="iconBtn" title="Archive project">🗄</button>
          <button class="iconBtn" title="Delete project">🗑</button>
        </div>
      `;

      const [archiveBtn, deleteBtn] = li.querySelectorAll("button");

      archiveBtn.addEventListener("click", async (ev) => {
        ev.stopPropagation();
        if (p.archived) {
          await window.DB.unarchiveProject(p.id);
        } else {
          await window.DB.archiveProject(p.id);
        }
        await refreshProjectsAndActions();
        await refreshActionsUI();
      });

      deleteBtn.addEventListener("click", async (ev) => {
        ev.stopPropagation();
        if (!confirm("Delete this project and all actions?")) return;
        await window.DB.deleteProjectCascade(p.id);
        await refreshProjectsAndActions();
        await refreshActionsUI();
        await refreshDashboard();
      });

      li.addEventListener("click", async () => {
        selectedProjectId = p.id;
        setActionsMode("projects");
        await refreshActionsForProject();
        await loadProjectPane();
      });

      projectList.appendChild(li);
    }
  }

  await loadProjectPane();
  await refreshActionsUI();
  await refreshActionsForProject();
}

  async function loadProjectPane() {
    if (!selectedProjectId) {
      if (projectTitle) projectTitle.textContent = "Project";
      if (projectMeta) projectMeta.textContent = "—";
      if (projectNotes) projectNotes.value = "";
      return;
    }
    const p = await window.DB.getOne(window.DB.STORES.projects, selectedProjectId);
    if (!p || p._deleted) return;

    if (projectTitle) projectTitle.textContent = p.name || "Project";
    if (projectMeta) projectMeta.textContent = `Created: ${p.createdAt ? new Date(p.createdAt).toLocaleDateString() : "—"}`;
    if (projectNotes) {
      projectNotes.value = p.notes || "";
      autosizeTextarea(projectNotes);
    }
  }

  // Autosave project notes
  projectNotes?.addEventListener("input", () => {
    autosizeTextarea(projectNotes);
    debounce("project_notes_autosave", 300, async () => {
      if (!selectedProjectId) return;
      await window.DB.updateProject(selectedProjectId, { notes: projectNotes.value || "" });
    });
  });

  async function refreshActionsUI() {
    const projects = (await window.DB.getAll(window.DB.STORES.projects)).filter(p => !p._deleted);
    const actions = (await window.DB.getAll(window.DB.STORES.actions)).filter(a => !a._deleted && !a.archived);

    const projName = (id) => projects.find(p => p.id === id)?.name || "—";

    const prioSet = filterState.actionsPriority;
    const statusSet = filterState.actionsStatus;
    const projSel = filterState.actionsProject;

    let filtered = actions.filter(a => statusSet.has(a.status || "Open"));
    filtered = filtered.filter(a => prioSet.has(a.priority || "Medium"));

    // Project filter logic:
    // If "__ALL__" selected, accept all; otherwise accept selected ids and/or none
    if (!projSel.has("__ALL__")) {
      const allowNone = projSel.has("__NONE__");
      const allowIds = new Set(Array.from(projSel).filter(x => x !== "__NONE__" && x !== "__ALL__"));
      filtered = filtered.filter(a => {
        if (!a.projectId) return allowNone;
        return allowIds.has(a.projectId);
      });
    }

    const sortMode = actionSort?.value || "dueAsc";

    filtered.sort((a, b) => {
      const da = a.dueDate || "9999-99-99";
      const db = b.dueDate || "9999-99-99";

      if (sortMode === "dueAsc") return da.localeCompare(db) || (b.createdAt || 0) - (a.createdAt || 0);
      if (sortMode === "dueDesc") return db.localeCompare(da) || (b.createdAt || 0) - (a.createdAt || 0);

      if (sortMode === "priorityDesc") return prioRank(b.priority || "Medium") - prioRank(a.priority || "Medium") || da.localeCompare(db);
      if (sortMode === "priorityAsc") return prioRank(a.priority || "Medium") - prioRank(b.priority || "Medium") || da.localeCompare(db);

      return (b.createdAt || 0) - (a.createdAt || 0);
    });

    actionList.innerHTML = "";
    if (!filtered.length) {
      const li = document.createElement("li");
      li.innerHTML = `<div class="list__left"><div class="muted">No actions match the current filters.</div></div>`;
      actionList.appendChild(li);
      return;
    }

    for (const a of filtered) {
      const li = document.createElement("li");

      const left = document.createElement("div");
      left.className = "list__left";

      const due = a.dueDate ? isoToDDMMYYYY(a.dueDate) : "—";

      const title = document.createElement("div");
      title.className = "titleClamp";
      title.innerHTML = `
        <div><strong>${escapeHtml(a.title)}</strong></div>
        <div class="muted">Project: ${escapeHtml(projName(a.projectId))} • Deadline: ${escapeHtml(due)}</div>
      `;
      left.appendChild(title);

      const right = document.createElement("div");
      right.className = "list__right";

      if (typeof a.notes === "string" && a.notes.trim().length > 0) {
  const note = document.createElement("div");
  note.className = "notesIcon";
  note.title = "Has notes";
  note.textContent = "✎";
  right.appendChild(note);
}

// SEND TO TODAY button
const today = todayStrISO();
const todosToday = (await window.DB.getAll(window.DB.STORES.todos))
  .some(t => !t._deleted && t.actionId === a.id && t.date === today);

if (!todosToday && a.status !== "Completed") {
  const btnSend = document.createElement("button");
  btnSend.type = "button";
  btnSend.className = "btn btn--ghost";
  btnSend.textContent = "Send to today";

  btnSend.addEventListener("click", async (ev) => {
    ev.stopPropagation();
    btnSend.disabled = true;
btnSend.remove();
    await window.DB.ensureTodoList(today);
    await window.DB.upsertTodo({
      date: today,
      text: a.title,
      status: "Open",
      priority: a.priority || "Medium",
      notes: a.notes || "",
      dueDate: a.dueDate || "",
      projectId: a.projectId || null,
      actionId: a.id
    });
    await refreshTodoDetail();
    await refreshActionsForProject();
    await refreshDashboard();
  });

  right.appendChild(btnSend);
}


      const prio = document.createElement("div");
      prio.className = `prioDot ${prioClass(a.priority || "Medium")}`;
      prio.title = `Priority: ${a.priority || "Medium"}`;

      const statusBtn = document.createElement("button");
      statusBtn.type = "button";
      statusBtn.className = `statusBtn ${statusClass(a.status || "Open")}`;
      statusBtn.textContent = a.status || "Open";

      right.appendChild(prio);
      right.appendChild(statusBtn);

      const delBtn = document.createElement("button");
delBtn.type = "button";
delBtn.className = "iconBtn";
delBtn.title = "Delete action";
delBtn.textContent = "🗑";

delBtn.addEventListener("click", async (ev) => {
  ev.stopPropagation();
  const ok = confirm("Delete this action and all linked tasks?");
  if (!ok) return;

  await window.DB.deleteAction(a.id);
  await refreshActionsUI();
  await refreshTodoDetail();
  await refreshDashboard();
});

right.appendChild(delBtn);


      li.appendChild(left);
      li.appendChild(right);

      prio.addEventListener("click", async (ev) => {
        ev.stopPropagation();
        const next = cyclePriority(a.priority || "Medium");
        await window.DB.updateAction(a.id, { priority: next });
        await window.DB.syncTodosFromAction(a.id);
        await refreshActionsUI();
        await refreshTodoDetail();
      });

      statusBtn.addEventListener("click", async (ev) => {
        ev.stopPropagation();
        const next = cycleStatus(a.status || "Open");
        await window.DB.updateAction(a.id, { status: next });
        await window.DB.syncTodosFromAction(a.id);
        await refreshActionsUI();
        await refreshTodoDetail();
        await refreshDashboard();
      });

      li.addEventListener("click", () => openActionModal(a.id));
      actionList.appendChild(li);
    }
  }

  async function refreshActionsForProject() {
    const actions = (await window.DB.getAll(window.DB.STORES.actions)).filter(a => !a._deleted && !a.archived);

    const prioSet = filterState.projectPriority;
    const statusSet = filterState.projectStatus;

    let filtered = actions.filter(a => statusSet.has(a.status || "Open"));
    filtered = filtered.filter(a => prioSet.has(a.priority || "Medium"));

    if (selectedProjectId) filtered = filtered.filter(a => a.projectId === selectedProjectId);

    const sortMode = actionSort2?.value || "dueAsc";
    filtered.sort((a, b) => {
      const da = a.dueDate || "9999-99-99";
      const db = b.dueDate || "9999-99-99";

      if (sortMode === "dueAsc") return da.localeCompare(db) || (b.createdAt || 0) - (a.createdAt || 0);
      if (sortMode === "dueDesc") return db.localeCompare(da) || (b.createdAt || 0) - (a.createdAt || 0);

      if (sortMode === "priorityDesc") return prioRank(b.priority || "Medium") - prioRank(a.priority || "Medium") || da.localeCompare(db);
      if (sortMode === "priorityAsc") return prioRank(a.priority || "Medium") - prioRank(b.priority || "Medium") || da.localeCompare(db);

      return (b.createdAt || 0) - (a.createdAt || 0);
    });

    actionList2.innerHTML = "";
    if (!filtered.length) {
      const li = document.createElement("li");
      li.innerHTML = `<div class="list__left"><div class="muted">No actions for this project (with current filters).</div></div>`;
      actionList2.appendChild(li);
      return;
    }

    for (const a of filtered) {
      const li = document.createElement("li");

      const left = document.createElement("div");
      left.className = "list__left";
      const due = a.dueDate ? isoToDDMMYYYY(a.dueDate) : "—";

      const title = document.createElement("div");
      title.className = "titleClamp";
      title.innerHTML = `
        <div><strong>${escapeHtml(a.title)}</strong></div>
        <div class="muted">Deadline: ${escapeHtml(due)}</div>
      `;
      left.appendChild(title);

      const right = document.createElement("div");
      right.className = "list__right";

      if (typeof a.notes === "string" && a.notes.trim().length > 0) {
  const note = document.createElement("div");
  note.className = "notesIcon";
  note.title = "Has notes";
  note.textContent = "✎";
  right.appendChild(note);
}

      const prio = document.createElement("div");
      prio.className = `prioDot ${prioClass(a.priority || "Medium")}`;
      prio.title = `Priority: ${a.priority || "Medium"}`;

      const statusBtn = document.createElement("button");
      statusBtn.type = "button";
      statusBtn.className = `statusBtn ${statusClass(a.status || "Open")}`;
      statusBtn.textContent = a.status || "Open";

      right.appendChild(prio);
      right.appendChild(statusBtn);

      const delBtn = document.createElement("button");
delBtn.type = "button";
delBtn.className = "iconBtn";
delBtn.title = "Delete action";
delBtn.textContent = "🗑";

delBtn.addEventListener("click", async (ev) => {
  ev.stopPropagation();
  const ok = confirm("Delete this action and all linked tasks?");
  if (!ok) return;

  await window.DB.deleteAction(a.id);
  await refreshActionsUI();
  await refreshTodoDetail();
  await refreshDashboard();
});

right.appendChild(delBtn);


      li.appendChild(left);
      li.appendChild(right);

      prio.addEventListener("click", async (ev) => {
        ev.stopPropagation();
        const next = cyclePriority(a.priority || "Medium");
        await window.DB.updateAction(a.id, { priority: next });
        await window.DB.syncTodosFromAction(a.id);
        await refreshActionsForProject();
        await refreshTodoDetail();
      });

      statusBtn.addEventListener("click", async (ev) => {
        ev.stopPropagation();
        const next = cycleStatus(a.status || "Open");
        await window.DB.updateAction(a.id, { status: next });
        await window.DB.syncTodosFromAction(a.id);
        await refreshActionsForProject();
        await refreshTodoDetail();
        await refreshDashboard();
      });

      li.addEventListener("click", () => openActionModal(a.id));
      actionList2.appendChild(li);
    }
  }

  /* ---------------------------------------------------------
     Habits
     - Daily view removed (weekly/monthly only)
     - Monthly aggregate: orange if some, green if all
  --------------------------------------------------------- */

  let habitTrackMode = "weekly";

  function setHabitTrackMode(mode) {
    habitTrackMode = mode;
    setPressed(habitViewWeekly, mode === "weekly");
    setPressed(habitViewMonthly, mode === "monthly");

    habitWeeklyWrap?.classList.toggle("hidden", mode !== "weekly");
    habitMonthlyWrap?.classList.toggle("hidden", mode !== "monthly");

    refreshHabitTrack();
  }

  habitViewWeekly?.addEventListener("click", () => setHabitTrackMode("weekly"));
  habitViewMonthly?.addEventListener("click", () => setHabitTrackMode("monthly"));

  habitRefDate?.addEventListener("change", refreshHabitTrack);
  monthlyViewMode?.addEventListener("change", refreshHabitTrack);
  monthlyHabitSelect?.addEventListener("change", refreshHabitTrack);

  btnAddHabit?.addEventListener("click", async () => {
    const name = (habitName.value || "").trim();
    if (!name) return;
    const freq = habitFreq.value || "Daily";
    await window.DB.upsertHabit({ name, frequency: freq, archived: false });
    habitName.value = "";
    await refreshHabits();
    await refreshHabitTrack();
    await refreshDashboard();
  });

  habitName?.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      btnAddHabit.click();
    }
  });

  btnToggleHabits?.addEventListener("click", () => {
  habitsHidden = !habitsHidden;
  habitList.classList.toggle("hidden", habitsHidden);
  btnToggleHabits.textContent = habitsHidden ? "Show active" : "Hide active";
});
  btnRefreshHabits?.addEventListener("click", async () => {
    await refreshHabits();
    await refreshHabitTrack();
    await refreshDashboard();
  });

  async function refreshHabits() {
    const all = await window.DB.getAll(window.DB.STORES.habits);
    const active = all.filter(h => !h._deleted && !h.archived).sort((a, b) => (a.name || "").localeCompare(b.name || ""));
    const archived = all.filter(h => !h._deleted && !!h.archived).sort((a, b) => (a.name || "").localeCompare(b.name || ""));

    habitList.innerHTML = "";
    habitList.classList.toggle("hidden", habitsHidden);
    habitArchivedList.innerHTML = "";

    monthlyHabitSelect.innerHTML = "";
    for (const h of active) {
      const opt = document.createElement("option");
      opt.value = h.id;
      opt.textContent = `${h.name} (${h.frequency})`;
      monthlyHabitSelect.appendChild(opt);
    }

    monthlyHabitSelectWrap.classList.toggle("hidden", (monthlyViewMode.value || "byHabit") !== "byHabit");

    if (!active.length) {
      const li = document.createElement("li");
      li.innerHTML = `<div class="list__left"><div class="muted">No active habits. Add one above.</div></div>`;
      habitList.appendChild(li);
    } else {
      for (const h of active) {
        const li = document.createElement("li");
        li.innerHTML = `
          <div class="list__left">
            <div>
              <div><strong>${escapeHtml(h.name)}</strong></div>
              <div class="muted">${escapeHtml(h.frequency)}</div>
            </div>
          </div>
          <div class="list__right">
            <button class="btn btn--ghost" type="button">Archive</button>
          </div>
        `;
        const btn = li.querySelector("button");
        btn.addEventListener("click", async (ev) => {
          ev.stopPropagation();
          await window.DB.updateHabit(h.id, { archived: true });
          await refreshHabits();
          await refreshHabitTrack();
          await refreshDashboard();
        });
        habitList.appendChild(li);
      }
    }

    if (!archived.length) {
      const li = document.createElement("li");
      li.innerHTML = `<div class="list__left"><div class="muted">No archived habits.</div></div>`;
      habitArchivedList.appendChild(li);
    } else {
      for (const h of archived) {
        const li = document.createElement("li");
        li.innerHTML = `
          <div class="list__left">
            <div>
              <div><strong>${escapeHtml(h.name)}</strong></div>
              <div class="muted">${escapeHtml(h.frequency)}</div>
            </div>
          </div>
          <div class="list__right">
            <button class="btn btn--ghost" type="button">Unarchive</button>
          </div>
        `;
        const btn = li.querySelector("button");
        btn.addEventListener("click", async (ev) => {
          ev.stopPropagation();
          await window.DB.updateHabit(h.id, { archived: false });
          await refreshHabits();
          await refreshHabitTrack();
          await refreshDashboard();
        });
        habitArchivedList.appendChild(li);
      }
    }
  }

  async function refreshHabitTrack() {
    if (!habitRefDate.value) habitRefDate.value = todayStrISO();

    const ref = parseISO(habitRefDate.value);
    const habitsAll = await window.DB.getAll(window.DB.STORES.habits);
    const habits = habitsAll.filter(h => !h._deleted && !h.archived).sort((a, b) => (a.name || "").localeCompare(b.name || ""));
    const completionsAll = await window.DB.getAll(window.DB.STORES.habitCompletions);
    const completions = completionsAll.filter(c => !c._deleted);

    if (habitTrackMode === "weekly") renderHabitWeekly(habits, completions, ref);
    else renderHabitMonthly(habits, completions, ref);

    monthlyHabitSelectWrap.classList.toggle("hidden", (monthlyViewMode.value || "byHabit") !== "byHabit");
  }

  function isTicked(completions, habitId, dateISO) {
    return completions.some(c => c.habitId === habitId && c.date === dateISO && !c._deleted);
  }

  async function toggleTick(habitId, dateISO) {
    const all = await window.DB.getAll(window.DB.STORES.habitCompletions);
    const existing = all.find(c => !c._deleted && c.habitId === habitId && c.date === dateISO) || null;

    if (existing) await window.DB.deleteHabitCompletion(existing.id);
    else await window.DB.upsertHabitCompletion({ habitId, date: dateISO });

    await refreshHabitTrack();
    await refreshDashboard();
  }

  function renderHabitWeekly(habits, completions, refDate) {
    habitWeeklyWrap.innerHTML = "";
    if (!habits.length) {
      habitWeeklyWrap.innerHTML = `<div class="muted">No active habits.</div>`;
      return;
    }

    const start = startOfWeek(refDate);
    const days = [];
    for (let i = 0; i < 7; i++) {
      const d = new Date(start);
      d.setDate(d.getDate() + i);
      days.push(d);
    }

    const grid = document.createElement("div");
    grid.className = "grid grid--7";

    const head0 = document.createElement("div");
    head0.className = "cell head";
    head0.textContent = "Habit";
    grid.appendChild(head0);

    const names = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    for (let i = 0; i < 7; i++) {
      const c = document.createElement("div");
      c.className = "cell head";
      // Requested: weekday name and date stacked
      c.innerHTML = `<div>${names[i]}</div><div class="small">${ddmmyyyyForDate(days[i])}</div>`;
      grid.appendChild(c);
    }

    for (const h of habits) {
      const r0 = document.createElement("div");
      r0.className = "cell";
      r0.innerHTML = `<div><strong>${escapeHtml(h.name)}</strong></div><div class="small">${escapeHtml(h.frequency)}</div>`;
      grid.appendChild(r0);

      for (const d of days) {
        const ds = dateToISO(d);
        const ticked = isTicked(completions, h.id, ds);
        const cell = document.createElement("div");
        cell.className = "cell " + (ticked ? "done" : "");
        cell.textContent = ticked ? "✓" : "";
        cell.title = ddmmyyyyForDate(d);
        cell.addEventListener("click", () => toggleTick(h.id, ds));
        grid.appendChild(cell);
      }
    }

    habitWeeklyWrap.appendChild(grid);
  }

  function renderHabitMonthly(habits, completions, refDate) {
    habitMonthlyWrap.innerHTML = "";
    if (!habits.length) {
      habitMonthlyWrap.innerHTML = `<div class="muted">No active habits.</div>`;
      return;
    }

    const year = refDate.getFullYear();
    const month = refDate.getMonth();
    const first = new Date(year, month, 1);
    const last = new Date(year, month + 1, 0);
    const daysInMonth = last.getDate();

    const mode = monthlyViewMode.value || "byHabit";

    const makeCell = (txt, cls) => {
      const c = document.createElement("div");
      c.className = "cell " + (cls || "");
      c.textContent = txt;
      return c;
    };

    const grid = document.createElement("div");
    grid.className = "grid grid--month";

    const weekHeaders = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    for (const wh of weekHeaders) grid.appendChild(makeCell(wh, "head"));

    const jsDay = first.getDay();
    const offset = (jsDay === 0 ? 6 : jsDay - 1);
    for (let i = 0; i < offset; i++) grid.appendChild(makeCell("", "off"));

    if (mode === "byHabit") {
      const habitId = monthlyHabitSelect.value || habits[0].id;
      if (!monthlyHabitSelect.value) monthlyHabitSelect.value = habitId;

      for (let day = 1; day <= daysInMonth; day++) {
        const d = new Date(year, month, day);
        const ds = dateToISO(d);
        const ticked = isTicked(completions, habitId, ds);
        const cell = makeCell(String(day), ticked ? "done" : "");
        cell.title = ddmmyyyyForDate(d);
        cell.addEventListener("click", () => toggleTick(habitId, ds));
        grid.appendChild(cell);
      }

      habitMonthlyWrap.appendChild(grid);
      return;
    }

    // Aggregate mode: green if all, orange if some, blank if none
    for (let day = 1; day <= daysInMonth; day++) {
      const d = new Date(year, month, day);
      const ds = dateToISO(d);

      const tickedCount = habits.reduce((acc, h) => acc + (isTicked(completions, h.id, ds) ? 1 : 0), 0);
      const allDone = tickedCount === habits.length && habits.length > 0;
      const someDone = tickedCount > 0 && tickedCount < habits.length;

      const cls = allDone ? "done" : (someDone ? "partial" : "");
      const cell = makeCell(String(day), cls);
      cell.title = `${ddmmyyyyForDate(d)} (${tickedCount}/${habits.length})`;

      cell.addEventListener("click", async () => {
        const all = await window.DB.getAll(window.DB.STORES.habitCompletions);
        const existing = all.filter(c => !c._deleted && c.date === ds);

        if (allDone) {
          for (const h of habits) {
            const ex = existing.find(c => c.habitId === h.id) || null;
            if (ex) await window.DB.deleteHabitCompletion(ex.id);
          }
        } else {
          for (const h of habits) {
            const ex = existing.find(c => c.habitId === h.id) || null;
            if (!ex) await window.DB.upsertHabitCompletion({ habitId: h.id, date: ds });
          }
        }

        await refreshHabitTrack();
        await refreshDashboard();
      });

      grid.appendChild(cell);
    }

    habitMonthlyWrap.appendChild(grid);
  }

  /* ---------------------------------------------------------
     Meals
     - Fix overflow handled by CSS; weekly wrap scrollable
     - Daily header: weekday + date stacked
     - Click a meal to edit notes in mealModal
  --------------------------------------------------------- */

  let mealMode = "daily";

  function setMealMode(mode) {
    mealMode = mode;
    setPressed(mealViewDaily, mode === "daily");
    setPressed(mealViewWeekly, mode === "weekly");
    mealDailyWrap?.classList.toggle("hidden", mode !== "daily");
    mealWeeklyWrap?.classList.toggle("hidden", mode !== "weekly");
    refreshMeals();
  }

  mealViewDaily?.addEventListener("click", () => setMealMode("daily"));
  mealViewWeekly?.addEventListener("click", () => setMealMode("weekly"));

  btnAddMeal?.addEventListener("click", async () => {
    const name = (mealNewName.value || "").trim();
    if (!name) return;
    await window.DB.upsertMeal({ name, notes: "" });
    mealNewName.value = "";
    await refreshMeals();
  });

  mealNewName?.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      btnAddMeal.click();
    }
  });

  btnRefreshMeals?.addEventListener("click", refreshMeals);
  btnToggleMeals?.addEventListener("click", () => {
  mealsListHidden = !mealsListHidden;
  mealsWrap.classList.toggle("twoCol", !mealsListHidden);
  mealsWrap.classList.toggle("stack", mealsListHidden);
  btnToggleMeals.textContent = mealsListHidden ? "Show list" : "Hide list";
});
  mealRefDate?.addEventListener("change", refreshMeals);

  function slotLabel(s) {
    return ({ breakfast: "Breakfast", lunch: "Lunch", snack: "Snack", dinner: "Dinner" }[s] || s);
  }

  function weekDaysFrom(refISO) {
    const ref = parseISO(refISO);
    const start = startOfWeek(ref);
    const days = [];
    for (let i = 0; i < 7; i++) {
      const d = new Date(start);
      d.setDate(d.getDate() + i);
      days.push(d);
    }
    return days;
  }

  async function refreshMeals() {
    if (!mealRefDate.value) mealRefDate.value = todayStrISO();

    const meals = (await window.DB.getAll(window.DB.STORES.meals)).filter(m => !m._deleted).sort((a, b) => (a.name || "").localeCompare(b.name || ""));
    const plans = (await window.DB.getAll(window.DB.STORES.mealPlans)).filter(p => !p._deleted);

    mealList.innerHTML = "";
    mealsWrap.classList.toggle("twoCol", !mealsListHidden);
mealsWrap.classList.toggle("stack", mealsListHidden);
    for (const m of meals) {
      const row = document.createElement("div");
      row.className = "mealRow";
      row.draggable = true;
      row.dataset.mealId = m.id;
      row.innerHTML = `
        <div class="mealPill" title="Click to edit notes">${escapeHtml(m.name)}</div>
        <button class="btn btn--ghost" type="button">Delete</button>
      `;
      row.addEventListener("dragstart", (ev) => {
        ev.dataTransfer.setData("text/plain", m.id);
      });
      row.querySelector("button").addEventListener("click", async (ev) => {
        ev.stopPropagation();
        await window.DB.deleteMeal(m.id);
        await refreshMeals();
      });
      // Click to edit meal notes
      row.querySelector(".mealPill").addEventListener("click", async (ev) => {
        ev.stopPropagation();
        await openMealModal(m.id);
      });
      mealList.appendChild(row);
    }

    if (mealMode === "daily") {
      renderMealDaily(plans, meals, mealRefDate.value);
    } else {
      renderMealWeekly(plans, meals, mealRefDate.value);
    }
  }

  function findPlan(plans, dateISO, slot) {
    return plans.find(p => p.date === dateISO && p.slot === slot && !p._deleted) || null;
  }

  async function setMealPlan(dateISO, slot, mealId) {
    await window.DB.upsertMealPlan({ date: dateISO, slot, mealId });
    await refreshMeals();
  }

  async function clearMealPlan(dateISO, slot) {
    const all = await window.DB.getAll(window.DB.STORES.mealPlans);
    const ex = all.find(p => !p._deleted && p.date === dateISO && p.slot === slot) || null;
    if (ex) await window.DB.deleteMealPlan(ex.id);
    await refreshMeals();
  }

  function dropZone(el, onDrop) {
    el.addEventListener("dragover", (e) => { e.preventDefault(); });
    el.addEventListener("drop", (e) => {
      e.preventDefault();
      const mealId = e.dataTransfer.getData("text/plain");
      if (mealId) onDrop(mealId);
    });
  }

  function renderMealDaily(plans, meals, dateISO) {
    mealDailyWrap.innerHTML = "";
    const slots = ["breakfast", "lunch", "snack", "dinner"];

    const dObj = parseISO(dateISO);
    const head = document.createElement("div");
    head.className = "mealHead";
    // Requested: weekday + date stacked
    head.innerHTML = `<div><strong>${weekdayName(dObj)}</strong><div class="small">${ddmmyyyyForDate(dObj)}</div></div><div class="muted">Drag meals into slots</div>`;
    mealDailyWrap.appendChild(head);

    const grid = document.createElement("div");
    grid.className = "mealGrid mealGrid--daily";

    for (const s of slots) {
      const cell = document.createElement("div");
      cell.className = "mealSlot";

      const existing = findPlan(plans, dateISO, s);
      const mealName = existing ? (meals.find(m => m.id === existing.mealId)?.name || "—") : "";

      cell.innerHTML = `
        <div class="mealSlotHead">${slotLabel(s)}</div>
        <div class="mealSlotBody ${mealName ? "" : "empty"}">${mealName ? `<span class="mealPill">${escapeHtml(mealName)}</span>` : `<span class="muted">Drop here</span>`}</div>
        <button class="iconBtn" type="button" title="Clear">×</button>
      `;

      const body = cell.querySelector(".mealSlotBody");
      dropZone(body, (mealId) => setMealPlan(dateISO, s, mealId));

      cell.querySelector("button").addEventListener("click", () => clearMealPlan(dateISO, s));

      grid.appendChild(cell);
    }

    mealDailyWrap.appendChild(grid);
  }

  function renderMealWeekly(plans, meals, refISO) {
    mealWeeklyWrap.innerHTML = "";

    const days = weekDaysFrom(refISO);
    const slots = ["breakfast", "lunch", "snack", "dinner"];

    const grid = document.createElement("div");
    grid.className = "mealGrid mealGrid--weekly";

    const corner = document.createElement("div");
    corner.className = "cell head";
    corner.textContent = "Slot";
    grid.appendChild(corner);

    for (let i = 0; i < 7; i++) {
      const d = days[i];
      const h = document.createElement("div");
      h.className = "cell head";
      // Requested: weekday + date stacked
      h.innerHTML = `<div>${weekdayName(d)}</div><div class="small">${ddmmyyyyForDate(d)}</div>`;
      grid.appendChild(h);
    }

    for (const s of slots) {
      const slotHead = document.createElement("div");
      slotHead.className = "cell head";
      slotHead.textContent = slotLabel(s);
      grid.appendChild(slotHead);

      for (let i = 0; i < 7; i++) {
        const d = days[i];
        const dateISO = dateToISO(d);
        const existing = findPlan(plans, dateISO, s);
        const mealName = existing ? (meals.find(m => m.id === existing.mealId)?.name || "—") : "";

        const cell = document.createElement("div");
        cell.className = "cell mealCell";
        cell.innerHTML = `
          <div class="mealCellBody ${mealName ? "" : "empty"}">${mealName ? `<span class="mealPill">${escapeHtml(mealName)}</span>` : `<span class="muted">Drop</span>`}</div>
          <button class="iconBtn" type="button" title="Clear">×</button>
        `;

        const body = cell.querySelector(".mealCellBody");
        dropZone(body, (mealId) => setMealPlan(dateISO, s, mealId));
        cell.querySelector("button").addEventListener("click", () => clearMealPlan(dateISO, s));

        grid.appendChild(cell);
      }
    }

    mealWeeklyWrap.appendChild(grid);
  }

  async function openMealModal(mealId) {
    editingMealId = mealId;
    const m = await window.DB.getOne(window.DB.STORES.meals, mealId);
    if (!m || m._deleted) return;

    mealModalName.value = m.name || "";
    mealModalNotes.value = m.notes || "";
    autosizeTextarea(mealModalNotes);
    showModal(mealModal);
  }

  btnCloseMealModal?.addEventListener("click", () => hideModal(mealModal));
  mealBackdrop?.addEventListener("click", () => hideModal(mealModal));

  btnSaveMealModal?.addEventListener("click", async () => {
    if (!editingMealId) return;
    await window.DB.updateMeal(editingMealId, {
      name: (mealModalName.value || "").trim() || "Meal",
      notes: mealModalNotes.value || ""
    });
    hideModal(mealModal);
    await refreshMeals();
  });

  btnDeleteMealModal?.addEventListener("click", async () => {
    if (!editingMealId) return;
    const ok = confirm("Delete this meal?");
    if (!ok) return;
    await window.DB.deleteMeal(editingMealId);
    editingMealId = null;
    hideModal(mealModal);
    await refreshMeals();
  });

  // Autosave meal notes while typing (requested)
  mealModalNotes?.addEventListener("input", () => {
    autosizeTextarea(mealModalNotes);
    debounce("meal_notes_autosave", 300, async () => {
      if (!editingMealId) return;
      await window.DB.updateMeal(editingMealId, { notes: mealModalNotes.value || "" });
    });
  });

  /* ---------------------------------------------------------
     Notes (iOS-style)
     - Index list -> click opens detail view
     - Autosave on typing
  --------------------------------------------------------- */

  function showNotesIndex() {
    notesDetailCard?.classList.add("hidden");
    notesIndexCard?.classList.remove("hidden");
    currentNoteId = null;
  }

  function showNotesDetail() {
    notesIndexCard?.classList.add("hidden");
    notesDetailCard?.classList.remove("hidden");
  }

  async function refreshNotes() {
    showNotesIndex();

    const notes = (await window.DB.getAll(window.DB.STORES.notes))
      .filter(n => !n._deleted)
      .sort((a, b) => (b.updatedAt || 0) - (a.updatedAt || 0));

    notesList.innerHTML = "";

    if (!notes.length) {
      const li = document.createElement("li");
      li.innerHTML = `<div class="list__left"><div class="muted">No notes yet. Create one.</div></div>`;
      notesList.appendChild(li);
      return;
    }

    for (const n of notes) {
      const li = document.createElement("li");
      const title = (n.title || "Untitled").trim() || "Untitled";
      const preview = (n.body || "").trim().slice(0, 80);
      const updated = n.updatedAt ? new Date(n.updatedAt).toLocaleString() : "—";

      li.innerHTML = `
        <div class="list__left">
          <div class="titleClamp">
            <div><strong>${escapeHtml(title)}</strong></div>
            <div class="muted">${preview ? escapeHtml(preview) + (preview.length === 80 ? "…" : "") : "—"}</div>
            <div class="muted">Edited: ${escapeHtml(updated)}</div>
          </div>
        </div>
        <div class="list__right"><span class="pill">Note</span></div>
      `;
      li.addEventListener("click", () => openNote(n.id));
      notesList.appendChild(li);
    }
  }

  async function openNote(id) {
    currentNoteId = id;
    const n = await window.DB.getOne(window.DB.STORES.notes, id);
    if (!n || n._deleted) return;

    showNotesDetail();

    noteTitle.value = n.title || "";
    noteBody.value = n.body || "";

    noteCreated.textContent = n.createdAt ? new Date(n.createdAt).toLocaleString() : "—";
    noteUpdated.textContent = n.updatedAt ? new Date(n.updatedAt).toLocaleString() : "—";

    autosizeTextarea(noteBody);
  }

  btnNotesBack?.addEventListener("click", refreshNotes);

  btnNewNote?.addEventListener("click", async () => {
    const rec = await window.DB.upsertNote({ title: "Untitled", body: "" });
    await refreshNotes();
    await openNote(rec.id);
  });

  async function autosaveNote() {
    if (!currentNoteId) return;
    const updatedAt = Date.now();
    await window.DB.updateNote(currentNoteId, {
      title: (noteTitle.value || "").trim() || "Untitled",
      body: noteBody.value || "",
      updatedAt
    });
    noteUpdated.textContent = new Date(updatedAt).toLocaleString();
  }

  noteTitle?.addEventListener("input", () => debounce("note_autosave", 250, autosaveNote));
  noteBody?.addEventListener("input", () => {
    autosizeTextarea(noteBody);
    debounce("note_autosave", 250, autosaveNote);
  });

  btnSaveNote?.addEventListener("click", async () => {
    await autosaveNote();
    alert("Saved.");
  });

  btnDeleteNote?.addEventListener("click", async () => {
    if (!currentNoteId) return;
    const ok = confirm("Delete this note?");
    if (!ok) return;
    await window.DB.deleteNote(currentNoteId);
    currentNoteId = null;
    noteTitle.value = "";
    noteBody.value = "";
    noteCreated.textContent = "—";
    noteUpdated.textContent = "—";
    await refreshNotes();
  });

  /* ---------------------------------------------------------
     Init
  --------------------------------------------------------- */

  async function init() {
    if (!window.DB) {
      alert("DB layer not available. Check that db.js is loading and defines window.DB.");
      return;
    }

    await window.DB.init();
    initTabs();
    await initServiceWorker();
    wireAutosize();

    const theme = (await window.DB.getSetting("ui.theme", "aurora")) || "aurora";
    const font = (await window.DB.getSetting("ui.font", "system")) || "system";
    applyThemeAndFont(theme, font);

    await applyTabVisibility();

    if (!habitRefDate.value) habitRefDate.value = todayStrISO();
    if (!mealRefDate.value) mealRefDate.value = todayStrISO();

    // Restore last sync stamp if present
    const lastSync = await window.DB.getSetting("sync.lastAt", null);
    updateSyncStamp(lastSync, "Last synced");

    setDashboardPeriod("Week");
    setActionsMode(actionsMode);
    setHabitTrackMode("weekly");
    setMealMode("daily");

    updateTopbar();
    startAutoSync();

    setTab("dashboard");
  }

  init();
})();







