const apiKey = "791b59be6b37e44f08b3d19c66803f27";

const searchBtn = document.getElementById("searchBtn");
const cityInput = document.getElementById("cityInput");
const voiceBtn = document.getElementById("voiceBtn");
const animationLayer = document.getElementById("animation-layer");
const themeToggle = document.getElementById("themeToggle");
const themeIcon = themeToggle.querySelector("i");
const modeToggle = document.getElementById("modeToggle");
const languageSelect = document.getElementById("languageSelect");
const chatToggle = document.getElementById("chatToggle");
const chatbotContainer = document.getElementById("chatbotContainer");
const closeChatBtn = document.getElementById("closeChatBtn");
const chatInput = document.getElementById("chatInput");
const sendChatBtn = document.getElementById("sendChatBtn");
const chatMessages = document.getElementById("chatMessages");
const locationIcon = document.querySelector(".location-icon");

let currentLang = "en";
let currentCityData = null;

const translations = {
  en: {
    "app-name": "SkySense",
    "app-tagline": "An Intelligent Weather Companion",
    "search-placeholder": "Enter your city...",
    "voice-search": "Voice Search",
    "toggle-theme": "Toggle Dark/Light",
    "toggle-mode": "Toggle Minimal Mode",
    "toggle-chat": "Toggle Chat Assistant",
    "fetching": "Fetching your sky...",
    "comfort-normal": "Normal",
    "comfort-hot": "Very Hot",
    "comfort-warm": "Warm",
    "comfort-cold": "Cold",
    "comfort-comfortable": "Comfortable",
    "feels-like": "Feels like",
    "sunrise": "Sunrise",
    "sunset": "Sunset",
    "humidity": "Humidity",
    "wind": "Wind",
    "pressure": "Pressure",
    "visibility": "Visibility",
    "next-hours": "Next 12 Hours",
    "seven-day": "7-Day Forecast",
    "chat-title": "Weather Assistant",
    "chat-placeholder": "Ask about weather...",
    "footer-text": "Built with ❤️ & AI Intelligence",
    "splash-subtitle": "An Intelligent Weather Companion",
    "city-not-found": "City not found!",
    "enter-city": "Please enter a city name."
  },
  hi: {
    "app-name": "स्काईसेंस",
    "app-tagline": "एक बुद्धिमान मौसम साथी",
    "search-placeholder": "अपना शहर दर्ज करें...",
    "voice-search": "वॉयस खोज",
    "toggle-theme": "डार्क/लाइट टॉगल करें",
    "toggle-mode": "मिनिमल मोड टॉगल करें",
    "toggle-chat": "चैट असिस्टेंट टॉगल करें",
    "fetching": "आपका आकाश प्राप्त कर रहे हैं...",
    "comfort-normal": "सामान्य",
    "comfort-hot": "बहुत गर्म",
    "comfort-warm": "गर्म",
    "comfort-cold": "ठंडा",
    "comfort-comfortable": "आरामदायक",
    "feels-like": "महसूस होता है",
    "sunrise": "सूर्योदय",
    "sunset": "सूर्यास्त",
    "humidity": "आर्द्रता",
    "wind": "हवा",
    "pressure": "दबाव",
    "visibility": "दृश्यता",
    "next-hours": "अगले 12 घंटे",
    "seven-day": "7-दिन का पूर्वानुमान",
    "chat-title": "मौसम सहायक",
    "chat-placeholder": "मौसम के बारे में पूछें...",
    "footer-text": "❤️ और एआई इंटेलिजेंस के साथ बनाया गया",
    "splash-subtitle": "एक बुद्धिमान मौसम साथी",
    "city-not-found": "शहर नहीं मिला!",
    "enter-city": "कृपया शहर का नाम दर्ज करें।"
  },
  fr: {
    "app-name": "SkySense",
    "app-tagline": "Un Compagnon Météo Intelligent",
    "search-placeholder": "Entrez votre ville...",
    "voice-search": "Recherche Vocale",
    "toggle-theme": "Basculer Sombre/Clair",
    "toggle-mode": "Basculer Mode Minimal",
    "toggle-chat": "Basculer Assistant de Chat",
    "fetching": "Récupération de votre ciel...",
    "comfort-normal": "Normal",
    "comfort-hot": "Très Chaud",
    "comfort-warm": "Chaud",
    "comfort-cold": "Froid",
    "comfort-comfortable": "Confortable",
    "feels-like": "Ressenti",
    "sunrise": "Lever du soleil",
    "sunset": "Coucher du soleil",
    "humidity": "Humidité",
    "wind": "Vent",
    "pressure": "Pression",
    "visibility": "Visibilité",
    "next-hours": "Prochaines 12 Heures",
    "seven-day": "Prévisions 7 Jours",
    "chat-title": "Assistant Météo",
    "chat-placeholder": "Posez des questions sur la météo...",
    "footer-text": "Construit avec ❤️ & Intelligence IA",
    "splash-subtitle": "Un Compagnon Météo Intelligent",
    "city-not-found": "Ville non trouvée!",
    "enter-city": "Veuillez entrer le nom d'une ville."
  },
  es: {
    "app-name": "SkySense",
    "app-tagline": "Un Compañero Meteorológico Inteligente",
    "search-placeholder": "Ingrese su ciudad...",
    "voice-search": "Búsqueda por Voz",
    "toggle-theme": "Cambiar Oscuro/Claro",
    "toggle-mode": "Cambiar Modo Minimal",
    "toggle-chat": "Cambiar Asistente de Chat",
    "fetching": "Obteniendo tu cielo...",
    "comfort-normal": "Normal",
    "comfort-hot": "Muy Caliente",
    "comfort-warm": "Cálido",
    "comfort-cold": "Frío",
    "comfort-comfortable": "Cómodo",
    "feels-like": "Sensación térmica",
    "sunrise": "Amanecer",
    "sunset": "Atardecer",
    "humidity": "Humedad",
    "wind": "Viento",
    "pressure": "Presión",
    "visibility": "Visibilidad",
    "next-hours": "Próximas 12 Horas",
    "seven-day": "Pronóstico de 7 Días",
    "chat-title": "Asistente Meteorológico",
    "chat-placeholder": "Preguntar sobre el clima...",
    "footer-text": "Construido con ❤️ e Inteligencia IA",
    "splash-subtitle": "Un Compañero Meteorológico Inteligente",
    "city-not-found": "¡Ciudad no encontrada!",
    "enter-city": "Por favor ingrese un nombre de ciudad."
  },
  ar: {
    "app-name": "سكاي سينس",
    "app-tagline": "رفيق ذكي للطقس",
    "search-placeholder": "أدخل مدينتك...",
    "voice-search": "البحث الصوتي",
    "toggle-theme": "تبديل داكن/فاتح",
    "toggle-mode": "تبديل الوضع البسيط",
    "toggle-chat": "تبديل مساعد الدردشة",
    "fetching": "جلب سمائك...",
    "comfort-normal": "عادي",
    "comfort-hot": "حار جداً",
    "comfort-warm": "دافئ",
    "comfort-cold": "بارد",
    "comfort-comfortable": "مريح",
    "feels-like": "يشعر وكأنه",
    "sunrise": "شروق الشمس",
    "sunset": "غروب الشمس",
    "humidity": "الرطوبة",
    "wind": "الرياح",
    "pressure": "الضغط",
    "visibility": "الرؤية",
    "next-hours": "الـ 12 ساعة القادمة",
    "seven-day": "توقعات 7 أيام",
    "chat-title": "مساعد الطقس",
    "chat-placeholder": "اسأل عن الطقس...",
    "footer-text": "صُنع بـ ❤️ وذكاء اصطناعي",
    "splash-subtitle": "رفيق ذكي للطقس",
    "city-not-found": "المدينة غير موجودة!",
    "enter-city": "الرجاء إدخال اسم المدينة."
  },
  de: {
    "app-name": "SkySense",
    "app-tagline": "Ein Intelligenter Wetter-Begleiter",
    "search-placeholder": "Geben Sie Ihre Stadt ein...",
    "voice-search": "Sprachsuche",
    "toggle-theme": "Dunkel/Hell Umschalten",
    "toggle-mode": "Minimalmodus Umschalten",
    "toggle-chat": "Chat-Assistent Umschalten",
    "fetching": "Holen Sie Ihren Himmel...",
    "comfort-normal": "Normal",
    "comfort-hot": "Sehr Heiß",
    "comfort-warm": "Warm",
    "comfort-cold": "Kalt",
    "comfort-comfortable": "Komfortabel",
    "feels-like": "Gefühlt",
    "sunrise": "Sonnenaufgang",
    "sunset": "Sonnenuntergang",
    "humidity": "Feuchtigkeit",
    "wind": "Wind",
    "pressure": "Druck",
    "visibility": "Sichtweite",
    "next-hours": "Nächste 12 Stunden",
    "seven-day": "7-Tage-Vorhersage",
    "chat-title": "Wetter-Assistent",
    "chat-placeholder": "Fragen Sie nach dem Wetter...",
    "footer-text": "Mit ❤️ & KI-Intelligenz gebaut",
    "splash-subtitle": "Ein Intelligenter Wetter-Begleiter",
    "city-not-found": "Stadt nicht gefunden!",
    "enter-city": "Bitte geben Sie einen Stadtnamen ein."
  },
  ja: {
    "app-name": "スカイセンス",
    "app-tagline": "インテリジェント気象コンパニオン",
    "search-placeholder": "都市を入力してください...",
    "voice-search": "音声検索",
    "toggle-theme": "ダーク/ライト切り替え",
    "toggle-mode": "ミニマルモード切り替え",
    "toggle-chat": "チャットアシスタント切り替え",
    "fetching": "空を取得しています...",
    "comfort-normal": "普通",
    "comfort-hot": "とても暑い",
    "comfort-warm": "暖かい",
    "comfort-cold": "寒い",
    "comfort-comfortable": "快適",
    "feels-like": "体感温度",
    "sunrise": "日の出",
    "sunset": "日の入り",
    "humidity": "湿度",
    "wind": "風",
    "pressure": "気圧",
    "visibility": "視程",
    "next-hours": "今後12時間",
    "seven-day": "7日間予報",
    "chat-title": "天気アシスタント",
    "chat-placeholder": "天気について質問...",
    "footer-text": "❤️とAIインテリジェンスで作成",
    "splash-subtitle": "インテリジェント気象コンパニオン",
    "city-not-found": "都市が見つかりません！",
    "enter-city": "都市名を入力してください。"
  },
  zh: {
    "app-name": "天空感知",
    "app-tagline": "智能天气伴侣",
    "search-placeholder": "输入您的城市...",
    "voice-search": "语音搜索",
    "toggle-theme": "切换深色/浅色",
    "toggle-mode": "切换简约模式",
    "toggle-chat": "切换聊天助手",
    "fetching": "正在获取天空...",
    "comfort-normal": "正常",
    "comfort-hot": "非常热",
    "comfort-warm": "温暖",
    "comfort-cold": "寒冷",
    "comfort-comfortable": "舒适",
    "feels-like": "体感",
    "sunrise": "日出",
    "sunset": "日落",
    "humidity": "湿度",
    "wind": "风速",
    "pressure": "气压",
    "visibility": "能见度",
    "next-hours": "未来12小时",
    "seven-day": "7天预报",
    "chat-title": "天气助手",
    "chat-placeholder": "询问天气...",
    "footer-text": "用❤️和人工智能打造",
    "splash-subtitle": "智能天气伴侣",
    "city-not-found": "未找到城市！",
    "enter-city": "请输入城市名称。"
  }
};

