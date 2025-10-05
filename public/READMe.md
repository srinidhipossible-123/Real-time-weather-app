# SkySense - An Intelligent Weather Companion

A beautiful, feature-rich weather application with AI-powered chatbot assistance, multi-language support, and stunning visual effects.

## Features

### Core Weather Features
- **Real-time Weather Data**: Current temperature, humidity, wind speed, pressure, and visibility
- **Weather Icons**: Dynamic weather icons from OpenWeatherMap
- **Comfort Meter**: Visual indication of comfort level based on temperature
- **Sunrise/Sunset Times**: Accurate solar timing information
- **Auto-location**: Automatically detects your location on page load
- **Weather Animations**: Dynamic background animations based on weather conditions (sun, clouds, rain, snow, mist)

### Forecast Features
- **12-Hour Forecast**: Next 12 intervals (3-hour increments) with temperatures and conditions
- **7-Day Forecast**: Weekly weather overview with average daily temperatures
- **Interactive Cards**: Hover effects and smooth animations on forecast items

### AI Weather Chatbot
- **Intelligent Responses**: Answers weather-related questions about current conditions
- **Context-Aware**: Provides relevant information based on searched city
- **Natural Conversations**: Handles various query types:
  - Temperature inquiries
  - Humidity levels
  - Wind conditions
  - Rain predictions
  - Recommendations (umbrella, jacket, outdoor activities)
  - General weather information

### Multi-Language Support (8 Languages)
- English (EN)
- Hindi (HI)
- French (FR)
- Spanish (ES)
- Arabic (AR)
- German (DE)
- Japanese (JA)
- Chinese (ZH)

**Complete translation** of all UI elements including:
- Navigation and controls
- Weather data labels
- Forecast sections
- Chatbot interface
- Error messages

### Voice Features
- **Voice Search**: Search for cities using voice input
- **Text-to-Speech**: Weather information spoken aloud with female voice preference
- **Multi-language Voice**: Voice recognition and speech synthesis in all supported languages

### UI/UX Features
- **Theme Toggle**: Switch between dark and light modes with smooth transitions
- **Minimal Mode**: Simplified view showing only essential information
- **Time-based Backgrounds**: Dynamic gradient backgrounds based on time of day
  - Morning: Golden sunrise gradient
  - Afternoon: Blue sky gradient
  - Evening: Sunset gradient
  - Night: Dark blue gradient
- **Smooth Animations**:
  - Container fade-in on load
  - Floating weather icons
  - Hover effects on all interactive elements
  - Sliding forecast items
  - Pulsing effects on buttons
  - Smooth theme transitions
- **Glassmorphism Design**: Modern frosted glass effect with backdrop blur
- **Responsive Design**: Works perfectly on mobile, tablet, and desktop

### Weather Animations
- **Sunny**: Pulsing sun rays with gradient glow
- **Cloudy**: Animated clouds moving across the screen
- **Rainy**: Falling raindrops with realistic motion
- **Snowy**: Animated snowflakes with rotation
- **Misty**: Layered fog effects with movement

### Special Easter Eggs
- **Mars Mode**: Type "Mars" to see a Martian atmosphere
- **Heaven Mode**: Type "Heaven" for a celestial experience

### Additional Features
- **Splash Screen**: Beautiful animated loading screen
- **Click Location Icon**: Manual location detection on demand
- **Keyboard Support**: Press Enter to search
- **Smooth Scrolling**: Custom styled scrollbars
- **Error Handling**: User-friendly error messages in selected language
- **Local Storage**: Remembers theme preference

## API Usage

### Weather Data
- **Current Weather**: OpenWeatherMap Current Weather API
- **Forecast**: OpenWeatherMap 5-day Forecast API (3-hour intervals)

### API Key
The app uses OpenWeatherMap API. Replace the API key in `script.js`:
```javascript
const apiKey = "YOUR_API_KEY_HERE";
```

## Technologies Used
- **HTML5**: Semantic markup
- **CSS3**: Advanced animations, gradients, and transitions
- **JavaScript (ES6+)**: Modern JavaScript features
- **OpenWeatherMap API**: Weather data provider
- **Chart.js**: (Optional, can be integrated for charts)
- **Web Speech API**: Voice recognition and text-to-speech
- **Geolocation API**: Auto-location detection

## Browser Support
- Chrome/Edge (recommended)
- Firefox
- Safari
- Opera

**Note**: Voice features require browser support for Web Speech API.

## Performance Optimizations
- Lazy loading of weather data
- Efficient DOM manipulation
- Debounced animations
- Optimized CSS transitions
- Minimal external dependencies

## Accessibility
- ARIA labels on interactive elements
- Keyboard navigation support
- High contrast text
- Readable font sizes
- Color-blind friendly palette

## Future Enhancements
- PWA support with service worker
- Weather alerts and notifications
- Favorite cities list
- Weather maps integration
- Historical weather data
- Air quality index
- UV index

## Credits
- Icons: Boxicons
- Weather Data: OpenWeatherMap
- Fonts: Google Fonts (Poppins)

## License
MIT License - Feel free to use and modify!
