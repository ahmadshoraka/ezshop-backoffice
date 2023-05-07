export class Consts {
    public static readonly DECIMALMAXRANGE: number = 1000000000000000000;
    public static readonly INTMAXRANGE: number = 2147483647;
    public static readonly FLOATMAXRANGE: number = 9999999999999999999;
    public static readonly LONGMAXRANGE: number = 9223372036854775807;
    public static readonly PERSIANALPHABET: string = 'الف,ب,پ,ت,ث,ج,چ,ح,خ,د,ذ,ر,ز,ژ,س,ش,ص,ض,ط,ظ,ع,غ,ف,ق,ک,گ,ل,م,ن,و,ه,ی';
    public static readonly DEFAULTID = '00000000-0000-0000-0000-000000000000';

    public static readonly Regex: any = {
        phone: /^(\()[0][1-9][0-9](\)) [0-9]{8}$/,
        phoneNumber: /^[0][9][0-9]{9}$/,
        alphabet: /^[a-zA-Z ]*$/,
        nationalCode: /^[0-9]{10}$/,
        digits: /^([1-9][0-9]*)$/,
        date: /^[1-4]\d{3}\/((0[1-6]\/((3[0-1])|([1-2][0-9])|(0[1-9])))|((1[0-2]|(0[7-9]))\/(30|([1-2][0-9])|(0[1-9]))))$/,
        dateTime: /^[1-4]\d{3}\/((0[1-6]\/((3[0-1])|([1-2][0-9])|(0[1-9])))|((1[0-2]|(0[7-9]))\/(30|([1-2][0-9])|(0[1-9])))) ([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/,
        nationalId: /^[0-9]{11}$/,
        economicCode: /^[0-9]{12}$/,
        identitySerialRowNo: /^[0-9]{2}$/,
        fax: /^(\()[0][1-9][0-9](\)) [0-9]{8}$/,
        identitySerialNumber: /^[0-9]{6}$/,
        postalCode: /^[0-9]{10}$/,
        email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        engineNo: /^[0-9]{7}$/,
    };

    public static readonly Mask: any = {
        dateTimeMask: [/\d/, /\d/, /\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, ' ', /\d/, /\d/, ':', /\d/, /\d/],
        dateMask: [/\d/, /\d/, /\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/],
        phoneMask: ['(', /\d/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/],
        phoneNumberMask: [/\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/],
        faxMask: ['(', /\d/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/],
        nationalCodeMask: [/\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/],
        postalCodeMask: [/\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/],
        identitySerialNumberMask: [/\d/, /\d/, /\d/, /\d/, /\d/, /\d/],
        nationalIdMask: [/\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/],
        economicCodeMask: [/\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/],
        identitySerialRowNoMask: [/\d/, /\d/],
        engineNoMask: [/\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/],
    };

}
