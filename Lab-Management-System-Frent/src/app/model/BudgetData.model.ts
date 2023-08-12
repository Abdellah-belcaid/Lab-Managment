import { Dotation_Membre } from "./dotationMembre.model";
import { Dotation_Project } from "./dotationProject.model";
import { ExpressionBesoin } from "./expressionBesoin.model";
import { ExpressionBesoinType } from "./expressionBesoinType.enum";
import { Laboratoire } from "./laboratoire.model";
import { Membre } from "./membre.model";

export class BudgetData {
  public structure: string = "";
  public directeur: string = "";
  public reliquatDec2022: number = 0;
  public budgetFev2023: number = 0;
  public totalBudgetRepartir: number = 0;
  public participationFees: number = 0;
  public smallToolsEquipmentPurchase: number = 0;
  public computerSuppliesPurchase: number = 0;
  public officeSuppliesPurchase: number = 0;
  public rawMaterialsPurchase: number = 0;
  public travelExpensesAbroad: number = 0;
  public travelExpensesInCountry: number = 0;
  public kilometerAllowance: number = 0;
  public missionExpensesAbroad: number = 0;
  public fuelPurchase: number = 0;
  public scientificEquipmentPurchase: number = 0;
  public computerEquipmentPurchase: number = 0;
  public total: number = 0;

  public assignValuesFromLaboratoire(laboratoire: Laboratoire, year: number): void {
    this.structure = laboratoire.nom + ' , ' + laboratoire.etablissement.nom;
    this.directeur = laboratoire.director?.name ?? 'not affected';
    this.budgetFev2023 = this.calculateDotationSum(year, laboratoire);
    this.total = this.calculateExpressionBesion(year, laboratoire);
    this.reliquatDec2022 = this.calculateExpressionBesion(year - 1, laboratoire);

  }




  public calculateDotationSum(year: number, laboratoire: Laboratoire): number {
    let dotationProjet = 0;
    let dotationUcaRech = 0;
    // Calculate sum of dotation for projects
    if (laboratoire && laboratoire.membres) {
      laboratoire.membres.forEach(function (membre: Membre) {

        membre.dotation_Membres.forEach((dm: Dotation_Membre) => {
          console.log(dm.anneAffecter)
          dotationUcaRech += year === dm.anneAffecter ? dm.montant : 0;
        });

        membre.dotationProjects.forEach((dp: Dotation_Project) => {
          let date: Date = new Date(dp.projet.endDate);

          dotationProjet += year === date.getFullYear() ? dp.endowmentAmount : 0;
        });
      });
    }
    return dotationProjet + dotationUcaRech;
  }



  public calculateExpressionBesion(year: number, laboratoire: Laboratoire): number {
    let totalSum: number = 0;


    if (laboratoire && laboratoire.membres) {
      laboratoire.membres.forEach((membre: Membre) => {

        membre.expressionBesoins.forEach((ex: ExpressionBesoin) => {

          const type = ex.typeBesoin.type;
          const date: Date = new Date(ex.demandeDate);

          if (year === date.getFullYear()) {
            const montantEffectif = ex.montant_effectif ?? 0;
            switch (`${type}`) {
              case `PARTICIPATION_FEES`:
                this.participationFees += montantEffectif;
                break;

              case `SMALL_TOOLS_EQUIPMENT_PURCHASE`:
                this.smallToolsEquipmentPurchase += montantEffectif;
                break;

              case `OFFICE_SUPPLIES_PURCHASE`:
                this.officeSuppliesPurchase += montantEffectif;
                break;

              case `RAW_MATERIALS_PURCHASE`:
                this.rawMaterialsPurchase += montantEffectif;
                break;

              case `TRAVEL_EXPENSES_ABROAD`:
                this.travelExpensesAbroad += montantEffectif;
                break;

              case `TRAVEL_EXPENSES_IN_COUNTRY`:
                this.travelExpensesInCountry += montantEffectif;
                break;

              case `KILOMETER_ALLOWANCE`:
                this.kilometerAllowance += montantEffectif;
                break;

              case `MISSION_EXPENSES_ABROAD`:
                this.missionExpensesAbroad += montantEffectif;
                break;

              case `FUEL_PURCHASE`:
                this.fuelPurchase += montantEffectif;
                break;

              case `SCIENTIFIC_EQUIPMENT_PURCHASE`:
                this.scientificEquipmentPurchase += montantEffectif;
                break;

              case `COMPUTER_EQUIPMENT_PURCHASE`:
                this.computerEquipmentPurchase += montantEffectif;
                break;
            }

            totalSum += montantEffectif;
          }
        });
      });
    }

    return totalSum;
  }

}
