// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { AbstractPage, Response, APIClient, FinalRequestOptions, PageInfo } from './core';

export interface DefaultPageNumberPaginationResponse<Item> {
  items: Array<Item>;
}

export interface DefaultPageNumberPaginationParams {
  page_number?: number;

  page_size?: number;
}

export class DefaultPageNumberPagination<Item>
  extends AbstractPage<Item>
  implements DefaultPageNumberPaginationResponse<Item>
{
  items: Array<Item>;

  constructor(
    client: APIClient,
    response: Response,
    body: DefaultPageNumberPaginationResponse<Item>,
    options: FinalRequestOptions,
  ) {
    super(client, response, body, options);

    this.items = body.items || [];
  }

  getPaginatedItems(): Item[] {
    return this.items ?? [];
  }

  // @deprecated Please use `nextPageInfo()` instead
  nextPageParams(): Partial<DefaultPageNumberPaginationParams> | null {
    const info = this.nextPageInfo();
    if (!info) return null;
    if ('params' in info) return info.params;
    const params = Object.fromEntries(info.url.searchParams);
    if (!Object.keys(params).length) return null;
    return params;
  }

  nextPageInfo(): PageInfo | null {
    const query = this.options.query as DefaultPageNumberPaginationParams;
    const currentPage = query?.page_number ?? 1;

    return { params: { page_number: currentPage + 1 } };
  }
}
