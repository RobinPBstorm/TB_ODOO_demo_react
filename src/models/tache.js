export class Tache {
    nom;
    description;
    priorite;
    estFini;

    constructor(nom, priorite, description="", estFini=false) {
        this.nom = nom;
        this.priorite = priorite;
        this.description = description;
        this.estFini = estFini;
        
    }
}