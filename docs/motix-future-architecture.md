# MOTIX future SaaS and website-connection architecture

This document describes future productisation requirements only. The public website milestone does not implement production tenancy, authentication, APIs, databases, provisioning or billing.

The composite MOTIX brand board is retained for design use at `internal-assets/motix/motix-brand-reference.png`. It is not a public website asset. Public MOTIX pages use only `public/products/motix/motix-logo-master.png`.

## Tenant isolation invariant

Every garage must have a stable tenant identity. Public activity for Garage A may only enter Garage A's booking boundary, and Garage B must never receive or access Garage A's customer, vehicle or operational information. A future implementation requires tenant-scoped authentication, server-side authorisation, row-level isolation, audit logging and automated cross-tenant security tests.

## Public booking trust boundary

The public layer may create a constrained booking request. It must not directly create trusted jobs, invoices, payments or workshop records. Reception acceptance is the authority transition from public intent into the operational domain.

## Website connection models

1. A garage-branded MOTIX-connected website.
2. An existing website using a secure hosted flow, embeddable component, adapter or booking API.
3. A modernised garage website connected to MOTIX.

Future integrations should use tenant-bound credentials, origin controls, schema validation, rate limiting, abuse protection, idempotency, monitoring and explicit request-to-tenant routing. Public APIs must expose the minimum booking-request authority and must never accept arbitrary operational record creation.

## Productisation sequence

Validate the tenant/domain model, define booking-request contracts, threat-model the public boundary, implement isolation and audit controls, pilot with synthetic tenants, complete security review, and only then connect production garage websites.
