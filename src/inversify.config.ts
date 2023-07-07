import { Container } from "inversify";
import { ISuperhero, IWeapon } from "./types";
import { Hammer, MarvelCharacter, NerfGun, Sword } from "./implementations";

export let container = new Container();

// Bind using transient scope. This is the default--what we get if we don't
// specify the scope.
container.bind<ISuperhero>("ISuperhero").to(MarvelCharacter);

// Multi-injection allows us to bind multiple implementations to an abstraction,
// but this requires the injection points to expect that (use @multiInject
// instead of just @inject).
container.bind<IWeapon>("IWeapon").to(Hammer);
container.bind<IWeapon>("IWeapon").to(Sword);
container.bind<IWeapon>("IWeapon").to(NerfGun);
