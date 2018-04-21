import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import UserSettingsStorageService from '../../shared/services/storage-services/user-settings-storage-service';
import LoadingActionService from '../../shared/services/action-services/loading-action-service';

@IonicPage()
@Component({
    selector: 'page-home',
    templateUrl: 'home.html',
})
export class HomePage {

    constructor(
        private navCtrl: NavController, 
        private navParams: NavParams,
        private loadingService: LoadingActionService,
        private userSettingsService: UserSettingsStorageService
    ) {
        this.setup();
    }

    private setup() {
        // Example of how to use the services

        // this.loadingService.present();
        // this.userSettingsService.get(userId).then((response) => {
        //     // do something with settings
        //     this.loadingService.dismiss();
        // });
    }
}
