import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';

@IonicPage({})
@Component({
  selector: 'page-check-dinamico',
  templateUrl: 'check-dinamico.html',
})
export class CheckDinamicoPage {

  id:any;
  cor:string;
  checked:any;
  check :Boolean;
  checkcovert:Boolean = false;
  check2:string = "1";
  cores         :any = [];
  selectedArray :any = [];
  checkArray    :any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController,
    public serve: ServiceProvider) {
  }

  ionViewDidLoad() {
    this.listaCores();
  }

  selectCores(data){
    if (data.checked == true) {
       this.selectedArray.push(data);
     } else {
      let newArray = this.selectedArray.filter(function(el) {
        return el.id !== data.id;
     });
      this.selectedArray = newArray;
    }
    console.log(this.selectedArray);
   }

  listaCores(){


    let body = {

      crud: 'Listar_Cores'

    }

    this.serve.postData(body, 'servidor.php').subscribe(data => {
      for (let i = 0; i < data.result.length; i++) {
        this.cores.push({
          id:      data.result[i]["id"],
          cor:     data.result[i]["cor"],
          checked: data.result[i]["checked"]
         

        })

      console.log(this.cores);

      }
  })

}


cadastrar(){


  for(let i = 0; i < this.cores.length; i++) {

  var resp = this.cores[i].checked;

   if(String(resp) != "1"){

     this.cor = this.cores[i].cor;
     this.checked = this.cores[i].checked;

     let body ={
      cor:this.cor,
      checked:this.checked,
      crud:'cad_item'
  
    }
   
    this.serve.postData(body, '/servidor.php').subscribe(data => {

      console.log(data.idadd);
    });
  
   }

  }
}

showInsertOk() {
  let alert = this.alertCtrl.create({
    title: 'Sucesso!',
    message: 'Seu Cadastro efetuado com sucesso',
    enableBackdropDismiss: false,
    buttons: [
      {
        text: 'Ok',
        handler: () => {

          this.navCtrl.setRoot('CheckDinamicoPage ')
        }
      }
    ]
  });
  alert.present();
}

}
