// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';

export class CustomerPortal extends APIResource {
  create(
    customerId: string,
    params?: CustomerPortalCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void>;
  create(customerId: string, options?: Core.RequestOptions): Core.APIPromise<void>;
  create(
    customerId: string,
    params: CustomerPortalCreateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    if (isRequestOptions(params)) {
      return this.create(customerId, {}, params);
    }
    const { send_email } = params;
    return this._client.post(`/customers/${customerId}/customer-portal/session`, {
      query: { send_email },
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface CustomerPortalCreateParams {
  /**
   * If true, will send link to user.
   */
  send_email?: boolean | null;
}

export declare namespace CustomerPortal {
  export { type CustomerPortalCreateParams as CustomerPortalCreateParams };
}
