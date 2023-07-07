import { container } from "./inversify.config";
import { TYPES, ISuperhero } from "./types";

let hero = container.get<ISuperhero>(TYPES.ISuperhero);
hero.fight(false);
