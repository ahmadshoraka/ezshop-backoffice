export class CurrentState {
    object: any;
    isParent: boolean;
    parentURl: string;
    currentPage: number;
    pageSize: number;
    pageLength: number;

    constructor(cs?: any) {

        cs = cs || {};

        this.object = cs.object;
        this.isParent = cs.isParent;
        this.parentURl = cs.parentURl;
        this.currentPage = cs.currentPage;
        this.pageSize = cs.pageSize;
        this.pageLength = cs.pageLength;
    }
}