function ordenar(a,b){
    return a-b;
}
function sortear(){
    var mega = new Array();
    var numeroSorteado = 0;
    var i = 0;
    var d1 = document.getElementById("d1"); 
    var d2 = document.getElementById("d2"); 
    var d3 = document.getElementById("d3"); 
    var d4 = document.getElementById("d4"); 
    var d5 = document.getElementById("d5"); 
    var d6 = document.getElementById("d6"); 

    do{
        numeroSorteado = Math.ceil(Math.random() * 60);
        if(mega.indexOf(numeroSorteado) < 0)
            mega.push(numeroSorteado);
        i++;
    }while(i <= 6)

    mega.sort(ordenar);

    d1.innerText = mega[0];
    d2.innerText = mega[1];
    d3.innerText = mega[2];
    d4.innerText = mega[3];
    d5.innerText = mega[4];
    d6.innerText = mega[5];
    
}