document.addEventListener("DOMContentLoaded", function () {
    const text = "<Prazer, sou o Ricardo!>"; // Texto a ser digitado
    const typingElement = document.getElementById("typing");
    const cursorElement = document.getElementById("cursor");
    let index = 0;

    function typeWriter() {
        if (index < text.length) {
            typingElement.innerHTML += text.charAt(index);
            index++;
            setTimeout(typeWriter, 100); // Ajuste a velocidade aqui (100ms por caractere)
        } else {
            cursorElement.style.display = "inline"; // Mantém o cursor piscando no final
            
        }
    }

    typeWriter(); // Inicia a digitação ao carregar a página
});