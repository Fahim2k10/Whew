# WeatherTunes

A web app that recommends and plays songs based on the weather. Users
can also upload their own MP3 files.

## Features

-   Weather-based song recommendations using OpenWeather API\
-   Song metadata stored in Convex\
-   File uploads (MP3 only, max 10MB) via Cloudinary\
-   Music player with play, pause, and skip\
-   Simple upload form with genre selection

## Tech Stack

-   Next.js (frontend)\
-   Convex (backend/database)\
-   Cloudinary (file storage)\
-   TailwindCSS (styling)\
-   OpenWeather API (weather data)

## Setup

1.  Clone the repo and install dependencies:

    ``` bash
    git clone https://github.com/your-username/weathertunes.git
    cd weathertunes
    npm install
    ```

2.  Configure environment variables in `.env.local`:

        NEXT_PUBLIC_CONVEX_URL=your-convex-url
        NEXT_PUBLIC_CLOUD_NAME=your-cloud-name
        NEXT_PUBLIC_CLOUD_PRESET=your-upload-preset
        NEXT_PUBLIC_WEATHER_API_KEY=your-weather-api-key

3.  Run development server:

    ``` bash
    npm run dev
    ```

## Deployment

-   Frontend: Vercel\
-   Backend: Convex (`npx convex deploy`)\
-   Environment variables must be set in Vercel dashboard

## License

MIT © 2025
