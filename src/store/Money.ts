import { makeAutoObservable } from 'mobx';

class MoneyStore {
  alreadyLogged: boolean = false;
  editFinances: boolean = false;
  availableMoney: number = 0;
  totalIncomes: number = 0;
  totalSpends: number = 0;

  private static instance: MoneyStore;

  constructor() {
    makeAutoObservable(this);
  }
  static getInstance() {
    if (!MoneyStore.instance) {
      MoneyStore.instance = new MoneyStore();
    }
    return MoneyStore.instance;
  }

  sumeNewIncome(income: number) {
    this.totalIncomes += income;
    this.availableMoney += income;
  }

  sumeNewSpend(spend: number) {
    this.totalSpends += spend;
    this.availableMoney -= spend;
  }

  updateAvailableMoney(newValue: number) {
    this.availableMoney = newValue;
  }

  updateTotalSpends(newValue: number) {
    this.totalSpends = newValue;
  }

  updateTotalIncomes(newValue: number) {
    this.totalIncomes = newValue;
  }
}

export default MoneyStore.getInstance();
