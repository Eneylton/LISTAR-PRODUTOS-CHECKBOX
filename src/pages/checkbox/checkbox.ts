import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



@IonicPage({})
@Component({
  selector: 'page-checkbox',
  templateUrl: 'checkbox.html',
})
export class CheckboxPage {
  testID:any;
  testName:string = "";
  checked:boolean;

  selectedArray :any = [];
  checkArray    :any = [];

  testList: any = [
    {testID: 1, testName: " test1", checked: false},
    {testID: 2, testName: " test2", checked: false},
    {testID: 3, testName: "dgdfgd", checked: false},
    {testID: 4, testName: "UricAcid", checked: false}
 ]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  
    ionViewDidLoad() {

  }


  selectMember(data){
    if (data.checked == true) {
       this.selectedArray.push(data);
     } else {
      let newArray = this.selectedArray.filter(function(el) {
        return el.testID !== data.testID;
     });
      this.selectedArray = newArray;
    }
    console.log(this.selectedArray);
   }

   checkAll(){
    for(let i =0; i <= this.testList.length; i++) {
     if(this.testList[i].checked == true){

      this.checkArray.push([{
        testID:this.testList[i].testID,
        testName:this.testList[i].testName,
        checked:this.testList[i].checked
      }]);

       console.log(this.checkArray);
     }
    }
  }

}
