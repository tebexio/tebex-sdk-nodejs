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
import { Address } from './address';
import { BasketLinks } from './basketLinks';
import { BasketRow } from './basketRow';
import { Payment } from './payment';
import { PriceDetails } from './priceDetails';

export class Basket {
    'ident'?: string;
    'expire'?: string;
    'price'?: number;
    'priceDetails'?: PriceDetails;
    'isPaymentMethodUpdate'?: boolean;
    'returnUrl'?: string | null;
    'complete'?: boolean;
    'tax'?: number;
    'username'?: string | null;
    'emailImmutable'?: boolean;
    'discounts'?: Array<object>;
    'coupons'?: Array<object>;
    'giftcards'?: Array<object>;
    'address'?: Address;
    'rows'?: Array<BasketRow>;
    /**
    * Browser fingerprint to identify the user
    */
    'fingerprint'?: string | null;
    /**
    * The creator code is used to share a percentage of the payment with another party. See more about creator codes at https://docs.tebex.io/creators/tebex-control-panel/engagement/creator-codes
    */
    'creatorCode'?: string;
    'roundup'?: boolean | null;
    'cancelUrl'?: string;
    'completeUrl'?: string | null;
    'completeAutoRedirect'?: boolean;
    'recurringItems'?: Array<object>;
    'payment'?: Payment | null;
    'custom'?: object | null;
    'links'?: BasketLinks;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "ident",
            "baseName": "ident",
            "type": "string"
        },
        {
            "name": "expire",
            "baseName": "expire",
            "type": "string"
        },
        {
            "name": "price",
            "baseName": "price",
            "type": "number"
        },
        {
            "name": "priceDetails",
            "baseName": "priceDetails",
            "type": "PriceDetails"
        },
        {
            "name": "isPaymentMethodUpdate",
            "baseName": "isPaymentMethodUpdate",
            "type": "boolean"
        },
        {
            "name": "returnUrl",
            "baseName": "returnUrl",
            "type": "string"
        },
        {
            "name": "complete",
            "baseName": "complete",
            "type": "boolean"
        },
        {
            "name": "tax",
            "baseName": "tax",
            "type": "number"
        },
        {
            "name": "username",
            "baseName": "username",
            "type": "string"
        },
        {
            "name": "emailImmutable",
            "baseName": "email_immutable",
            "type": "boolean"
        },
        {
            "name": "discounts",
            "baseName": "discounts",
            "type": "Array<object>"
        },
        {
            "name": "coupons",
            "baseName": "coupons",
            "type": "Array<object>"
        },
        {
            "name": "giftcards",
            "baseName": "giftcards",
            "type": "Array<object>"
        },
        {
            "name": "address",
            "baseName": "address",
            "type": "Address"
        },
        {
            "name": "rows",
            "baseName": "rows",
            "type": "Array<BasketRow>"
        },
        {
            "name": "fingerprint",
            "baseName": "fingerprint",
            "type": "string"
        },
        {
            "name": "creatorCode",
            "baseName": "creator_code",
            "type": "string"
        },
        {
            "name": "roundup",
            "baseName": "roundup",
            "type": "boolean"
        },
        {
            "name": "cancelUrl",
            "baseName": "cancel_url",
            "type": "string"
        },
        {
            "name": "completeUrl",
            "baseName": "complete_url",
            "type": "string"
        },
        {
            "name": "completeAutoRedirect",
            "baseName": "complete_auto_redirect",
            "type": "boolean"
        },
        {
            "name": "recurringItems",
            "baseName": "recurring_items",
            "type": "Array<object>"
        },
        {
            "name": "payment",
            "baseName": "payment",
            "type": "Payment"
        },
        {
            "name": "custom",
            "baseName": "custom",
            "type": "object"
        },
        {
            "name": "links",
            "baseName": "links",
            "type": "BasketLinks"
        }    ];

    static getAttributeTypeMap() {
        return Basket.attributeTypeMap;
    }
}

