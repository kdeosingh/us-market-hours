# Production Environment Variables for Railway - Frontend

## Copy these to Railway Dashboard

```bash
# ===================================
# FRONTEND PRODUCTION CONFIGURATION
# ===================================

# Backend API URL (REQUIRED - Update with your backend URL!)
NUXT_PUBLIC_API_BASE=https://your-backend.up.railway.app

# Node Environment
NODE_ENV=production

# Server Host (Railway requirement)
NUXT_HOST=0.0.0.0

# Port (Railway auto-sets this, but you can override)
# PORT=3000
```

## ⚠️ IMPORTANT: Update These Before Deploy

1. **NUXT_PUBLIC_API_BASE** - Replace with your actual backend Railway URL
   - Get this from your backend Railway deployment
   - Format: `https://your-backend.up.railway.app`
   - NO trailing slash!

2. **NODE_ENV** - Should be `production` for Railway

3. **NUXT_HOST** - Must be `0.0.0.0` for Railway to work

## 🔗 Getting Your Backend URL

1. Deploy backend first
2. Go to backend Railway project
3. Click "Settings" → "Domains"
4. Copy the Railway-provided domain
5. Use that as `NUXT_PUBLIC_API_BASE`

Example:
```bash
# If your backend is at:
https://market-hours-api-production.up.railway.app

# Then set:
NUXT_PUBLIC_API_BASE=https://market-hours-api-production.up.railway.app
```

## 📋 How to Set in Railway

1. Go to Railway Dashboard
2. Select your frontend project
3. Click on your service
4. Go to "Variables" tab
5. Click "New Variable"
6. Add each variable above
7. Click "Deploy"

Railway will automatically rebuild and restart your app.

## ✅ Verification

After deploying, check:
1. Frontend loads: `https://your-frontend.up.railway.app`
2. Open browser console (F12)
3. Should see API calls to your backend
4. Times should load from API
5. No CORS errors

## 🔄 Update Backend CORS

Don't forget to add your frontend URL to backend's CORS_ORIGINS:

In **backend** Railway variables:
```bash
CORS_ORIGINS=https://your-frontend.up.railway.app
```

Both apps need to know about each other!


