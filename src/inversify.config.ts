import { Container, injectable, interfaces } from "inversify";
import { TYPES, ISuperhero, IWeapon } from "./types";
import { Catchphrase, Hammer, MarvelCharacter, NerfGun } from "./implementations";

export let container = new Container();

container.bind<ISuperhero>(TYPES.ISuperhero).to(MarvelCharacter);

// Bind lethal and nonlethal weapon implementations using tags
container.bind<IWeapon>(TYPES.IWeapon).to(Hammer).whenTargetTagged("lethal", true);
container.bind<IWeapon>(TYPES.IWeapon).to(NerfGun).whenTargetTagged("lethal", false);

// Bind a weapon factory that randomly produces either a lethal or non-lethal weapon
function weaponFactory(context: interfaces.Context) {
    return () => {
        let useLethalForce = Math.random() < 0.5;
        return context.container.getTagged<IWeapon>(TYPES.IWeapon, "lethal", useLethalForce);
    }
}
container.bind<interfaces.Factory<IWeapon>>(TYPES.IWeaponFactory).toFactory(weaponFactory);

// Bind the a Catchprase class to itself. Where an object of type Catchprase needs to be
// injected, it will be injected with an instance of Catchphrase.
container.bind<Catchphrase>(Catchphrase).toSelf();  // note: this is shorthand for container.bind<Catchphrase>(Catchphrase).to(Catchphrase);

// OK...what's the point of that? Well, not everything in your object model
// needs to be an interface. That's a design decision. In cases where a class
// having a direct dependency on another class is appropriate, you can still
// use DI. In fact, you need to if the depending class is injectable. Remember
// that injection is contagious.

// But beyond need, the use of DI even for class dependencies has its benefits. Let's
// swap out what's actually used. Note that due to the nature of JavaScript, the
// replacemet class just has to meet the API of Catchphrase. We don't actually have
// to introduce a build time dependency on it.
@injectable()
class ThorCatchphrase {
    sayit() {
        console.log("Odin's beard!");
    }
}
container.unbind(Catchphrase);
container.bind<Catchphrase>(Catchphrase).to(ThorCatchphrase);

// If all your app's interfaces and classes are injected, that means pretty much any
// functionality in your app can (in theory) be replaced! And in fact, this is what
// makes Theia so customizable via Theia Extensions.