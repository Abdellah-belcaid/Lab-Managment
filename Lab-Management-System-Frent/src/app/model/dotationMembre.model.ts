import { DotationUcaRech } from './dotationUcaRech.model';
import { Membre } from './membre.model';

export class Dotation_Membre {
  id!: DotationMembreId;
  montant!: number;
  AnneAffecter!: number;
  ucaRech: DotationUcaRech = new DotationUcaRech;
  membre!: Membre;
}

export class DotationMembreId {
  ucaRechId!: number;
  membreId!: number;
}
