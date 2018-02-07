class FavoritesService {
  constructor(storageSvc, name) {
    this._storageService = storageSvc;
    this._name = name;
    this._data = this._storageService.read(this._name);
    if (this._data == null) {
      this._data = [];
    }
  }

  add(item) {
    // is there the same element?
    for (let elem of this._data) {
      if (elem == item) {
        return;
      }
    }
    // check length limit
    if (this._data.length == limit) {
      this._data.pop();
    }
    // add item
    this._data.push(item);
    this._data.sort();
    this._storageService.write(this._data, this._name);
    console.log(this._data);
  }

  remove(item) {
    if (!this._data.length || this._data.length == 0) {
      return;
    }
    let tmp = [];
    for (let elem of this._data) {
      if (elem != item && elem) {
        tmp.push(elem);
      }
    }
    // since old array was sorted, the new array also is
    this._data = tmp;
    this._storageService.write(this._data, this._name);
  }

  clear() {
    this._storageService.remove(this._name);
    this._data = [];
    console.log(this._data);
  }
}
