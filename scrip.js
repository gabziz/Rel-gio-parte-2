function relogio(){

    const elementoRelogio = document.querySelector('.relogio');
    const horaAtual = new Date();
    const horas = horaAtual.getHours();
    const minutos = horaAtual.getMinutes();
    const segundos = horaAtual.getSeconds();


    const formatoHoras = horas.toString().padStart(2, '0');
   // const formatoHoras = para testar; 
    const formatoMinutos = minutos.toString().padStart(2, '0');
    const formatoSegundos = segundos.toString().padStart(2, '0');

    var img = document.querySelector("#img1")

    elementoRelogio.textContent = `${formatoHoras} : ${formatoMinutos} : ${formatoSegundos}`;

    const frase = document.querySelector('.frase')

    dia = new Array ('Domingo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sábado');

    mes = new Array ('janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro')

    hoje = new Date

    frase.innerHTML = `${dia[hoje.getDay()]},${hoje.getDate().toString().padStart(2, "0")} de ${mes[hoje.getMonth()]} de ${hoje.getFullYear()}`

    if(formatoHoras >= 0 && formatoHoras < 6 ){
        document.body.style.backgroundImage = "url(https://www.slidebackground.com/uploads/pixel-art/pink-city-animation-pixel-art-powerpoint-backgrounds-.png)"

        img.src= "https://static.vecteezy.com/system/resources/previews/009/663/440/non_2x/sun-sun-ray-icon-transparent-free-png.png"

    
    }

    else if(formatoHoras >= 6 && formatoHoras < 12){
        document.body.style.backgroundImage = "url(https://cutewallpaper.org/21/pixel-art-background-gif/Progress-and-inspiration-of-Faxdoc-Pixel-art-Pixel-art-.gif)"

        img.src= "https://static.vecteezy.com/system/resources/previews/009/662/828/non_2x/sun-sun-ray-icon-transparent-free-png.png"

    }


    else if(formatoHoras >= 12 && formatoHoras < 18){
        document.body.style.backgroundImage = "url(https://i.redd.it/uwwte8wps4h91.gif)"

        img.src= "https://static.vecteezy.com/system/resources/previews/009/662/828/non_2x/sun-sun-ray-icon-transparent-free-png.png"

    }

    else{
        document.body.style.backgroundImage = "url(https://i.pinimg.com/originals/9f/92/6c/9f926c8c220127d81c8ba6897aa8d5db.gif)"

        img.src= "https://images.vexels.com/media/users/3/153712/isolated/preview/4a19f1e3779202a87dbede8e4134d775-meia-lua-realista---cone-by-vexels.png"
       
    }

}

setInterval(relogio, 1000);
