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

export class Sale {
    /**
    * The name of the sale (displayed to the customer)
    */
    'name'?: string;
    /**
    * The type of discount, either `percentage` for deducting a percentage of each item, or `amount` to deduct a fixed amount from each item.
    */
    'discountType'?: Sale.DiscountTypeEnum;
    /**
    * The amount or percentage to deduct
    */
    'amount'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "discountType",
            "baseName": "discount_type",
            "type": "Sale.DiscountTypeEnum"
        },
        {
            "name": "amount",
            "baseName": "amount",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return Sale.attributeTypeMap;
    }
}

export namespace Sale {
    export enum DiscountTypeEnum {
        Percentage = <any> 'percentage',
        Amount = <any> 'amount'
    }
}
