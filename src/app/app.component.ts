import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoginPage } from '../pages/login/login';
import Navigation from '../shared/classes/navigation';
import NavigationSection from '../shared/classes/navigation-section';
import NavigationPage from '../shared/classes/navigation-page';
import { HomePage } from '../pages/home/home';

@Component({
    templateUrl: 'app.html'
})
export class MyApp {
    @ViewChild(Nav) nav: Nav;
    rootPage:any = LoginPage;

    navigation: Navigation;
    pages: Array<{title: string, icon: string, component: any}>;

    constructor(
        private platform: Platform, 
        private statusBar: StatusBar, 
        private splashScreen: SplashScreen
    ) {
        this.initialiseApp();
        this.setupNavigation();    
    }

    private setupNavigation() {
        this.navigation = new Navigation([
            new NavigationSection("Navigation", [
                new NavigationPage("Home", "home", () => { this.openPage(HomePage); }),
                new NavigationPage("Sign Out", "log-out", () => { this.openPage(LoginPage); })
            ]),
            new NavigationSection("App Management", [
                new NavigationPage("Settings", "settings", () => { }) 
                // use like this: new NavigationPage("Settings", "settings", () => { this.openPage(SettingsPage); })
            ]),
        ])
    }

    private initialiseApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
    }

    private openPage = (page) => {
        this.nav.setRoot(page);
    }
}

