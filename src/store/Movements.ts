import { makeAutoObservable } from 'mobx';
//Interfaces
import SpendInterface from '../Interfaces/SpendsInterface';
import IncomeInterface from '../Interfaces/IncomesInterface';
import PeriodizationInterface from '../Interfaces/PeriodizationInterface';

class MovementsStore {
  incomes: IncomeInterface[] = [];
  spends: SpendInterface[] = [];
  periodizatedMovement: PeriodizationInterface[] = [];

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
  addPeriodizatedMovement(newMovement: PeriodizationInterface) {
    this.periodizatedMovement.push(newMovement);
  }
}

export default MovementsStore.getInstance();
