/**
 * EOD Historical Data API
 * EOD Historical Data API
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: sam@sddproductions.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { Configuration } from './configuration';
import { AxiosPromise, AxiosInstance } from 'axios';
import { RequestArgs, BaseAPI } from './base';
/**
 *
 * @export
 * @interface Exchange
 */
export interface Exchange {
    /**
     *
     * @type {string}
     * @memberof Exchange
     */
    Code: string;
    /**
     *
     * @type {Array<string>}
     * @memberof Exchange
     */
    OperatingMIC: Array<string>;
    /**
     *
     * @type {string}
     * @memberof Exchange
     */
    Name: string;
    /**
     *
     * @type {string}
     * @memberof Exchange
     */
    Country: string;
    /**
     *
     * @type {string}
     * @memberof Exchange
     */
    Currency: string;
}
/**
 *
 * @export
 * @interface Symbol
 */
export interface Symbol {
    /**
     *
     * @type {string}
     * @memberof Symbol
     */
    Code: string;
    /**
     *
     * @type {string}
     * @memberof Symbol
     */
    Exchange: string;
    /**
     *
     * @type {string}
     * @memberof Symbol
     */
    Name: string;
    /**
     *
     * @type {string}
     * @memberof Symbol
     */
    Country: string;
    /**
     *
     * @type {string}
     * @memberof Symbol
     */
    Currency: string;
    /**
     *
     * @type {string}
     * @memberof Symbol
     */
    Type?: string;
    /**
     *
     * @type {string}
     * @memberof Symbol
     */
    Isin?: string;
}
/**
 *
 * @export
 * @interface SymbolSearch
 */
export interface SymbolSearch {
    /**
     *
     * @type {string}
     * @memberof SymbolSearch
     */
    Code: string;
    /**
     *
     * @type {string}
     * @memberof SymbolSearch
     */
    Exchange: string;
    /**
     *
     * @type {string}
     * @memberof SymbolSearch
     */
    Name: string;
    /**
     *
     * @type {string}
     * @memberof SymbolSearch
     */
    Country: string;
    /**
     *
     * @type {string}
     * @memberof SymbolSearch
     */
    Currency: string;
    /**
     *
     * @type {string}
     * @memberof SymbolSearch
     */
    Type?: string;
    /**
     *
     * @type {string}
     * @memberof SymbolSearch
     */
    ISIN?: string;
    /**
     *
     * @type {number}
     * @memberof SymbolSearch
     */
    previousClose?: number;
    /**
     *
     * @type {string}
     * @memberof SymbolSearch
     */
    previousCloseDate?: string;
}
/**
 * ExchangesApi - axios parameter creator
 * @export
 */
export declare const ExchangesApiAxiosParamCreator: (configuration?: Configuration) => {
    /**
     *
     * @summary Search symbols
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listEchanges: (options?: any) => Promise<RequestArgs>;
    /**
     *
     * @summary Search symbols
     * @param {string} exchangeCode ExchangeCode
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listSymbols: (exchangeCode: string, options?: any) => Promise<RequestArgs>;
};
/**
 * ExchangesApi - functional programming interface
 * @export
 */
export declare const ExchangesApiFp: (configuration?: Configuration) => {
    /**
     *
     * @summary Search symbols
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listEchanges(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<Exchange>>>;
    /**
     *
     * @summary Search symbols
     * @param {string} exchangeCode ExchangeCode
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listSymbols(exchangeCode: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<Symbol>>>;
};
/**
 * ExchangesApi - factory interface
 * @export
 */
export declare const ExchangesApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    /**
     *
     * @summary Search symbols
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listEchanges(options?: any): AxiosPromise<Array<Exchange>>;
    /**
     *
     * @summary Search symbols
     * @param {string} exchangeCode ExchangeCode
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listSymbols(exchangeCode: string, options?: any): AxiosPromise<Array<Symbol>>;
};
/**
 * ExchangesApi - object-oriented interface
 * @export
 * @class ExchangesApi
 * @extends {BaseAPI}
 */
export declare class ExchangesApi extends BaseAPI {
    /**
     *
     * @summary Search symbols
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ExchangesApi
     */
    listEchanges(options?: any): Promise<import("axios").AxiosResponse<Exchange[]>>;
    /**
     *
     * @summary Search symbols
     * @param {string} exchangeCode ExchangeCode
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ExchangesApi
     */
    listSymbols(exchangeCode: string, options?: any): Promise<import("axios").AxiosResponse<Symbol[]>>;
}
/**
 * SearchApi - axios parameter creator
 * @export
 */
export declare const SearchApiAxiosParamCreator: (configuration?: Configuration) => {
    /**
     *
     * @summary Search symbols
     * @param {string} query Name of ticker or search string
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    search: (query: string, options?: any) => Promise<RequestArgs>;
};
/**
 * SearchApi - functional programming interface
 * @export
 */
export declare const SearchApiFp: (configuration?: Configuration) => {
    /**
     *
     * @summary Search symbols
     * @param {string} query Name of ticker or search string
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    search(query: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<SymbolSearch>>>;
};
/**
 * SearchApi - factory interface
 * @export
 */
export declare const SearchApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    /**
     *
     * @summary Search symbols
     * @param {string} query Name of ticker or search string
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    search(query: string, options?: any): AxiosPromise<Array<SymbolSearch>>;
};
/**
 * SearchApi - object-oriented interface
 * @export
 * @class SearchApi
 * @extends {BaseAPI}
 */
export declare class SearchApi extends BaseAPI {
    /**
     *
     * @summary Search symbols
     * @param {string} query Name of ticker or search string
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SearchApi
     */
    search(query: string, options?: any): Promise<import("axios").AxiosResponse<SymbolSearch[]>>;
}