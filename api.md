# Payments

Types:

- <code><a href="./src/resources/payments.ts">AttachExistingCustomer</a></code>
- <code><a href="./src/resources/payments.ts">BillingAddress</a></code>
- <code><a href="./src/resources/payments.ts">CreateNewCustomer</a></code>
- <code><a href="./src/resources/payments.ts">CustomerLimitedDetails</a></code>
- <code><a href="./src/resources/payments.ts">CustomerRequest</a></code>
- <code><a href="./src/resources/payments.ts">IntentStatus</a></code>
- <code><a href="./src/resources/payments.ts">OneTimeProductCartItem</a></code>
- <code><a href="./src/resources/payments.ts">Payment</a></code>
- <code><a href="./src/resources/payments.ts">PaymentCreateResponse</a></code>
- <code><a href="./src/resources/payments.ts">PaymentListResponse</a></code>
- <code><a href="./src/resources/payments.ts">PaymentRetrieveLineItemsResponse</a></code>

Methods:

- <code title="post /payments">client.payments.<a href="./src/resources/payments.ts">create</a>({ ...params }) -> PaymentCreateResponse</code>
- <code title="get /payments/{payment_id}">client.payments.<a href="./src/resources/payments.ts">retrieve</a>(paymentId) -> Payment</code>
- <code title="get /payments">client.payments.<a href="./src/resources/payments.ts">list</a>({ ...params }) -> PaymentListResponsesDefaultPageNumberPagination</code>
- <code title="get /payments/{payment_id}/line-items">client.payments.<a href="./src/resources/payments.ts">retrieveLineItems</a>(paymentId) -> PaymentRetrieveLineItemsResponse</code>

# Subscriptions

Types:

- <code><a href="./src/resources/subscriptions.ts">AddonCartResponseItem</a></code>
- <code><a href="./src/resources/subscriptions.ts">Subscription</a></code>
- <code><a href="./src/resources/subscriptions.ts">SubscriptionStatus</a></code>
- <code><a href="./src/resources/subscriptions.ts">TimeInterval</a></code>
- <code><a href="./src/resources/subscriptions.ts">SubscriptionCreateResponse</a></code>
- <code><a href="./src/resources/subscriptions.ts">SubscriptionListResponse</a></code>
- <code><a href="./src/resources/subscriptions.ts">SubscriptionChargeResponse</a></code>

Methods:

- <code title="post /subscriptions">client.subscriptions.<a href="./src/resources/subscriptions.ts">create</a>({ ...params }) -> SubscriptionCreateResponse</code>
- <code title="get /subscriptions/{subscription_id}">client.subscriptions.<a href="./src/resources/subscriptions.ts">retrieve</a>(subscriptionId) -> Subscription</code>
- <code title="patch /subscriptions/{subscription_id}">client.subscriptions.<a href="./src/resources/subscriptions.ts">update</a>(subscriptionId, { ...params }) -> Subscription</code>
- <code title="get /subscriptions">client.subscriptions.<a href="./src/resources/subscriptions.ts">list</a>({ ...params }) -> SubscriptionListResponsesDefaultPageNumberPagination</code>
- <code title="post /subscriptions/{subscription_id}/change-plan">client.subscriptions.<a href="./src/resources/subscriptions.ts">changePlan</a>(subscriptionId, { ...params }) -> void</code>
- <code title="post /subscriptions/{subscription_id}/charge">client.subscriptions.<a href="./src/resources/subscriptions.ts">charge</a>(subscriptionId, { ...params }) -> SubscriptionChargeResponse</code>

# Invoices

## Payments

Methods:

- <code title="get /invoices/payments/{payment_id}">client.invoices.payments.<a href="./src/resources/invoices/payments.ts">retrieve</a>(paymentId) -> Response</code>

# Licenses

Types:

- <code><a href="./src/resources/licenses.ts">LicenseValidateResponse</a></code>

Methods:

- <code title="post /licenses/activate">client.licenses.<a href="./src/resources/licenses.ts">activate</a>({ ...params }) -> LicenseKeyInstance</code>
- <code title="post /licenses/deactivate">client.licenses.<a href="./src/resources/licenses.ts">deactivate</a>({ ...params }) -> void</code>
- <code title="post /licenses/validate">client.licenses.<a href="./src/resources/licenses.ts">validate</a>({ ...params }) -> LicenseValidateResponse</code>

# LicenseKeys

Types:

- <code><a href="./src/resources/license-keys.ts">LicenseKey</a></code>
- <code><a href="./src/resources/license-keys.ts">LicenseKeyStatus</a></code>

Methods:

- <code title="get /license_keys/{id}">client.licenseKeys.<a href="./src/resources/license-keys.ts">retrieve</a>(id) -> LicenseKey</code>
- <code title="patch /license_keys/{id}">client.licenseKeys.<a href="./src/resources/license-keys.ts">update</a>(id, { ...params }) -> LicenseKey</code>
- <code title="get /license_keys">client.licenseKeys.<a href="./src/resources/license-keys.ts">list</a>({ ...params }) -> LicenseKeysDefaultPageNumberPagination</code>

