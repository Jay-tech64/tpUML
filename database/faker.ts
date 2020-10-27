import { Client } from "../tpUml/client";
import { Individu } from "../tpUml/individu";
import { Entreprise } from "../tpUml/entreprise";
import { ClientType } from "../tpUml/clientType";
import { Droit } from "../tpUml/droit";
import { Produit } from "../tpUml/produit";
import { DroitProduit } from "../tpUml/droitProduit";

const faker = require('faker'); // je charge la libraire Faker
const fs = require('fs'); // pour ecrire sur le disk


function generateRandomClients(){

    let bd = [];

    for (let index = 1; index <= 5; index++) {
        
        let client;
        let random = (Math.floor(Math.random() * 3)+1);
        let randomAddress = faker.address.streetAddress();
        let randomFn = faker.name.firstName();
        let randomLn = faker.name.lastName();
        let randomEmail = faker.internet.email();
        let randomCn = faker.company.companyName();
        let randomPn = faker.phone.phoneNumber();
        let randomFax = faker.phone.phoneNumber();
        let randomStreet = faker.address.streetName();
        let randomCity = faker.address.city();
        let randomProvince = faker.address.state();

        switch(random) {
            case 1:  
                client = new Client();              
                client.idClient = index;
                client.adresse = randomAddress;
                break;

            case 2:
                client = new Individu();
                client.idClient = index;
                client.type = ClientType.individu;
                client.adresse = randomAddress;
                client.prenom = randomFn;
                client.nom = randomLn;
                client.email = randomEmail;
                client.details.idDetail = index;
                client.details.rue = randomStreet;
                client.details.ville = randomCity;
                client.details.province = randomProvince;
                break;

            case 3:
                client = new Entreprise();
                client.idClient = index;
                client.type = ClientType.entreprise;
                client.adresse = randomAddress;
                client.nom = randomCn;
                client.phone = randomPn;
                client.fax = randomFax;
                client.details.idDetail = index;
                client.details.rue = randomStreet;
                client.details.ville = randomCity;
                client.details.province = randomProvince;
                client.contact.idContact = index;
                client.contact.prenom = randomFn;
                client.contact.nom = randomLn;
                client.contact.email = randomEmail;
                break;

            default:
                console.log("Something went wrong...");
        }
        

        bd.push({
            "Client": client
        });
        
    }
    return {"Instances" : bd};
}

function generateRandomDroitProduit(){

    let bd = [];

    for (let index = 0; index < 5; index++) {
        
        let droit = new Droit();
        let produit = new Produit();
        let droPro = new DroitProduit();
        
        droit.idDroit = "Droit #" + index.toString();
        droit.type = Math.floor(Math.random() * 3)+1;
        droit.dateDebut = faker.date.past();
        droit.dateFin = faker.date.future();

        produit.id = index;
        produit.nom =  faker.name.firstName();
        produit.description = faker.lorem.words();

        droPro.droit.push(droit);
        droPro.produit.push(produit);

        bd.push({
            "Droit": droit,
            "Produit": produit,
            "droitProduit": droPro
        })
    }
    return {"Instances" : bd};
}


fs.writeFileSync('instancesClient.json', JSON.stringify(generateRandomClients(), null, '\t'));

fs.writeFileSync('instancesDroitProduit.json', JSON.stringify(generateRandomDroitProduit(), null, '\t'));