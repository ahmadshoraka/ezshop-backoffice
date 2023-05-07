export enum Operators {
    Equal,
    Like,
    GreaterThan,
    LessThan,
    OR,
    AND
    //...
}

export enum SortDirections {
    ASC = 1,
    DESC = 2
}

export const OperatorSymbols = new Map<Operators, string>([
    [Operators.Equal, '='],
    [Operators.Like, ' like '],
    [Operators.GreaterThan, '>'],
    [Operators.LessThan, '<'],
    [Operators.OR, ' or '],
    [Operators.AND, ' and '],
    //...
]);
