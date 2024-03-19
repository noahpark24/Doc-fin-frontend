import { action, makeAutoObservable } from 'mobx';

class StatesStore {
  alreadyLogged: boolean = false;
  private static instance: StatesStore;

  constructor() {
    makeAutoObservable(this);
  }
  static getInstance() {
    if (!StatesStore.instance) {
      StatesStore.instance = new StatesStore();
    }
    return StatesStore.instance;
  }
}

export default StatesStore.getInstance();
