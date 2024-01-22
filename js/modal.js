const modalBtns = document.querySelectorAll('[id^="modalBtn"]');
const modals = document.querySelectorAll('.modal');
const closeModalBtns = document.querySelectorAll('.closeModalBtn, #entendido');

function mostrarModal(nombreModal) {
    const modal = document.getElementById(nombreModal);

    // Verifica si el modal existe antes de operar sobre él
    if (modal) {
        // Oculta todos los modales antes de mostrar el modal específico
        modals.forEach(modal => {
            modal.classList.remove('show-modal');
        });

        modal.classList.add('show-modal');
    }
}

function cerrarModal(nombreModal) {
    const modal = document.getElementById(nombreModal);

    // Verifica si el modal existe antes de operar sobre él
    if (modal) {
        modal.classList.remove('show-modal');
    }
}

modalBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        mostrarModal(`myModal${index + 1}`);
    });
});

closeModalBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        cerrarModal(`myModal${index + 1}`);
    });
});

// Asegura que los botones de modal existan antes de agregar eventos
const modalBtn9 = document.getElementById('modalBtn9');
const modalBtn10 = document.getElementById('modalBtn10');

if (modalBtn9) {
    modalBtn9.addEventListener('click', () => {
        cerrarModal('myModal9');
        mostrarModal('myModal10');
    });
}

if (modalBtn10) {
    modalBtn10.addEventListener('click', () => {
        cerrarModal('myModal10');
        // Agrega lógica adicional según sea necesario
    });
}
// Agrega el siguiente código para manejar el botón #modalLogin
const modalLoginBtn = document.getElementById('modalLogin');
if (modalLoginBtn) {
    modalLoginBtn.addEventListener('click', (event) => {
        event.preventDefault(); // Evitar que el enlace siga el href
        cerrarModal('myModal1'); // Cierra el modal actual
        mostrarModal('myModal9'); // Muestra el modal deseado
    });
}

// Agrega el siguiente código para manejar el botón #modalRegister
const modalRegisterBtn = document.getElementById('modalRegister');
if (modalRegisterBtn) {
    modalRegisterBtn.addEventListener('click', (event) => {
        event.preventDefault(); // Evitar que el enlace siga el href
        cerrarModal('myModal9'); // Cierra el modal actual
        mostrarModal('myModal1'); // Muestra el modal deseado
    });
}