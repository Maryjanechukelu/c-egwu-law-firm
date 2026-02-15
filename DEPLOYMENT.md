# Hybrid Deployment Setup

This project uses a hybrid deployment approach:
- **Static Site (cPanel)**: Main website hosted at cegwulawfirm.com
- **API (Vercel)**: Contact form API hosted on Vercel

## Architecture

```
cegwulawfirm.com (cPanel - Static Files)
        ↓
   Contact Form Submission
        ↓
https://your-api.vercel.app/api/contact (Vercel - Serverless Function)
        ↓
   Resend API → Send Emails
```

## Setup Instructions

### 1. Deploy API to Vercel

1. **Create Vercel Account**: Go to https://vercel.com/signup
2. **Import Project**: 
   - Click "Add New" → "Project"
   - Connect your GitHub account
   - Select `c-egwu-law-firm` repository
   - Vercel will detect Next.js automatically

3. **Configure Environment Variables** (in Vercel Dashboard):
   - `RESEND_API_KEY` = `re_hjQBk4RV_5Vn1b6ETZuYMnoM7aNVPRbdx`
   - `RESEND_FROM_EMAIL` = `C. Egwu Law Firm <inquiries@cegwulawfirm.com>`
   - `RESEND_NOTIFY_EMAIL` = `egwuchidinma6@gmail.com`

4. **Deploy**: Click "Deploy"

5. **Get API URL**: After deployment, copy your Vercel URL (e.g., `https://c-egwu-law-firm.vercel.app`)

### 2. Update Production Environment Variable

In your GitHub repository secrets:
- Add `NEXT_PUBLIC_API_URL` = `https://your-vercel-api.vercel.app`
  (Replace with your actual Vercel URL)

Or build manually with:
```bash
NEXT_PUBLIC_API_URL=https://your-vercel-api.vercel.app npm run build
```

### 3. Deploy Static Site to cPanel

The GitHub Actions workflow will:
1. Build static site with API URL pointing to Vercel
2. Deploy to cPanel via FTP
3. Contact form now calls Vercel API

## Local Development

For local development, the API runs locally:
```bash
npm run dev
```

The contact form automatically uses:
- Local API: `http://localhost:3000/api/contact` (when NEXT_PUBLIC_API_URL is not set)
- Vercel API: When NEXT_PUBLIC_API_URL is configured

## Files Structure

```
/api
  └── contact.js          # Vercel serverless function
/app/api/contact
  └── route.js            # Local Next.js API route (for dev)
/components
  └── Contact.jsx         # Uses NEXT_PUBLIC_API_URL to switch between local/prod
vercel.json               # Vercel configuration
.env.local                # Local environment variables
```

## Testing

### Test Locally:
```bash
npm run dev
# Visit http://localhost:3000 and submit contact form
```

### Test Production:
1. Visit https://cegwulawfirm.com
2. Submit contact form
3. Check email at egwuchidinma6@gmail.com

## Benefits of Hybrid Approach

✅ Keep your existing cPanel hosting  
✅ No need to migrate entire site  
✅ Contact form works with serverless functions  
✅ Easy to maintain and update  
✅ Free Vercel tier for API (plenty for contact forms)  
✅ Automatic HTTPS and global CDN from Vercel  

## Troubleshooting

**Contact form not working in production:**
- Check NEXT_PUBLIC_API_URL is set correctly
- Verify Vercel deployment is successful
- Check Vercel function logs for errors
- Ensure CORS is not blocking requests

**Emails not sending:**
- Verify Resend API key in Vercel environment variables
- Check Resend dashboard for delivery logs
- Verify DNS records are still active for cegwulawfirm.com
