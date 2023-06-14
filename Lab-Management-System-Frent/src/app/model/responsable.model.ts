import { ExpressionBesoin } from './expressionBesoin.model';
import { User } from './user.model';

export class Responsable extends User{
  tel!: number;
  type!:string;
  expressionBesoins!: ExpressionBesoin[];
}
