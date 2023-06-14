
import { ExpressionBesoinType } from './expressionBesoinType.enum';
import { ExpressionBesoin } from './expressionBesoin.model';

export class TypeBesoin {
  id!: number;
  type!: ExpressionBesoinType;
  expressionBesoins: ExpressionBesoin[]=[];
}
