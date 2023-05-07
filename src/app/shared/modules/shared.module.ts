import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import { NgxMaskModule, IConfig } from 'ngx-mask';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { DpDatePickerModule } from 'ng2-jalali-date-picker';
import { EmptyStateComponent } from '../components/empty-state/empty-state.component';
import { ShamsiPipe } from 'src/app/core/pipe/shamsi.pipe';
import { SafePipe } from 'src/app/core/pipe/safe.pipe';

// export const options: Partial<IConfig> | (() => Partial<IConfig>) = null;



@NgModule({
  declarations: [
    ShamsiPipe,
    SafePipe,
    EmptyStateComponent
  ],
  imports: [
    // NgxMaskModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    // NgxMaskModule,
    ShamsiPipe,
    ReactiveFormsModule,
    SafePipe,
    // DpDatePickerModule,
    EmptyStateComponent
  ],
})
export class SharedModule { }
