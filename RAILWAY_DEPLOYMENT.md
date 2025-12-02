# Railway Deployment Guide - US Market Hours Calendar Frontend

## 🚂 Quick Deploy to Railway

### **Method 1: GitHub Integration (Recommended)**

1. **Push to GitHub**
   ```bash
   cd frontend
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/market-hours-frontend.git
   git push -u origin main
   ```

2. **Deploy on Railway**
   - Go to [railway.app](https://railway.app)
   - Click "New Project"
   - Select "Deploy from GitHub repo"
   - Choose your repository
   - Railway will auto-detect Node.js and deploy!

### **Method 2: Railway CLI**

```bash
# Install Railway CLI
npm i -g @railway/cli

# Login to Railway
railway login

# Initialize and deploy
cd frontend
railway init
railway up
```

---

## 📋 Pre-Deployment Checklist

✅ All required files are present:
- `Procfile` - Start command for Railway
- `railway.json` - Railway configuration
- `package.json` - Dependencies and scripts
- `.railwayignore` - Exclude unnecessary files
- `nuxt.config.ts` - Production-ready config

✅ Configuration is production-ready:
- Port auto-detection from `$PORT` environment variable
- Host set to `0.0.0.0` for Railway
- API base URL configurable via environment
- Compression enabled
- SSR optimized

---

## 🔧 Railway Environment Variables

Set these in Railway Dashboard after deployment:

### **Required Variables**

```bash
# Backend API URL (IMPORTANT!)
NUXT_PUBLIC_API_BASE=https://your-backend.up.railway.app

# Node Environment
NODE_ENV=production

# Server Configuration (Railway sets PORT automatically)
NUXT_HOST=0.0.0.0
```

### **Optional Variables**

```bash
# If you want to override port (Railway usually handles this)
PORT=3000
```

---

## 🌐 Setting Environment Variables in Railway

1. Go to your Railway project
2. Click on your frontend service
3. Go to "Variables" tab
4. Click "New Variable"
5. Add each variable from above

**Quick Copy-Paste for Railway:**

```
NUXT_PUBLIC_API_BASE=https://your-backend.up.railway.app
NODE_ENV=production
NUXT_HOST=0.0.0.0
```

---

## 🔗 After Deployment

### **1. Get Your Railway URL**
Railway will provide a URL like:
```
https://your-frontend-app.up.railway.app
```

### **2. Update Backend CORS**
In your backend Railway project, update `CORS_ORIGINS`:
```bash
CORS_ORIGINS=https://your-frontend-app.up.railway.app
```

### **3. Test Your Frontend**
Visit:
```
https://your-frontend-app.up.railway.app
```

You should see your market hours dashboard!

---

## 📦 What Railway Auto-Detects

Railway will automatically:
- ✅ Detect Node.js project from `package.json`
- ✅ Install dependencies with `npm install`
- ✅ Build with `npm run build`
- ✅ Start with command from `Procfile` or `package.json`
- ✅ Set `$PORT` environment variable
- ✅ Provide HTTPS domain
- ✅ Enable auto-deployments on git push

---

## 🚀 Deployment Process

```
1. Push code to GitHub
   ↓
2. Railway detects changes
   ↓
3. Installs Node.js dependencies (npm install)
   ↓
4. Builds Nuxt app (npm run build)
   ↓
5. Starts production server (node .output/server/index.mjs)
   ↓
6. App is live! 🎉
```

---

## ⚙️ Build Process

### **What Happens During Build:**

1. **Install Dependencies** (~2 minutes)
   ```
   npm install
   ```

2. **Build Nuxt App** (~1-3 minutes)
   ```
   npm run build
   ```
   - Compiles TypeScript
   - Bundles assets
   - Optimizes for production
   - Generates `.output/` directory

3. **Start Server**
   ```
   node .output/server/index.mjs
   ```

---

## 🐛 Troubleshooting

### **Build Fails**
- Check Node.js version compatibility
- Verify all packages in `package.json` are valid
- Check Railway build logs for specific errors
- Ensure `.nuxt` and `.output` are in `.gitignore`

### **App Crashes**
- Check environment variables are set
- View Railway logs: `railway logs`
- Ensure `NUXT_PUBLIC_API_BASE` points to your backend
- Verify `NODE_ENV=production`

### **CORS Errors**
- Update backend's `CORS_ORIGINS` with frontend URL
- Include full URL: `https://your-app.up.railway.app`
- No trailing slash in URL

### **API Calls Not Working**
- Check `NUXT_PUBLIC_API_BASE` is set correctly
- Test backend API directly: `curl https://your-backend.up.railway.app/health`
- Check browser console for errors

---

## 💡 Performance Tips

### **Optimize Build**
- Nuxt 3 automatically splits code
- Assets are compressed
- SSR is optimized

### **Custom Domain**
1. Railway Dashboard → Settings → Domains
2. Add custom domain: `www.yourdomain.com`
3. Update DNS records as shown
4. Update backend CORS with new domain

### **CDN (Optional)**
For static assets, consider:
- Cloudflare (free CDN)
- Vercel Edge Network

---

## 💰 Cost

Railway Pricing:
- **Hobby Plan**: $5/month
  - 500 hours included
  - Perfect for frontend
  
- **Usage-Based**: Pay for what you use
  - ~$0.01 per hour
  - Frontend should cost < $5/month

---

## 📝 Quick Deploy Commands

```bash
# From project root
cd frontend

# Deploy to Railway
railway up

# View logs
railway logs

# Open in browser
railway open

# View environment variables
railway variables
```

---

## ✅ Production Checklist

Before going live:
- [ ] Set `NODE_ENV=production`
- [ ] Set `NUXT_PUBLIC_API_BASE` to backend URL
- [ ] Set `NUXT_HOST=0.0.0.0`
- [ ] Update backend CORS_ORIGINS with frontend URL
- [ ] Test all pages load correctly
- [ ] Test API calls work
- [ ] Test timezone selector
- [ ] Test dark mode toggle
- [ ] Check mobile responsiveness
- [ ] Monitor logs for errors

---

## 🔄 Connecting Frontend + Backend

### **1. Deploy Backend First**
```
Backend URL: https://your-backend.up.railway.app
```

### **2. Deploy Frontend with Backend URL**
```bash
# Set in Railway variables
NUXT_PUBLIC_API_BASE=https://your-backend.up.railway.app
```

### **3. Update Backend CORS**
```bash
# In backend Railway variables
CORS_ORIGINS=https://your-frontend.up.railway.app
```

### **4. Test Connection**
```bash
# Open frontend
https://your-frontend.up.railway.app

# Check browser console - API calls should work
# Check timezone selector - should update times
```

---

## 🎯 Result

Your frontend will be live at:
```
https://your-project.up.railway.app
```

With:
- ✅ Auto-deployments on git push
- ✅ HTTPS enabled
- ✅ Environment variables configured
- ✅ Logs and monitoring
- ✅ 99.9% uptime
- ✅ Connected to backend API

**Your frontend is now production-ready!** 🚀

---

## 📊 Example Configuration

### **Frontend Railway Variables:**
```
NUXT_PUBLIC_API_BASE=https://market-hours-api.up.railway.app
NODE_ENV=production
NUXT_HOST=0.0.0.0
```

### **Backend Railway Variables:**
```
CORS_ORIGINS=https://market-hours-frontend.up.railway.app
DEBUG=False
DOCS_PASSWORD=YourSecurePassword123!
```

---

## 🌐 Alternative: Deploy to Vercel

Nuxt 3 also works great on Vercel:

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
cd frontend
vercel

# Set environment variables in Vercel dashboard
NUXT_PUBLIC_API_BASE=https://your-backend.up.railway.app
```

Vercel advantages:
- Edge network (faster)
- Free tier generous
- Automatic previews
- Great for frontend

Railway advantages:
- Monorepo support
- Database integration
- Backend + Frontend together



