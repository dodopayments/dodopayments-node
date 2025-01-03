// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import * as SupportedCountriesAPI from './misc/supported-countries';
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

export interface Subscription {
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

  customer: Subscription.Customer;

  metadata: Record<string, string>;

  next_billing_date: string;

  payment_frequency_count: number;

  payment_frequency_interval: 'Day' | 'Week' | 'Month' | 'Year';

  product_id: string;

  quantity: number;

  recurring_pre_tax_amount: number;

  status: 'pending' | 'active' | 'on_hold' | 'paused' | 'cancelled' | 'failed' | 'expired';

  subscription_id: string;

  subscription_period_count: number;

  subscription_period_interval: 'Day' | 'Week' | 'Month' | 'Year';

  trial_period_days: number;
}

export namespace Subscription {
  export interface Customer {
    customer_id: string;

    email: string;

    name: string;
  }
}

export interface SubscriptionCreateResponse {
  customer: SubscriptionCreateResponse.Customer;

  metadata: Record<string, string>;

  recurring_pre_tax_amount: number;

  subscription_id: string;

  client_secret?: string | null;

  payment_link?: string | null;
}

export namespace SubscriptionCreateResponse {
  export interface Customer {
    customer_id: string;

    email: string;

    name: string;
  }
}

export interface SubscriptionCreateParams {
  billing: SubscriptionCreateParams.Billing;

  customer: SubscriptionCreateParams.AttachExistingCustomer | SubscriptionCreateParams.CreateNewCustomer;

  product_id: string;

  quantity: number;

  metadata?: Record<string, string>;

  /**
   * False by default
   */
  payment_link?: boolean | null;

  return_url?: string | null;

  /**
   * If specified this will override the trial period days given in the products
   * price
   */
  trial_period_days?: number | null;
}

export namespace SubscriptionCreateParams {
  export interface Billing {
    city: string;

    /**
     * ISO country code alpha2 variant
     */
    country: SupportedCountriesAPI.CountryCode;

    state: string;

    street: string;

    zipcode: number;
  }

  export interface AttachExistingCustomer {
    customer_id: string;
  }

  export interface CreateNewCustomer {
    email: string;

    name: string;

    /**
     * When true, the most recently created customer object with the given email is
     * used if exists. False by default
     */
    create_new_customer?: boolean;

    phone_number?: string | null;
  }
}

export interface SubscriptionUpdateParams {
  metadata?: Record<string, string> | null;

  status?: 'pending' | 'active' | 'on_hold' | 'paused' | 'cancelled' | 'failed' | 'expired' | null;
}

export interface SubscriptionListParams extends DefaultPageNumberPaginationParams {}

Subscriptions.SubscriptionsDefaultPageNumberPagination = SubscriptionsDefaultPageNumberPagination;

export declare namespace Subscriptions {
  export {
    type Subscription as Subscription,
    type SubscriptionCreateResponse as SubscriptionCreateResponse,
    SubscriptionsDefaultPageNumberPagination as SubscriptionsDefaultPageNumberPagination,
    type SubscriptionCreateParams as SubscriptionCreateParams,
    type SubscriptionUpdateParams as SubscriptionUpdateParams,
    type SubscriptionListParams as SubscriptionListParams,
  };
}
