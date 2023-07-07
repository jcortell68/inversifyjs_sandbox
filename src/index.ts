import { container } from "./inversify.config";
import { TYPES, ISuperhero } from "./types";
let assert = require('assert')

let hero = container.get<ISuperhero>(TYPES.ISuperhero);
hero.origin()

// Proof that container dishes out a singleton for ISuperhero, as specified in
// the bind call.
let hero2 = container.get<ISuperhero>(TYPES.ISuperhero);
assert(hero2 === hero)
