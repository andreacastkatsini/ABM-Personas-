import { NgModule } from '@angular/core';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { CommonModule } from '@angular/common';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzLayoutModule } from 'ng-zorro-antd/layout';

import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzButtonModule } from 'ng-zorro-antd/button';



@NgModule({
  declarations: [],
  imports: [],
  exports: [
    CommonModule,
    NzDividerModule,
    NzInputModule,
    NzLayoutModule,
    NzPageHeaderModule,
    NzPopoverModule,
    NzTableModule,
    NzFormModule,
    NzPopconfirmModule,
    NzCollapseModule,
    NzMenuModule,
    NzButtonModule,
  ]

})
export class NgzorroModule {

 }
