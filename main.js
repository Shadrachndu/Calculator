let btn = document.querySelector('#modeB');
btn.addEventListener('click', mode)
function mode(){
    let body = document.querySelector('#body');
    let mode = body.getAttribute('data-mode');

    if (mode =='normal') {
        body.setAttribute('data-mode','night');
        
    }else if (mode =='night') {
        body.setAttribute('data-mode','normal');
           
    }
    
}