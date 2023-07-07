import { Container, interfaces } from "inversify";
import { TYPES, ISuperhero, IWeapon } from "./types";
import { Hammer, MarvelCharacter, NerfGun } from "./implementations";

export let container = new Container();

container.bind<ISuperhero>(TYPES.ISuperhero).to(MarvelCharacter);

// Bind to a contact value. Even here we have some flexibility but the logic
// has no container context and it has to be an expression that resulve to the
// requested type
container.bind<IWeapon>(TYPES.IWeapon).toConstantValue((Math.random() < 0.5) ? new Hammer() : new NerfGun());
