import { container } from "./inversify.config";
import { ISuperhero } from "./types";

let hero = container.get<ISuperhero>("ISuperhero");
hero.fight();
