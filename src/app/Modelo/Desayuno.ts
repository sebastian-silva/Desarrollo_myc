import { ModeloImagen } from "./ModeloImagen";

export class Desayuno{
    idDesayuno: Number;
    nombre:String;
    precio:number;
    puntos:Number;
    grasa:String;
    azucar:String;
    sal:String;
    proteina:String;
    modeloImagen: ModeloImagen;

    constructor(){
        this.idDesayuno=this.idDesayuno,
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