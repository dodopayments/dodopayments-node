// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'dodopayments-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import DodoPayments from 'dodopayments';

export const metadata: Metadata = {
  resource: 'products',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/products',
  operationId: 'list_products_handler',
};

export const tool: Tool = {
  name: 'list_products',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      archived: {
        type: 'boolean',
        description: 'List archived products',
      },
      brand_id: {
        type: 'string',
        description: 'filter by Brand id',
      },
      page_number: {
        type: 'integer',
        description: 'Page number default is 0',
      },
      page_size: {
        type: 'integer',
        description: 'Page size default is 10 max is 100',
      },
      recurring: {
        type: 'boolean',
        description:
          'Filter products by pricing type:\n- `true`: Show only recurring pricing products (e.g. subscriptions)\n- `false`: Show only one-time price products\n- `null` or absent: Show both types of products',
      },
    },
  },
};

export const handler = async (client: DodoPayments, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.products.list(body));
};

export default { metadata, tool, handler };
