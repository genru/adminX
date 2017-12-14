import { NgModule } from '@angular/core';
import {NeoDebounceInputComponent} from './components/neo-debounce-input/neo-debounce-input.component';
import { SharedModule } from '@shared/shared.module';
import { shared_components } from './components/index';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [...shared_components],
  exports: [SharedModule, ...shared_components]
})
export class NeoSharedModule { }
