import { makeAutoObservable } from 'mobx';
//Interfaces
import SpendInterface from '../Interfaces/SpendsInterface';
import IncomeInterface from '../Interfaces/IncomesInterface';
import PeriodizationInterface from '../Interfaces/PeriodizationInterface';

class MovementsStore {
  incomes: IncomeInterface[] = [];
  spends: SpendInterface[] = [];
  periodizatedIncomes: PeriodizationInterface[] = [];
  periodizatedSpends: PeriodizationInterface[] = [];

  private static instance: MovementsStore;

  constructor() {
    makeAutoObservable(this);
  }
  static getInstance() {
    if (!MovementsStore.instance) {
      MovementsStore.instance = new MovementsStore();
    }
    return MovementsStore.instance;
  }

  addIncome(newIncome: IncomeInterface) {
    this.incomes.push(newIncome);
  }

  addSpend(newSpend: SpendInterface) {
    this.spends.push(newSpend);
  }
  addPeriodizatedSpend(newMovement: PeriodizationInterface) {
    this.periodizatedSpends.push(newMovement);
  }

  addPeriodizatedIncome(newMovement: PeriodizationInterface) {
    console.log(
      'Vengo de la funcion addPeriodizatedIncome en el store => ',
      newMovement
    );

    this.periodizatedIncomes.push(newMovement);
  }
}

export default MovementsStore.getInstance();
