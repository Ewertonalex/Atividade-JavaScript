function maiormenor() {
    const params = arguments;
    var maior = Math.max.apply(Math, params);
    var menor = Math.min.apply(Math, params);

    console.log("Maior número: " + maior);
    console.log("Menor número: " + menor);
}

maiormenor(12, 55, 65, 98, 455)