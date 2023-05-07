import { Operators, OperatorSymbols } from '../enums/query.enum';

export class UrlEntity {
    public queryParams: QueryParam;

    constructor(urlEntity?: any) {

        urlEntity = urlEntity || {};

        this.queryParams = urlEntity.queryParams || new QueryParam({});
    }
}

export class QueryParam {

    filterOptions: FilterOptions | string;
    sortOptions: SortOptions;
    pagingOptions: PagingOptions;
    filterStrings: FilterStrings | string;

    constructor(queryParam?: any) {

        queryParam = queryParam || {};

        this.filterStrings = queryParam.filterStrings;
        this.filterOptions = queryParam.filterOptions;
        this.sortOptions = queryParam.sortOptions;
        this.pagingOptions = queryParam.pagingOptions;
    }
}

export class PagingOptions {
    currentPage: number;
    pageSize: number;
    constructor(currentPage: number, pageSize: number) {
        this.currentPage = currentPage || 0;
        this.pageSize = pageSize || 0;
    }

    toString(): string {
        return `currentPage=${this.currentPage}&pageSize=${this.pageSize}`;
    }
}

export class SortOptions {
    orderBy?: string;
    direction: string;

    constructor(orderBy?: string, direction: string = ' ') {
        this.orderBy = orderBy;
        this.direction = direction;
    }

    toString(): string {
        return `&orderBy=${this.orderBy} + + ${this.direction}`;
    }
}


export class FilterOptions {
    filters?: Array<FilterOption>;
    operator: Operators;

    constructor(filters?: Array<FilterOption>, operator: Operators = Operators.AND) {
        this.filters = filters;
        this.operator = operator;
    }

    toString(): string {
        let filters = this.filters?.map(filter => filter.toString());
        return filters!.join(`${OperatorSymbols.get(this.operator)}`);
    }
}


export class FilterOption {
    field: string;
    conditions: Array<Condition>;
    operator: Operators;

    constructor(field: string, conditions: Array<Condition> | Condition, operator: Operators = Operators.AND) {
        this.field = field;
        this.conditions = conditions instanceof Condition ? [conditions] : conditions;
        this.operator = operator;
    }

    toString(): string {
        let conditions = this.conditions.map(condition => `${this.field}${condition.toString()}`);
        return conditions.join(`${OperatorSymbols.get(this.operator)}`);
    }
}


export class Condition {
    value: any;
    operator: Operators;

    constructor(value: any, operator: Operators = Operators.Equal) {
        this.value = value;
        this.operator = operator;
    }

    toString(): string {
        return `${OperatorSymbols.get(this.operator)}${this.value}`;
    }
}



export class FilterStrings {
    filters: Array<FilterString>;
    separator: string;

    constructor(filters: Array<FilterString>, separator: string) {
        this.filters = filters;
        this.separator = separator;

    }
    toString(): string {
        let samples: FilterString[] = [];
        for (const item of this.filters) {
            item.value ? samples.push(item) : '';
        }
        const filter = [...samples].join(this.separator);
        return filter;
    }
}


export class FilterString {
    field: string;
    value: any;

    constructor(field: string, value: any) {
        this.field = field;
        this.value = value;
    }

    toString(): string | null {
        return this.value ? `${this.field}=${this.value}` : null;
    }
}

export const queryParamsHandler = (urlEntity?: UrlEntity): string => {
    let query: string = '';
    if (urlEntity && urlEntity.queryParams) {
        if (urlEntity.queryParams.filterStrings) {
            query = query ? query : '?';
            query += urlEntity.queryParams.filterStrings.toString() + '&';
        }
        if (urlEntity.queryParams.filterOptions) {
            query = query ? query : '?filter=';
            query += urlEntity.queryParams.filterOptions.toString() + '&';
        }
        if (urlEntity.queryParams.sortOptions) {
            query = query ? query : '?filter=';
            query += urlEntity.queryParams.sortOptions.toString() + '&';
        }
        if (urlEntity.queryParams.pagingOptions) {
            query = query ? query : '?';
            query += urlEntity.queryParams.pagingOptions.toString() + '&';
        }

        const index = query.lastIndexOf('&');
        query = index === -1 ? '' : query.substr(0, index);

    }
    return query;
}
