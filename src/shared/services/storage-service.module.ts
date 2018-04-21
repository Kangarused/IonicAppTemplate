import { NgModule } from '@angular/core';
import UserSettingsStorageService from './storage-services/user-settings-storage-service';

@NgModule()
export class StorageServiceModule {
    static forRoot() {
        return {
            ngModule: StorageServiceModule,
            providers: [
                UserSettingsStorageService
            ]
        };
    }
}