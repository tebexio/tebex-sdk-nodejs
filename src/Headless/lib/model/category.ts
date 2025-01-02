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
import { Package } from './package';

export class Category {
    'id'?: number;
    /**
    * User-friendly name of the category
    */
    'name'?: string;
    /**
    * Short identifier slug for the category
    */
    'slug'?: string | null;
    /**
    * Parent category, if applicable
    */
    'parent'?: object | null;
    /**
    * HTML description of the category
    */
    'description'?: string;
    'packages'?: Array<Package> | null;
    /**
    * The numeric order in which to display the category.
    */
    'order'?: number;
    /**
    * How the category should be displayed
    */
    'displayType'?: Category.DisplayTypeEnum;

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
            "name": "slug",
            "baseName": "slug",
            "type": "string"
        },
        {
            "name": "parent",
            "baseName": "parent",
            "type": "object"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "packages",
            "baseName": "packages",
            "type": "Array<Package>"
        },
        {
            "name": "order",
            "baseName": "order",
            "type": "number"
        },
        {
            "name": "displayType",
            "baseName": "display_type",
            "type": "Category.DisplayTypeEnum"
        }    ];

    static getAttributeTypeMap() {
        return Category.attributeTypeMap;
    }
}

export namespace Category {
    export enum DisplayTypeEnum {
        List = <any> 'list',
        Grid = <any> 'grid'
    }
}
