export enum PaymentMethod {
    IPG = 'IPG',
    CASH = 'CASH',
    CREDIT = 'CREDIT',
    LOAN = 'LOAN',
}

export const PaymentMethodItems = [
    { key: PaymentMethod.IPG, value: 'درگاه' },
    { key: PaymentMethod.CASH, value: 'کیف پول' },
    { key: PaymentMethod.CREDIT, value: 'اعتبار' },
    { key: PaymentMethod.LOAN, value: 'خرید اقساطی' },
];

export const PaymentMethodStr = (paymentMethod: string) => {
    const str: any = PaymentMethodItems.find((ds: any) => ds.key === paymentMethod);
    return (str && str.value) || '--';
};
