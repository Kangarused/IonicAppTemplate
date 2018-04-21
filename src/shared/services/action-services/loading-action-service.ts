import { Injectable } from '@angular/core';
import { LoadingController, Loading, LoadingOptions } from 'ionic-angular';

@Injectable()
export default class LoadingActionService {
    
    private loader: Loading;
    
    constructor(
        private loadingService: LoadingController
    ) {
    }

    private setupDefault() {
        this.loader = this.loadingService.create({
            spinner: 'bubbles',
            content: "Please wait...",
            dismissOnPageChange: false
        });
    }

    public setLoader(options: LoadingOptions) {
        this.loader = this.loadingService.create(options);
    }

    public present() {
        if (this.loader != null) {
            this.loader.present();
        } else {
            this.setupDefault();
            this.loader.present();
        }
    }

    public dismiss() {
        if (this.loader != null) {
            this.loader.dismiss();
            this.loader = null;
        }
    }
}