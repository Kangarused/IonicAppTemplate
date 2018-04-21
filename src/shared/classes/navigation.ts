import NavigationSection from "./navigation-section";

export default class Navigation {
    public sections: NavigationSection[];

    constructor(secitons: NavigationSection[]) {
        this.sections = secitons;
    }
}

