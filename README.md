# Frontend Mentor - IP Address Tracker Solution

This is a solution to the [IP Address Tracker challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ip-address-tracker-I8-0yYAH0). This project allows users to track IP addresses and domains, displaying key location data on an interactive map.

## Table of contents

- [Overview](#overview)
  - [The Challenge](#the-challenge)
  - [Links](#links)
- [My Process](#my-process)
  - [Built With](#built-with)
  - [What I Learned](#what-i-learned)
  - [Useful Resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The Challenge

Users should be able to:

- View the optimal layout for the application across different devices
- See hover states for all interactive elements
- Automatically see their own IP address location upon page load
- Search for any IP address or domain and view its geographical information
- The box for displaying the data we got from the IP Was the hardest for me to style and I would appreciate if anyone could show me a better, cleaner solution to it.

### Links

- Solution URL: (https://github.com/NikaPanjavidze/ip-tracker)
- Live Site URL: (https://nikapanjavidze.github.io/ip-tracker/)

## My Process

### Built With

- Tailwind CSS for styling
- Flexbox for layout
- React.js for the frontend
- Leaflet.js with React-Leaflet for the interactive map
- Fetch API for data retrieval from IPify API

### What I Learned

This project helped me reinforce my understanding of:

- **React State Management**: Used `useState` to store and update the fetched IP data.
- **API Requests**: Implemented a GET request to `https://geo.ipify.org/api/v2/country,city` to fetch and display IP location details dynamically.
- **React-Leaflet**: Integrated the map component and updated marker positions dynamically based on the fetched latitude and longitude.
- **CSS Flexbox & Tailwind CSS**: Styled the layout efficiently while maintaining responsiveness.

### Useful Resources

- [Leaflet.js](https://leafletjs.com/) - For interactive maps
- [React-Leaflet](https://react-leaflet.js.org/) - React wrapper for Leaflet
- [IPify API](https://geo.ipify.org/) - To fetch IP geolocation data
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework

## Author

- Frontend Mentor - [@nikapanjavidze](https://www.frontendmentor.io/profile/NikaPanjavidze)

## Acknowledgments

Special thanks to Frontend Mentor for providing this challenge, and to the React-Leaflet community for their helpful documentation.
