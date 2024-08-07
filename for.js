//for (var i = 0; i < 30; i++) {
   // console.log(i);
    // more statements 
//}
// objeto é um tipo de arquivo
/*let alunos = {
    "júlia" : {
        "sapato": "sim"
    },
    "matheus" : {
        "sapato" : "não"
    },
    "jõao" : {
        "sapato" : "não"
    },
    "luana" : {
        "sapato": "não"
    },
    "leandro" : {
        "sapato" : "sim"
    },
    "carlos" : {
        "sapato" : "sim"
    }
}
let i = Object.keys(alunos)

function mostrarProps(obj, alunos) {
    let resultado = "sim";
    for (var i in obj) {
        if (obj.haswnProperty(i)) {
            resultado = alunos + "sapato" + "sim" + obj[alunos] + "\n";
        }
    }
    return resultado;
} 

/*function mostrarProps(obj, nomeDoObj) {
    var resultado = "";
    for (var i in obj) {
      if (obj.hasOwnProperty(i)) {
        resultado += nomeDoObj + "." + i + " = " + obj[i] + "\n";
      }
    }
    return resultado;
  }*/
  /*if(
    sapato == "sim"
) {
    console.log ("entra")
} else
  {
    console.log("não entra" )
}*/
let nomes = ["bia", "suzana", "carlos", "matheus", "júlia", "hellen", "claudio", "túlio",  "joaquim", "breno"]
for (var i = 0; i < 3; i++) {
     console.log(nomes[i]);
 }
