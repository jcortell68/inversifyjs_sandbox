import { container } from "./inversify.config";
import { TYPES, ISuperhero } from "./types";
let assert = require('assert')

let hero = container.get<ISuperhero>(TYPES.ISuperhero);
hero.origin();

// play fight at first
hero.fight(false);

// now we mean business
hero.fight(true);
