const openBtn = document.getElementById('open-model-btn');
const closeBtn = document.getElementById('closeModalBtn');
const modal = document.getElementById('modal');

openBtn.addEventListener('click', () => {
    modal.classList.add('open');
})

closeBtn.addEventListener('click', () => {
    modal.classList.remove('open')
})

// Listen for outside click
window.addEventListener('click', (e) => {
    if (e.target == modal) {
        modal.classList.remove('open')
    }
})