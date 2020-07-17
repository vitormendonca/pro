const header = document.querySelector('header');
const headernav = document.querySelector('header nav');


/*Create MenuIcon*/
const adicionarMenuIcon = () => {
    const divspan = document.createElement('div');
    const span = document.createElement('span');
    const imgicon = document.createElement('img');
    const logodiv = document.querySelector('#logopro');

    header.removeChild(logodiv);
    header.prepend(divspan);
    divspan.appendChild(logodiv);
    divspan.appendChild(span);
    span.appendChild(imgicon);

    divspan.style.width = '100%';
    divspan.style.display = 'flex';
    divspan.style.justifyContent = 'space-between';
    divspan.style.alignItems = 'center';

    span.style.cursor = 'pointer';
    span.style.height = '40px'
    imgicon.setAttribute('src', 'imgs/logos/menuicon.png');
    imgicon.setAttribute('alt', 'menuicon');
    imgicon.style.width = '100%';
}
/*Remove Menu Icon*/
const removerMenuIcon = () => {
    const logodiv = document.querySelector('#logopro');
    const divspan = header.querySelector('div');
    header.replaceChild(logodiv, divspan);
}
/*Toggle Navigation on Mobile Devices*/
const toggleNav = () => {
    let clicked = false;
    const imgicon = document.querySelector('span img');
    imgicon.addEventListener('click', function (event) {
        if (!clicked) {
            headernav.style.display = "block";
            clicked = true;
        } else {
            headernav.style.display = "none";
            clicked = false;
        }
    })
}

/*Functions for window less than 650px (onresize), toggle icon, toggle nav*/
window.addEventListener("resize", function () {
    if (window.innerWidth < 650) {
        adicionarMenuIcon();
        toggleNav();
    } else {
        removerMenuIcon();
    }
})
/*Functions for window less than 650px, toggle icon, toggle nav*/
if (window.innerWidth < 650) {
    adicionarMenuIcon();
    toggleNav();
}

const myLazyLoad = new LazyLoad({
    elements_selector: 'img'
});