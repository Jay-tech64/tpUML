import { DroitProduit } from "./droitProduit";
import { Options } from "./options";

export class Produit {
    id: number;
    nom: string;
    description: string;
    produit: Produit;
    option: Options;

    

    constructor(){
        this.id = undefined;
        this.nom = undefined;
        this.description = undefined;
        this.droitProduit = undefined;
    }
}
