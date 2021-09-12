import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgzorroModule } from 'src/app/shared/modules/ngzorro/ngzorro.module';

import { WelcomeRoutingModule } from './welcome-routing.module';

import { WelcomeComponent } from './welcome.component';


@NgModule({
  imports: [WelcomeRoutingModule,
            NgzorroModule,
            CommonModule,
            ],
  declarations: [WelcomeComponent],
  exports: [WelcomeComponent]
})
export class WelcomeModule {

}
