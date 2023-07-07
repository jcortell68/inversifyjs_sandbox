import { Container, ContainerModule, injectable, interfaces } from "inversify";
import { TYPES, ISuperhero, IWeapon } from "./types";
import { Hammer, MarvelCharacter } from "./implementations";
import your_module_container from "./another.inversify.config";

let my_module_container = new ContainerModule((bind: interfaces.Bind, unbind: interfaces.Unbind) => {
    bind<ISuperhero>(TYPES.ISuperhero).to(MarvelCharacter);
    bind<IWeapon>(TYPES.IWeapon).to(Hammer);
});

// We create a container from a combination of bindings we define, and ones another
// module defines. This is managed via BindingModules. Our binding are defined
// first (the order we use in the load call below), but the other module's bindings can
// unbind nd rebind as they wish. I.e., we might thing we're special because we go first,
// but it's more powerful to have the last say :-)
//
// Theia Extensions make use of Container Modules. Every Theia Extesion is a package that
// contriutes a Container Module.
export let container = new Container();
container.load(my_module_container, your_module_container)
