import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';

@IonicPage({})
@Component({
  selector: 'page-list-parodutos',
  templateUrl: 'list-parodutos.html',
})

export class ListParodutosPage {

  produtos: Array<Object> = [];

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public serve: ServiceProvider) {
  }

  ionViewDidLoad() {
    this.listarProdutos();
  }

  listarProdutos(){


    let body = {

      crud: 'Listar_Produtos'

    }

    this.serve.postData(body, 'servidor.php').subscribe(data => {
      for (let prd of data.result) {
        this.produtos.push({

          nome: prd.nome,
          preco: prd.preco
        })

      }
  })

}

}
