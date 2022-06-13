
Vue.createApp({
    data() {
        return {
            NombreApellido: '',
            MontoInvertido: 0,
            Dias: 0,
            Comprobante: false,
            Comprobantemonto: false,
            MontoFinal: 0,
            Porcentaje: 0,
            errorInvertir: '',
            errorNombre: '',
            errorDias: '',
        }
    },
    methods:
    {
        calcularMonto()
        {
            if (this.NombreApellido.trim===''&& this.Dias>=30)
            {
                this.Comprobante= true;
                this.errorDias= '';
                this.errorNombre= '';
            }
            else 
            {
                this.errorDias='Por favor ingrese una cantidad de días mayor a 30';
                this.errorNombre='Por favor ingrese su nombre y apellido';
            }
            if (this.Monto>=1000)
            {
                this.Comprobantemonto= true;
                this.errorInvertir= '';
            }
            else this.errorInvertir='Por favor ingrese un numero mayor a 1000';
            if (this.Comprobante===true && this.Comprobantemonto===true)
            this.MontoFinal = parseFloat(this.Monto) + this.Monto * (this.Dias / 360) * Intereses();   
        },

    
        Intereses()
        {
            if (this.Dias >=30 && this.Dias <= 60) this.Porcentaje = 40;
            if (this.Dias > 60 && this.Dias <= 120) this.Porcentaje = 45;
            if (this.Dias > 120 && this.Dias < 360) this.Porcentaje = 50;
            if (this.Dias >= 360) this.Porcentaje = 65;
        },
    }

}).mount('#app')