function translatePage() {
  document.querySelectorAll('[data-translate]').forEach(element => {
    const key = element.getAttribute('data-translate');
    if (translations[currentLang] && translations[currentLang][key]) {
      element.textContent = translations[currentLang][key];
    }
  });

  document.querySelectorAll('[data-translate-placeholder]').forEach(element => {
    const key = element.getAttribute('data-translate-placeholder');
    if (translations[currentLang] && translations[currentLang][key]) {
      element.placeholder = translations[currentLang][key];
    }
  });

  document.querySelectorAll('[data-translate-title]').forEach(element => {
    const key = element.getAttribute('data-translate-title');
    if (translations[currentLang] && translations[currentLang][key]) {
      element.title = translations[currentLang][key];
    }
  });
}

window.addEventListener("load", () => {
  const splash = document.getElementById("splashScreen");
  const container = document.querySelector(".container");
  container.style.opacity = "0";

  setTimeout(() => {
    splash.style.transition = "opacity 1s ease";
    splash.style.opacity = "0";
    setTimeout(() => {
      splash.style.display = "none";
      container.style.transition = "opacity 1.2s ease";
      container.style.opacity = "1";
    }, 1000);
  }, 2500);

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (pos) => fetchByCoords(pos.coords.latitude, pos.coords.longitude),
      (err) => console.warn("Geolocation unavailable:", err.message),
      { timeout: 8000 }
    );
  }
});

