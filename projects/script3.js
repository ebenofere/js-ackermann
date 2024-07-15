const sourceList = document.getElementById("source");
const copyButton = document.getElementById("move");
const targetList = document.getElementById("target");

copyButton.addEventListener('click', function() {
    while(sourceList.hasChildNodes()) {
        const item = sourceList.removeChild(sourceList.firstChild);
        targetList.appendChild(item);
    }
})