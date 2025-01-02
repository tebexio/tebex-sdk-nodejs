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
import { PaymentSubject } from './paymentSubject';
import { RecurringPaymentSubjectPrice } from './recurringPaymentSubjectPrice';
import { RecurringPaymentSubjectStatus } from './recurringPaymentSubjectStatus';

export class RecurringPaymentSubject {
    'reference'?: string;
    'createdAt'?: Date;
    'pausedAt'?: Date | null;
    'pausedUntil'?: Date | null;
    'nextPaymentAt'?: Date;
    'status'?: RecurringPaymentSubjectStatus;
    'initialPayment'?: PaymentSubject;
    'lastPayment'?: PaymentSubject;
    'failCount'?: number;
    'price'?: RecurringPaymentSubjectPrice;
    'cancelledAt'?: Date | null;
    'cancelReason'?: string | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "reference",
            "baseName": "reference",
            "type": "string"
        },
        {
            "name": "createdAt",
            "baseName": "created_at",
            "type": "Date"
        },
        {
            "name": "pausedAt",
            "baseName": "paused_at",
            "type": "Date"
        },
        {
            "name": "pausedUntil",
            "baseName": "paused_until",
            "type": "Date"
        },
        {
            "name": "nextPaymentAt",
            "baseName": "next_payment_at",
            "type": "Date"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "RecurringPaymentSubjectStatus"
        },
        {
            "name": "initialPayment",
            "baseName": "initial_payment",
            "type": "PaymentSubject"
        },
        {
            "name": "lastPayment",
            "baseName": "last_payment",
            "type": "PaymentSubject"
        },
        {
            "name": "failCount",
            "baseName": "fail_count",
            "type": "number"
        },
        {
            "name": "price",
            "baseName": "price",
            "type": "RecurringPaymentSubjectPrice"
        },
        {
            "name": "cancelledAt",
            "baseName": "cancelled_at",
            "type": "Date"
        },
        {
            "name": "cancelReason",
            "baseName": "cancel_reason",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return RecurringPaymentSubject.attributeTypeMap;
    }
}
