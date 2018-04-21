import { Injectable } from '@angular/core';
import { ToastController, ToastOptions } from 'ionic-angular';

@Injectable()
export default class ToastActionService {

    private defaults = {
        duration: 3000,
        position: 'bottom'
    }

    constructor(
        private toastService: ToastController
    ) {

    }

    public simple(message: string) {
        var toast = this.toastService.create({
            message: message,
            duration: this.defaults.duration,
            position: this.defaults.position
        });
        toast.present();
    }

    public create(message: string, options?: ToastOptions) {
        if (options == null) {
            this.simple(message);
        } else {
            options.message = message;
            var toast = this.toastService.create(options);
            toast.present();
        }
    }
}