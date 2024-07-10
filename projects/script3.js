const sourceList = document.getElementById("source");
const targetList = document.getElementById("target");
const copyButton = document.getElementById("move");

copyButton.addEventListener('click', function() {
    while(sourceList.hasChildNodes()) {
        const item = sourceList.removeChild(sourceList.firstChild);
        targetList.appendChild(item);
    }
})