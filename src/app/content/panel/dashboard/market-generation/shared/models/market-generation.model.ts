export class MarketGeneration {

    description!: string;
    id?: number;
    path!: string;
    title!: string;

    constructor(mg?: any) {

        this.description = mg?.description;
        this.id = mg?.id;
        this.path = mg?.path;
        this.title = mg?.title;

    }
}