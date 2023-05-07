export class ResultModel {
  content: [];
  empty: boolean;
  first: boolean;
  last: boolean;
  number: number;
  numberOfElements: number;
  size: number;
  sort: Sort;
  totalElements: number;
  totalPages: number;

  constructor(resultModel?: any) {

    resultModel = resultModel || {};

    this.content = resultModel.content;
    this.empty = resultModel.empty;
    this.first = resultModel.first;
    this.last = resultModel.last;
    this.number = resultModel.number;
    this.numberOfElements = resultModel.numberOfElements;
    this.size = resultModel.size;
    this.sort = resultModel.sort;
    this.totalElements = resultModel.totalElements;
    this.totalPages = resultModel.totalPages;


  }
}

export class WalletResultMosel {
  pageSize: number;
  currentPage: number;
  totalCount: number;
  resultCode: number;
  resultCodeDesc: string;
  pageItems: [];

  constructor(walletResultMosel?: any) {

    walletResultMosel = walletResultMosel || {};

    this.pageSize = walletResultMosel.pageSize;
    this.currentPage = walletResultMosel.currentPage;
    this.totalCount = walletResultMosel.totalCount;
    this.pageItems = walletResultMosel.pageItems;
    this.resultCode = walletResultMosel.resultCode;
    this.resultCodeDesc = walletResultMosel.resultCodeDesc;


  }
}

export class PublicApi {
  cityId: number;
  cityName: string;
  id: number;
  provinceId: number;
  provinceName: string;
  zoneId: number;
  zoneName: string;
  regionName: string;

  constructor(pa?: any) {

    pa = pa || {};

    this.cityId = pa.cityId;
    this.cityName = pa.cityName;
    this.id = pa.id;
    this.provinceId = pa.provinceId;
    this.provinceName = pa.provinceName;
    this.zoneId = pa.zoneId;
    this.zoneName = pa.zoneName;
    this.regionName = pa.regionName;
  }
}

export class Sort {
  empty: boolean;
  sorted: boolean;
  unsorted: boolean;

  constructor(sort?: any) {

    sort = sort || {};

    this.empty = sort.empty;
    this.sorted = sort.sorted;
    this.unsorted = sort.unsorted;
  }
}


