import { Container } from "inversify";
import { TYPES, ISuperhero, IWeapon } from "./types";
import { Hammer, MarvelCharacter, NerfGun, Sword } from "./implementations";

export let container = new Container();

// Bind using transient scope. This is the default--what we get if we don't
// specify the scope.
container.bind<ISuperhero>(TYPES.ISuperhero).to(MarvelCharacter);

// Multi-injection allows us to bind multiple implementations to an abstraction,
// but this requires the injection points to expect that (use @multiInject
// instead of just @inject).
container.bind<IWeapon>(TYPES.IWeapon).to(Hammer);
container.bind<IWeapon>(TYPES.IWeapon).to(Sword);
container.bind<IWeapon>(TYPES.IWeapon).to(NerfGun);
