import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CoresPage } from './cores';
import { ColorSketchModule } from 'ngx-color/sketch';

@NgModule({
  declarations: [
    CoresPage,
  ],
  imports: [
    IonicPageModule.forChild(CoresPage),
    ColorSketchModule
  ],
})
export class CoresPageModule {}
