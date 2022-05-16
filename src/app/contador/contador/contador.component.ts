import { Component } from "@angular/core";

@Component({
    selector: 'app-contador',
    template: `
        <h1> {{ titulo }} </h1>

        <h3> La base es: <strong>{{ base }}</strong> </h3>
        
        <button (click)=acumular(base)> +{{ base }} </button>
        <!-- Los eventos van entre parentesis. En el template no se tragan 
        expresiones como x++ o x+=1. Se aconseja poner la logica en el componente.ts
        Es decir, en vez de poner numero=numero+1 mejor poner sumar()-->
        <span> {{ numero }} </span>
        
        <button (click)=acumular(-base)> -{{ base }} </button>
        <!--Al llamar al evento no hay que poner la variable entre llaves
        porque al ser de typescript ya la reconoce-->
    `, //OJO CON LAS COMILLAS DEL TEMPLATE
})
export class ContadorComponent {
    titulo: string = 'Contador App'; //Si desde el html llamamos a {{titulo}} nos saldrá el
    //valor que tiene aquí
    numero: number = 10; //Creamos variable para usar en el html
    base: number =5;

    acumular(valor: number) {
        this.numero += valor;
    }
}