(function setInitialTheme() {
  const saved = localStorage.getItem("theme");
  if (saved === "light") {
    document.body.classList.add("light");
    themeIcon.classList.replace("bx-moon", "bx-sun");
  }
})();

themeToggle.addEventListener("click", () => {
  document.body.style.transition = "background 1.2s cubic-bezier(0.4, 0, 0.2, 1), color 0.6s ease";
  document.body.classList.toggle("light");
  const isLight = document.body.classList.contains("light");
  localStorage.setItem("theme", isLight ? "light" : "dark");
  themeIcon.classList.replace(isLight ? "bx-moon" : "bx-sun", isLight ? "bx-sun" : "bx-moon");
});

modeToggle.addEventListener("click", () => {
  document.body.classList.toggle("minimal");
  modeToggle.classList.toggle("active");
});

chatToggle.addEventListener("click", () => {
  chatbotContainer.classList.toggle("active");
});

closeChatBtn.addEventListener("click", () => {
  chatbotContainer.classList.remove("active");
});

languageSelect.addEventListener("change", () => {
  currentLang = languageSelect.value;
  translatePage();
  if (currentCityData) {
    updateUI(currentCityData);
  }
});

locationIcon.addEventListener("click", () => {
  if (navigator.geolocation) {
    locationIcon.style.animation = "pulse 0.6s ease";
    setTimeout(() => locationIcon.style.animation = "", 600);
    navigator.geolocation.getCurrentPosition(
      (pos) => fetchByCoords(pos.coords.latitude, pos.coords.longitude),
      (err) => alert("Unable to get location: " + err.message),
      { timeout: 8000 }
    );
  } else {
    alert("Geolocation is not supported by your browser.");
  }
});

