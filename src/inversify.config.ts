import { Container } from "inversify";
import { TYPES, ISuperhero, IMereMortal } from "./types";
import { DcCharacter, MarvelCharacter } from "./implementations";

export let container = new Container();

container.bind(MarvelCharacter).toSelf().inSingletonScope();
container.bind(DcCharacter).toSelf().inSingletonScope();
container.bind<ISuperhero>(TYPES.ISuperhero).toService(MarvelCharacter);
container.bind<ISuperhero>(TYPES.ISuperhero).toService(DcCharacter);
container.bind<IMereMortal>(TYPES.IMereMortal).toService(MarvelCharacter);
container.bind<IMereMortal>(TYPES.IMereMortal).toService(DcCharacter);

