import { container } from "./inversify.config";
import { TYPES, ISuperhero } from "./types";
let assert = require('assert')

let hero = container.get<ISuperhero>(TYPES.ISuperhero);
hero.origin()

// We've changed the binding scope to transient. Every time we request a
// superhero, we get a new instance.
let hero2 = container.get<ISuperhero>(TYPES.ISuperhero);
assert(hero2 !== hero)
