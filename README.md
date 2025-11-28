# US Market Hours Calendar - Frontend

Nuxt 3 frontend for US stock market hours calendar.

## Setup

```bash
# Install dependencies
npm install

# Configure environment
cp .env.example .env
# Edit .env with your API URL

# Run development server
npm run dev
```

Visit http://localhost:3000

## Features

- 📊 Today's market status panel
- 📅 7-day market schedule
- ⏱️ Real-time countdown timer
- 🌍 Automatic timezone detection
- 🎨 Dark/light mode
- 🔄 Auto-refresh every 60 seconds

## Build for Production

```bash
# Build application
npm run build

# Preview production build
npm run preview
```

## Docker

```bash
# Build image
docker build -t market-hours-frontend .

# Run container
docker run -p 3000:3000 -e NUXT_PUBLIC_API_BASE=http://backend:8000 market-hours-frontend
```

## Project Structure

```
frontend/
├── components/        # Vue components
├── composables/       # Composition API utilities
├── pages/            # Page components
├── types/            # TypeScript types
├── app.vue           # Root component
└── nuxt.config.ts    # Nuxt configuration
```

## Key Technologies

- Nuxt 3
- TypeScript
- TailwindCSS
- Luxon (datetime)
- VueUse


