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
import { PackageCategory } from './packageCategory';

export class Package {
    'id'?: number;
    'name'?: string;
    'description'?: string;
    'image'?: string | null;
    'type'?: string;
    'category'?: PackageCategory;
    'basePrice'?: number;
    'salesTax'?: number;
    'totalPrice'?: number;
    'currency'?: string;
    'discount'?: number;
    'disableQuantity'?: boolean;
    'disableGifting'?: boolean;
    'expirationDate'?: Date | null;
    'createdAt'?: Date;
    'updatedAt'?: Date;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "image",
            "baseName": "image",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string"
        },
        {
            "name": "category",
            "baseName": "category",
            "type": "PackageCategory"
        },
        {
            "name": "basePrice",
            "baseName": "base_price",
            "type": "number"
        },
        {
            "name": "salesTax",
            "baseName": "sales_tax",
            "type": "number"
        },
        {
            "name": "totalPrice",
            "baseName": "total_price",
            "type": "number"
        },
        {
            "name": "currency",
            "baseName": "currency",
            "type": "string"
        },
        {
            "name": "discount",
            "baseName": "discount",
            "type": "number"
        },
        {
            "name": "disableQuantity",
            "baseName": "disable_quantity",
            "type": "boolean"
        },
        {
            "name": "disableGifting",
            "baseName": "disable_gifting",
            "type": "boolean"
        },
        {
            "name": "expirationDate",
            "baseName": "expiration_date",
            "type": "Date"
        },
        {
            "name": "createdAt",
            "baseName": "created_at",
            "type": "Date"
        },
        {
            "name": "updatedAt",
            "baseName": "updated_at",
            "type": "Date"
        }    ];

    static getAttributeTypeMap() {
        return Package.attributeTypeMap;
    }
}
