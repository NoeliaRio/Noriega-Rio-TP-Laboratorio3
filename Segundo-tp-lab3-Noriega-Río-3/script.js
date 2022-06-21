
let app = Vue.createApp({
    data() {
      return {
        NombreApellido: "",
        MontoInvertido: 0,
        Dias: 0,
        Comprobante: false,
        Comprobantemonto: false,
        MontoFinal: 0,
        Porcentaje: 0,
        errorInvertir: "",
        errorNombre: "",
        errorDias: "",
        Mensaje: "",
      };
    },
    methods: {
      calcularMonto() {
        if (this.Dias >= 30 && this.Dias <= 60) {
          this.Porcentaje = 40 / 100;
        }
        if (this.Dias > 60 && this.Dias <= 120) {
          this.Porcentaje = 45 / 100;
        }
        if (this.Dias > 120 && this.Dias < 360) {
          this.Porcentaje = 50 / 100;
        }
        if (this.Dias >= 360) {
          this.Porcentaje = 65 / 100;
        }
        if (this.NombreApellido.trim !== "") {
          this.Comprobante = true;
          this.errorNombre = " ";
        } else {
          this.errorNombre = "Por favor ingrese su nombre y apellido";
        }
        if (this.MontoInvertido >= 1000) {
          this.Comprobantemonto = true;
          this.errorInvertir = " ";
        } else {
          this.errorInvertir = "Por favor ingrese un numero mayor a 1000";
        }
        if (this.Dias >= 30) {
          this.errorDias = " ";
        } else {
          this.errorDias = "Por favor ingrese una cantidad de días mayor a 30";
        }
        if (this.Comprobante === true && this.Comprobantemonto === true) {
          this.MontoFinal =
            parseFloat(this.MontoInvertido) +
            this.MontoInvertido * (this.Dias / 360) * this.Porcentaje;
        }
        if (this.MontoFinal > 0) {
          this.Mensaje = "El monto de su inversión es: $" + this.MontoFinal;
        }
        return this.MontoFinal;
      },
    },
  });
  app.mount("#app");
