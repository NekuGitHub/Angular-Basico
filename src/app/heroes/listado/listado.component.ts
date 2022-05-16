import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman','Ironman','Hulk','Thor'];
  heroesBorrados: string[] = [];

  borrarHeroe(){
    var heroeBorrado = this.heroes.pop();
    if(heroeBorrado!=undefined) this.heroesBorrados.push(heroeBorrado); 
  }

}
