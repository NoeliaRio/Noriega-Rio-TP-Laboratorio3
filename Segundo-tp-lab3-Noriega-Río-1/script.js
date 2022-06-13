let btnCalcular = document.getElementById('btnCalcular');
let btnReinvertir = document.getElementById('btnReinvertir');

btnCalcular.addEventListener('click', () =>{
    calcularMonto()
})
btnReinvertir.addEventListener('click', () =>{
    calcularMonto()
})

 function calcularMonto(){
    let NombreApellido = document.getElementById('NombreApellido').value;
    let Monto = document.getElementById('MontoInvertido').value ;
    let Dias = document.getElementById('CantidadDias').value ;
    let comprobante=false;
    let comprobantemonto=false;
    
    if (NombreApellido.trim() ===""){ 
        document.getElementById("errorNombre").innerHTML="Por favor ingrese su nombre y apellido"; 
        comprobante=false;
        document.getElementById("NombreApellido").focus();
    }else {
        comprobante=true;
        document.getElementById("errorNombre").innerHTML="";
    }
    
    if (Monto<1000){
        document.getElementById("errorInvertir").innerHTML="Por favor ingrese un numero mayor a 1000";
        comprobantemonto = false;
        document.getElementById("MontoInvertido").focus();
    }else {
        comprobantemonto=true;
        document.getElementById("errorInvertir").innerHTML="";
    }
    if (Dias <=29||Dias==="")
    {
        document.getElementById("errorDias").innerHTML="Por favor ingrese una cantidad de días mayor a 30";
        comprobante=false;
        document.getElementById("CantidadDias").focus();
    }else {
        document.getElementById("errorDias").innerHTML="";
        if (comprobante===true && comprobantemonto===true){
            let montoFinal = parseFloat(Monto) + Monto * (Dias / 360) * intereses(Dias);
  
            let etiquetaP = document.createElement('p');
            etiquetaP.appendChild(document.createTextNode("El monto de su inversión es: " + "$" +  montoFinal));
        
            document.getElementById("CalcularInversion").appendChild(etiquetaP);
        }
    }
    function intereses(Dias){
        let Porcentaje = 0;
    
        if(Dias >= 30 &&  Dias <= 60){
            Porcentaje = (40 / 100);
        }
        else if (Dias >= 61 &&  Dias <= 120){
            Porcentaje = (45 / 100);
        }
        else if(Dias >= 121 &&  Dias < 360){
            Porcentaje = (50 / 100);
        }
        else{
            Porcentaje = (60 / 100);
        }
        return Porcentaje;
    }
    function Reinvertir (){
        
    }
    function limpiar(mensaje){
        let elmento =mensaje.elemento;
        mensaje.reset();
    }
            
    } 
