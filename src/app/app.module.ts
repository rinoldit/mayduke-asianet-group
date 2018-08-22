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
import { AstankCleanPage } from '../pages/astank-clean/astank-clean';
import { AswaterProofPage } from '../pages/aswater-proof/aswater-proof';
import { AsfloorCleanPage } from '../pages/asfloor-clean/asfloor-clean';
import { ScrollableTabs } from './shared-components/scrollable-tabs/scrollable-tabs';
import { HttpClientModule } from '@angular/common/http';
import { AgServicesService } from './shared-services/ag-services.service';
import { CategoryAndPricesPage } from '../pages/category-and-prices/category-and-prices';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    AsianetHomePage,
    AstankCleanPage,
    AswaterProofPage,
    AsfloorCleanPage,
    ScrollableTabs,
    CategoryAndPricesPage
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
    AstankCleanPage,
    AswaterProofPage,
    AsfloorCleanPage,
    CategoryAndPricesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AgServicesService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
  
})
export class AppModule {}
