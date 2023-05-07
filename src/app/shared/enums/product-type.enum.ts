export enum ProductType {
  Bill = 0,
  SubwayTicket = 1,
  BrtTicket = 2,
  SuburbanTrainTicket = 3,
  Toll = 4,
  MobileTopUp = 5,
  InternetPackage = 6,
  TicketCardOnPOS = 7,
  TicketCardOnGate = 8,
  TrafficPlan = 9,
  Taxi = 10,
  MiladTowerTicket = 11,
  MobileVoucher = 12,
  MobileAmazingTopUp = 13,
  SubwayCard = 14,
  Qr = 15,
  MasterTicket = 16,
  Rahvar = 17,
  SidePark = 18,
  Credit = 19,
  CarBill = 20,
  TavanamValidation = 21,
  Loan = 22,
  Voucher = 23,
  TrafficFinesInquiry = 24,
  TrafficFines = 25,
}

export const ProductTypePersianItems = [
  {key: ProductType.Bill, value: 'قبوض'},
  {key: ProductType.SubwayTicket, value: 'تک سفره مترو'},
  {key: ProductType.BrtTicket, value: 'تک سفره بی آر تی'},
  {key: ProductType.SuburbanTrainTicket, value: 'تک سفره حومه ای'},
  {key: ProductType.Toll, value: 'عوارض آزادراهی'},
  {key: ProductType.MobileTopUp, value: 'شارژ مستقیم موبایل'},
  {key: ProductType.InternetPackage, value: 'بسته اینترنت'},
  {key: ProductType.TicketCardOnPOS, value: 'شارژ کارت بلیت روی پوز'},
  {key: ProductType.TicketCardOnGate, value: 'شارژ کارت بلیت روی گیت'},
  {key: ProductType.TrafficPlan, value: 'طرح ترافیک'},
  {key: ProductType.Taxi, value: 'تاکسی'},
  {key: ProductType.MiladTowerTicket, value: 'بلیت برج میلاد'},
  {key: ProductType.MobileVoucher, value: 'شارژ باکد'},
  {key: ProductType.MobileAmazingTopUp, value: 'شارژ شگفت انگیز'},
  {key: ProductType.SubwayCard, value: 'شارژ کارت مترو'},
  {key: ProductType.Qr, value: 'کد ایزی پی'},
  {key: ProductType.MasterTicket, value: 'بلیت قطار حومه'},
  {key: ProductType.SidePark, value: 'پارک حاشیه ای '},
  {key: ProductType.Credit, value: 'پرداخت صورت حساب اعتبار'},
  {key: ProductType.CarBill, value: 'عوارض سالیانه خودرو'},
  {key: ProductType.TavanamValidation, value: 'اعتبارسنجی'},
  {key: ProductType.Loan, value: 'قسط خرید اقساطی'},
  {key: ProductType.Voucher, value: 'کد خرید'},
  {key: ProductType.TrafficFinesInquiry, value: 'استعلام تخلفات رانندگی'},
  {key: ProductType.TrafficFines, value: 'تخلفات رانندگی'},
];

export const ProductTypeQueryItems = [
  {key: ProductType.Bill, value: 'Bill'},
  {key: ProductType.SubwayTicket, value: 'SubwayTicket'},
  {key: ProductType.BrtTicket, value: 'BrtTicket'},
  {key: ProductType.SuburbanTrainTicket, value: 'SuburbanTrainTicket'},
  {key: ProductType.Toll, value: 'Toll'},
  {key: ProductType.MobileTopUp, value: 'MobileTopUp'},
  {key: ProductType.InternetPackage, value: 'InternetPackage'},
  {key: ProductType.TicketCardOnPOS, value: 'TicketCardOnPOS'},
  {key: ProductType.TicketCardOnGate, value: 'TicketCardOnGate'},
  {key: ProductType.TrafficPlan, value: 'TrafficPlan'},
  {key: ProductType.Taxi, value: 'Taxi'},
  {key: ProductType.MiladTowerTicket, value: 'MiladTowerTicket'},
  {key: ProductType.MobileVoucher, value: 'MobileVoucher'},
  {key: ProductType.MobileAmazingTopUp, value: 'MobileAmazingTopUp'},
  {key: ProductType.SubwayCard, value: 'SubwayCard'},
  {key: ProductType.Qr, value: 'Qr'},
  {key: ProductType.MasterTicket, value: 'MasterTicket'},
  {key: ProductType.SidePark, value: 'SidePark'},
  {key: ProductType.Credit, value: 'Credit'},
  {key: ProductType.CarBill, value: 'CarBill'},
  {key: ProductType.TavanamValidation, value: 'TavanamValidation'},
  {key: ProductType.Loan, value: 'Loan'},
  {key: ProductType.Voucher, value: 'Voucher'},
  {key: ProductType.TrafficFinesInquiry, value: 'TrafficFinesInquiry'},
  {key: ProductType.TrafficFines, value: 'TrafficFines'},
];

export const ProductTypePersianStr = (invoice: number) => {
  const str: any = ProductTypePersianItems.find((os: any) => os.key === invoice);
  return (str && str.value) || null;
}

export const ProductTypeQueryStr = (invoice: number) => {
  const str: any = ProductTypeQueryItems.find((os: any) => os.key === invoice);
  return (str && str.value) || null;
}

export const ProductTypeStr = (invoice: string) => {
  const str: any = ProductTypeQueryItems.find((os: any) => os.value === invoice);
  return str ? str.key : null;
}

export function fixPersianNum(str) {
  const persianNumbers = [/۰/g, /۱/g, /۲/g, /۳/g, /۴/g, /۵/g, /۶/g, /۷/g, /۸/g, /۹/g];
  const arabicNumbers = [/٠/g, /١/g, /٢/g, /٣/g, /٤/g, /٥/g, /٦/g, /٧/g, /٨/g, /٩/g];
  if (typeof str === 'string') {
    for (let i = 0; i < 10; i++) {
      str = str.replace(persianNumbers[i], i.toString()).replace(arabicNumbers[i], i.toString());
    }
  }
  return str;
}

