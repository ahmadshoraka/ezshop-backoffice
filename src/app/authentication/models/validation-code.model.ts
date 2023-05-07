export class ValidationCode {

    browser?: string;
    browserVersion?: string;
    device?: string;
    os?: string;
    osVersion?: string;
    phoneNumber?: string;

    constructor(vc?: any) {
        vc = vc || null;

        this.browser = vc?.browser;
        this.browserVersion = vc?.browserVersion;
        this.device = vc?.device;
        this.os = vc?.os;
        this.osVersion = vc?.osVersion;
        this.phoneNumber = vc?.phoneNumber;
    }

}