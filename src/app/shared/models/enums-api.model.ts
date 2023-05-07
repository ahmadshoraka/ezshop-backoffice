export class EnumsApi {
    getName: string;
    name: string;
    getId: number;
    ordinal: number;

    constructor(ea?: any) {
        ea = ea || {};
        this.getName = ea.getName;
        this.name = ea.name;
        this.getId = ea.getId;
        this.ordinal = ea.ordinal;
    }
}