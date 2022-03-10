// Dados iniciais
let quadro = {
    a1: '', a2: '', a3: '',
    b1: '', b2: '', b3: '',
    c1: '', c2: '', c3: ''
};
let playing = false;
let vez = 'x';
let warning = '';

reset();

// Eventos
document.querySelector('.reset').addEventListener('click', reset);

document.querySelectorAll('.item').forEach((item)=>{
    item.addEventListener('click', (e) => {
        let loc = e.target.getAttribute('data-item');
        
        if(playing && quadro[loc] === '') {
            quadro[loc] = vez;
            renderQuadro();
            togglePlayer();
        }
    });
});

// Funções
function reset() {
    warning = '';

    // definir a vez
    let random = Math.floor(Math.random() * 2);
    vez = random === 0 ? 'x' : 'o';

    // resetar os quadros
    for(let i in quadro) {
        quadro[i] = '';
    }

    // renderizar tudo
    renderQuadro();
    renderInfo();

    playing = true;
}

