export const removeActiveFromItem = () => { 
    document.body.querySelectorAll('.header__item').forEach(item => item.classList.remove('active')); 
}