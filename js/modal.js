// JavaScript para manejar los modales
document.addEventListener('DOMContentLoaded', () => {
    const modalBtns = document.querySelectorAll('.modal-btn');
    modalBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const targetModalId = btn.getAttribute('data-target');
        const targetModal = document.getElementById(targetModalId);
        
        // Cerrar todos los modales abiertos
        const openModals = document.querySelectorAll('.modal');
        openModals.forEach(modal => {
        modal.classList.remove('show-modal');
        });
        
        // Abrir el modal deseado
        targetModal.classList.add('show-modal');
    });
    });
    
    const closeBtns = document.querySelectorAll('.close');
    closeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const modal = btn.closest('.modal');
        modal.classList.remove('show-modal');
    });
    });
});