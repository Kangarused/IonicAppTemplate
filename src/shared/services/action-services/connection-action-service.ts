import { Network } from "@ionic-native/network";
import { AppModule } from "../../../app/app.module";
import { Injectable } from "@angular/core";

@Injectable()
export default class ConnectionActionService {

    constructor(
        private network: Network
    ) {}

    public checkConnection(): boolean {
        if (AppModule.isApp && this.network.type) {
            return this.network.type != 'none';
        } else {
            return navigator.onLine;
        }
    }
}