import { Container } from "inversify";
import { TYPES, ISuperhero, IWeapon } from "./types";
import { MarvelCharacter, Sword } from "./implementations";

export let container = new Container();

container.bind<ISuperhero>(TYPES.ISuperhero).to(MarvelCharacter);
container.bind<IWeapon>(TYPES.IWeapon).to(Sword);
