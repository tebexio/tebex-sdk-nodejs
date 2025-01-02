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
import { Sale } from './sale';

export class PriceDetails {
    'fullPrice'?: number;
    'subTotal'?: number;
    'discounts'?: Array<object>;
    'total'?: number;
    'tax'?: number;
    'balance'?: number;
    'sales'?: Array<Sale>;
    'giftcards'?: Array<object>;
    /**
    * Contains recurring amount. Limited to 1 subscription package in the basket at a time.
    */
    'recurring'?: boolean;
    'username'?: string;
    'roundUp'?: number | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "fullPrice",
            "baseName": "fullPrice",
            "type": "number"
        },
        {
            "name": "subTotal",
            "baseName": "subTotal",
            "type": "number"
        },
        {
            "name": "discounts",
            "baseName": "discounts",
            "type": "Array<object>"
        },
        {
            "name": "total",
            "baseName": "total",
            "type": "number"
        },
        {
            "name": "tax",
            "baseName": "tax",
            "type": "number"
        },
        {
            "name": "balance",
            "baseName": "balance",
            "type": "number"
        },
        {
            "name": "sales",
            "baseName": "sales",
            "type": "Array<Sale>"
        },
        {
            "name": "giftcards",
            "baseName": "giftcards",
            "type": "Array<object>"
        },
        {
            "name": "recurring",
            "baseName": "recurring",
            "type": "boolean"
        },
        {
            "name": "username",
            "baseName": "username",
            "type": "string"
        },
        {
            "name": "roundUp",
            "baseName": "roundUp",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return PriceDetails.attributeTypeMap;
    }
}