# LicenseKeyInstances

Types:

- <code><a href="./src/resources/license-key-instances.ts">LicenseKeyInstance</a></code>

Methods:

- <code title="get /license_key_instances/{id}">client.licenseKeyInstances.<a href="./src/resources/license-key-instances.ts">retrieve</a>(id) -> LicenseKeyInstance</code>
- <code title="patch /license_key_instances/{id}">client.licenseKeyInstances.<a href="./src/resources/license-key-instances.ts">update</a>(id, { ...params }) -> LicenseKeyInstance</code>
- <code title="get /license_key_instances">client.licenseKeyInstances.<a href="./src/resources/license-key-instances.ts">list</a>({ ...params }) -> LicenseKeyInstancesDefaultPageNumberPagination</code>

# Customers

Types:

- <code><a href="./src/resources/customers/customers.ts">Customer</a></code>
- <code><a href="./src/resources/customers/customers.ts">CustomerPortalSession</a></code>

Methods:

- <code title="post /customers">client.customers.<a href="./src/resources/customers/customers.ts">create</a>({ ...params }) -> Customer</code>
- <code title="get /customers/{customer_id}">client.customers.<a href="./src/resources/customers/customers.ts">retrieve</a>(customerId) -> Customer</code>
- <code title="patch /customers/{customer_id}">client.customers.<a href="./src/resources/customers/customers.ts">update</a>(customerId, { ...params }) -> Customer</code>
- <code title="get /customers">client.customers.<a href="./src/resources/customers/customers.ts">list</a>({ ...params }) -> CustomersDefaultPageNumberPagination</code>

## CustomerPortal

Methods:

- <code title="post /customers/{customer_id}/customer-portal/session">client.customers.customerPortal.<a href="./src/resources/customers/customer-portal.ts">create</a>(customerId, { ...params }) -> CustomerPortalSession</code>

# Refunds

Types:

- <code><a href="./src/resources/refunds.ts">Refund</a></code>
- <code><a href="./src/resources/refunds.ts">RefundStatus</a></code>

Methods:

- <code title="post /refunds">client.refunds.<a href="./src/resources/refunds.ts">create</a>({ ...params }) -> Refund</code>
- <code title="get /refunds/{refund_id}">client.refunds.<a href="./src/resources/refunds.ts">retrieve</a>(refundId) -> Refund</code>
- <code title="get /refunds">client.refunds.<a href="./src/resources/refunds.ts">list</a>({ ...params }) -> RefundsDefaultPageNumberPagination</code>

# Disputes

Types:

- <code><a href="./src/resources/disputes.ts">Dispute</a></code>
- <code><a href="./src/resources/disputes.ts">DisputeStage</a></code>
- <code><a href="./src/resources/disputes.ts">DisputeStatus</a></code>
- <code><a href="./src/resources/disputes.ts">DisputeRetrieveResponse</a></code>
- <code><a href="./src/resources/disputes.ts">DisputeListResponse</a></code>

Methods:

- <code title="get /disputes/{dispute_id}">client.disputes.<a href="./src/resources/disputes.ts">retrieve</a>(disputeId) -> DisputeRetrieveResponse</code>
- <code title="get /disputes">client.disputes.<a href="./src/resources/disputes.ts">list</a>({ ...params }) -> DisputeListResponsesDefaultPageNumberPagination</code>

# Payouts

Types:

- <code><a href="./src/resources/payouts.ts">PayoutListResponse</a></code>

Methods:

- <code title="get /payouts">client.payouts.<a href="./src/resources/payouts.ts">list</a>({ ...params }) -> PayoutListResponsesDefaultPageNumberPagination</code>

# WebhookEvents

Types:

- <code><a href="./src/resources/webhook-events.ts">WebhookEvent</a></code>
- <code><a href="./src/resources/webhook-events.ts">WebhookEventType</a></code>
- <code><a href="./src/resources/webhook-events.ts">WebhookPayload</a></code>

Methods:

- <code title="get /webhook_events/{webhook_event_id}">client.webhookEvents.<a href="./src/resources/webhook-events.ts">retrieve</a>(webhookEventId) -> WebhookEvent</code>
- <code title="get /webhook_events">client.webhookEvents.<a href="./src/resources/webhook-events.ts">list</a>({ ...params }) -> WebhookEventsDefaultPageNumberPagination</code>

# Products

Types:

- <code><a href="./src/resources/products/products.ts">LicenseKeyDuration</a></code>
- <code><a href="./src/resources/products/products.ts">Price</a></code>
- <code><a href="./src/resources/products/products.ts">Product</a></code>
- <code><a href="./src/resources/products/products.ts">ProductListResponse</a></code>
- <code><a href="./src/resources/products/products.ts">ProductUpdateFilesResponse</a></code>

Methods:

