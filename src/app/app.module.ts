import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AsianetHomePage } from '../pages/asianet-home/asianet-home';
import { ScrollableTabs } from './shared-components/scrollable-tabs/scrollable-tabs';
import { HttpClientModule } from '@angular/common/http';
import { AgServicesService } from './shared-services/ag-services.service';
import { CategoryAndPricesPage } from '../pages/category-and-prices/category-and-prices';
import { HomePageDataProvider } from '../providers/home-page-data/home-page-data';
import { SaveToCartPage } from '../pages/save-to-cart/save-to-cart';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    AsianetHomePage,
    ScrollableTabs,
    CategoryAndPricesPage,
    SaveToCartPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    AsianetHomePage,
    CategoryAndPricesPage,
    SaveToCartPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AgServicesService,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HomePageDataProvider
  ]

})
export class AppModule {}
