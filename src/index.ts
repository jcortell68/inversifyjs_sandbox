import { container } from "./inversify.config";
import { TYPES, ISuperhero } from "./types";

let hero = container.get<ISuperhero>(TYPES.ISuperhero);

// play fight at first
hero.fight(false);

// now we mean business
hero.fight(true);
