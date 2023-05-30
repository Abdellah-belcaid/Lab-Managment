import { Membre } from './membre.model';
import { Responsable } from './responsable.model';
import { TypeBesoin } from './typeBesoin.model';

export class ExpressionBesoin {
  id!: number;
  montant!: number;
  demandeDate!: Date;
  validatDate!: Date;
  membre!: Membre;
  responsable: Responsable = new Responsable;
  typeBesoin: TypeBesoin = new TypeBesoin;
}
