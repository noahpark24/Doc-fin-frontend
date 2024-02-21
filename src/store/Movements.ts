import { makeAutoObservable } from 'mobx';

interface MovementInterface {
  name: string;
  amount: number;
  date: Date;
}

class MovementsStore {
  incomes: MovementInterface[] = [];
  spends: MovementInterface[] = [];
  bills: MovementInterface[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  addMovement(
    category: 'incomes' | 'spends' | 'bills',
    name: string,
    amount: number,
    date: Date
  ) {
    const movement = { name, amount, date };
    this[category].push(movement);
  }
}

export default new MovementsStore();