voiceBtn.addEventListener("click", () => {
  const Recognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!Recognition) {
    alert("Speech recognition not supported in this browser.");
    return;
  }
  const recognition = new Recognition();
  recognition.lang = getVoiceLang();
  recognition.start();
  voiceBtn.style.color = "#FF4444";
  recognition.onresult = (event) => {
    cityInput.value = event.results[0][0].transcript;
    getWeather();
    voiceBtn.style.color = "";
  };
  recognition.onerror = () => {
    voiceBtn.style.color = "";
  };
  recognition.onend = () => {
    voiceBtn.style.color = "";
  };
});

function getVoiceLang() {
  const langMap = {
    hi: "hi-IN",
    fr: "fr-FR",
    es: "es-ES",
    ar: "ar-SA",
    de: "de-DE",
    ja: "ja-JP",
    zh: "zh-CN"
  };
  return langMap[currentLang] || "en-US";
}

function speakWeather(text) {
  if (!("speechSynthesis" in window)) return;
  window.speechSynthesis.cancel();
  const ut = new SpeechSynthesisUtterance(text);
  ut.lang = getVoiceLang();
  ut.pitch = 1.1;
  ut.rate = 0.9;
  const voices = window.speechSynthesis.getVoices();
  const preferredVoice = voices.find(v =>
    v.lang.startsWith(currentLang) && /female|zira|susan|samantha/i.test(v.name)
  );
  ut.voice = preferredVoice || voices.find(v => v.lang.startsWith(currentLang)) || voices[0];
  window.speechSynthesis.speak(ut);
}

async function fetchByCoords(lat, lon) {
  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    const res = await fetch(url);
    const data = await res.json();
    if (data && data.coord) {
      currentCityData = data;
      updateUI(data);
      await fetchForecast(lat, lon);
    }
  } catch (e) {
    console.error("fetchByCoords error:", e);
  }
}

searchBtn.addEventListener("click", getWeather);
cityInput.addEventListener("keypress", (e) => { if (e.key === "Enter") getWeather(); });

