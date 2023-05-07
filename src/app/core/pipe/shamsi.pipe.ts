import { Pipe, PipeTransform } from '@angular/core';
// import * as JDate from 'jalali-date';
import * as moment from 'jalali-moment';

@Pipe({
  name: 'shamsi'
})
export class ShamsiPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    // return value !== null ? new JDate(new Date(value)).format('YYYY/MM/DD') : '';
    return value !== null ? new Date(value) : '';
  }

  // FullTransform(value: any, ...args: any[]): any {
  //   const delta = new Date(value);
  //   const hours = delta.getHours();
  //   const minutes = delta.getMinutes();
  //   return value !== null ? ` ${hours}:${minutes} - ${new JDate(delta).format('YYYY/MM/DD')}` : '';
  // }


  Date(jDate: number): string | null{
    if (!jDate) return null;
    let dateStr = moment(jDate, 'jYYYY/jM/jD').format('YYYY-MM-DD');
    return dateStr;
  }

  toUnix(jDate: number): number | null {
    if (!jDate) return null;
    let dateStr = moment(jDate, 'jYYYY/jMM/jDD').format('YYYY/MM/DD');
    return new Date(dateStr).setHours(23, 59, 59, 999);
  }

  fromUnix(jDate: number): number | null {
    if (!jDate) return null;
    let dateStr = moment(jDate, 'jYYYY/jMM/jDD').format('YYYY/MM/DD');
    return new Date(dateStr).setHours(0, 0, 0, 0,);
  }

  toJdate(unix: number): string {
    if (unix) return '';
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

}