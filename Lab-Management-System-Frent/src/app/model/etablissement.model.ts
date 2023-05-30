import { Laboratoire } from './laboratoire.model';

export class Etablissement {
  id!: number;
  nom!: string;
  email!: string;
  siteWeb!: string;
  gsm!: string;
  adresse!: string;
  laboratoires: Laboratoire[] = [];
}
