


function blae(){
    let geimverEl = document.getElementById("geimvera");
    let sprengjaEl = document.getElementById("sprengja");

    console.log(window.getComputedStyle(geimverEl).getPropertyValue('opacity'));
    if (window.getComputedStyle(geimverEl).getPropertyValue('opacity') == 1)              
    {  
       sprengjaEl.style.opacity = 1;
       geimverEl.style.opacity = 0; 
    }
    else{
        sprengjaEl.style.opacity = 0;
        geimverEl.style.opacity = 1; 
    }
}


