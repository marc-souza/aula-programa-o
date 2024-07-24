// mateus musico corda violao partiu lojas locais diferentes loc = canela busc 3 lojas = av7 gamboa peidade barata = + longe quer ir na = + barata qual loja ele iria
let mateus = "musico"
let caracsMateus = {
    "corda violao": "quebrado",
    "loc": "canela",
}
let locLojas = ["av7", "gamboa","piedade" ]

// calça 4 bolso 2 primeiros + fundo ,  1 bolso = celular cartwiea chave 2 bolso chave2 cartao de visita e cadeado

let bolsosF = ["bolso1", "bolso2"]
let calça = {
     "bolso1": {
     "contem":   [" celular "," carteira ", " chave1"],
     "fundo": true
    },
         "bolso2": {
            "contem": [" chave2 ", " cVis ", " cad"],
            "fundo": true
},
     "bolso3": {
        "contem":[],
        "fundo": false
    },
     "bolso4": {
        "contem": [],
        "fundo": false
    }
} 


console.log("Na minha calça tem" +  Object.keys(calça) + " no bolso 1, contém" + calça.bolso1.contem + "sobre")

//("Na minha calça tem 4 bolsos, no primeiro bolso contém:" + calça.bolso1, "no segundo bolso, contém:" + calça.bolso2 + "e os bolsos 3 e 4 estão vazios" , "e os bolsos fundos são " + bolsosF)
//console.log(Object.values(calça.bolso1))
