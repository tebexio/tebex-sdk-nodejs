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
import { Webstore } from './webstore';

export class WebstoreResponseData {
    'schema'?: Webstore;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "schema",
            "baseName": "schema",
            "type": "Webstore"
        }    ];

    static getAttributeTypeMap() {
        return WebstoreResponseData.attributeTypeMap;
    }
}

