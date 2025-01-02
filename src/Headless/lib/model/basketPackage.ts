/**
 * Tebex Headless API
 * The headless API is designed for implementing your own store frontend with the data of your store. You are able to call the Headless API directly from a web browser (such as within an SPA), or from a backend server, such as for in-game GUIs.
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: tebex-integrations@overwolf.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { RevenueShare } from './revenueShare';

/**
* A package within an existing basket.
*/
export class BasketPackage {
    /**
    * The quantity of `package` in this basket. This is not the total quantity of overall items in the basket.
    */
    'qty'?: number;
    /**
    * The type of payment, either `single` for one-time payments or `subscription`.
    */
    'type'?: BasketPackage.TypeEnum;
    /**
    * An array of payment destination objects describing how the purchase should be split between multiple wallets. **Only available with pre-agreement from Tebex.**
    */
    'revenueShare'?: Array<RevenueShare>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "qty",
            "baseName": "qty",
            "type": "number"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "BasketPackage.TypeEnum"
        },
        {
            "name": "revenueShare",
            "baseName": "revenue_share",
            "type": "Array<RevenueShare>"
        }    ];

    static getAttributeTypeMap() {
        return BasketPackage.attributeTypeMap;
    }
}

export namespace BasketPackage {
    export enum TypeEnum {
        Single = <any> 'single',
        Subscription = <any> 'subscription'
    }
}