import { Membre } from "./membre.model";

export class Director extends Membre {

  officeNumber!: string;
  expertise!: string;
  shiftStartDate!: Date;
  shiftEndDate!: Date;
}
