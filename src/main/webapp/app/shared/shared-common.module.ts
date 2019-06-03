import { NgModule } from '@angular/core';

import { NetSuiviApplicationSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
  imports: [NetSuiviApplicationSharedLibsModule],
  declarations: [JhiAlertComponent, JhiAlertErrorComponent],
  exports: [NetSuiviApplicationSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class NetSuiviApplicationSharedCommonModule {}
