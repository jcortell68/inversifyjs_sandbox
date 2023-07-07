import { Container } from "inversify";
import { TYPES, ISuperhero, IWeapon } from "./types";
import { Hammer, MarvelCharacter, Sword } from "./implementations";

export let container = new Container();

// Bind using transient scope. This is the default--what we get if we don't
// specify the scope.
container.bind<ISuperhero>(TYPES.ISuperhero).to(MarvelCharacter);
container.bind<IWeapon>(TYPES.IWeapon).to(Sword);
