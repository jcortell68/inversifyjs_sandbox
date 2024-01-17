import { Container } from "inversify";
import { TYPES, ISuperhero, IMereMortal } from "./types";
import { DcCharacter, MarvelCharacter } from "./implementations";

export let container = new Container();

container.bind<ISuperhero>(TYPES.ISuperhero).to(MarvelCharacter).inSingletonScope();
container.bind<ISuperhero>(TYPES.ISuperhero).to(DcCharacter).inSingletonScope();

// The intent here is to have the superhero singletons also serves as mortals,
// since MarvelCharacter and DcCharacter implement IMereMortal. But
// container.getAll<IMereMortal>(TYPES.IMereMortal) will fail with
//    Error: Ambiguous match found for serviceIdentifier: Symbol(ISuperhero)
//
container.bind<IMereMortal>(TYPES.IMereMortal).toService(TYPES.ISuperhero);

// Using toService in that way works only if not mult-binding.
// I.e., if there is only one type bound to ISuperhero, then toService()
// works as we'd hope. You can see that by commenting out one of the two lines
// that bind to ISuperHero (lines 7-8)

