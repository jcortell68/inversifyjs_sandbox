import { Container } from "inversify";
import { TYPES, ISuperhero, IWeapon, IToy } from "./types";
import { MarvelCharacter, Sword } from "./implementations";

export let container = new Container();

container.bind<ISuperhero>(TYPES.ISuperhero).to(MarvelCharacter);
container.bind<IWeapon>(TYPES.IWeapon).to(Sword);
container.bind<IToy>(TYPES.IToy).toService(TYPES.IWeapon);
