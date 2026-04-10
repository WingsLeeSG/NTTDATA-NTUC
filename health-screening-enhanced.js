(function(){
    // 1. The Styling Fix (The Observer)
    const applyFix = () => {
        const o = new MutationObserver(() => {
            document.querySelectorAll('.sapMDialog').forEach(d => {
                if (d.textContent.includes('Health Screening')) {
                    d.style.setProperty('width', 'auto', 'important');
                    d.style.minWidth = '0';
                }
            });
        });
        o.observe(document.body, { childList: true, subtree: true });
    };

    // Always start the observer immediately
    applyFix();

    // 2. Navigation Logic
    const targetPath = "/sf/liveprofile";
    const targetHash = "#/benefitsoverview/pp3EmployeeProfile";

    // Only navigate if we aren't already there
    if (!window.location.href.includes(targetPath) || !window.location.hash.includes(targetHash)) {
        const crb = new URLSearchParams(window.location.search).get('_s.crb') || "";
        const url = window.location.origin + targetPath + "?_s.crb=" + crb + "&version=3" + targetHash;
        window.top.location.replace(url);
    } else {
        console.log("Already on target page. Observer is active.");
    }
})();