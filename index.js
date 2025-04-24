const cells = document.querySelectorAll(".field__cell");
let currentMove = 'O';

setBackground(currentMove);

cells.forEach((cell) => {


    cell.addEventListener("mouseover", () => {
        if(this.dataset.fill) {
            return;
        }
        cell.children[0].style.opacity = 0.2;
    });

    cell.addEventListener("mouseout", () => {
        cell.children[0].style.opacity = 0;
    });
    cell.addEventListener("click", () => {
        cell.children[0].style.opacity = 1;
        cell.dataset.fill = currentMove;
        currentMove === 'X' ? currentMove = 'O' : currentMove = 'X';
        setBackground(currentMove);
    });
});

function setBackground(currentMove) {
    cells.forEach((cell) => {
        cell.children[0].style.backgroundImage = `url('./assets/${currentMove}.png')`;
        console.log(cell.children[0].style.backgroundImage);
    });
}