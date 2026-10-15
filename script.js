//Declaracion de constantes
const iniciarBtn = document.getElementById('iniciarBtn');
const content = document.querySelector('.content');
const salirBtn = document.getElementById('salirBtn');
const manualBtn = document.getElementById('manualBtn');
const cancelarBtn = document.getElementById('cancelar-btn');
const codigoInput = document.getElementById('codigo');
const buscarBtn = document.getElementById('buscar-btn');
const NEXT_PAGE = 'menu.html';
const HOME_PAGE = 'inicio.html';

//Pasar pagina con el boton INICIAR
if (iniciarBtn && content) {
    iniciarBtn.addEventListener('click', () => {
        content.classList.add('slide-out');

        content.addEventListener('transitionend', () => {
            window.location.href = NEXT_PAGE;
        }, { once: true });
    });
}

//Cerrar pagina con el boton de SALIR
if (salirBtn) {
    salirBtn.addEventListener('click', () => {
        window.close();
        console.log('SALIR presionado');
    });
}

//Pasar pagina con el boton de MANUAL
if (manualBtn) {
    manualBtn.addEventListener('click', () => {
        window.open("manual.txt", "Manual", "width=800,height=600,resizable=yes,scrollbars=yes");
        console.log('MANUAL presionado');
    });
}

//Volver a inicio.html al darle a Cancelar desde el menu
if (cancelarBtn) {
    cancelarBtn.addEventListener('click', () => {
        window.location.href = HOME_PAGE;
    });
}

//SOLUCIÓN PARA EL BFCache
window.addEventListener('pageshow', (event) => {
    if (content && (event.persisted || content.classList.contains('slide-out'))) {
        content.classList.remove('slide-out');
    }
});

//Funcionalidad para BUSCAR CÓDIGO
if (buscarBtn && codigoInput) {
    buscarBtn.addEventListener('click', () => {
        const codigo = codigoInput.value.toUpperCase();
        console.log('Botón BUSCAR presionado. Código:', codigo);

        let fotos = ["fotos_ejemplo/Goku.png", "fotos_ejemplo/Mariobros.png", "fotos_ejemplo/Mickeymouse.png", "fotos_ejemplo/Peppapig.png", "fotos_ejemplo/Rayomcqueen.png"];
        let codigos = ["067", "UWU", "727", "ABC", "777"];

        const divimg = document.querySelector('.foto');
        const img = divimg.querySelector('img');

        const divdatos = document.querySelector('.datos');
        const nombre = divdatos.querySelector('#nombre');
        const apellido = divdatos.querySelector('#apellido');
        const dni = divdatos.querySelector('#dni');
        const curso = divdatos.querySelector('#curso');
        
        if (codigos.includes(codigo)) {
            codigoInput.style.color = '#31961d';  // Se pone verde si es correcto
            setTimeout(() => {
                codigoInput.style.color = '#000000'; 
            }, 5000);
            switch (codigo) {
                case "067":
                    img.src = fotos[4];
                    nombre.textContent = "Rayo";
                    apellido.textContent = "Mcqueen";
                    dni.textContent = "67000923";
                    curso.textContent = "6° 7°";
                    break;
                case "UWU":
                    img.src = fotos[3];
                    nombre.textContent = "Peppa";
                    apellido.textContent = "Pig";
                    dni.textContent = "23456789";
                    curso.textContent = "2° 1°";
                    break;
                case "727":
                    img.src = fotos[1];
                    nombre.textContent = "Mario";
                    apellido.textContent = "Mario";
                    dni.textContent = "50256164";
                    curso.textContent = "4° 1°";
                    break;
                case "ABC":
                    img.src = fotos[2];
                    nombre.textContent = "Mickey";
                    apellido.textContent = "Mouse";
                    dni.textContent = "34678102";
                    curso.textContent = "5° 5°";
                    break;
                case "777":
                    img.src = fotos[0];
                    nombre.textContent = "Goku";
                    apellido.textContent = "Son";
                    dni.textContent = "17772340";
                    curso.textContent = "6° 1°";
                    break;
            }
        } else {
            codigoInput.style.color = '#de2509';  // Se pone rojo si es incorrecto
            setTimeout(() => {
                codigoInput.style.color = '#000000'; 
            }, 5000);
        }
    });
}

