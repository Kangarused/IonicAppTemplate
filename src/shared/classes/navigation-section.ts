import NavigationPage from "./navigation-page";

export default class NavigationSection {
    name: string;
    pages: NavigationPage[];

    constructor(name: string, pages: NavigationPage[]) {
        this.name = name;
        this.pages = pages;
    }
}