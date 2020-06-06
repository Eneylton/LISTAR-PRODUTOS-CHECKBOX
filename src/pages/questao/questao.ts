import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';

@IonicPage({})
@Component({
  selector: 'page-questao',
  templateUrl: 'questao.html',
})
export class QuestaoPage {
  
  id:any;
  questao:any;
  pergunta:string;
  questoes: Array<Object> = [];
  respostas: Array<Object> = [];
  
  questoes2: Array<Object> = [];
  respostas2: Array<Object> = [];


  constructor(public navCtrl: NavController,
              public navParams: NavParams, 
              public serve: ServiceProvider) {
  }

  ionViewDidLoad() {

    this.listarQuestoes();
    
  }

  listarQuestoes(){


    let body = {

      crud: 'Listar_Questoes'

    }

    this.serve.postData(body, 'servidor.php').subscribe(data => {
      
  for(let i = 0; i < data.result.length; i++) {
        this.questoes.push({
          id:           data.result[i]["id"],
          pergunta:     data.result[i]["pergunta"]

        })

        this.id = data.result[i]["id"];

        
      
      }

  })

}

listaRespostas(id){

  var id = this.questao;

  let body = {
    questao_id: id,
    crud: 'Listar_Respostas'

  }
  this.serve.postData(body, 'servidor.php').subscribe(data => {
    for (let item of data.result) {
      this.respostas.push({

        descricao: item.descricao,
        status: item.status,
        questao_id: item.questao_id
      })
    

    }
})


}


// openSelect(id){
//   let body = {

//     crud: 'Listar_Questoes'

//   }
//   this.serve.postData(body, 'servidor.php').subscribe(data => {

//     let temp: any[] = data.result;

//     for (let i = 0; i < temp.length; i++) {
//       this.questoes2.push({ 
//         id:temp[i].id,
//         pergunta:temp[i].pergunta
      
//       })
//       for (let j = 0; j < this.respostas.length; j++){
       
//         this.respostas2[j]["questao_id"].push(temp[i])

//         console.log(this.respostas2);
         
//       }

//     }
//   })
// }




}



