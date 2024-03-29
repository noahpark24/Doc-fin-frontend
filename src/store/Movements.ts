import { action, makeAutoObservable, observable } from 'mobx';
//Interfaces
import SpendInterface from '../Interfaces/SpendsInterface';
import IncomeInterface from '../Interfaces/IncomesInterface';
//Stores
import Money from './Money';

class MovementsStore {
  @observable incomes: IncomeInterface[] = [];
  @observable spends: SpendInterface[] = [];

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

  @action
  addIncome(newIncome: IncomeInterface) {
    this.incomes.push(newIncome);
    Money.totalIncomes += newIncome.amount;
    Money.availableMoney += newIncome.amount;
  }

  @action
  addSpend(newSpend: SpendInterface) {
    this.spends.push(newSpend);
    Money.totalSpends -= newSpend.amount;
    Money.availableMoney -= newSpend.amount;
  }

  @action
  removeIncome(index: number) {
    if (index >= 0 && index < this.incomes.length) {
      this.incomes.splice(index, 1);
    }
  }

  @action
  removeSpend(index: number) {
    if (index >= 0 && index < this.spends.length) {
      this.spends.splice(index, 1);
    }
  }
}

export default MovementsStore.getInstance();
