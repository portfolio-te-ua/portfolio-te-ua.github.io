function copyToClipboard() {
    const codeBlock = document.getElementById("code-block");
    const textArea = document.createElement("textarea");
    textArea.value = codeBlock.innerText;

    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);

    alert("Код скопійовано в буфер обміну!");
}

function ret() {
    window.location.href="../index.html";
}

function run1() {
    window.location.href="https://www.jdoodle.com/ia/1G7F";
}