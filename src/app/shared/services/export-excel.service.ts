
// import { CyberPoliceExportExcel, CyberPoliceIpgHistoryExcel, CyberPoliceMultiUserExportExcel, CyberPoliceTransferToUserExcel, CyberPoliceUserTransactionsDetailsExcel } from 'src/app/panel/cyber-police/shared/model/cyber-police.model';

import { Injectable } from '@angular/core';
import { utils as XLSXUtils, writeFile } from 'xlsx';
import { WorkBook, WorkSheet } from 'xlsx/types';

@Injectable({
  providedIn: 'root'
})
export class ExportExcelService {
  private EXCEL_EXTENSION = '.xlsx';
  private xlsxCols = [
    { wpx: 200 },
    { wpx: 200 },
    { wpx: 200 },
    { wpx: 200 },
    { wpx: 200 },
    { wpx: 200 },
    { wpx: 200 },
    { wpx: 200 },
    { wpx: 200 },
    { wpx: 200 },
    { wpx: 200 },
    { wpx: 200 },
    { wpx: 200 },
    { wpx: 200 },
    { wpx: 200 },
    { wpx: 200 },
    { wpx: 200 },
    { wpx: 200 },
    { wpx: 200 },
    { wpx: 200 },
    { wpx: 200 },
  ];

  constructor() { }

  public exportAsExcelFile(json: any[], excelFileName: string): void {
    let wb: WorkBook;
    const ws: WorkSheet = XLSXUtils.json_to_sheet(json);
    wb = XLSXUtils.book_new();
    ws["!cols"] = this.xlsxCols;
    XLSXUtils.book_append_sheet(wb, ws, excelFileName);
    writeFile(wb, `${excelFileName}${this.EXCEL_EXTENSION}`);
  }

  public exportAsExcelFileWithCustomizedHeader(json: any[], excelFileName: string, headerTitles: string[][], cols?: any[]): void {
    let wb: WorkBook;
    // const ws: WorkSheet = XLSXUtils.json_to_sheet(json,{
    //   skipHeader: true
    // });
    let ws: WorkSheet = XLSXUtils.json_to_sheet([]);
    XLSXUtils.sheet_add_json(ws, json, { skipHeader: true, origin: 'A2' })
    XLSXUtils.sheet_add_aoa(ws, headerTitles, {
      origin: 'A1'
    })
    ws["!cols"] = cols;
    wb = XLSXUtils.book_new();
    XLSXUtils.book_append_sheet(wb, ws, excelFileName);

    writeFile(wb, `${excelFileName}${this.EXCEL_EXTENSION}`);
  }

  // public exportAsMultiExcelFile(cyberPoliceMultiUserExportExcel: CyberPoliceMultiUserExportExcel): void {
  //   let wb: WorkBook;
  //   let ws: WorkSheet[] = [];

  //   wb = XLSXUtils.book_new();
  //   ws.push(XLSXUtils.json_to_sheet(cyberPoliceMultiUserExportExcel.cyberPoliceExportExcel));
  //   ws.push(XLSXUtils.json_to_sheet(cyberPoliceMultiUserExportExcel.userCashOutExcel));
  //   ws.push(XLSXUtils.json_to_sheet(cyberPoliceMultiUserExportExcel.cyberPoliceIpgHistoryExcel));
  //   ws.push(XLSXUtils.json_to_sheet(cyberPoliceMultiUserExportExcel.cyberPoliceTransferToUserExcel));
  //   ws.push(XLSXUtils.json_to_sheet(cyberPoliceMultiUserExportExcel.cyberPoliceUserTransactionsDetailsExcel));

  //   const name = ['کاربران', 'سابقه پایا', 'سابقه درگاه', 'سابقه کیف', 'سابقه تراکنشها']

  //   ws.forEach((res, index) => {
  //     const i = parseInt((index % 5).toString());
  //     XLSXUtils.book_append_sheet(wb, res, `${name[i]}`);
  //   });

  //   writeFile(wb, `گزارش تجمیعی پلیس فتا${this.EXCEL_EXTENSION}`);
  // }
  
  // public exportAsMultiExcelFile1(cyberPoliceMultiUserExportExcel: CyberPoliceMultiUserExportExcel): void {
  //   let wb: WorkBook;
  //   let ws: WorkSheet[] = [];

  //   wb = XLSXUtils.book_new();
  //   // ws.push(XLSXUtils.json_to_sheet(cyberPoliceMultiUserExportExcel.cyberPoliceExportExcel));
  //   ws.push(XLSXUtils.json_to_sheet(cyberPoliceMultiUserExportExcel.userCashOutExcel));
  //   ws.push(XLSXUtils.json_to_sheet(cyberPoliceMultiUserExportExcel.cyberPoliceIpgHistoryMobileExcel));
  //   ws.push(XLSXUtils.json_to_sheet(cyberPoliceMultiUserExportExcel.cyberPoliceTransferToUserExcel));
  //   ws.push(XLSXUtils.json_to_sheet(cyberPoliceMultiUserExportExcel.cyberPoliceUserTransactionsDetailsExcel));

  //   const name = [ 'سابقه پایا' ,  'سابقه درگاه' , 'سابقه کیف' , 'سابقه تراکنشها']

  //   ws.forEach((res, index) => {
  //     const i = parseInt((index % 5).toString());
  //     XLSXUtils.book_append_sheet(wb, res, `${name[i]}`);
  //   });

  //   writeFile(wb, `گزارش تجمیعی پلیس فتا${this.EXCEL_EXTENSION}`);
  // }

  public dashboardExportAsExcelFile(json: string[][], headerTitles: string[][], rowTitle: string[][], excelFileName: string): void {
    let wb: WorkBook;
    const ws: WorkSheet = XLSXUtils.json_to_sheet([]);

    XLSXUtils.sheet_add_aoa(ws, headerTitles, {
      origin: 'B1'
    })
    XLSXUtils.sheet_add_aoa(ws, rowTitle, {
      origin: 'A2'
    })
    XLSXUtils.sheet_add_aoa(ws, json, {
      origin: 'B2'
    })
    ws["!cols"] = this.xlsxCols;
    wb = XLSXUtils.book_new();
    XLSXUtils.book_append_sheet(wb, ws, excelFileName);

    writeFile(wb, `${excelFileName}${this.EXCEL_EXTENSION}`);
  }
}