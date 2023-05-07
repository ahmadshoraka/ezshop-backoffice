export enum Banks {
    CENTRAL_BANK = 1,
    SANAAT_MADAN = 2,
    MELLAT = 3,
    REFAH = 4,
    MASKAN = 5,
    SEPAH = 6,
    KESHAVARZI = 7,
    MELLI = 8,
    TEJARAT = 9,
    SADERAT = 10,
    TOSEE_SADERAT = 11,
    POST_BANK = 12,
    TOSEE = 13,
    KAR_AFARIN = 14,
    PARSIAN = 15,
    EGHTESAD_NOVIN = 16,
    SAMAN = 17,
    PASARGAD = 18,
    SARMAYEH = 19,
    KHAVAREMIANEH = 20,
    SHAHR = 21,
    DAY = 22,
    HEKMAT = 23,
    GHARDESHGHARI = 24,
    IRANZAMIN = 25,
    GHAVAMIN = 26,
    ANSAR = 27,
    MEHR_IRAN = 28,
    RESALAT = 29,
    AYANDEH =30,
    TOSEE_TAAVON = 31,
    UNKNOWN = 32,
}

export const BankPersianItems = [
    { key: Banks.CENTRAL_BANK, value: 'بانک مرکزی' },
    { key: Banks.SANAAT_MADAN, value: 'بانک صنعت و معدن' },
    { key: Banks.MELLAT, value: 'بانک ملت' },
    { key: Banks.REFAH, value: 'بانک رفاه' },
    { key: Banks.MASKAN, value: 'بانک مسکن' },
    { key: Banks.SEPAH, value: 'بانک سپه' },
    { key: Banks.KESHAVARZI, value: 'بانک کشاورزی' },
    { key: Banks.MELLI, value: 'بانک ملّی ایران' },
    { key: Banks.TEJARAT, value: 'بانک تجارت' },
    { key: Banks.SADERAT, value: 'بانک صادرات ایران' },
    { key: Banks.TOSEE_SADERAT, value: 'بانک توسعه صادرات ایران' },
    { key: Banks.POST_BANK, value: 'پست بانک ایران' },
    { key: Banks.TOSEE, value: 'موسسه اعتباری توسعه' },
    { key: Banks.KAR_AFARIN, value: 'بانک کارآفرین' },
    { key: Banks.PARSIAN, value: 'بانک پارسیان' },
    { key: Banks.EGHTESAD_NOVIN, value: 'بانک اقتصاد نوین' },
    { key: Banks.SAMAN, value: 'بانک سامان' },
    { key: Banks.PASARGAD, value: 'بانک پاسارگاد' },
    { key: Banks.SARMAYEH, value: 'بانک سرمایه' },
    { key: Banks.KHAVAREMIANEH, value: 'بانک خاورمیانه' },
    { key: Banks.SHAHR, value: 'بانک شهر' },
    { key: Banks.DAY, value: 'بانک دی' },
    { key: Banks.HEKMAT, value: 'بانک حکمت ایرانیان' },
    { key: Banks.GHARDESHGHARI, value: 'بانک گردشگری' },
    { key: Banks.IRANZAMIN, value: 'بانک ایران زمین' },
    { key: Banks.GHAVAMIN, value: 'بانک قخرید اقساطیین' },
    { key: Banks.ANSAR, value: 'بانک انصار' },
    { key: Banks.MEHR_IRAN, value: 'بانک قرض الحسنه مهر ایران' },
    { key: Banks.RESALAT, value: 'بانک قرض الحسنه رسالت' },
    { key: Banks.AYANDEH, value: 'بانک آینده' },
    { key: Banks.TOSEE_TAAVON, value: 'بانک توسعه تعاون' },
    { key: Banks.UNKNOWN, value: 'سایر بانک ها' },
];

export const BankQueryItems = [
    { key: Banks.CENTRAL_BANK, value: 'CENTRAL_BANK' },
    { key: Banks.SANAAT_MADAN, value: 'SANAAT_MADAN' },
    { key: Banks.MELLAT, value: 'MELLAT' },
    { key: Banks.REFAH, value: 'REFAH' },
    { key: Banks.MASKAN, value: 'MASKAN' },
    { key: Banks.SEPAH, value: 'SEPAH' },
    { key: Banks.KESHAVARZI, value: 'KESHAVARZI' },
    { key: Banks.MELLI, value: 'MELLI' },
    { key: Banks.TEJARAT, value: 'TEJARAT' },
    { key: Banks.SADERAT, value: 'SADERAT' },
    { key: Banks.TOSEE_SADERAT, value: 'TOSEE_SADERAT' },
    { key: Banks.POST_BANK, value: 'POST_BANK' },
    { key: Banks.TOSEE, value: 'TOSEE' },
    { key: Banks.KAR_AFARIN, value: 'KAR_AFARIN' },
    { key: Banks.PARSIAN, value: 'PARSIAN' },
    { key: Banks.EGHTESAD_NOVIN, value: 'EGHTESAD_NOVIN' },
    { key: Banks.SAMAN, value: 'SAMAN' },
    { key: Banks.PASARGAD, value: 'PASARGAD' },
    { key: Banks.SARMAYEH, value: 'SARMAYEH' },
    { key: Banks.KHAVAREMIANEH, value: 'KHAVAREMIANEH' },
    { key: Banks.SHAHR, value: 'SHAHR' },
    { key: Banks.DAY, value: 'DAY' },
    { key: Banks.HEKMAT, value: 'HEKMAT' },
    { key: Banks.GHARDESHGHARI, value: 'GHARDESHGHARI' },
    { key: Banks.IRANZAMIN, value: 'IRANZAMIN' },
    { key: Banks.GHAVAMIN, value: 'GHAVAMIN' },
    { key: Banks.ANSAR, value: 'ANSAR' },
    { key: Banks.MEHR_IRAN, value: 'MEHR_IRAN' },
    { key: Banks.RESALAT, value: 'RESALAT' },
    { key: Banks.AYANDEH, value: 'AYANDEH' },
    { key: Banks.TOSEE_TAAVON, value: 'TOSEE_TAAVON' },
    { key: Banks.UNKNOWN, value: 'UNKNOWN' },
];

export const BanksTypePersianStr = (banks: number) => {
    const str: any = BankPersianItems.find((b: any) => b.key === banks);
    return (str && str.value) || 'UNKNOWN';
}

export const BanksTypeQueryStr = (banks: number) => {
    const str: any = BankQueryItems.find((b: any) => b.key === banks);
    return (str && str.value) || 'UNKNOWN';
}

export const BanksNameStr = (banks: string) => {
    const str: any = BankPersianItems.find((b: any) => b.value === banks);
    return (str && str.key) || 'UNKNOWN';
}
