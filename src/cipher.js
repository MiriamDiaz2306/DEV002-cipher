const cipher = {
    encode: function (desplazamiento, texto) {

        if (typeof desplazamiento !== "number") throw new TypeError("desplazamiento debe ser un numero")
        if (typeof texto !== "string") throw new TypeError("texto debe ser string")


        let resultado = '';
        let letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

        desplazamiento = (desplazamiento % 26 + 26) % 26;

        if (texto) {

            for (let i = 0; i < texto.length; ++i) {

                if (letras.indexOf(texto[i]) != -1) {

                    let posicion = ((letras.indexOf(texto[i]) + desplazamiento) % 26);
                    resultado += letras[posicion];
                }
                else
                    resultado += texto[i];
            }
        }
        return resultado;
    },

    decode: function (desplazamiento, texto) {
        let resultado = '';
        let letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

        desplazamiento = (desplazamiento % 26 - 26) % 26;

        if (texto) {
            for (let i = 0; i < texto.length; i++) {

                if (letras.indexOf(texto[i]) != -1) {

                    let posicion = ((letras.indexOf(texto[i]) - desplazamiento) % 26);
                    resultado += letras[posicion];
                }
                else
                    resultado += texto[i];
            }
        }
        return resultado;

    }


};

export default cipher;
