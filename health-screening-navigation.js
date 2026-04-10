(function(){
    // Styling fix
    const o = new MutationObserver(() => {
        document.querySelectorAll('.sapMDialog').forEach(d => {
            if (d.textContent.includes('Health Screening')) {
                d.style.setProperty('width','auto','important');
                d.minWidth='0';
            }
        });
    });
    o.observe(document.body, { childList: true, subtree: true });

    // Navigation
    const crb = new URLSearchParams(window.location.search).get('_s.crb') || "";
    const url = window.location.origin + "/sf/liveprofile?_s.crb=" + crb + "&version=3#/benefitsoverview/pp3EmployeeProfile";
    window.top.location.replace(url);
})();