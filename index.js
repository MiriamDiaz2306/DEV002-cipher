import cipher from './cipher.js';

console.log(cipher);
window.addEventListener("load",inicio,true);

function inicio(){
    document.getElementById("mensaje").addEventListener("keyup", function(){
        this.value = this.value.toUpperCase();
    }, true);
    
    document.getElementById("cifrar").addEventListener("click",function(){  
        let texto = document.getElementById("mensaje").value;
        let desplazamiento = document.getElementById("desplazamiento").value;               
        document.getElementById("mensaje2").value = cipher.encode(desplazamiento,texto);
    },true);
    document.getElementById("descifrar").addEventListener("click",function(){  
        let texto = document.getElementById("mensaje").value;
        let desplazamiento = document.getElementById("desplazamiento").value;                               
        document.getElementById("mensaje2").value = cipher.decode(desplazamiento, texto);
    },true);
}


// function descifrar (texto, desplazamiento) {
//     let resultado='';
//     let letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    
//     desplazamiento = (desplazamiento % 26 - 26) % 26; 
    
//     if (texto){
//         for (let i=0; i<texto.length; i++){
           
//             if (letras.indexOf(texto[i])!=-1) { 
                
//                 let posicion=((letras.indexOf(texto[i])-desplazamiento) % 26);
//                 resultado+=letras[posicion];
//             }
//             else
//                 resultado += texto[i];  
//         }
//     }
//     return resultado;
// }


// function cifrar2 (texto, desplazamiento) {
//     let resultado='';
//     let letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    
//     desplazamiento = (desplazamiento % 26 + 26) % 26; 
    
//     if (texto){
//         for (let i=0; i<texto.length; ++i){
           
//             if (letras.indexOf(texto[i])!=-1)
//             { 
                
//                 let posicion=((letras.indexOf(texto[i])+desplazamiento) % 26);
//                 resultado+=letras[posicion];
//             }
//             else
//                 resultado+=texto[i];  
//         }
//     }
//     return resultado;
// }

   