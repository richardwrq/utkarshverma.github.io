(function() {
    var configuration = {
    "token": "2e7769a9fed9a5a3ca8f24e669e6cd7b",
    "domains": [
        "utkarshverma.me",
        "blog.utkarshverma.me"
    ],
    "capping": {
        "limit": 5,
        "timeout": 24
    },
    "entryScript": {
        "type": "timeout",
        "timeout": "5000",
        "capping": {
            "limit": 5,
            "timeout": 24
        }
    }
};
    var script = document.createElement('script');
    script.async = true;
    script.src = '//cdn.shorte.st/link-converter.min.js';
    script.onload = script.onreadystatechange = function () {var rs = this.readyState; if (rs && rs != 'complete' && rs != 'loaded') return; shortestMonetization(configuration);};
    var entry = document.getElementsByTagName('script')[0];
    entry.parentNode.insertBefore(script, entry);
})();   
