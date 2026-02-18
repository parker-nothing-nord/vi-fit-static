# Vi Fit Static Site Deployment Guide

## Overview
This is the static version of Vi Fit, configured for:
- Static HTML/CSS/JS hosting (DigitalOcean Spaces, Netlify, Vercel, etc.)
- Serverless function for booking API (DigitalOcean Functions)

## Prerequisites
- Node.js 20+
- DigitalOcean CLI (`doctl`) installed and authenticated
- DigitalOcean account with Functions enabled

## Local Development

### 1. Install Dependencies
```bash
npm install
```

### 2. Set Environment Variables
Copy `.env.local.example` to `.env.local` and fill in:
```bash
cp .env.local.example .env.local
```

Required variables:
- `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` - Google Maps API key
- `NEXT_PUBLIC_BOOKING_API_URL` - Serverless function URL (set after deploying function)

### 3. Run Development Server
```bash
npm run dev
```

### 4. Build Static Site
```bash
npm run build
```

Static files will be in `.next/server/app/` directory.

## Deployment

### Step 1: Deploy Serverless Function

1. Navigate to functions directory:
```bash
cd functions
```

2. Deploy to DigitalOcean Functions:
```bash
doctl serverless deploy .
```

3. Get the function URL:
```bash
doctl serverless functions get vi-fit/booking --url
```

4. Set environment variables for the function:
```bash
doctl serverless functions invoke vi-fit/booking --param SMTP_USER=your_email --param SMTP_PASS=your_password
```

Or set them in the DigitalOcean dashboard under Functions > vi-fit > booking > Settings.

Required function environment variables:
- `EMAIL_FROM` - Sender email address
- `EMAIL_TO` - Recipient email address
- `SMTP_HOST` - SMTP server (e.g., smtp.gmail.com)
- `SMTP_PORT` - SMTP port (e.g., 587)
- `SMTP_USER` - SMTP username
- `SMTP_PASS` - SMTP password
- `GYMMASTER_API_KEY` - (when available)
- `GYMMASTER_SERVICE_ID` - (when available)
- `GYMMASTER_LOCATION_ID` - (when available)

### Step 2: Update Environment Variables

Update `.env.local` with the function URL:
```bash
NEXT_PUBLIC_BOOKING_API_URL=https://faas-tor1-XXXXX.doserverless.co/api/v1/web/fn-XXXXX/vi-fit/booking
```

### Step 3: Build Static Site

```bash
npm run build
```

### Step 4: Deploy Static Files

#### Option A: DigitalOcean Spaces

1. Create a Space in DigitalOcean
2. Enable static website hosting
3. Upload files from `.next/server/app/`:
```bash
# Install s3cmd or use DO dashboard
s3cmd sync .next/server/app/ s3://your-space-name/ --acl-public
```

#### Option B: DigitalOcean App Platform (Static Site)

Create `.do/app-static.yaml`:
```yaml
name: vi-fit-static
region: tor
static_sites:
  - name: vi-fit-static
    github:
      branch: main
      deploy_on_push: true
      repo: parker-nothing-nord/vi-fit-static
    build_command: npm run build
    output_dir: .next/server/app
    environment_slug: node-js
    envs:
      - key: NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
        value: ${NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}
      - key: NEXT_PUBLIC_BOOKING_API_URL
        value: ${NEXT_PUBLIC_BOOKING_API_URL}
```

Deploy:
```bash
doctl apps create --spec .do/app-static.yaml
```

#### Option C: Netlify/Vercel

Both platforms auto-detect Next.js and handle static export automatically.

## Testing

1. Test the static site locally:
```bash
npx serve .next/server/app
```

2. Test the booking form submission
3. Verify email notifications are received
4. Check Google Maps loads correctly

## Troubleshooting

### Booking form not working
- Check `NEXT_PUBLIC_BOOKING_API_URL` is set correctly
- Verify serverless function is deployed and accessible
- Check browser console for CORS errors

### Google Maps not loading
- Verify `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` is set
- Check API key has Maps JavaScript API enabled
- Check domain restrictions on the API key

### Email notifications not sending
- Verify SMTP credentials in function environment variables
- Check function logs: `doctl serverless activations logs --function vi-fit/booking`
- Test SMTP connection separately

## Cost Estimate

- Static hosting: Free (DO Spaces) or $5/month
- Serverless function: ~$0.0000002 per request
- Total: ~$1-2/month for typical traffic

## Rollback

If issues occur, the original server-side app is still available at:
- Repo: `/home/pbrown/Projects/vi-fit`
- Deployment: https://vi-fit-dev-hzf4i.ondigitalocean.app

