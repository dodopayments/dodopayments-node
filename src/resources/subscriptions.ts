// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import * as PaymentsAPI from './payments';
import { DefaultPageNumberPagination, type DefaultPageNumberPaginationParams } from '../pagination';

export class Subscriptions extends APIResource {
  create(
    body: SubscriptionCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SubscriptionCreateResponse> {
    return this._client.post('/subscriptions', { body, ...options });
  }

  retrieve(subscriptionId: string, options?: Core.RequestOptions): Core.APIPromise<Subscription> {
    return this._client.get(`/subscriptions/${subscriptionId}`, options);
  }

  update(
    subscriptionId: string,
    body: SubscriptionUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Subscription> {
    return this._client.patch(`/subscriptions/${subscriptionId}`, { body, ...options });
  }

  list(
    query?: SubscriptionListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<SubscriptionsDefaultPageNumberPagination, Subscription>;
  list(
    options?: Core.RequestOptions,
  ): Core.PagePromise<SubscriptionsDefaultPageNumberPagination, Subscription>;
  list(
    query: SubscriptionListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<SubscriptionsDefaultPageNumberPagination, Subscription> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.getAPIList('/subscriptions', SubscriptionsDefaultPageNumberPagination, {
      query,
      ...options,
    });
  }
}

export class SubscriptionsDefaultPageNumberPagination extends DefaultPageNumberPagination<Subscription> {}

/**
 * Response struct representing subscription details
 */
export interface Subscription {
  /**
   * Timestamp when the subscription was created
   */
  created_at: string;

  currency:
    | 'AED'
    | 'ALL'
    | 'AMD'
    | 'ANG'
    | 'AOA'
    | 'ARS'
    | 'AUD'
    | 'AWG'
    | 'AZN'
    | 'BAM'
    | 'BBD'
    | 'BDT'
    | 'BGN'
    | 'BHD'
    | 'BIF'
    | 'BMD'
    | 'BND'
    | 'BOB'
    | 'BRL'
    | 'BSD'
    | 'BWP'
    | 'BYN'
    | 'BZD'
    | 'CAD'
    | 'CHF'
    | 'CLP'
    | 'CNY'
    | 'COP'
    | 'CRC'
    | 'CUP'
    | 'CVE'
    | 'CZK'
    | 'DJF'
    | 'DKK'
    | 'DOP'
    | 'DZD'
    | 'EGP'
    | 'ETB'
    | 'EUR'
    | 'FJD'
    | 'FKP'
    | 'GBP'
    | 'GEL'
    | 'GHS'
    | 'GIP'
    | 'GMD'
    | 'GNF'
    | 'GTQ'
    | 'GYD'
    | 'HKD'
    | 'HNL'
    | 'HRK'
    | 'HTG'
    | 'HUF'
    | 'IDR'
    | 'ILS'
    | 'INR'
    | 'IQD'
    | 'JMD'
    | 'JOD'
    | 'JPY'
    | 'KES'
    | 'KGS'
    | 'KHR'
    | 'KMF'
    | 'KRW'
    | 'KWD'
    | 'KYD'
    | 'KZT'
    | 'LAK'
    | 'LBP'
    | 'LKR'
    | 'LRD'
    | 'LSL'
    | 'LYD'
    | 'MAD'
    | 'MDL'
    | 'MGA'
    | 'MKD'
    | 'MMK'
    | 'MNT'
    | 'MOP'
    | 'MRU'
    | 'MUR'
    | 'MVR'
    | 'MWK'
    | 'MXN'
    | 'MYR'
    | 'MZN'
    | 'NAD'
    | 'NGN'
    | 'NIO'
    | 'NOK'
    | 'NPR'
    | 'NZD'
    | 'OMR'
    | 'PAB'
    | 'PEN'
    | 'PGK'
    | 'PHP'
    | 'PKR'
    | 'PLN'
    | 'PYG'
    | 'QAR'
    | 'RON'
    | 'RSD'
    | 'RUB'
    | 'RWF'
    | 'SAR'
    | 'SBD'
    | 'SCR'
    | 'SEK'
    | 'SGD'
    | 'SHP'
    | 'SLE'
    | 'SLL'
    | 'SOS'
    | 'SRD'
    | 'SSP'
    | 'STN'
    | 'SVC'
    | 'SZL'
    | 'THB'
    | 'TND'
    | 'TOP'
    | 'TRY'
    | 'TTD'
    | 'TWD'
    | 'TZS'
    | 'UAH'
    | 'UGX'
    | 'USD'
    | 'UYU'
    | 'UZS'
    | 'VES'
    | 'VND'
    | 'VUV'
    | 'WST'
    | 'XAF'
    | 'XCD'
    | 'XOF'
    | 'XPF'
    | 'YER'
    | 'ZAR'
    | 'ZMW';

  customer: PaymentsAPI.CustomerLimitedDetails;

  metadata: Record<string, string>;

  /**
   * Timestamp of the next scheduled billing
   */
  next_billing_date: string;

  /**
   * Number of payment frequency intervals
   */
  payment_frequency_count: number;

  payment_frequency_interval: TimeInterval;

  /**
   * Identifier of the product associated with this subscription
   */
  product_id: string;

  /**
   * Number of units/items included in the subscription
   */
  quantity: number;

  /**
   * Amount charged before tax for each recurring payment in smallest currency unit
   * (e.g. cents)
   */
  recurring_pre_tax_amount: number;

  status: SubscriptionStatus;

  /**
   * Unique identifier for the subscription
   */
  subscription_id: string;

  /**
   * Number of subscription period intervals
   */
  subscription_period_count: number;

  subscription_period_interval: TimeInterval;

  /**
   * Indicates if the recurring_pre_tax_amount is tax inclusive
   */
  tax_inclusive: boolean;

  /**
   * Number of days in the trial period (0 if no trial)
   */
  trial_period_days: number;

  /**
   * Cancelled timestamp if the subscription is cancelled
   */
  cancelled_at?: string | null;

  /**
   * The discount id if discount is applied
   */
  discount_id?: string | null;
}

export type SubscriptionStatus =
  | 'pending'
  | 'active'
  | 'on_hold'
  | 'paused'
  | 'cancelled'
  | 'failed'
  | 'expired';

export type TimeInterval = 'Day' | 'Week' | 'Month' | 'Year';

export interface SubscriptionCreateResponse {
  customer: PaymentsAPI.CustomerLimitedDetails;

  metadata: Record<string, string>;

  /**
   * Tax will be added to the amount and charged to the customer on each billing
   * cycle
   */
  recurring_pre_tax_amount: number;

  /**
   * Unique identifier for the subscription
   */
  subscription_id: string;

  /**
   * Client secret used to load Dodo checkout SDK NOTE : Dodo checkout SDK will be
   * coming soon
   */
  client_secret?: string | null;

  /**
   * The discount id if discount is applied
   */
  discount_id?: string | null;

  /**
   * URL to checkout page
   */
  payment_link?: string | null;
}

export interface SubscriptionCreateParams {
  billing: PaymentsAPI.BillingAddress;

  customer: PaymentsAPI.CustomerRequest;

  /**
   * Unique identifier of the product to subscribe to
   */
  product_id: string;

  /**
   * Number of units to subscribe for. Must be at least 1.
   */
  quantity: number;

  /**
   * Discount Code to apply to the subscription
   */
  discount_code?: string | null;

  metadata?: Record<string, string>;

  /**
   * If true, generates a payment link. Defaults to false if not specified.
   */
  payment_link?: boolean | null;

  /**
   * Optional URL to redirect after successful subscription creation
   */
  return_url?: string | null;

  /**
   * Tax ID in case the payment is B2B. If tax id validation fails the payment
   * creation will fail
   */
  tax_id?: string | null;

  /**
   * Optional trial period in days If specified, this value overrides the trial
   * period set in the product's price Must be between 0 and 10000 days
   */
  trial_period_days?: number | null;
}

export interface SubscriptionUpdateParams {
  metadata?: Record<string, string> | null;

  status?: SubscriptionStatus | null;
}

export interface SubscriptionListParams extends DefaultPageNumberPaginationParams {
  /**
   * Get events after this created time
   */
  created_at_gte?: string | null;

  /**
   * Get events created before this time
   */
  created_at_lte?: string | null;

  /**
   * Filter by customer id
   */
  customer_id?: string | null;

  /**
   * Filter by status
   */
  status?: SubscriptionStatus | null;
}

Subscriptions.SubscriptionsDefaultPageNumberPagination = SubscriptionsDefaultPageNumberPagination;

export declare namespace Subscriptions {
  export {
    type Subscription as Subscription,
    type SubscriptionStatus as SubscriptionStatus,
    type TimeInterval as TimeInterval,
    type SubscriptionCreateResponse as SubscriptionCreateResponse,
    SubscriptionsDefaultPageNumberPagination as SubscriptionsDefaultPageNumberPagination,
    type SubscriptionCreateParams as SubscriptionCreateParams,
    type SubscriptionUpdateParams as SubscriptionUpdateParams,
    type SubscriptionListParams as SubscriptionListParams,
  };
}