- <code title="post /products">client.products.<a href="./src/resources/products/products.ts">create</a>({ ...params }) -> Product</code>
- <code title="get /products/{id}">client.products.<a href="./src/resources/products/products.ts">retrieve</a>(id) -> Product</code>
- <code title="patch /products/{id}">client.products.<a href="./src/resources/products/products.ts">update</a>(id, { ...params }) -> void</code>
- <code title="get /products">client.products.<a href="./src/resources/products/products.ts">list</a>({ ...params }) -> ProductListResponsesDefaultPageNumberPagination</code>
- <code title="delete /products/{id}">client.products.<a href="./src/resources/products/products.ts">delete</a>(id) -> void</code>
- <code title="post /products/{id}/unarchive">client.products.<a href="./src/resources/products/products.ts">unarchive</a>(id) -> void</code>
- <code title="put /products/{id}/files">client.products.<a href="./src/resources/products/products.ts">updateFiles</a>(id, { ...params }) -> ProductUpdateFilesResponse</code>

## Images

Types:

- <code><a href="./src/resources/products/images.ts">ImageUpdateResponse</a></code>

Methods:

- <code title="put /products/{id}/images">client.products.images.<a href="./src/resources/products/images.ts">update</a>(id, { ...params }) -> ImageUpdateResponse</code>

# Misc

Types:

- <code><a href="./src/resources/misc.ts">CountryCode</a></code>
- <code><a href="./src/resources/misc.ts">Currency</a></code>
- <code><a href="./src/resources/misc.ts">TaxCategory</a></code>
- <code><a href="./src/resources/misc.ts">MiscListSupportedCountriesResponse</a></code>

Methods:

- <code title="get /checkout/supported_countries">client.misc.<a href="./src/resources/misc.ts">listSupportedCountries</a>() -> MiscListSupportedCountriesResponse</code>

# Discounts

Types:

- <code><a href="./src/resources/discounts.ts">Discount</a></code>
- <code><a href="./src/resources/discounts.ts">DiscountType</a></code>

Methods:

- <code title="post /discounts">client.discounts.<a href="./src/resources/discounts.ts">create</a>({ ...params }) -> Discount</code>
- <code title="get /discounts/{discount_id}">client.discounts.<a href="./src/resources/discounts.ts">retrieve</a>(discountId) -> Discount</code>
- <code title="patch /discounts/{discount_id}">client.discounts.<a href="./src/resources/discounts.ts">update</a>(discountId, { ...params }) -> Discount</code>
- <code title="get /discounts">client.discounts.<a href="./src/resources/discounts.ts">list</a>({ ...params }) -> DiscountsDefaultPageNumberPagination</code>
- <code title="delete /discounts/{discount_id}">client.discounts.<a href="./src/resources/discounts.ts">delete</a>(discountId) -> void</code>

# Addons

Types:

- <code><a href="./src/resources/addons.ts">AddonResponse</a></code>
- <code><a href="./src/resources/addons.ts">AddonUpdateImagesResponse</a></code>

Methods:

- <code title="post /addons">client.addons.<a href="./src/resources/addons.ts">create</a>({ ...params }) -> AddonResponse</code>
- <code title="get /addons/{id}">client.addons.<a href="./src/resources/addons.ts">retrieve</a>(id) -> AddonResponse</code>
- <code title="patch /addons/{id}">client.addons.<a href="./src/resources/addons.ts">update</a>(id, { ...params }) -> AddonResponse</code>
- <code title="get /addons">client.addons.<a href="./src/resources/addons.ts">list</a>({ ...params }) -> AddonResponsesDefaultPageNumberPagination</code>
- <code title="put /addons/{id}/images">client.addons.<a href="./src/resources/addons.ts">updateImages</a>(id) -> AddonUpdateImagesResponse</code>

# Brands

Types:

- <code><a href="./src/resources/brands.ts">BrandCreateResponse</a></code>
- <code><a href="./src/resources/brands.ts">BrandRetrieveResponse</a></code>
- <code><a href="./src/resources/brands.ts">BrandUpdateResponse</a></code>
- <code><a href="./src/resources/brands.ts">BrandListResponse</a></code>
- <code><a href="./src/resources/brands.ts">BrandUpdateImagesResponse</a></code>

Methods:

- <code title="post /brands">client.brands.<a href="./src/resources/brands.ts">create</a>({ ...params }) -> BrandCreateResponse</code>
- <code title="get /brands/{id}">client.brands.<a href="./src/resources/brands.ts">retrieve</a>(id) -> BrandRetrieveResponse</code>
- <code title="patch /brands/{id}">client.brands.<a href="./src/resources/brands.ts">update</a>(id, { ...params }) -> BrandUpdateResponse</code>
- <code title="get /brands">client.brands.<a href="./src/resources/brands.ts">list</a>() -> BrandListResponse</code>
- <code title="put /brands/{id}/images">client.brands.<a href="./src/resources/brands.ts">updateImages</a>(id) -> BrandUpdateImagesResponse</code>
