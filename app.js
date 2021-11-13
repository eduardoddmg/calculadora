function insert(num) {
    var numero = document.getElementById('space').innerHTML;
    document.getElementById('space').innerHTML = numero + num;
}

function clean() {
    document.getElementById('space').innerHTML = "";
}

function back () {
    var back = document.getElementById('space').innerHTML;
    document.getElementById('space').innerHTML = back.substring(0, back.length - 1)
}

function resultado () {
    var resultado = document.getElementById('space').innerHTML;
    document.getElementById('space').innerHTML = eval(resultado);
    
}