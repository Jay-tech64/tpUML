import { Droit } from "./droit";
import { Produit } from "./produit";

export class DroitProduit{
    droit: Array<Droit>
    produit: Array<Produit>;

    constructor(){
        this.droit = new Array();
        this.produit = new Array();
    }
}