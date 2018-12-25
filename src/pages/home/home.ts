import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  information: any[];

  constructor(public navCtrl: NavController, private http: Http) {
    let localData1 = http.get('https://randomuser.me/api/?results=50').map(res => res.json().results);
    localData1.subscribe(data => this.information = data)
    // let localData = http.get('assets/information.json').map(res => res.json().items);
    // localData.subscribe(data => {
    //   this.information = data;
    //   console.log(data)
    // })
  }

  toggleSection(i) {
    this.information[i].open = !this.information[i].open;
  }
 
  toggleItem(i, j) {
    this.information[i].children[j].open = !this.information[i].children[j].open;
  }

}
