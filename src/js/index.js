
const tableForm = document.querySelector('#table-form')

/**
* @param {SubmitEvent} event
*/
function start(event) {

    event.preventDefault()
    
    const formData = new FormData(event.target)

    tableForm.remove();

    const SIZE = formData.get('size');
    const tablero = document.getElementById('tablero')
    /**
     * @type Array<Array<HTMLButtonElement>>
    */
    const BUTTONS = [];

    var pointer = 'X';

    for (let i = 0; i < SIZE; i++) {

        const row = document.createElement('tr');
        row.classList.add('w-full', 'flex', 'flex-1', 'gap-5')
        const rowList = [];
        for (let j = 0; j < SIZE; j++) {

            const newButton = document.createElement('button');
            newButton.classList.add('w-full', 'h-full', 'bg-white')
            rowList.push(newButton);


            const tableColumn = document.createElement('td');
            tableColumn.classList.add('flex-1')
            tableColumn.appendChild(newButton)
            row.appendChild(tableColumn);

        }
        BUTTONS.push(rowList);

        tablero.appendChild(row)
    }

    BUTTONS.forEach(row => {
        row.forEach(b => {
            b.addEventListener('click', ({ target }) => {
                if (b.innerHTML) return;

                b.innerHTML = pointer;
                pointer = pointer === 'X' ? 'O' : 'X';

            });
        })
    })

    tablero.addEventListener('click', () => {
        BUTTONS.forEach(row => {
            if (row.every(b => b.innerHTML === 'X')) {
                if (confirm('Gano el X')) return location.reload();
            }


            if (row.every(b => b.innerHTML === 'O')) {
                if (confirm('Gano el O')) return location.reload();
            }
        })

        for (let i = 0; i < SIZE; i++) {
            if (BUTTONS.every((row) => row[i].innerHTML === 'X')) {
                if (confirm('Ganó el X')) return location.reload();
                break;
            }

            if (BUTTONS.every((row) => row[i].innerHTML === 'O')) {
                if (confirm('Ganó el O')) return location.reload();
                break;
            }
        }

        if (BUTTONS.every((row, i) => row[i].innerHTML === 'X')) {
            if (confirm('Ganó el X')) return location.reload();
        }

        if (BUTTONS.every((row, i) => row[i].innerHTML === 'O')) {

        }

        if (BUTTONS.every(row => row.every(b => b.innerHTML))) {
            if (confirm('Empate')) return location.reload();
        }
    })

}


tableForm.addEventListener('submit', start)

