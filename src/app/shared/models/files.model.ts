export class Base64ImageFile {
    content: string;
    mimeType: string;
    createdDate: number;

    constructor(bf64?: any) {
        bf64 = bf64 || {};

        this.content = bf64.content;
        this.mimeType = bf64.mimeType;
        this.createdDate = bf64.createdDate;
    }
}