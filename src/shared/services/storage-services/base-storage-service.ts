import { Storage } from '@ionic/storage';

export default class BaseStorageService<T> {

    private readonly _error = "No data found";

    constructor(
        protected storage: Storage,
        protected key: string
    ) {}

    public clearKey(): Promise<any> {
        return this.storage.remove(this.key);
    }

    public get = (id: string): Promise<T> => {
        return new Promise((resolve, reject) => {
            this.load().then((data) => {
                if (data) {
                    var ids = data.map(x => x.id);
                    var index = ids.indexOf(id);
                    if (index != -1) {
                        resolve(data[index].data);
                    } else {
                        reject(this._error);
                    }
                } else {
                    reject(this._error);
                }
            }).catch((error) => {
                reject(error);
            });
        });
    }

    public getAll = (): Promise<T[]> => {
        return new Promise((resolve, reject) => {
            this.load().then((data) => {
                if (data) {
                    var models = data.map(x => x.data);
                    resolve(models);
                } else {
                    reject(this._error);
                }
            }).catch((error) => {
                reject(error);
            });
        });
    }

    protected _save(model: Models.IBaseStorageModel<T>): Promise<boolean> {
        return new Promise((resolve, reject) => {
            this.load().then((data) => {
                this.add(data, model);
                resolve(true);
            }).catch((error) => {
                reject(error);
            });
        });
    }

    protected _saveAll(models: Models.IBaseStorageModel<T>[]): Promise<boolean> {
        return new Promise((resolve, reject) => {
            this.load().then((data) => {
                models.forEach((model) => {
                    data = this.add(data, model);
                });
                resolve(true);
            }).catch((error) => {
                reject(error);
            });
        });
    }

    private load(): Promise<Models.IBaseStorageModel<T>[]> {
        return this.storage.get(this.key);
    }

    private add(data, model) {
        if (data) {
            var index = data.map(x => x.id).indexOf(model.id);
            if (index != -1) {
                data[index] = model;
            } else {
                data.push(model);
            }
            this.storage.set(this.key, data);
        } else {
            data = [model];
            this.storage.set(this.key, data);
        }
        return data;
    }
}