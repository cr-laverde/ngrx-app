import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CharacterModel } from 'src/app/models/character.model';
import { CharactersService } from 'src/app/services/character/characters-service.service';
import { CounterService } from 'src/app/services/counter/counter.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  @Output() counterEmitter = new EventEmitter<number>();
  characters: Array<CharacterModel> = [];
  idsSelected: Array<number> = [];
  loading: boolean = false;

  constructor(
    private charactersService: CharactersService,
    private counterService: CounterService
  ) {}

  ngOnInit(): void {
    this.loading = true;
    this.charactersService.getCharacters()
      .subscribe( characters => {
        this.characters = characters;
        this.loading = false;
      });
  }

  updateCharactersSelected(item: CharacterModel): void {
    const isSelected = this.idsSelected.find( (id) => id === item.id);
    if (isSelected) {
      const indexOf = this.idsSelected.indexOf(item.id);
      if (indexOf > -1) {
        this.idsSelected.splice(indexOf, 1);
      }
    } else {
      this.idsSelected.push(item.id);
    }

    this.counterEmitter.emit( this.idsSelected.length );
    this.counterService.setCounter( this.idsSelected.length );
  }

  isActive(id: number): boolean {
    return this.idsSelected.includes(id);
  }

}
