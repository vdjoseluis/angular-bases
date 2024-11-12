import { Component, Input } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  @Input()    // Se puede poner dentro de () algun nombre
  public characterList: Character[] = [{ name: 'Trunks', power: 10 }];  //valor por default si se pasa vacio

  onDeleteCharacter(index: number): void {
    //TODO: Emitir el ID del personaje
    console.log({index})
  }
}
