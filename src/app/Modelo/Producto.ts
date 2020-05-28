import { ModeloImagen } from "./ModeloImagen";

export class Producto{
    idProducto: Number;
    nombre:String;
    precio:number;
    puntos:Number;
    grasa:String;
    azucar:String;
    sal:String;
    proteina:String;
    modeloImagen: ModeloImagen;

    constructor(){
        this.idProducto=this.idProducto,
        this.nombre=this.nombre,
        this.precio=this.precio,
        this.puntos=this.puntos,
        this.grasa=this.grasa,
        this.azucar=this.azucar,
        this.sal=this.sal,
        this.proteina=this.proteina
        this.modeloImagen=this.modeloImagen
    }
}