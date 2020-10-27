import { Client } from "./client";
import { Options } from "./options";
import { Produit } from "./produit";

export class CodeBare {
    id: number;
    code: string;
    client: Client;
    option: Array<Options>
    produit: Array<Produit>

    constructor(){
        this.id = undefined;
        this.code = undefined;
        this.client = undefined;
        this.option = undefined;
        this.produit = undefined;
    }
}