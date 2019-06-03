import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {
  NetSuiviApplicationSharedLibsModule,
  NetSuiviApplicationSharedCommonModule,
  JhiLoginModalComponent,
  HasAnyAuthorityDirective
} from './';

@NgModule({
  imports: [NetSuiviApplicationSharedLibsModule, NetSuiviApplicationSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [NetSuiviApplicationSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class NetSuiviApplicationSharedModule {
  static forRoot() {
    return {
      ngModule: NetSuiviApplicationSharedModule
    };
  }
}