async function getWeather() {
  const city = cityInput.value.trim();
  if (!city) {
    alert(translations[currentLang]["enter-city"]);
    return;
  }

  const lower = city.toLowerCase();
  if (lower === "mars") return showMarsMode();
  if (lower === "heaven") return showHeavenMode();

  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric`;
    const res = await fetch(url);
    const data = await res.json();
    if (!data || data.cod === "404") {
      alert(translations[currentLang]["city-not-found"]);
      return;
    }
    currentCityData = data;
    updateUI(data);
    await fetchForecast(data.coord.lat, data.coord.lon);
  } catch (e) {
    console.error("getWeather error:", e);
    alert("Unable to fetch weather. Check network or API key.");
  }
}

function updateUI(data) {
  const tempEl = document.getElementById("temperature");
  const descEl = document.getElementById("description");
  const humidEl = document.getElementById("humidity");
  const windEl = document.getElementById("wind");
  const pressureEl = document.getElementById("pressure");
  const visibilityEl = document.getElementById("visibility");
  const iconEl = document.getElementById("weatherIcon");
  const feelsEl = document.getElementById("feelsLike");
  const sunTimeEl = document.getElementById("sunTime");
  const comfortEl = document.getElementById("comfortMeter");

  if (!data) return;

  const condition = data.weather?.[0]?.main || "Clear";
  const icon = data.weather?.[0]?.icon || "01d";
  const sunrise = data.sys?.sunrise ? new Date(data.sys.sunrise * 1000).toLocaleTimeString([], {hour:'2-digit',minute:'2-digit'}) : "--";
  const sunset = data.sys?.sunset ? new Date(data.sys.sunset * 1000).toLocaleTimeString([], {hour:'2-digit',minute:'2-digit'}) : "--";

  tempEl.textContent = `${Math.round(data.main.temp)}°C`;
  descEl.textContent = data.weather[0].description;
  humidEl.textContent = `${data.main.humidity}%`;
  windEl.textContent = `${Math.round(data.wind.speed * 3.6)} km/h`;
  pressureEl.textContent = `${data.main.pressure} hPa`;
  visibilityEl.textContent = `${(data.visibility / 1000).toFixed(1)} km`;

  iconEl.src = `https://openweathermap.org/img/wn/${icon}@2x.png`;

  feelsEl.innerHTML = `<span data-translate="feels-like">${translations[currentLang]["feels-like"]}</span>: ${Math.round(data.main.feels_like)}°C`;
  sunTimeEl.innerHTML = `☀️ <span data-translate="sunrise">${translations[currentLang]["sunrise"]}</span>: ${sunrise} | 🌙 <span data-translate="sunset">${translations[currentLang]["sunset"]}</span>: ${sunset}`;

  setComfort(data.main.temp, comfortEl);

  animationLayer.innerHTML = "";
  const lc = condition.toLowerCase();
  if (lc.includes("clear")) makeSunny();
  else if (lc.includes("cloud")) makeClouds();
  else if (lc.includes("rain") || lc.includes("drizzle")) makeRain();
  else if (lc.includes("snow")) makeSnow();
  else makeMist();

  applyTimeBackground();

  const speechText = `The weather in ${data.name} is ${Math.round(data.main.temp)} degrees with ${data.weather[0].description}.`;
  speakWeather(speechText);
}

function setComfort(temp, element) {
  if (!element) return;
  let emoji = "😐";
  let text = "comfort-normal";

  if (temp > 35) {
    emoji = "🥵";
    text = "comfort-hot";
  } else if (temp > 28) {
    emoji = "😎";
    text = "comfort-warm";
  } else if (temp < 10) {
    emoji = "🥶";
    text = "comfort-cold";
  } else {
    emoji = "🙂";
    text = "comfort-comfortable";
  }

  element.innerHTML = `${emoji} <span data-translate="${text}">${translations[currentLang][text]}</span>`;
}

function applyTimeBackground() {
  const hour = new Date().getHours();
  let bg = "linear-gradient(135deg, #0f2027, #203a43, #2c5364)";

  if (hour >= 6 && hour < 12) {
    bg = "linear-gradient(135deg, #FFD194, #D1913C, #FFB347)";
  } else if (hour >= 12 && hour < 17) {
    bg = "linear-gradient(135deg, #56CCF2, #2F80ED, #1e3c72)";
  } else if (hour >= 17 && hour < 20) {
    bg = "linear-gradient(135deg, #ff9966, #ff5e62, #aa4b6b)";
  }

  document.body.style.background = bg;
}

