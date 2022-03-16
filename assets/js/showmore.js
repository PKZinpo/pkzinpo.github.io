const btn = document.querySelector('.read-more-btn');
const text = document.querySelector('.read-more');
const holder = document.querySelector('.project-holder');

holder.addEventListener('click', e => {
    const current = e.target;

    const isReadMoreBtn = current.className.includes('read-more-btn');

    if (!isReadMoreBtn) return;

    const currentText = e.target.parentNode.querySelector('.read-more');

    currentText.classList.toggle('read-more--open');

    current.textContent = current.textContent.includes('Show More') ? 'Show Less' : 'Show More';


});