let productoCarne =prompt ("especifique la cantidad de carne de no querer comprar pulse 0");
let productoLacteo=prompt ("espefique la cantidad de lacteo de no querer comprar pulse 0");
let productoEnlatado= prompt ("especifique la cantidad de enlatado de no querer comprar pulse 0");
const COEFICIENTE_CARNE= 0.75;
const COEFICIENTE_LACTEO=0.50;
const COEFICIENTE_ENLATADO=0.30;
let descuentoCarne= (productoCarne*COEFICIENTE_CARNE);
let descuentoLacteo=(productoLacteo*COEFICIENTE_LACTEO);
let descuentoEnlatado= (productoEnlatado*COEFICIENTE_ENLATADO);
if (productoCarne >0 ||productoLacteo>0 || productoEnlatado>0) {
    document.write("<h5>El precio del producto carne ingresado con el descuento es de $"+descuentoCarne+"</h5>")
    document.write("<h5>El precio del producto lacteo ingresado con el descuento es de $"+descuentoLacteo+"</h5>")
    document.write("<h5>El precio del producto enlatado ingresado con el descuento es de $"+descuentoEnlatado+"</h5>")    
} else{
    document.write("<h1>NO SE PUEDE REALIZAR LA OPERACION</h1>")
}