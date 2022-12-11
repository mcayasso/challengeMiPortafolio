import * as math from "./dark_mode.js";

const flagsElements = document.getElementById('flags');
const textsToChange = document.querySelectorAll("[data-section]");

const changeLanguage = async lang => {
    const requestJson = await fetch(`/assets/lang/${lang}.json`);
    const texts = await requestJson.json();

    for (const textToChange of textsToChange) {
        const section = textToChange.dataset.section;
        const value = textToChange.dataset.value;

        textToChange.innerHTML = texts[section][value];
    }
}

flagsElements.addEventListener('click', (e) => {
    changeLanguage(e.target.parentElement.dataset.language);
})

/* Dark Mode */
math.toggleTheme.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    if (math.toggleIcon.src.includes('moon.svg')) {
        math.toggleIcon.src = '/assets/images/icons/sun.svg';
        math.toggleText.textContent = 'Light Mode';
    } else {
        math.toggleIcon.src='/assets/images/icons/moon.svg';
        math.toggleText.textContent='Dark Mode';
    }
});

/*  */
math.toggleColors.addEventListener('click', (e) =>{
    math.rootStyle.setProperty('--primary-color', e.target.dataset.colors);
});
