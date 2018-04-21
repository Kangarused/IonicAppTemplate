import { NgModule } from '@angular/core';
import ToastActionService from './action-services/toast-action-service';
import LoadingActionService from './action-services/loading-action-service';
import ConnectionActionService from './action-services/connection-action-service';
import AuthActionService from './action-services/auth-action-service';

@NgModule()
export class ActionServiceModule {
    static forRoot() {
        return {
            ngModule: ActionServiceModule,
            providers: [
                ConnectionActionService,
                ToastActionService,
                LoadingActionService,
                AuthActionService
            ]
        };
    }
}