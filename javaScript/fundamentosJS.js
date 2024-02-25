
/*
  Actividad  
  Construir 3 Funciones (Arrow Function)
  1. Sin parametros
  2. Con 1 parametro
  3. Con 2 o mas parametros 

  * Declarar al menos 5 variables utilizando let y const
  * Integrar con llamado a funciones y mostrar resultados
*/

 // ---------- Funciones sin parametros ----------
 // Funcion sin parametros para obtiener la Velocidad de la Luz
  const  velocidadLuz = () => {
    const velocidad = 299792458;
    return "La velocidad de la luz es = " + velocidad + " m/s";
  };

 // Funcion sin parametros para generar un numero Aleatorio
  const numeroAleatorio = () => {
    let resultado = Math.random() * 100;
    return "El Numero aleatorio es = " + resultado;
  };

 // ---------- Funciones con 1 parámetro ----------
 // Funcion con 1 parametro para verificar si el número es positivo, negativo o cero
  const verificarNumero = numero => { 
    if (numero > 0) {
      return numero + " Es un numero positivo";
    } else if (numero < 0) {
      return numero + " Es un numero negativo";
    } else {
      return numero + " Es cero";
    }
  };

 // Funcion con 1 parametro para calcular el area de un circulo
 const calcularAreaCirculo = radio => {
    const PI = 3.1416;
    let Area = PI * Math.pow(radio, 2);
    return "El area de un circulo con radio = " + radio + " ,es = " + Area;
 };
      
 // ---------- Funciones con 2 parametros ----------
 // Funcion con dos parametros para que calcula el area de un rectangulo
 const calcularAreaRectangulo = (base, altura) =>{
   const areaRectangulo = base * altura;
   return "El área del rectángulo con base " + base + " y altura " + altura + " es = " + areaRectangulo;
 };
 
 // Funcion con dos parametros para calcula la potencia de un numero
const calcularPotencia = (base, exponente) => {
    const potencia = Math.pow(base, exponente);
    return base + " elevado a la " + exponente + " es = " + potencia;
 };

  console.log(velocidadLuz());
  console.log(numeroAleatorio());
  console.log(verificarNumero(0));
  console.log(calcularAreaCirculo(2));
  console.log(calcularAreaRectangulo(5,2));
  console.log(calcularPotencia(2,8));

