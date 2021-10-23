// Código del cuadrado 
console.group("Cuadrado");

function perimetroCuadrado(lado){
    return lado * 4;
} 

function areaCuadrado(lado){
    return lado * lado;
} 

console.groupEnd();

// Código del triángulo
console.group("Triangulos");

function perimetroTriangulo(lado1,lado2,base){
    return lado1 + lado2 + base;
}

function areaTriangulo(base,altura){
    return (base * altura) / 2;
}


console.groupEnd();

// Código del circulo
console.group("Circulos");

// Radio

// Diametro
function diametroCirculo(radio){
    return radio * 2;
}

// Pi
// const PI = Math.PI;


// Circunferencia
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return  diametro * Math.PI
}


// Area
function areaCirculo(radio){
    return (radio * radio) * Math.PI;
}


console.groupEnd();


// Aqui interactuamos con HTML

function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);

    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);

    alert(area);
}