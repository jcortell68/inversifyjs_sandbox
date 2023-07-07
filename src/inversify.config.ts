import { Container } from "inversify";
import { TYPES, ISuperhero, IWeapon } from "./types";
import { Hammer, MarvelCharacter, NerfGun } from "./implementations";

export let container = new Container();

container.bind<ISuperhero>(TYPES.ISuperhero).to(MarvelCharacter);

// Bind two different concrete types to the same interface, under different tags.
// Injection points can pick one or the other, or both.
container.bind<IWeapon>(TYPES.IWeapon).to(Hammer).whenTargetTagged("lethal", true)
container.bind<IWeapon>(TYPES.IWeapon).to(NerfGun).whenTargetTagged("lethal", false)
