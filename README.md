# Whew
A web app that recommends and plays songs based on the weather. Users
can also upload their own MP3 files.

## Features

-   Weather-based song recommendations using OpenWeather API
-   Song metadata stored in Convex
-   File uploads (MP3 only, max 10MB) via Cloudinary
-   Music player with play, pause, and skip
-   Simple upload form with genre selection

## Tech Stack

-   Next.js (frontend)
-   Convex (backend/database)
-   Cloudinary (file storage)
-   TailwindCSS (styling)
-   Motion (animation typ shi)
-   OpenWeather API (weather data)

## Folder structure

-   app (main folder)
    -   components (ui)
    -   page.js (home page)
    -   layout.js (universal layout)
    -   play (/play route)
    -   upload (/upload route)
-   convex (database schema and functions)
-   public (assets)

## Setup

1.  Clone the repo and install dependencies:

    ``` bash
    git clone https://github.com/Fahim2k10/Whew
    cd whew
    npm install
    ```

2.  Configure environment variables in `.env.local`:

        CONVEX_DEPLOYMENT= Deployment used by `npx convex dev`
        NEXT_PUBLIC_CONVEX_URL= Convex api
        NEXT_PUBLIC_WEATHER_API_KEY= weather api

3.  Run development server:

    ``` bash
    npm run dev
    ```

## Deployment

-   Frontend: Vercel
-   Backend: Convex (`npx convex deploy`)
-   Environment variables must be set in Vercel dashboard
