
const header = document.querySelector('header');
const headernav = document.querySelector('header nav');

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
    divspan.style.display ='flex';
    divspan.style.justifyContent= 'space-between';
    divspan.style.alignItems = 'center';

    span.style.cursor = 'pointer';
    span.style.height = '40px'
    imgicon.setAttribute('src' , 'imgs/logos/menuicon.png');
    imgicon.setAttribute('alt', 'menuicon');
    imgicon.style.width = '100%';
}

const removerMenuIcon = () =>{
    const logodiv = document.querySelector('#logopro');
    const divspan = header.querySelector('div');
    header.replaceChild(logodiv,divspan);
}

const toggleNav = () =>{
    let clicked = false;
    const imgicon = document.querySelector('span img');
    imgicon.addEventListener('click', function(event){
        if(!clicked){
            headernav.style.display = "block";
           clicked = true;
        }
        else{
            headernav.style.display = "none";
            clicked = false;
        }
    })
}


window.addEventListener("resize", function() {
    if (window.innerWidth < 650) {
       adicionarMenuIcon();
        toggleNav();
    }
    else{
        removerMenuIcon();
    }
 })

 if(window.innerWidth < 650){
    adicionarMenuIcon();
    toggleNav();
 }



function slide () {
    const slideimg = document.getElementById('slideitem');
    let currentimg = 'imgs/treinojudo/treino16.png';
}

slide()
