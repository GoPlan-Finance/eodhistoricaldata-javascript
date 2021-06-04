"use strict";
/* tslint:disable */
/* eslint-disable */
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchApi = exports.SearchApiFactory = exports.SearchApiFp = exports.SearchApiAxiosParamCreator = exports.ExchangesApi = exports.ExchangesApiFactory = exports.ExchangesApiFp = exports.ExchangesApiAxiosParamCreator = void 0;
const axios_1 = __importDefault(require("axios"));
// Some imports not used depending on template conditions
// @ts-ignore
const common_1 = require("./common");
// @ts-ignore
const base_1 = require("./base");
/**
 * ExchangesApi - axios parameter creator
 * @export
 */
const ExchangesApiAxiosParamCreator = function (configuration) {
    return {
        /**
         *
         * @summary Search symbols
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listEchanges: (options = {}) => __awaiter(this, void 0, void 0, function* () {
            const localVarPath = `/exchanges-list`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, common_1.DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'GET' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            // authentication api_token required
            yield common_1.setApiKeyToObject(localVarQueryParameter, "api_token", configuration);
            common_1.setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            return {
                url: common_1.toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        }),
        /**
         *
         * @summary Search symbols
         * @param {string} exchangeCode ExchangeCode
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listSymbols: (exchangeCode, options = {}) => __awaiter(this, void 0, void 0, function* () {
            // verify required parameter 'exchangeCode' is not null or undefined
            common_1.assertParamExists('listSymbols', 'exchangeCode', exchangeCode);
            const localVarPath = `/exchange-symbol-list/{exchangeCode}?fmt=json`
                .replace(`{${"exchangeCode"}}`, encodeURIComponent(String(exchangeCode)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, common_1.DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'GET' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            // authentication api_token required
            yield common_1.setApiKeyToObject(localVarQueryParameter, "api_token", configuration);
            common_1.setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            return {
                url: common_1.toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        }),
    };
};
exports.ExchangesApiAxiosParamCreator = ExchangesApiAxiosParamCreator;
/**
 * ExchangesApi - functional programming interface
 * @export
 */
const ExchangesApiFp = function (configuration) {
    const localVarAxiosParamCreator = exports.ExchangesApiAxiosParamCreator(configuration);
    return {
        /**
         *
         * @summary Search symbols
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listEchanges(options) {
            return __awaiter(this, void 0, void 0, function* () {
                const localVarAxiosArgs = yield localVarAxiosParamCreator.listEchanges(options);
                return common_1.createRequestFunction(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration);
            });
        },
        /**
         *
         * @summary Search symbols
         * @param {string} exchangeCode ExchangeCode
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listSymbols(exchangeCode, options) {
            return __awaiter(this, void 0, void 0, function* () {
                const localVarAxiosArgs = yield localVarAxiosParamCreator.listSymbols(exchangeCode, options);
                return common_1.createRequestFunction(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration);
            });
        },
    };
};
exports.ExchangesApiFp = ExchangesApiFp;
/**
 * ExchangesApi - factory interface
 * @export
 */
const ExchangesApiFactory = function (configuration, basePath, axios) {
    const localVarFp = exports.ExchangesApiFp(configuration);
    return {
        /**
         *
         * @summary Search symbols
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listEchanges(options) {
            return localVarFp.listEchanges(options).then((request) => request(axios, basePath));
        },
        /**
         *
         * @summary Search symbols
         * @param {string} exchangeCode ExchangeCode
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listSymbols(exchangeCode, options) {
            return localVarFp.listSymbols(exchangeCode, options).then((request) => request(axios, basePath));
        },
    };
};
exports.ExchangesApiFactory = ExchangesApiFactory;
/**
 * ExchangesApi - object-oriented interface
 * @export
 * @class ExchangesApi
 * @extends {BaseAPI}
 */
class ExchangesApi extends base_1.BaseAPI {
    /**
     *
     * @summary Search symbols
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ExchangesApi
     */
    listEchanges(options) {
        return exports.ExchangesApiFp(this.configuration).listEchanges(options).then((request) => request(this.axios, this.basePath));
    }
    /**
     *
     * @summary Search symbols
     * @param {string} exchangeCode ExchangeCode
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ExchangesApi
     */
    listSymbols(exchangeCode, options) {
        return exports.ExchangesApiFp(this.configuration).listSymbols(exchangeCode, options).then((request) => request(this.axios, this.basePath));
    }
}
exports.ExchangesApi = ExchangesApi;
/**
 * SearchApi - axios parameter creator
 * @export
 */
const SearchApiAxiosParamCreator = function (configuration) {
    return {
        /**
         *
         * @summary Search symbols
         * @param {string} query Name of ticker or search string
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        search: (query, options = {}) => __awaiter(this, void 0, void 0, function* () {
            // verify required parameter 'query' is not null or undefined
            common_1.assertParamExists('search', 'query', query);
            const localVarPath = `/search/{query}`
                .replace(`{${"query"}}`, encodeURIComponent(String(query)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, common_1.DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'GET' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            // authentication api_token required
            yield common_1.setApiKeyToObject(localVarQueryParameter, "api_token", configuration);
            common_1.setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            return {
                url: common_1.toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        }),
    };
};
exports.SearchApiAxiosParamCreator = SearchApiAxiosParamCreator;
/**
 * SearchApi - functional programming interface
 * @export
 */
const SearchApiFp = function (configuration) {
    const localVarAxiosParamCreator = exports.SearchApiAxiosParamCreator(configuration);
    return {
        /**
         *
         * @summary Search symbols
         * @param {string} query Name of ticker or search string
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        search(query, options) {
            return __awaiter(this, void 0, void 0, function* () {
                const localVarAxiosArgs = yield localVarAxiosParamCreator.search(query, options);
                return common_1.createRequestFunction(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration);
            });
        },
    };
};
exports.SearchApiFp = SearchApiFp;
/**
 * SearchApi - factory interface
 * @export
 */
const SearchApiFactory = function (configuration, basePath, axios) {
    const localVarFp = exports.SearchApiFp(configuration);
    return {
        /**
         *
         * @summary Search symbols
         * @param {string} query Name of ticker or search string
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        search(query, options) {
            return localVarFp.search(query, options).then((request) => request(axios, basePath));
        },
    };
};
exports.SearchApiFactory = SearchApiFactory;
/**
 * SearchApi - object-oriented interface
 * @export
 * @class SearchApi
 * @extends {BaseAPI}
 */
class SearchApi extends base_1.BaseAPI {
    /**
     *
     * @summary Search symbols
     * @param {string} query Name of ticker or search string
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SearchApi
     */
    search(query, options) {
        return exports.SearchApiFp(this.configuration).search(query, options).then((request) => request(this.axios, this.basePath));
    }
}
exports.SearchApi = SearchApi;
//# sourceMappingURL=api.js.map