function showMarsMode() {
  document.body.style.background = "radial-gradient(circle at center, #ff6b6b, #8b0000, #2c0000)";
  animationLayer.innerHTML = "";
  const m = document.createElement("div");
  m.style.width = "250px";
  m.style.height = "250px";
  m.style.borderRadius = "50%";
  m.style.background = "radial-gradient(circle, #ffb3b3, #ff6b6b, #8b0000)";
  m.style.boxShadow = "0 0 150px 50px rgba(255,0,0,0.5)";
  m.style.position = "absolute";
  m.style.left = "calc(50% - 125px)";
  m.style.top = "15%";
  m.style.animation = "pulseSun 5s ease-in-out infinite";
  animationLayer.appendChild(m);
  speakWeather("Welcome to Mars. Cold, red and dusty.");
}

function showHeavenMode() {
  document.body.style.background = "linear-gradient(135deg, #fffbd5, #f7f3ce, #e8d5b7)";
  animationLayer.innerHTML = "";
  for (let i = 0; i < 20; i++) {
    const star = document.createElement("div");
    star.style.position = "absolute";
    star.style.width = "4px";
    star.style.height = "4px";
    star.style.background = "white";
    star.style.borderRadius = "50%";
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
    star.style.boxShadow = "0 0 20px 4px rgba(255,255,255,0.9)";
    star.style.animation = `twinkle ${2 + Math.random() * 2}s ease-in-out infinite`;
    animationLayer.appendChild(star);
  }
  speakWeather("Welcome to Heaven. Eternal light and peace.");
}

async function fetchForecast(lat, lon) {
  try {
    const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    const res = await fetch(url);
    const data = await res.json();
    if (!data || !data.list) {
      console.error("Forecast data missing:", data);
      return;
    }
    displayHourlyForecast(data.list);
    displayWeeklyForecast(data.list);
  } catch (e) {
    console.error("fetchForecast error:", e);
  }
}

function displayHourlyForecast(list) {
  const container = document.getElementById("hourlyForecast");
  container.innerHTML = "";

  const hourly = list.slice(0, 4);

  hourly.forEach((item, index) => {
    const date = new Date(item.dt * 1000);
    const time = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const temp = Math.round(item.main.temp);
    const icon = item.weather[0].icon;
    const desc = item.weather[0].description;

    const forecastItem = document.createElement("div");
    forecastItem.className = "forecast-item";
    forecastItem.style.animationDelay = `${index * 0.1}s`;
    forecastItem.innerHTML = `
      <div class="day">${time}</div>
      <img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="${desc}">
      <div class="temp">${temp}°C</div>
      <div class="desc">${desc}</div>
    `;
    container.appendChild(forecastItem);
  });
}

function displayWeeklyForecast(list) {
  const container = document.getElementById("weeklyForecast");
  container.innerHTML = "";

  const dailyData = {};

  list.forEach(item => {
    const date = new Date(item.dt * 1000);
    const dayKey = date.toDateString();

    if (!dailyData[dayKey]) {
      dailyData[dayKey] = {
        temps: [],
        icons: [],
        descriptions: [],
        date: date
      };
    }
    dailyData[dayKey].temps.push(item.main.temp);
    dailyData[dayKey].icons.push(item.weather[0].icon);
    dailyData[dayKey].descriptions.push(item.weather[0].description);
  });

  const dailyEntries = Object.entries(dailyData).slice(0, 7);

  dailyEntries.forEach(([_, data], index) => {
    const avgTemp = Math.round(data.temps.reduce((sum, temp) => sum + temp, 0) / data.temps.length);
    const mostCommonIcon = data.icons.sort((a, b) =>
      data.icons.filter(icon => icon === a).length - data.icons.filter(icon => icon === b).length
    ).pop();
    const mostCommonDesc = data.descriptions[0];

    const dayName = data.date.toLocaleDateString(undefined, { weekday: 'short', month: 'short', day: 'numeric' });

    const forecastItem = document.createElement("div");
    forecastItem.className = "forecast-item";
    forecastItem.style.animationDelay = `${index * 0.1}s`;
    forecastItem.innerHTML = `
      <div class="day">${dayName}</div>
      <img src="https://openweathermap.org/img/wn/${mostCommonIcon}@2x.png" alt="${mostCommonDesc}">
      <div class="temp">${avgTemp}°C</div>
      <div class="desc">${mostCommonDesc}</div>
    `;
    container.appendChild(forecastItem);
  });
}

