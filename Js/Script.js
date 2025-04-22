function redirect1() {
    window.location.href="./codes/code1.html";
}

function redirect2() {
    window.location.href="./codes/code2.html";
}

function redirect3() {
    window.location.href="./codes/code3.html";
}

function redirect4() {
    window.location.href="./codes/code4.html";
}

function redirect5() {
    window.location.href="./codes/code5.html";
}

function downl1() {
    const link = document.createElement("a");
    link.href = "./Programs/File.java"; // Шлях до файлу
    link.download = "File.java"; // Ім'я файлу для завантаження
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function donwl11() {
    window.location.href="./Programs/Guess Game.exe"
}

function downl2() {
    window.location.href="./Programs/Calculator.exe";
}

function downl22() {
    window.location.href="./Programs/Calculator.py";
}

function downl3() {
    window.location.href="./Programs/Clock.exe";
}

function downl33() {
    window.location.href="./Programs/Clock.py";
}

function downl4() {
    window.location.href="./Programs/Clicker.exe";
}

function downl44() {
    window.location.href="./Programs/Clicker.py";
}

function downl5() {
    window.location.href="./Programs/Joke.exe";
}

function downl55() {
    window.location.href="./Programs/Joke.py";
}

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
    window.location.href="D:/Олександр Кайдаш/Visual Studio Code/Hbase.html";
}

function scrollLeftC() {
    const container = document.querySelector('.card-container');
    const cardWidth = document.querySelector('.card').offsetWidth + 20;
    container.scrollBy({
        left: -cardWidth,
        behavior: 'smooth' 
  });
}

function scrollRightC() {
    const container = document.querySelector('.card-container');
    const cardWidth = document.querySelector('.card').offsetWidth + 20;
    container.scrollBy({
        left: cardWidth,
        behavior: 'smooth'
  });
}

