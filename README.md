# World Explorer

World Explorer is a Next.js project that allows users to explore countries around the world. Users can view country details, search for countries, and learn about flags, capitals, populations, currencies, languages, and time zones.


## Features

- Next.js App Router
- File-based routing
- Server Components & Client Components
- Dynamic routes (`/countries/[code]`)
- Real API data fetching
- Search functionality
- Country details page
- Responsive UI design
- Loading and error handling
- Custom 404 page
- Cached and dynamic data fetching


##  API Used

This project uses the **REST Countries API**

- Get all countries:  
  https://restcountries.com/v3.1/all

- Get single country:  
  https://restcountries.com/v3.1/alpha/AFG

- Search country:  
  https://restcountries.com/v3.1/name/{name}


## Project Structure

app/
layout.tsx
page.tsx
about/
page.tsx
countries/
page.tsx
[code]/
page.tsx
loading.tsx
search/
page.tsx
error.tsx
not-found.tsx

components/
Header.tsx
Footer.tsx
CountryCard.tsx
CountrySearch.tsx

lib/
api.ts

styles/
globals.css

### What I Learned

- Next.js App Router
- Server vs Client Components
- Dynamic Routing
- Data Fetching with async/await
- API handling and error management
- Caching strategies (`force-cache`, `no-store`)
- Component-based architecture
- Responsive UI design


## Caching Strategy

- Countries list page → cached data (`force-cache`)
- Country details page → fresh data (`no-store`)


## Pages

### Home Page (`/`)
- Introduction to World Explorer
- Navigation links
- Hero section

### Countries Page (`/countries`)
- Displays list of countries
- Shows flag, name, capital, region, population
- Link to details page

### Search Page (`/search`)
- Search countries by name
- Displays matching results dynamically

### Country Details Page (`/countries/[code]`)
- Full country information:
  - Flag
  - Official name
  - Capital
  - Region & subregion
  - Population
  - Languages
  - Currencies
  - Time zones
  - Google Maps link

### About Page (`/about`)
- Project description
- Technologies used
- API information


## Styling

- Tailwind CSS
- Glassmorphism UI
- Neon/cyan theme
- Responsive design
- Hover animations


## ▶Run Locally

npm install
npm run dev