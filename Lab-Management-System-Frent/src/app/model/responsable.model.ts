import { ExpressionBesoin } from './expressionBesoin.model';

export class Responsable {
  id!: number;
  nom!: string;
  prenom!: string;
  tel!: number;
  email!: string;
  expressionBesoins: ExpressionBesoin[] = [];
}
