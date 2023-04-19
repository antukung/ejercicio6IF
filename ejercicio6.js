let tipoDeProducto =prompt ("especifique el tipo de producto:carne,lacteo o enlatados");
let cantidadDePesos = prompt ("espefique la cantidad que gasta");
const PRODUCTO_CARNES= "carne";
const PRODUCTO_LACTEO= "lacteo";
const PRODUCTO_ENLATADO= "enlatados";
const COEFICIENTE_CARNE= 0.75;
const COEFICIENTE_LACTEO=0.50;
const COEFICIENTE_ENLATADO=0.30;
let descuentoCarne= (cantidadDePesos*COEFICIENTE_CARNE);
let descuentoLacteo=(cantidadDePesos*COEFICIENTE_LACTEO);
let descuentoEnlatado= (cantidadDePesos*COEFICIENTE_ENLATADO);
if (tipoDeProducto==PRODUCTO_CARNES) {
    document.write("<h5>El precio del producto carne ingresado con el descuento es de $"+descuentoCarne+"</h5>")
} else if (tipoDeProducto==PRODUCTO_LACTEO){
    document.write("<h5>El precio del producto lacteo ingresado con el descuento es de $"+descuentoLacteo+"</h5>")
} else if (tipoDeProducto==PRODUCTO_ENLATADO){
    document.write("<h5>El precio del producto enlatado ingresado con el descuento es de $"+descuentoEnlatado+"</h5>")
} else{
    document.write("<h1>NO SE PUEDE REALIZAR LA OPERACION</h1>")
}