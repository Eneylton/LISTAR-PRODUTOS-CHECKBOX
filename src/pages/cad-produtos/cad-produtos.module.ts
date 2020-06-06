import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadProdutosPage } from './cad-produtos';
import { ColorPickerModule } from 'ngx-color-picker';

@NgModule({
  declarations: [
    CadProdutosPage,
  ],
  imports: [
    ColorPickerModule,
    IonicPageModule.forChild(CadProdutosPage),
  ],
})
export class CadProdutosPageModule {}
