import { HttpContext, HttpHeaders, HttpParams } from "@angular/common/http";

export type optionType = {
    headers?: HttpHeaders | {
        [header: string]: string | string[];
    };
    observe?: 'body';
    context?: HttpContext;
    params?: HttpParams | {
        [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>;
    };
    reportProgress?: boolean;
    responseType?: 'json';
    withCredentials?: boolean;
    transferCache?: {
        includeHeaders?: string[];
    } | boolean;
};

export type ProductType = {
    id: number,
    name: string,
    image: string,
    price: number,
    rating: number
};

export type ProductsType = {
    items : ProductType[],
    total: number,
    page: number,
    perPage: number,
    totalPages: number
}

export type optionsType = {
    [param: string]:
    | string
    | number
    | boolean
    | ReadonlyArray<string | number | boolean>,
    page: number,
    perPage: number
}