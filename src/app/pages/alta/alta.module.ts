import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AltaRoutingModule } from './alta-routing.module';
import { NgzorroModule } from 'src/app/shared/modules/ngzorro/ngzorro.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AltaComponent } from './alta.component';


@NgModule({
  declarations: [
    AltaComponent
  ],
  imports: [
    CommonModule,
    AltaRoutingModule,
    NgzorroModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class AltaModule { }
