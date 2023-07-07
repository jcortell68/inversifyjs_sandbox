import { container } from "./inversify.config";
import { ISuperhero } from "./types";
let assert = require('assert')

let hero = container.get<ISuperhero>("ISuperhero");
hero.origin();
hero.fight();
