import { Container } from "inversify";
import { TYPES, ISuperhero, IWeapon } from "./types";
import { MarvelCharacter, Sword } from "./implementations";

export let container = new Container();

// Bind using transient scope. This is the default--what we get if we don't
// specify the scope.
container.bind<ISuperhero>(TYPES.ISuperhero).to(MarvelCharacter);

// We can specify this binding or not if its injection points are declared
// optional
//container.bind<IWeapon>(TYPES.IWeapon).to(Sword);
