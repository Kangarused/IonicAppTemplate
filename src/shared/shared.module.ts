import { NgModule } from '@angular/core';
import { ActionServiceModule } from './services/action-service.module';
import { StorageServiceModule } from './services/storage-service.module';

@NgModule({
    imports: [
        ActionServiceModule.forRoot(),
        StorageServiceModule.forRoot()
    ]
})
export class SharedModule {}