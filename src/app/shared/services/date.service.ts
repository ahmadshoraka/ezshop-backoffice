import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as moment from 'jalali-moment';


@Injectable({
  providedIn: 'root'
})
export class DateService {


  toJdate(unix: number): string {
    if (!unix) return '';
    const localTime = new Date();
    let y1 = moment(unix).format('jYYYY/jMM/jDD')
    const m = moment(y1, 'jYYYY/jM/jD');
    const miladiDate = m.format('YYYY/MM/DD');
    const localTime1 = new Date(miladiDate);
    const timeZoneOffsetMin = localTime1.getTimezoneOffset();
    const localmiliSecond = timeZoneOffsetMin * 60000;
    let date = new Date((unix * 1000) + localmiliSecond);
    return moment(date).format('jYYYY/jMM/jDD');
  }

  convertDateToUnix(date: any) {
    /*تاریخ شمسی را به یونیکس تبدیل میکند*/
    if (!date) return;
    const m = moment(date, 'jYYYY/jM/jD');
    const miladiDate = m.format('YYYY/MM/DD');
    const unixUtc1 = new Date(miladiDate).setHours(0, 0, 0, 0);
    const localTime = new Date(miladiDate);
    let timeZoneOffsetMin = localTime.getTimezoneOffset();
    const unixUtc = new Date(unixUtc1).setMinutes(-(timeZoneOffsetMin));


    // let utcDate = new Date(unixUtc);
    // utcDate.setMinutes(+timeZoneOffsetMin);
    return unixUtc / 1000;

  }

  convertDateToAD(date: any) {
    /*تاریخ شمسی را به میلادی تبدیل میکند*/
    const m = moment(date, 'jYYYY/jMM/jDD');
    const miladiDate = m.format('YYYY-MM-DD');
    return miladiDate;
  }

  today(format: string = 'jYYYY/jMM/jDD'): string {
    return moment(Date.now()).format(format);
  }

  accuracyDate(DateCtrl: FormControl) {
    const year = DateCtrl.value.slice(0, 2);
    const month = DateCtrl.value.slice(4, 6);

    if (year != '13' && year != '14') {
      this.accuracyDateYear(DateCtrl);
    } else
      if (month > '12') {
        this.accuracyDateMonth(DateCtrl);
      } else if ((year === '13' && year === '14') && (month < '12')) {
        DateCtrl.setErrors(null);
      }
  }

  private accuracyDateYear(year: FormControl) {
    year.setErrors({ yearError: true });
    year.markAsTouched();
    return year;
  }

  private accuracyDateMonth(month: FormControl) {
    month.setErrors({ monthError: true });
    month.markAsTouched();
    return month;
  }

  static setTimeZero(dateTime: string | Date): Date {
    let dt = (dateTime instanceof Date) ? dateTime : new Date(moment(dateTime, 'jYYYY/jMM/jDD').format('YYYY/MM/DD'));
    dt.setHours(0, 0, 0, 0);
    return dt;
  }

  static toJdate(unix: number): string {
    if (!unix) return '';
    let date = new Date(unix * 1000);
    return moment(date).format('jYYYY/jMM/jDD');
  }

  static toJdateTime(unix: number): string {
    if (!unix) return '';
    let date = new Date(unix * 1000);
    return moment(date).format('jYYYY/jMM/jDD HH:mm');
  }

  static toUnix(jDate: string): number | null {
    if (!jDate) return null;
    let dateStr = moment(jDate, 'jYYYY/jMM/jDD').format('YYYY/MM/DD');
    return new Date(dateStr).getTime() / 1000;
  }

  static toGregorian(jDate: string): string | null{
    if (!jDate) return null;
    let dateStr = moment(jDate, 'jYYYY/jMM/jDD').format('YYYY/MM/DD');
    return dateStr
  }

  static toUnixTime(jDateTime: string): number | null{
    if (!jDateTime) return null;
    let dateStr = moment(jDateTime, 'jYYYY/jMM/jDD HH:mm').format('YYYY/MM/DD HH:mm');
    return new Date(dateStr).getTime() / 1000;
  }

  static getTime(unix: number): string {
    if (!unix) return '';
    let date = new Date(unix * 1000);
    return moment(date).format('HH:mm');
  }

  static toDate(jDate: string): Date | null{
    if (!jDate) return null;
    let date = moment(jDate, 'jYYYY/jMM/jDD').format('YYYY/MM/DD');
    return new Date(date);
  }

  static toDateTime(jDateTime: string): Date| null {
    if (!jDateTime) return null;
    let date = moment(jDateTime, 'jYYYY/jMM/jDD HH:mm').format('YYYY/MM/DD HH:mm');
    return new Date(date);
  }

  static setFixFromDate(jDateTime: string): number| null {
    if (!jDateTime) return null;
    let udt = new Date(this.toUnixTime(jDateTime)! * 1000);
    if (!udt) return null;
    udt.setHours(0, 0, 0, 0);
    udt.setMinutes(-1);
    return udt.getTime() / 1000;
  }

  static setFixToDate(jDateTime: string): number| null {
    if (!jDateTime) return null;
    return this.toUnixTime(jDateTime + " 23:59")
  }

  static today(format: string = 'dddd jDD jMMMM jYYYY'): string {
    return moment(Date.now()).format(format);
  }

  static splitDateTime(jDateTime: string): { date: string | null, time: string | null} {
    var dateTimeParts = jDateTime ? jDateTime.split(' ') : [null, null];
    return {
      date: dateTimeParts[0],
      time: dateTimeParts[1]
    };
  }

  static pastDateRange(date: FormControl) {
    let startDate = DateService.toDateTime(date.value);
    let now = new Date();
    if (startDate! >= now) {
      return { pastDateRange: true }
    }
    return null;
  }

  static futureDateRange(date: FormControl) {
    let newDate = DateService.toDate(date.value);
    let now = DateService.setTimeZero(new Date());
    if (newDate! <= now) {
      return { futureDateRange: true }
    }
    return null;
  }

  static dateRangeValidation(toDateValueCtrl: FormControl, fromDateValueCtrl: any) {

    if (toDateValueCtrl.value && fromDateValueCtrl.value) {
      let fromDate = DateService.setTimeZero(fromDateValueCtrl.value);
      let toDate = DateService.setTimeZero(toDateValueCtrl.value);
      if (toDate < fromDate) {
        toDateValueCtrl.setErrors({ dateRange: true });
        toDateValueCtrl.markAsTouched();
      }
      else {
        toDateValueCtrl.setErrors(null);
      }
    }
    return null;
  }
}
