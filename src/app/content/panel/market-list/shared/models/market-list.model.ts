export class MarketList {

    id!: number;
    title!: string;
    path!: string;
    description!: string;
    status!: string;
    membershipType!: string;

    constructor(m?: any) {
        this.id = m?.id;
        this.title = m?.title;
        this.path = m?.path;
        this.description = m?.description;
        this.status = m?.status;
        this.membershipType = m?.membershipType;
    }
}