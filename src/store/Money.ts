import { action, makeAutoObservable, observable } from 'mobx';

class MoneyStore {
  @observable availableMoney: number = 0;
  @observable totalIncomes: number = 0;
  @observable totalSpends: number = 0;

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

  @action
  sumeNewIncome(income: number) {
    this.totalIncomes += income;
    this.availableMoney += income;
  }

  @action
  sumeNewSpend(spend: number) {
    this.totalSpends += spend;
    this.availableMoney -= spend;
  }

  @action
  updateAvailableMoney(newValue: number) {
    this.availableMoney = newValue;
  }

  @action
  updateTotalSpends(newValue: number) {
    this.totalSpends = newValue;
  }

  @action
  updateTotalIncomes(newValue: number) {
    this.totalIncomes = newValue;
  }
}

export default MoneyStore.getInstance();
