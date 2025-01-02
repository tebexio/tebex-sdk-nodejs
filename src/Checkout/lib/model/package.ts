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

import { RequestFile } from './models';

export class Package {
    /**
    * The name of the item being purchased. This should be user-friendly as it is shown to the customer on checkout and receipts.
    */
    'name'?: string;
    /**
    * A float (decimal describing the price of the package in your account currency)
    */
    'price'?: number;
    'type'?: Package.TypeEnum;
    'qty'?: number;
    /**
    * The renewal period of this item
    */
    'expiryPeriod'?: Package.ExpiryPeriodEnum;
    /**
    * An integer representing the number of `expiry_periods` that make up the renewal period.
    */
    'expiryLength'?: number;
    /**
    * A map of data that is passed back to you via the webhook (for example, a tracking ID)
    */
    'custom'?: object;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "price",
            "baseName": "price",
            "type": "number"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "Package.TypeEnum"
        },
        {
            "name": "qty",
            "baseName": "qty",
            "type": "number"
        },
        {
            "name": "expiryPeriod",
            "baseName": "expiry_period",
            "type": "Package.ExpiryPeriodEnum"
        },
        {
            "name": "expiryLength",
            "baseName": "expiry_length",
            "type": "number"
        },
        {
            "name": "custom",
            "baseName": "custom",
            "type": "object"
        }    ];

    static getAttributeTypeMap() {
        return Package.attributeTypeMap;
    }
}

export namespace Package {
    export enum TypeEnum {
        Single = <any> 'single',
        Subscription = <any> 'subscription'
    }
    export enum ExpiryPeriodEnum {
        Day = <any> 'day',
        Month = <any> 'month',
        Year = <any> 'year'
    }
}
