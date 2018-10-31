import { Component, ViewChild } from "@angular/core";
import { Platform, NavController, MenuController } from "ionic-angular";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";

import { TabsPage } from "../pages/tabs/tabs";
import { HomePage } from "../pages/home/home";
import { AsianetHomePage } from "../pages/asianet-home/asianet-home";
import { SettingsPage } from "../pages/settings/settings";

@Component({
  templateUrl: "app.html"
})
export class MyApp {
  // rootPage:any = TabsPage;
  // rootPage:any = HomePage;
  rootPage: any = AsianetHomePage;
  tabsPage = AsianetHomePage;
  settingsPage = SettingsPage;
  // profilePage = ProilefPage;

  @ViewChild('nav') nav: NavController;

  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    // public navCtrl: NavController,
    private menuCtrl: MenuController
  ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  /**
   *@description - methode to relace active page.
   * @param page - Page
   */
  onLoad(page: any) {
    this.nav.setRoot(page);
    this.menuCtrl.close();
  }
}
