var s = 0
var m = 0
var hor = 0
var hora = document.getElementById('hora')
var h = document.getElementById('sec')
var min = document.getElementById('minute')

function forS () {
    
    if(s < 10){
    h.innerText ='0'+ s
    }
    if (s >= 10){
        h.innerHTML=s
        
    }
    s++
    if (s  == 60){  
        m++
        s = 0
        h.innerHTML = "0"+s
        min.innerHTML = "0"+m
        

        
    }
    if (m >=10){
        min.innerHTML= m
    }
    if (m == 60){
        m = 0
        hor++
        min.innerHTML = "0"+m
        hora.innerHTML = "0"+ hor
        }
    if (hor >= 10){
        hora.innerHTML = hor
    }
}

function Iniciar(){
    console.log("apertou esse cabrumco!")
    armazenarIntervalo = setInterval(forS, 1000);
 
        document.getElementById("start").removeEventListener("click",Iniciar)
    

}
document.getElementById("start").addEventListener('click',Iniciar);
document.getElementById("pause").addEventListener('click',pausar);
document.getElementById("reset").addEventListener('click',resetarCr);
document.getElementById("mark").addEventListener('click',marcarTempo);

function pausar(){
    document.getElementById("start").addEventListener('click',Iniciar);
  
clearInterval(armazenarIntervalo);

    
}
function marcarTempo(){
    
    let aux
    let aux2
    let aux3 
    let text = document.createElement('h1')
    if ( s < 10){
        s.toString()
        aux = "0" + s

    }
    if (s >= 10){
        aux = s
    }
    if (m < 10){
        m.toString()
         aux2 = "0" + m
    }
    if(m >= 10){
        aux2 = m
    }
    if (hor < 10 ){
        hor.toString()
         aux3 = "0" + hor
    }
    text.innerHTML = aux3 + ":" + aux2 + ":" + aux
    

    document.body.appendChild(text)}


function resetarCr(){
    hor = 0
    m = 0
    s = 0
    clearInterval(armazenarIntervalo);
    hora.innerHTML = "00"
    min.innerHTML = "00"
    h.innerHTML = "00"
    document.getElementById("start").addEventListener('click',Iniciar);
    
    
}