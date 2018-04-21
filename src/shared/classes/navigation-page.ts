export default class NavigationPage {
    name: string;
    icon: string;
    action: () => void;

    constructor(name: string, icon: string, action: () => void) {
        this.name = name;
        this.icon = icon;
        this.action = action;
    }
}