function generateRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function generatePalette() {
    document.getElementById('color1').style.backgroundColor = generateRandomColor();
    document.getElementById('color2').style.backgroundColor = generateRandomColor();
    document.getElementById('color3').style.backgroundColor = generateRandomColor();
    document.getElementById('color4').style.backgroundColor = generateRandomColor();
    document.getElementById('color5').style.backgroundColor = generateRandomColor();
}

// Adicionar um event listener ao botão para gerar a paleta
document.getElementById('generate-button').addEventListener('click', generatePalette);

// Gerar uma paleta inicial quando a página é carregada
window.onload = generatePalette;
