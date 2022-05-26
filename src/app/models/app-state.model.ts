import { CharacterModel } from "./character.model";

export interface AppStateModel {
    loading: boolean;
    characters: Array<CharacterModel>;
    charactersSelected: Array<CharacterModel>;
}