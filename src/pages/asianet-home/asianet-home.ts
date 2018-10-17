// import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Component, Injector, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';
// import { IAgService } from '../../app/shared-interfaces/ag-service';
import { AgServicesService } from '../../app/shared-services/ag-services.service';
import { CategoryAndPricesPage } from '../category-and-prices/category-and-prices';
import { EnquiryFormPage } from '../enquiry-form/enquiry-form';
import { Task } from '../../app/shared/model/task';

/**
 * Generated class for the AsianetHomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-asianet-home',
  templateUrl: 'asianet-home.html',
})
export class AsianetHomePage {
  public homePageData: Task[] = [];

  public agServiceList: any;
  tab1Root: any
  tab2Root: any
  tab3Root: any

  public selectedCategory: any;
  // public selectedCategory: CategoryModel;
  public categories: Array<any>;
  // public categories: Array<CategoryModel>;
  public showLeftButton: boolean;
  public showRightButton: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public injector: Injector, private agServices: AgServicesService) {
    // this.getAgServiceList();
    this.getRealJson();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AsianetHomePage');
  }

  public OnloadCategoryAndPrices

  public goToCategoryAndPricesPage(selectedDivision?) {
    console.log("Selected Category--->  ", selectedDivision);

    return selectedDivision? this.navCtrl.push(CategoryAndPricesPage, selectedDivision ) : this.navCtrl.push(EnquiryFormPage ) ;
  }


  public getAgServiceList() {

    this.agServices.getAgSerivcesList().subscribe(
      data => {
        console.log("Hey I Got the Home Page Data====> ", data)
        // this.homePageData = data;

      },
      error => {
        console.error(error);
      }

    );

    // this.http.get("C:\Users\swathi\Documents\IONIC APPS\practice udemy\firstapp\src\assets\mock-jsons\ag-services.json");

  }

  private getRealJson() {

    this.agServices.getActualJson<Task>(({tasks})=> {
      // const myService
      // console.log('{tasks}--> ', tasks);
      this.homePageData =[...tasks];
      // console.table(this.homePageData );
    });
  }
}
