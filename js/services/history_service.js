class HistoryService {
  constructor(storageSvc, name) {
    this._storageService = storageSvc;
    this._name = name;
    this._data = this._storageService.read(this._name);
    if (this._data == null) {
      this._data = [];
    }
  }

  get data() {
    console.log("HistoryService. Getting history");
    console.log(this._data);
    return this._data;
  }

  add(item) {
    // remove duplicates
    if (this._data && this._data.length > 0) {
      let tmp = [];
      for (let elem of this._data) {
        if (elem != item) {
          tmp.push(elem);
        }
      }
      this._data = tmp;
    }
    // check length limit
    if (this._data.length == limit) {
      this._data.shift();
    }
    // add item
    this._data.push(item);
    this._storageService.write(this._data, this._name);
    console.log(this._data);
  }

  remove(item) {
    if (!this._data || this._data.length == 0) {
      return;
    }
    let tmp = [];
    for (let elem of this._data) {
      if (elem != item && elem) {
        tmp.push(elem);
      }
    }
    this._data = tmp;
    this._storageService.write(this._data, this._name);
  }

  clear() {
    this._storageService.remove(this._name);
    this._data = [];
    console.log(this._data);
  }
}