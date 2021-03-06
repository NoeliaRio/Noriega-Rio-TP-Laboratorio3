let btnCalcular = document.getElementById('btnCalcular');
let btnReinvertir = document.getElementById('btnReinvertir');
btnCalcular.addEventListener('click', () =>{MostrarInversion();})
btnReinvertir.addEventListener('click', () =>{Reinvertir();})
function Monto()
{
    let Monto = document.getElementById('MontoInvertido').value;
    return Monto
}

 function calcularMonto(Monto)
{  
    let NombreApellido = document.getElementById('NombreApellido').value;
    let Dias = document.getElementById('CantidadDias').value;
    let comprobante=false;
    let comprobantemonto=false;
    let MontoFinal;
    
    if (NombreApellido.trim() ==="")
    { 
        document.getElementById("errorNombre").innerHTML="Por favor ingrese su nombre y apellido"; 
        comprobante=false;
        document.getElementById("NombreApellido").focus();
    }else 
    {
        comprobante=true;
        document.getElementById("errorNombre").innerHTML="";
    }
    
    if (Monto<999)
    {
        document.getElementById("errorInvertir").innerHTML="Por favor ingrese un numero mayor a 1000";
        comprobantemonto = false;
        document.getElementById("MontoInvertido").focus();
    }else 
    {
        comprobantemonto=true;
        document.getElementById("errorInvertir").innerHTML="";
    }
    if (Dias <=29||Dias==="")
    {
        document.getElementById("errorDias").innerHTML="Por favor ingrese una cantidad de días mayor a 30";
        comprobante=false;
        document.getElementById("CantidadDias").focus();
    }else 
    {
        document.getElementById("errorDias").innerHTML="";
        if (comprobante===true && comprobantemonto===true)
        {
            MontoFinal = parseFloat(Monto) + Monto * (Dias / 360) * intereses(Dias);   
        }
    }
    return MontoFinal;
}
function MostrarInversion()
{
    let MontoFinal= calcularMonto(Monto());
    if(MontoFinal>0)
    {
        let etiquetaP = document.createElement('p');
        etiquetaP.appendChild(document.createTextNode("El monto de su inversión es: " + "$" +  MontoFinal));
        document.getElementById("CalcularInversion").appendChild(etiquetaP);
    }
}
function intereses(Dias)
{
    let Porcentaje = 0;
    
    if(Dias >= 30 &&  Dias <= 60)
    {
        Porcentaje = (40 / 100);
    }
    else if (Dias >= 61 &&  Dias <= 120)
    {
        Porcentaje = (45 / 100);
    }
    else if(Dias >= 121 &&  Dias < 360)
    {
        Porcentaje = (50 / 100);
    }
    else
    {
        Porcentaje = (60 / 100);
    }
    return Porcentaje;
}
function MostrarCuadro(Montos)
{
    document.querySelector("Cuadro");
    
    let Periodo1 = document.querySelectorAll("Periodo1");
    let Periodo2 = document.querySelectorAll("Periodo2");
    let Periodo3 = document.querySelectorAll("Periodo3");
    let Periodo4 = document.querySelectorAll("Periodo4");
    
    for (let i = 1; i < Periodo1.length; i++) 
    {
        Periodo1[i].textContent = "$ " + Montos[0][i - 1];
        Periodo2[i].textContent = "$ " + Montos[1][i - 1];
        Periodo3[i].textContent = "$ " + Montos[2][i - 1];
        Periodo4[i].textContent = "$ " + Montos[3][i - 1];
    }
}
function Reinvertir()
{
    let Monto = document.getElementById('MontoInvertido').value;
    let Montos = [];
    let MontoFinal= calcularMonto(Monto());
    Montos.push([Monto, MontoFinal])
    for (let i = 1; i < 4; i++) 
    {
        MontoFinal = calcularMonto(MontoFinal);
        Montos.push([Montos[i - 1][1], MontoFinal])
    }
    MostrarDatosReinversion(Montos);
}

