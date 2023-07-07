import { Container, ContainerModule, interfaces } from "inversify";
import { TYPES, IWeapon } from "./types";
import { Sword } from "./implementations";

let another_module_container = new ContainerModule((bind: interfaces.Bind, unbind: interfaces.Unbind, isBound: interfaces.IsBound) => {
    if (isBound(TYPES.IWeapon)) {
        unbind(TYPES.IWeapon);
    }
    bind<IWeapon>(TYPES.IWeapon).to(Sword);
});

export default another_module_container;