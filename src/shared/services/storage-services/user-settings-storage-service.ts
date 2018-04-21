import { Storage } from '@ionic/storage';
import BaseStorageService from "./base-storage-service";
import { Injectable } from '@angular/core';

@Injectable()
export default class UserSettingsStorageService extends BaseStorageService<Models.IUserSettings> {
    constructor(
        protected storage: Storage
    ) {
        super(storage, "UserSettings");
    }

    public save = (model: Models.IUserSettings): Promise<boolean> => {
        return new Promise((resolve, reject) => {
            var item = <Models.IBaseStorageModel<Models.IUserSettings>> {
                id: model.id.toString(),
                data: model
            };
            this._save(item).then((response) => {
                resolve(response);
            }, (error) => {
                reject(error);
            });
        });
    }

    public saveAll = (models: Models.IUserSettings[]): Promise<boolean> => {
        return new Promise((resolve, reject) => {
            var data = [];
            models.forEach((model) => {
                data.push(<Models.IBaseStorageModel<Models.IUserSettings>> {
                    id: model.id.toString(),
                    data: model
                });
            });
            this._saveAll(data).then((response) => {
                resolve(response);
            }).catch((error) => {
                reject(error);
            });
        });
    }
}