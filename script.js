const color = document.getElementById('color-picker');

const cells = document.getElementsByTagName("div");

for (const cell of cells) {
    cell.addEventListener('click', () => {cell.style.backgroundColor = color.value})
}