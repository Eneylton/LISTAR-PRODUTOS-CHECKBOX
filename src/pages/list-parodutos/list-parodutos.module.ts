import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListParodutosPage } from './list-parodutos';

@NgModule({
  declarations: [
    ListParodutosPage,
  ],
  imports: [
    IonicPageModule.forChild(ListParodutosPage),
  ],
})
export class ListParodutosPageModule {}
