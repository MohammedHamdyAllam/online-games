// Import translations
import translations from './translations.js';

// Get element from HTML
const langSelctor = document.getElementById('lang-selctor');

// varibels
const dataAtt = 'data-i18n';

// change language when website open
window.onload = () => {
  changeLang(localStorage.getItem('lang'));
}

// change language when user choose it
if(langSelctor) {
  langSelctor.addEventListener('change', (event) => {
    changeLang(event.target.value);
    localStorage.setItem('lang', event.target.value);
  });
}

// Make change language func
const changeLang = (lang) => {
  const elements = document.querySelectorAll(`[${dataAtt}]`);
  elements.forEach((ele) => {
    let translationKey = ele.getAttribute(dataAtt);
    ele.textContent = translations[lang][translationKey];
  })
  if(lang === 'ar') {
    // document.lang = 'ar';
    document.body.style.direction = 'rtl';
    if(langSelctor) {
      langSelctor.innerHTML = '';
      langSelctor.innerHTML += '<option value="ar">العربية</option>';
      langSelctor.innerHTML += '<option value="en">english</option>';
    }
  }
  else {
    // document.lang = 'en';
    document.body.style.direction = 'ltr';
    if(langSelctor) {
      langSelctor.innerHTML = '';
      langSelctor.innerHTML += '<option value="en">english</option>';
      langSelctor.innerHTML += '<option value="ar">العربية</option>';
    }
  }
}
