const button = document.getElementById("common-btn");
button.onclick = function () {
    const contentToCopy = document.getElementById("common-txt").innerText;
    navigator.clipboard.writeText(contentToCopy).then(function() {
        console.log('Copied to clipboard.');
    }, function(err) {
        console.error('Unable to copy ', err);
    });
};