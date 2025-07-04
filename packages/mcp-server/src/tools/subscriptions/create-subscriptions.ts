// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'dodopayments-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import DodoPayments from 'dodopayments';

export const metadata: Metadata = {
  resource: 'subscriptions',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/subscriptions',
  operationId: 'create_subscription_handler',
};

export const tool: Tool = {
  name: 'create_subscriptions',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      billing: {
        $ref: '#/$defs/billing_address',
      },
      customer: {
        $ref: '#/$defs/customer_request',
      },
      product_id: {
        type: 'string',
        description: 'Unique identifier of the product to subscribe to',
      },
      quantity: {
        type: 'integer',
        description: 'Number of units to subscribe for. Must be at least 1.',
      },
      addons: {
        type: 'array',
        description: 'Attach addons to this subscription',
        items: {
          type: 'object',
          properties: {
            addon_id: {
              type: 'string',
            },
            quantity: {
              type: 'integer',
            },
          },
          required: ['addon_id', 'quantity'],
        },
      },
      allowed_payment_method_types: {
        type: 'array',
        description:
          'List of payment methods allowed during checkout.\n\nCustomers will **never** see payment methods that are **not** in this list.\nHowever, adding a method here **does not guarantee** customers will see it.\nAvailability still depends on other factors (e.g., customer location, merchant settings).',
        items: {
          type: 'string',
          enum: [
            'credit',
            'debit',
            'upi_collect',
            'upi_intent',
            'apple_pay',
            'cashapp',
            'google_pay',
            'multibanco',
            'bancontact_card',
            'eps',
            'ideal',
            'przelewy24',
            'affirm',
            'klarna',
            'sepa',
            'ach',
            'amazon_pay',
            'afterpay_clearpay',
          ],
        },
      },
      billing_currency: {
        $ref: '#/$defs/currency',
      },
      discount_code: {
        type: 'string',
        description: 'Discount Code to apply to the subscription',
      },
      metadata: {
        type: 'object',
        description: 'Additional metadata for the subscription\nDefaults to empty if not specified',
      },
      on_demand: {
        type: 'object',
        properties: {
          mandate_only: {
            type: 'boolean',
            description:
              'If set as True, does not perform any charge and only authorizes payment method details for future use.',
          },
          product_price: {
            type: 'integer',
            description:
              'Product price for the initial charge to customer\nIf not specified the stored price of the product will be used\nRepresented in the lowest denomination of the currency (e.g., cents for USD).\nFor example, to charge $1.00, pass `100`.',
          },
        },
        required: ['mandate_only'],
      },
      payment_link: {
        type: 'boolean',
        description: 'If true, generates a payment link.\nDefaults to false if not specified.',
      },
      return_url: {
        type: 'string',
        description: 'Optional URL to redirect after successful subscription creation',
      },
      show_saved_payment_methods: {
        type: 'boolean',
        description: 'Display saved payment methods of a returning customer\nFalse by default',
      },
      tax_id: {
        type: 'string',
        description:
          'Tax ID in case the payment is B2B. If tax id validation fails the payment creation will fail',
      },
      trial_period_days: {
        type: 'integer',
        description:
          "Optional trial period in days\nIf specified, this value overrides the trial period set in the product's price\nMust be between 0 and 10000 days",
      },
    },
    $defs: {
      billing_address: {
        type: 'object',
        properties: {
          city: {
            type: 'string',
            description: 'City name',
          },
          country: {
            $ref: '#/$defs/country_code',
          },
          state: {
            type: 'string',
            description: 'State or province name',
          },
          street: {
            type: 'string',
            description: 'Street address including house number and unit/apartment if applicable',
          },
          zipcode: {
            type: 'string',
            description: 'Postal code or ZIP code',
          },
        },
        required: ['city', 'country', 'state', 'street', 'zipcode'],
      },
      country_code: {
        type: 'string',
        description: 'ISO country code alpha2 variant',
        enum: [
          'AF',
          'AX',
          'AL',
          'DZ',
          'AS',
          'AD',
          'AO',
          'AI',
          'AQ',
          'AG',
          'AR',
          'AM',
          'AW',
          'AU',
          'AT',
          'AZ',
          'BS',
          'BH',
          'BD',
          'BB',
          'BY',
          'BE',
          'BZ',
          'BJ',
          'BM',
          'BT',
          'BO',
          'BQ',
          'BA',
          'BW',
          'BV',
          'BR',
          'IO',
          'BN',
          'BG',
          'BF',
          'BI',
          'KH',
          'CM',
          'CA',
          'CV',
          'KY',
          'CF',
          'TD',
          'CL',
          'CN',
          'CX',
          'CC',
          'CO',
          'KM',
          'CG',
          'CD',
          'CK',
          'CR',
          'CI',
          'HR',
          'CU',
          'CW',
          'CY',
          'CZ',
          'DK',
          'DJ',
          'DM',
          'DO',
          'EC',
          'EG',
          'SV',
          'GQ',
          'ER',
          'EE',
          'ET',
          'FK',
          'FO',
          'FJ',
          'FI',
          'FR',
          'GF',
          'PF',
          'TF',
          'GA',
          'GM',
          'GE',
          'DE',
          'GH',
          'GI',
          'GR',
          'GL',
          'GD',
          'GP',
          'GU',
          'GT',
          'GG',
          'GN',
          'GW',
          'GY',
          'HT',
          'HM',
          'VA',
          'HN',
          'HK',
          'HU',
          'IS',
          'IN',
          'ID',
          'IR',
          'IQ',
          'IE',
          'IM',
          'IL',
          'IT',
          'JM',
          'JP',
          'JE',
          'JO',
          'KZ',
          'KE',
          'KI',
          'KP',
          'KR',
          'KW',
          'KG',
          'LA',
          'LV',
          'LB',
          'LS',
          'LR',
          'LY',
          'LI',
          'LT',
          'LU',
          'MO',
          'MK',
          'MG',
          'MW',
          'MY',
          'MV',
          'ML',
          'MT',
          'MH',
          'MQ',
          'MR',
          'MU',
          'YT',
          'MX',
          'FM',
          'MD',
          'MC',
          'MN',
          'ME',
          'MS',
          'MA',
          'MZ',
          'MM',
          'NA',
          'NR',
          'NP',
          'NL',
          'NC',
          'NZ',
          'NI',
          'NE',
          'NG',
          'NU',
          'NF',
          'MP',
          'NO',
          'OM',
          'PK',
          'PW',
          'PS',
          'PA',
          'PG',
          'PY',
          'PE',
          'PH',
          'PN',
          'PL',
          'PT',
          'PR',
          'QA',
          'RE',
          'RO',
          'RU',
          'RW',
          'BL',
          'SH',
          'KN',
          'LC',
          'MF',
          'PM',
          'VC',
          'WS',
          'SM',
          'ST',
          'SA',
          'SN',
          'RS',
          'SC',
          'SL',
          'SG',
          'SX',
          'SK',
          'SI',
          'SB',
          'SO',
          'ZA',
          'GS',
          'SS',
          'ES',
          'LK',
          'SD',
          'SR',
          'SJ',
          'SZ',
          'SE',
          'CH',
          'SY',
          'TW',
          'TJ',
          'TZ',
          'TH',
          'TL',
          'TG',
          'TK',
          'TO',
          'TT',
          'TN',
          'TR',
          'TM',
          'TC',
          'TV',
          'UG',
          'UA',
          'AE',
          'GB',
          'UM',
          'US',
          'UY',
          'UZ',
          'VU',
          'VE',
          'VN',
          'VG',
          'VI',
          'WF',
          'EH',
          'YE',
          'ZM',
          'ZW',
        ],
      },
      customer_request: {
        anyOf: [
          {
            $ref: '#/$defs/attach_existing_customer',
          },
          {
            $ref: '#/$defs/create_new_customer',
          },
        ],
      },
      attach_existing_customer: {
        type: 'object',
        title: 'Attach Existing Customer',
        properties: {
          customer_id: {
            type: 'string',
          },
        },
        required: ['customer_id'],
      },
      create_new_customer: {
        type: 'object',
        title: 'Create New Customer',
        properties: {
          email: {
            type: 'string',
          },
          name: {
            type: 'string',
          },
          create_new_customer: {
            type: 'boolean',
            description:
              'When false, the most recently created customer object with the given email is used if exists.\nWhen true, a new customer object is always created\nFalse by default',
          },
          phone_number: {
            type: 'string',
          },
        },
        required: ['email', 'name'],
      },
      currency: {
        type: 'string',
        enum: [
          'AED',
          'ALL',
          'AMD',
          'ANG',
          'AOA',
          'ARS',
          'AUD',
          'AWG',
          'AZN',
          'BAM',
          'BBD',
          'BDT',
          'BGN',
          'BHD',
          'BIF',
          'BMD',
          'BND',
          'BOB',
          'BRL',
          'BSD',
          'BWP',
          'BYN',
          'BZD',
          'CAD',
          'CHF',
          'CLP',
          'CNY',
          'COP',
          'CRC',
          'CUP',
          'CVE',
          'CZK',
          'DJF',
          'DKK',
          'DOP',
          'DZD',
          'EGP',
          'ETB',
          'EUR',
          'FJD',
          'FKP',
          'GBP',
          'GEL',
          'GHS',
          'GIP',
          'GMD',
          'GNF',
          'GTQ',
          'GYD',
          'HKD',
          'HNL',
          'HRK',
          'HTG',
          'HUF',
          'IDR',
          'ILS',
          'INR',
          'IQD',
          'JMD',
          'JOD',
          'JPY',
          'KES',
          'KGS',
          'KHR',
          'KMF',
          'KRW',
          'KWD',
          'KYD',
          'KZT',
          'LAK',
          'LBP',
          'LKR',
          'LRD',
          'LSL',
          'LYD',
          'MAD',
          'MDL',
          'MGA',
          'MKD',
          'MMK',
          'MNT',
          'MOP',
          'MRU',
          'MUR',
          'MVR',
          'MWK',
          'MXN',
          'MYR',
          'MZN',
          'NAD',
          'NGN',
          'NIO',
          'NOK',
          'NPR',
          'NZD',
          'OMR',
          'PAB',
          'PEN',
          'PGK',
          'PHP',
          'PKR',
          'PLN',
          'PYG',
          'QAR',
          'RON',
          'RSD',
          'RUB',
          'RWF',
          'SAR',
          'SBD',
          'SCR',
          'SEK',
          'SGD',
          'SHP',
          'SLE',
          'SLL',
          'SOS',
          'SRD',
          'SSP',
          'STN',
          'SVC',
          'SZL',
          'THB',
          'TND',
          'TOP',
          'TRY',
          'TTD',
          'TWD',
          'TZS',
          'UAH',
          'UGX',
          'USD',
          'UYU',
          'UZS',
          'VES',
          'VND',
          'VUV',
          'WST',
          'XAF',
          'XCD',
          'XOF',
          'XPF',
          'YER',
          'ZAR',
          'ZMW',
        ],
      },
    },
  },
};

export const handler = async (client: DodoPayments, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.subscriptions.create(body));
};

export default { metadata, tool, handler };