function makeSunny() {
  const s = document.createElement("div");
  s.classList.add("sun-rays");
  animationLayer.appendChild(s);
}

function makeClouds() {
  for (let i = 0; i < 3; i++) {
    const c = document.createElement("div");
    c.classList.add("cloud");
    c.style.top = `${10 + i * 20}%`;
    c.style.animationDuration = `${60 + i * 20}s`;
    c.style.animationDelay = `${i * 5}s`;
    animationLayer.appendChild(c);
  }
}

function makeRain() {
  for (let i = 0; i < 80; i++) {
    const d = document.createElement("div");
    d.classList.add("raindrop");
    d.style.left = `${Math.random() * 100}%`;
    d.style.animationDuration = `${0.5 + Math.random() * 0.5}s`;
    d.style.animationDelay = `${Math.random() * 2}s`;
    animationLayer.appendChild(d);
  }
}

function makeSnow() {
  for (let i = 0; i < 40; i++) {
    const s = document.createElement("div");
    s.classList.add("snowflake");
    s.innerHTML = "❄";
    s.style.left = `${Math.random() * 100}%`;
    s.style.fontSize = `${14 + Math.random() * 12}px`;
    s.style.animationDuration = `${4 + Math.random() * 4}s`;
    s.style.animationDelay = `${Math.random() * 5}s`;
    animationLayer.appendChild(s);
  }
}

function makeMist() {
  for (let i = 0; i < 5; i++) {
    const m = document.createElement("div");
    m.classList.add("mist-layer");
    m.style.top = `${i * 20}%`;
    m.style.animationDuration = `${15 + i * 3}s`;
    m.style.animationDelay = `${i * 2}s`;
    animationLayer.appendChild(m);
  }
}

sendChatBtn.addEventListener("click", sendChatMessage);
chatInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") sendChatMessage();
});

async function sendChatMessage() {
  const message = chatInput.value.trim();
  if (!message) return;

  addChatMessage(message, "user");
  chatInput.value = "";

  addTypingIndicator();

  try {
    const response = await getChatbotResponse(message);
    removeTypingIndicator();
    addChatMessage(response, "bot");
  } catch (e) {
    removeTypingIndicator();
    addChatMessage("Sorry, I couldn't process that request. Please try again.", "bot");
  }
}

