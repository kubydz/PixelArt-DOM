
const colors = ['red', 'blue', 'green', 'yellow', 'purple'];
    let selectedColor = null;

    // Créer la grille de sélection de couleurs
    const colorGrid = document.getElementById('colorGrid');
    colors.forEach(color => {
      const colorCell = document.createElement('div');
      colorCell.classList.add('color-cell');
      colorCell.style.backgroundColor = color;

      colorCell.addEventListener('click', () => {
        document.querySelectorAll('.color-cell').forEach(cell => {
          cell.classList.remove('selected');
        });
        colorCell.classList.add('selected');
        selectedColor = color;
      });

      colorGrid.appendChild(colorCell);
    });

    // Créer la grille principale
    const mainGrid = document.getElementById('mainGrid');
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');

        cell.addEventListener('click', () => {
          if (selectedColor) {
            cell.style.backgroundColor = selectedColor;
          }
        });

        mainGrid.appendChild(cell);
      }
    }