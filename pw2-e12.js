var palabraMisteriosa = "";
var intentosRestantes = 10;

function adivinar(){


  //No quitar, cancela evento onSubmit
  return false;
}

function mostrarPalabraMisteriosa(){

  document.getElementById('significado').style.display = 'initial';
}

function mostrarSignificado(){

}

function mostrarIntentos(){

}

function ganoPerdio(){

}



//No es necesario modificar a continuación
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function iniciar(){
  mostrarIntentos();
  buscarPalabra();
  document.getElementById('letra').focus();
}

function buscarPalabra(){       //this will read file and send information to other function
       var xmlhttp;

       if (window.XMLHttpRequest) {
           xmlhttp = new XMLHttpRequest();
       }
       else {
           xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
       }

       xmlhttp.onreadystatechange = function () {
           if (xmlhttp.readyState == 4) {
             var lineas = xmlhttp.responseText;    //*here we get all lines from text file*

             var palabras = intoArray(lineas);

             var posicion = Math.floor((Math.random() * palabras.length) + 1);

             palabraMisteriosa = palabras[posicion];
             console.log(palabraMisteriosa);

             var salida = '';
             for(var p = 0; p < palabraMisteriosa.length; p++){
                 salida += '_';
             }

             document.getElementById('palabra').innerHTML = salida;
           }
       }

       xmlhttp.open("GET", "https://raw.githubusercontent.com/jrsg/pw2-e12/master/palabras.txt?token=AL1uUjbn_eBIL64HE2Sqls8-2DSh93osks5blopSwA%3D%3D", true);
       xmlhttp.send();
}

function intoArray (lines) {
   return lines.split('\n');
}

window.onload = iniciar;
