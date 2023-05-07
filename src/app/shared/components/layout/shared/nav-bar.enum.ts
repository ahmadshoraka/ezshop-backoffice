export enum Roles {
    User,
    CallCenter,
    Market,
    Normal,
    // Karname,
    Loan_Request_Broker_View
}

export const RoleNamespace = [
    { key: Roles.User, value: 'User' },
    { key: Roles.CallCenter, value: 'CallCenter' },
    { key: Roles.Market, value: 'Market' },
    { key: Roles.Normal, value: 'Normal' },
    // { key: Roles.Karname, value: 'Karname' },
    { key: Roles.Loan_Request_Broker_View, value: 'Loan_Request_Broker_View' },
];

export const items = [
    { no: 1, group: ['User'], title: 'کاربر' },
    { no: 2, group: ['User'], title: 'تنظیمات' },
];


export const RolesMap = (roles: string[]) => {
    let menu: { no: number; group: string[]; title: string; }[] = [];
    roles?.find((role) => {
        items.map((item) => {
            item.group.find((gRole) => {
                gRole === role ? menu.push(item) : null;
            });
        });
    });
    let uniqueMenu = menu.filter(function (elem, index, self) {
        return index === self.indexOf(elem);
    });
    return uniqueMenu;
}
