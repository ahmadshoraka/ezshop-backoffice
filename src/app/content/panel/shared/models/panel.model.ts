export class UserProfile {
    username: string;
    personInfo: PersonInfo;

    constructor(up?: any) {
        this.username = up?.username;
        this.personInfo = (up?.personInfo || []).map((pi: any) => new PersonInfo(pi));;
    }
}

export class PersonInfo {
    id: number;
    firstName: string;
    lastName: string;
    fatherName: string;
    birthdate: string;
    nationalCode: string;
    verified: boolean;

    constructor(pi?: any) {
        this.id = pi?.id;
        this.firstName = pi?.firstName;
        this.lastName = pi?.lastName;
        this.fatherName = pi?.fatherName;
        this.birthdate = pi?.birthdate;
        this.nationalCode = pi?.nationalCode;
        this.verified = pi?.verified;
    }
}