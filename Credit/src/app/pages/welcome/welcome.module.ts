import { NgModule } from '@angular/core';

import { WelcomeRoutingModule } from './welcome-routing.module';

import { WelcomeComponent } from './welcome.component';
import {NzCardModule} from 'ng-zorro-antd/card';
import {NzTableModule} from 'ng-zorro-antd/table';


@NgModule({
  imports: [WelcomeRoutingModule, 
    NzCardModule,
    NzTableModule  ],
  declarations: [WelcomeComponent],
  exports: [WelcomeComponent]
})
export class WelcomeModule { }
