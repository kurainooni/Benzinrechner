chrome.app.runtime.onLaunched.addListener(function() {
    chrome.app.window.create('window.html', {
        'bounds': {
            'width': 670,
            'height': 360
        }
    });
});