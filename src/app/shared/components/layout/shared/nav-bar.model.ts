export class NavBarModel {
    no: number | null;
    title: string;
    path: string;
    icon: string | null;
    role: string[];
    selected?: boolean;
    children?: Children[];
    collapse?: boolean = false;
    hasAdminOnlyPages?: boolean;

    constructor(navbar?: any) {

        navbar = navbar || {};

        this.no = navbar.no;
        this.title = navbar.title;
        this.path = navbar.path;
        this.icon = navbar.icon;
        this.role = navbar.role;
        this.selected = navbar.selected;
        this.children = (navbar.children || []).map((child: Children) => new Children(child));
        this.collapse = navbar.collapse;
        this.hasAdminOnlyPages = navbar.hasAdminOnlyPages;
    }
}

export class Children {
    no: number | null;
    title: string;
    path: string;
    icon: string | null;
    role?: string[];
    selected?: boolean;
    adminOnly?: boolean;
    collapse?: boolean = false;
    hasGrandchild?: boolean = false;
    grandchild?: Grandchild[];

    constructor(children?: any) {

        children = children || {};

        this.title = children.title;
        this.path = children.path;
        this.icon = children.icon;
        this.role = children.role;
        this.no = children.no;
        this.selected = children.selected;
        this.adminOnly = children.adminOnly;
        this.collapse = children.collapse;
        this.grandchild = (children.grandchild || []).map((child: Grandchild) => new Grandchild(child));

    }
}

export class Grandchild {
    no: number | null;
    title: string;
    path: string;
    icon: string | null;
    role?: string[];
    selected?: boolean;
    adminOnly?: boolean;

    constructor(gChildren?: any) {

        gChildren = gChildren || {};

        this.no = gChildren.no;
        this.title = gChildren.title;
        this.path = gChildren.path;
        this.icon = gChildren.icon;
        this.role = gChildren.role;
        this.selected = gChildren.selected;
        this.adminOnly = gChildren.adminOnly;

    }
}





