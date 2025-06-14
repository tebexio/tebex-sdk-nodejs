/**
 * Tebex Headless API
 * The headless API is designed for implementing your own store frontend with the data of your store. You are able to call the Headless API directly from a web browser (such as within an SPA), or from a backend server, such as for in-game GUIs.
 *
 * The version of the OpenAPI document: 1.1.0
 * Contact: tebex-integrations@overwolf.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { Package } from './package';
import { TierPendingDowngradePackage } from './tierPendingDowngradePackage';
import { TierStatus } from './tierStatus';

export class Tier {
    'id'?: number;
    /**
    * The date and time when the tier became active
    */
    'createdAt'?: Date;
    /**
    * The user\'s username ID. For Steam, this is a numeric representation of their Steam64ID
    */
    'usernameId'?: string;
    '_package'?: Package;
    /**
    * True if the tier is currently active.
    */
    'active'?: boolean;
    /**
    * The ID of the recurring payment this tier is attached to.
    */
    'recurringPaymentReference'?: string;
    /**
    * The date and time of the next payment for this tier.
    */
    'nextPaymentDate'?: Date;
    'status'?: TierStatus;
    'pendingDowngradePackage'?: TierPendingDowngradePackage | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number"
        },
        {
            "name": "createdAt",
            "baseName": "created_at",
            "type": "Date"
        },
        {
            "name": "usernameId",
            "baseName": "username_id",
            "type": "string"
        },
        {
            "name": "_package",
            "baseName": "package",
            "type": "Package"
        },
        {
            "name": "active",
            "baseName": "active",
            "type": "boolean"
        },
        {
            "name": "recurringPaymentReference",
            "baseName": "recurring_payment_reference",
            "type": "string"
        },
        {
            "name": "nextPaymentDate",
            "baseName": "next_payment_date",
            "type": "Date"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "TierStatus"
        },
        {
            "name": "pendingDowngradePackage",
            "baseName": "pending_downgrade_package",
            "type": "TierPendingDowngradePackage"
        }    ];

    static getAttributeTypeMap() {
        return Tier.attributeTypeMap;
    }
}

