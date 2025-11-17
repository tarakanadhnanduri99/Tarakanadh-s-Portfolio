# Netlify Deployment Guide

## Quick Deploy Steps

### 1. Install Dependencies
```bash
npm install
```

### 2. Test Locally
```bash
npm run dev
```
Visit `http://localhost:5173` to preview your site.

### 3. Build for Production
```bash
npm run build
```
This creates a `dist` folder with optimized production files.

### 4. Deploy to Netlify

#### Option A: Deploy via Netlify UI (Recommended)

1. **Push to GitHub/GitLab/Bitbucket**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. **Connect to Netlify**
   - Go to [app.netlify.com](https://app.netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Select your Git provider and repository

3. **Configure Build Settings**
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
   - Click "Deploy site"

#### Option B: Deploy via Netlify CLI

1. **Install Netlify CLI**
   ```bash
   npm install -g netlify-cli
   ```

2. **Login**
   ```bash
   netlify login
   ```

3. **Deploy**
   ```bash
   netlify deploy --prod
   ```

## Netlify Forms Setup

The contact form is already configured for Netlify Forms:

1. The form has `data-netlify="true"` attribute
2. Hidden `form-name` field is included
3. After deployment, forms will work automatically
4. View submissions in Netlify Dashboard → Forms

## Environment Variables (Optional)

If you need environment variables:

1. Go to Netlify Dashboard → Site settings → Environment variables
2. Add variables like:
   - `VITE_API_URL` (if using API)
   - `VITE_ANALYTICS_ID` (if using analytics)

## Custom Domain

1. Go to Netlify Dashboard → Domain settings
2. Click "Add custom domain"
3. Follow the DNS configuration instructions

## Performance Optimization

The build is already optimized for:
- ✅ Code splitting
- ✅ Asset optimization
- ✅ Tree shaking
- ✅ Minification

Target Lighthouse scores:
- Performance: 90+
- Accessibility: 90+
- SEO: 90+

## Troubleshooting

### Build Fails
- Check Node.js version (requires 18+)
- Clear `node_modules` and reinstall: `rm -rf node_modules && npm install`
- Check build logs in Netlify dashboard

### Forms Not Working
- Ensure form has `data-netlify="true"`
- Check form name matches in HTML
- Verify Netlify Forms is enabled in site settings

### Images Not Loading
- Ensure images are in `public/static/img/`
- Use relative paths starting with `/static/`
- Check file names match exactly (case-sensitive)

### 404 on Refresh
- The `_redirects` file handles SPA routing
- Ensure it's in `public/` folder
- Netlify should auto-detect it

## Post-Deployment Checklist

- [ ] Test all navigation links
- [ ] Verify contact form submission
- [ ] Check mobile responsiveness
- [ ] Test all animations
- [ ] Verify images load correctly
- [ ] Check Lighthouse scores
- [ ] Test on different browsers
- [ ] Verify social links work
- [ ] Test skills showcase interactions

---

Need help? Check the [Netlify Docs](https://docs.netlify.com/) or open an issue.

