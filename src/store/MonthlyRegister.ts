import { action, makeAutoObservable, observable } from 'mobx';
import monthlyRegisterInterface from '../Interfaces/MonthlyRegisterInterface';

class MonthlyRegisterStore {
  @observable monthlyRegisters: monthlyRegisterInterface[] = [];
  @observable moneyLeftOver: number = 0;
  @observable totalIncomes: number = 0;
  @observable totalSpends: number = 0;

  private static instance: MonthlyRegisterStore;

  constructor() {
    makeAutoObservable(this);
  }
  static getInstance() {
    if (!MonthlyRegisterStore.instance) {
      MonthlyRegisterStore.instance = new MonthlyRegisterStore();
    }
    return MonthlyRegisterStore.instance;
  }

  @action
  addNewRegister(monthlyReport: monthlyRegisterInterface) {
    this.monthlyRegisters.push(monthlyReport);
  }

  @action
  removeRegistry(index: number) {
    if (index >= 0 && index < this.monthlyRegisters.length) {
      this.monthlyRegisters.splice(index, 1);
    }
  }
}

export default MonthlyRegisterStore.getInstance();
