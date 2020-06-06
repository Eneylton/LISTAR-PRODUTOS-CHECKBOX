import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage({})
@Component({
  selector: 'page-cad-produtos',
  templateUrl: 'cad-produtos.html',
})
export class CadProdutosPage {

  cor:string = "";
  nome:string = "";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadProdutosPage');
  }

  exibirCor(){

    this.cor
    console.log(this.cor);

  }

}
