/**
 * Tebex Checkout API
 * The Checkout APIs are designed to allow our creators to use the Tebex Checkout flow and payment acceptance capabilities without the need to set up a Tebex-powered webstore. Using these APIs allows you to create baskets with custom products (as opposed to pre-created products on our webstore platform), and send customers directly to the checkout flow to proceed with payment options.  You must receive prior authorisation before the Checkout API is enabled on your account. Please contact customer support or your account manager to discover if you qualify to use the Checkout API before beginning integration.
 *
 * The version of the OpenAPI document: 1.1.2
 * Contact: tebex-integrations@overwolf.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { localVarRequest } from "../../../tebex-request";
import http from 'http';

/* tslint:disable:no-unused-locals */
import { Basket } from '../model/basket';
import { CheckoutRequest } from '../model/checkoutRequest';

import { ObjectSerializer, Authentication, VoidAuth, Interceptor } from '../model/models';
import { HttpBasicAuth, HttpBearerAuth, ApiKeyAuth, OAuth } from '../model/models';

import { HttpError, RequestFile } from './apis';

let defaultBasePath = 'https://checkout.tebex.io/api';

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

export enum CheckoutApiApiKeys {
}

export class CheckoutApi {
    protected _basePath = defaultBasePath;
    protected _defaultHeaders : any = {};
    protected _useQuerystring : boolean = false;

    protected authentications = {
        'default': <Authentication>new VoidAuth(),
        'tebex_checkout_auth_basic': new HttpBasicAuth(),
    }

    protected interceptors: Interceptor[] = [];

    constructor(basePath?: string);
    constructor(username: string, password: string, basePath?: string);
    constructor(basePathOrUsername: string, password?: string, basePath?: string) {
        if (password) {
            this.username = basePathOrUsername;
            this.password = password
            if (basePath) {
                this.basePath = basePath;
            }
        } else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername
            }
        }
    }

    set useQuerystring(value: boolean) {
        this._useQuerystring = value;
    }

    set basePath(basePath: string) {
        this._basePath = basePath;
    }

    set defaultHeaders(defaultHeaders: any) {
        this._defaultHeaders = defaultHeaders;
    }

    get defaultHeaders() {
        return this._defaultHeaders;
    }

    get basePath() {
        return this._basePath;
    }

    public setDefaultAuthentication(auth: Authentication) {
        this.authentications.default = auth;
    }

    public setApiKey(key: CheckoutApiApiKeys, value: string) {
        (this.authentications as any)[CheckoutApiApiKeys[key]].apiKey = value;
    }

    set username(username: string) {
        this.authentications.tebex_checkout_auth_basic.username = username;
    }

    set password(password: string) {
        this.authentications.tebex_checkout_auth_basic.password = password;
    }

    public addInterceptor(interceptor: Interceptor) {
        this.interceptors.push(interceptor);
    }

    /**
     * This API call allows the complete checkout flow (create basket, add items, add sale) to be made in a single API call, for when the Seller is managing the basket locally. **This endpoint requires prior approval - please contact your account manager.**
     * @summary Create a checkout request
     * @param checkoutRequest Provide a &#x60;Basket&#x60;, an array of &#x60;Packages&#x60; to be added to the basket, and an optional &#x60;Sale&#x60; to complete the full checkout flow in one call. **Only one subscription item may be in the basket at a time.**
     */
    public async checkout (checkoutRequest?: CheckoutRequest, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: Basket;  }> {
        const localVarPath = this.basePath + '/checkout';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(checkoutRequest, "CheckoutRequest")
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.tebex_checkout_auth_basic.username && this.authentications.tebex_checkout_auth_basic.password) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.tebex_checkout_auth_basic.applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {

            return new Promise<{ response: http.IncomingMessage; body: Basket;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "Basket");
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
}
