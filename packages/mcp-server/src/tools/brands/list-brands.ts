// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'dodopayments-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import DodoPayments from 'dodopayments';

export const metadata: Metadata = {
  resource: 'brands',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/brands',
  operationId: 'list_brands_handler',
};

export const tool: Tool = {
  name: 'list_brands',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

export const handler = async (client: DodoPayments, args: Record<string, unknown> | undefined) => {
  return asTextContentResult(await client.brands.list());
};

export default { metadata, tool, handler };
