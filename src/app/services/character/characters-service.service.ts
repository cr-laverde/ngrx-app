import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { catchError, map } from 'rxjs/operators';
import { CharacterModel } from 'src/app/models/character.model';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(private http: HttpClient) {}

  getCharacters(): Observable<CharacterModel[]> {
    return this.http.get(`${environment.api}/character`)
      .pipe(
        map( (response: any) => this.mapData(response)),
        catchError( () => EMPTY )
      );
  }

  private mapData(response: any): CharacterModel[] {
    let characters: Array<CharacterModel> = [];
      response.results.forEach((element: any) => {
        const character: CharacterModel = {
          id: element.id,
          name: element.name,
          image: element.image,
          species: element.species,
          status: element.status
        };
        characters.push( character );
      });

    return characters;
  }
}
