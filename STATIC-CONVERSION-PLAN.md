# Vi Fit Static Conversion Plan

## Goal
Convert the Vi Fit Next.js app to a fully static site with serverless function for booking API.

## Current State (vi-fit repo)
- Next.js app with server-side rendering
- Server API route: `/api/booking` (handles form submissions, emails, Gym Master integration)
- Client-side components: Map, BookingForm, etc.
- Deployed as web service on DigitalOcean App Platform

## Target State (vi-fit-static repo)
- Next.js static export (pre-rendered HTML)
- Serverless function for booking API
- Static hosting on DigitalOcean Spaces or similar
- All client-side features remain: Facebook Pixel, Google Maps, etc.

## What Works in Static Sites
✅ Facebook Pixel (client-side JavaScript)
✅ Google Maps embed (client-side API)
✅ All React components with "use client"
✅ Client-side routing
✅ Forms (UI only)

## What Needs Serverless Function
❌ Email sending (nodemailer requires server)
❌ Secure API calls to Gym Master (keep credentials server-side)
❌ Server-side validation

## Implementation Steps

### Phase 1: Configure Static Export
1. Update next.config.ts with output: 'export'
2. Remove server-side only features from pages
3. Test local static build

### Phase 2: Create Serverless Function
1. Create DigitalOcean Function for /api/booking
2. Move email and Gym Master logic to function
3. Update BookingForm to call serverless endpoint

### Phase 3: Deploy
1. Build static site: npm run build
2. Deploy static files to DO Spaces
3. Deploy serverless function
4. Configure CORS and environment variables

### Phase 4: Testing
1. Test booking form submission
2. Verify email notifications
3. Test Gym Master integration (when ready)
4. Verify Google Maps loads
5. Test Facebook Pixel tracking

## Repositories

### vi-fit (Original - UNCHANGED)
- Location: /home/pbrown/Projects/vi-fit
- Purpose: Production server-side app
- Status: Keep as-is for rollback safety

### vi-fit-static (New)
- Location: /home/pbrown/Projects/vi-fit-static
- Purpose: Static site conversion
- Status: Active development

## Cost Comparison

### Current (Web Service)
- Basic XXS: ~$5/month
- Always running

### Static + Serverless
- Static hosting: Free (DO Spaces) or ~$5/month
- Serverless function: Pay per use
- Estimated: ~$1-2/month for typical traffic
