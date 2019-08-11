const TEST = "test";
const TODOS = "toDos";

const isStorageSupported = () => {
  try {
    window.localStorage.setItem(TEST, TEST);
    const valid = window.localStorage.getItem(TEST) === TEST;
    window.localStorage.removeItem(TEST);
    return valid;
  } catch (error) {
    return false;
  }
};

class Storage {
  isSupported = isStorageSupported();

  fetch = () => {
    const toDos = this.isSupported && window.localStorage.getItem(TODOS);
    try {
      return !!toDos ? JSON.parse(toDos) : [];
    } catch (error) {
      this.persist([]);
      return [];
    }
  };

  persist = toDos => {
    if (this.isSupported) {
      window.localStorage.setItem(TODOS, JSON.stringify(toDos));
    }
  };
}

export default new Storage();
