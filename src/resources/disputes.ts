// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import { DefaultPageNumberPagination, type DefaultPageNumberPaginationParams } from '../pagination';

export class Disputes extends APIResource {
  retrieve(disputeId: string, options?: Core.RequestOptions): Core.APIPromise<Dispute> {
    return this._client.get(`/disputes/${disputeId}`, options);
  }

  list(
    query?: DisputeListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<DisputesDefaultPageNumberPagination, Dispute>;
  list(options?: Core.RequestOptions): Core.PagePromise<DisputesDefaultPageNumberPagination, Dispute>;
  list(
    query: DisputeListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<DisputesDefaultPageNumberPagination, Dispute> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.getAPIList('/disputes', DisputesDefaultPageNumberPagination, { query, ...options });
  }
}

export class DisputesDefaultPageNumberPagination extends DefaultPageNumberPagination<Dispute> {}

export interface Dispute {
  /**
   * The amount involved in the dispute, represented as a string to accommodate
   * precision.
   */
  amount: string;

  /**
   * The unique identifier of the business involved in the dispute.
   */
  business_id: string;

  /**
   * The timestamp of when the dispute was created, in UTC.
   */
  created_at: string;

  /**
   * The currency of the disputed amount, represented as an ISO 4217 currency code.
   */
  currency: string;

  /**
   * The unique identifier of the dispute.
   */
  dispute_id: string;

  dispute_stage: DisputeStage;

  dispute_status: DisputeStatus;

  /**
   * The unique identifier of the payment associated with the dispute.
   */
  payment_id: string;
}

export type DisputeStage = 'pre_dispute' | 'dispute' | 'pre_arbitration';

export type DisputeStatus =
  | 'dispute_opened'
  | 'dispute_expired'
  | 'dispute_accepted'
  | 'dispute_cancelled'
  | 'dispute_challenged'
  | 'dispute_won'
  | 'dispute_lost';

export interface DisputeListParams extends DefaultPageNumberPaginationParams {
  /**
   * Get events after this created time
   */
  created_at_gte?: string | null;

  /**
   * Get events created before this time
   */
  created_at_lte?: string | null;

  /**
   * Filter by customer_id
   */
  customer_id?: string | null;

  /**
   * Filter by dispute stage
   */
  dispute_stage?: DisputeStage | null;

  /**
   * Filter by dispute status
   */
  dispute_status?: DisputeStatus | null;
}

Disputes.DisputesDefaultPageNumberPagination = DisputesDefaultPageNumberPagination;

export declare namespace Disputes {
  export {
    type Dispute as Dispute,
    type DisputeStage as DisputeStage,
    type DisputeStatus as DisputeStatus,
    DisputesDefaultPageNumberPagination as DisputesDefaultPageNumberPagination,
    type DisputeListParams as DisputeListParams,
  };
}
