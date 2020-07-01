/*Return given string without accents*/
function removeAccents(str) {
    var accents    = 'ÀÁÂÃÄÅàáâãäåÒÓÔÕÕÖØòóôõöøÈÉÊËèéêëðÇçÐÌÍÎÏìíîïÙÚÛÜùúûüÑñŠšŸÿýŽž';
    var accentsOut = "AAAAAAaaaaaaOOOOOOOooooooEEEEeeeeeCcDIIIIiiiiUUUUuuuuNnSsYyyZz";
    str = str.split('');
    var strLen = str.length;
    var i, x;
    for (i = 0; i < strLen; i++) {
      if ((x = accents.indexOf(str[i])) != -1) {
        str[i] = accentsOut[x];
      }
    }
    return str.join('').toUpperCase();
  }


/*Filter by typying on search input*/
const search = document.getElementById('search');
const albumname = document.querySelectorAll('.albumitem p');
const album = document.querySelectorAll('.albumitem');


search.addEventListener("keyup", filterbytxt);

function filterbytxt (){
    let key = removeAccents(this.value);
    for (let i = 0; i < album.length; i++) {
        let titulo = removeAccents(albumname[i].textContent);
        if(titulo.indexOf(key) !== -1){
            album[i].style.display = "block";
        }
        else{
            album[i].style.display = "none";
        }
    }
    
}


/*Filter by Select Options*/
const select = document.querySelector('select');

select.addEventListener("change", filterbyoption);

  function filterbyoption(){ 
           
    if(removeAccents(this.value) == 'TODOS'){
        for(let i = 0; i < album.length; i++) {
            album[i].style.display = 'block';
        }  
    }
    else if(removeAccents(this.value) == 'MAISRECENTES' || removeAccents(this.value) == 'MAISANTIGAS'){
        let datas = [];
        let titulos = []
        const albumparent = document.getElementById('gridalbum');
        for (let i = 0; i < album.length; i++) {
            let titulo = albumname[i].textContent;
            titulos.push(titulo);
            datas.push(titulo.replace(/\D/g, ""));
        }
      
        if(removeAccents(this.value) == 'MAISRECENTES'){
            let datascres = datas.sort((a,b)=>a-b);              

            for (var i = 0; i < datascres.length; i++){
                for (var j = 0; j < album.length; j++ ){
                  if(titulos[j].includes(datascres[i])){
                    albumparent.appendChild(album[j]);
                    album[j].style.display = 'block';
                  }
                }
              }
        }
        /*(this.value) == 'MAISANTIGAS'*/
        else{
            let datascres = datas.sort((a,b)=>b-a);              

            for (var i = 0; i < datascres.length; i++){
                for (var j = 0; j < album.length; j++ ){
                  if(titulos[j].includes(datascres[i])){
                    albumparent.appendChild(album[j]);
                    album[j].style.display = 'block';
                  }
                }
              }
        }
    }

    else{  
        for (let i = 0; i < album.length; i++) {
            let titulo = removeAccents(albumname[i].textContent);
            if(titulo.indexOf(removeAccents(this.value)) !== -1){
                album[i].style.display = "block";
            }
            else{
                album[i].style.display = "none";
            }
        }
    }       
 }