function addChatMessage(text, sender) {
  const messageDiv = document.createElement("div");
  messageDiv.className = `chat-message ${sender}`;
  messageDiv.textContent = text;
  chatMessages.appendChild(messageDiv);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function addTypingIndicator() {
  const typingDiv = document.createElement("div");
  typingDiv.className = "chat-message bot typing";
  typingDiv.id = "typingIndicator";
  typingDiv.innerHTML = `
    <div class="typing-dot"></div>
    <div class="typing-dot"></div>
    <div class="typing-dot"></div>
  `;
  chatMessages.appendChild(typingDiv);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function removeTypingIndicator() {
  const indicator = document.getElementById("typingIndicator");
  if (indicator) indicator.remove();
}

async function getChatbotResponse(message) {
  const lowerMessage = message.toLowerCase();

  if (!currentCityData) {
    if (lowerMessage.includes("weather") || lowerMessage.includes("temperature") ||
        lowerMessage.includes("forecast") || lowerMessage.includes("rain") ||
        lowerMessage.includes("sunny") || lowerMessage.includes("cloud")) {
      return "Please search for a city first to get weather information.";
    }
    return "Hello! I'm your weather assistant. Search for a city to get started, and I can help you with weather information.";
  }

  const city = currentCityData.name;
  const temp = Math.round(currentCityData.main.temp);
  const feelsLike = Math.round(currentCityData.main.feels_like);
  const condition = currentCityData.weather[0].description;
  const humidity = currentCityData.main.humidity;
  const windSpeed = Math.round(currentCityData.wind.speed * 3.6);
  const pressure = currentCityData.main.pressure;

  if (lowerMessage.includes("temperature") || lowerMessage.includes("temp") ||
      lowerMessage.includes("hot") || lowerMessage.includes("cold") ||
      lowerMessage.includes("warm")) {
    return `The current temperature in ${city} is ${temp}°C, and it feels like ${feelsLike}°C. The weather is ${condition}.`;
  }

  if (lowerMessage.includes("humidity") || lowerMessage.includes("humid")) {
    return `The humidity in ${city} is currently ${humidity}%. ${humidity > 70 ? "It's quite humid!" : humidity > 50 ? "Moderate humidity levels." : "Low humidity levels."}`;
  }

  if (lowerMessage.includes("wind") || lowerMessage.includes("windy")) {
    return `The wind speed in ${city} is ${windSpeed} km/h. ${windSpeed > 40 ? "It's quite windy!" : windSpeed > 20 ? "Moderate wind conditions." : "Calm wind conditions."}`;
  }

  if (lowerMessage.includes("pressure")) {
    return `The atmospheric pressure in ${city} is ${pressure} hPa.`;
  }

  if (lowerMessage.includes("rain") || lowerMessage.includes("raining")) {
    const isRaining = condition.toLowerCase().includes("rain");
    return isRaining ?
      `Yes, it's currently raining in ${city}. ${condition}.` :
      `No, it's not raining in ${city} right now. The weather is ${condition}.`;
  }

  if (lowerMessage.includes("sunny") || lowerMessage.includes("sun")) {
    const isSunny = condition.toLowerCase().includes("clear");
    return isSunny ?
      `Yes! It's sunny in ${city} with ${condition}.` :
      `Currently, ${city} has ${condition}.`;
  }

  if (lowerMessage.includes("cloud") || lowerMessage.includes("cloudy")) {
    const isCloudy = condition.toLowerCase().includes("cloud");
    return isCloudy ?
      `Yes, ${city} is experiencing ${condition}.` :
      `No significant clouds. The weather in ${city} is ${condition}.`;
  }

  if (lowerMessage.includes("forecast") || lowerMessage.includes("tomorrow") ||
      lowerMessage.includes("later") || lowerMessage.includes("future")) {
    return `For detailed forecasts, check the "Next 12 Hours" and "7-Day Forecast" sections below. Currently in ${city}, it's ${temp}°C with ${condition}.`;
  }

  if (lowerMessage.includes("should i") || lowerMessage.includes("can i")) {
    if (lowerMessage.includes("umbrella")) {
      const needUmbrella = condition.toLowerCase().includes("rain") || humidity > 80;
      return needUmbrella ?
        `Yes, I'd recommend taking an umbrella. ${condition} in ${city}.` :
        `You probably won't need an umbrella. The weather is ${condition}.`;
    }
    if (lowerMessage.includes("jacket") || lowerMessage.includes("coat")) {
      return temp < 15 ?
        `Yes, it's ${temp}°C, so a jacket would be a good idea!` :
        `It's ${temp}°C, so a jacket might not be necessary unless you get cold easily.`;
    }
    if (lowerMessage.includes("outside") || lowerMessage.includes("go out")) {
      return temp > 10 && temp < 35 && !condition.includes("thunderstorm") ?
        `Great weather for going outside! ${temp}°C with ${condition}.` :
        `You might want to consider the weather: ${temp}°C with ${condition}.`;
    }
  }

  if (lowerMessage.includes("hello") || lowerMessage.includes("hi") ||
      lowerMessage.includes("hey")) {
    return `Hello! The current weather in ${city} is ${temp}°C with ${condition}. How can I help you?`;
  }

  if (lowerMessage.includes("thank") || lowerMessage.includes("thanks")) {
    return "You're welcome! Let me know if you need any other weather information.";
  }

  return `Currently in ${city}: ${temp}°C with ${condition}. Humidity: ${humidity}%, Wind: ${windSpeed} km/h. Ask me about temperature, humidity, wind, rain, or forecasts!`;
}

const style = document.createElement('style');
style.textContent = `
  @keyframes twinkle {
    0%, 100% { opacity: 0.3; transform: scale(1); }
    50% { opacity: 1; transform: scale(1.5); }
  }
`;
document.head.appendChild(style);

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').catch(e => console.warn("SW registration failed:", e));
  });
}
