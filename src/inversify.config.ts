import { Container } from "inversify";
import { TYPES, ISuperhero } from "./types";
import { MarvelCharacter } from "./implementations";

export let container = new Container();
container.bind<ISuperhero>(TYPES.ISuperhero).to(MarvelCharacter).inSingletonScope();
