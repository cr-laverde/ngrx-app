import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CharacterModel } from 'src/app/models/character.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() character: any;
  @Input() isActive: boolean = false;
  @Output() characterSelected = new EventEmitter<CharacterModel>();

  constructor() { }

  ngOnInit(): void {}

  selectCharacter(character: CharacterModel): void {
    this.characterSelected.emit(character);
  }

}
