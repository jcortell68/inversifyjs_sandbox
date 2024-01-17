import { container } from "./inversify.config";
import { TYPES, ISuperhero, IMereMortal } from "./types";

const heros = container.getAll<ISuperhero>(TYPES.ISuperhero);
heros.forEach(hero => hero.fight());

const mortals = container.getAll<IMereMortal>(TYPES.IMereMortal);
mortals.forEach(mortal => mortal.work());
