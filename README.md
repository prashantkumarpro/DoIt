# DoIt  - Advanced React To-Do Application with API Integration

## 🚀 Project Overview
**DoIt** is a feature-rich task management web application built using **React.js** and **Tailwind CSS**. The app allows users to create, manage, and organize their tasks efficiently with an intuitive and responsive UI.

## 🎯 Features
- ✅ **Add, Edit, Delete Tasks** 
- ⭐ **Mark Tasks as Important**
- 📅 **Categorize Tasks (Today, Planned, Assigned, etc.)** (in progress)
- 🌙 **Dark Mode Support** (in progress)
- 📍 **Geolocation-based Outdoor/Indoor Task Categorization**
- 🌦 **Weather API Integration for Outdoor Tasks**
- 📱 **Fully Responsive Design**  (in progress)


## 🛠️ Tech Stack
- **Frontend:** React.js, Tailwind CSS
- **State Management:** useState, useEffect (React Hooks), Redux-toolkit, Redux Thunk (working on redux Thunk api call)
- **API Integration:** Fetch API / Axios (for Weather API)
- **Icons:** React Icons

## 🔧 Installation & Setup
1. **Clone the repository**
   ```bash
   git clone https://github.com/prashantkumarpro/DoIt.git
   cd DoIt
   ```
2. **Install dependencies**
   ```bash
   npm install
   ```
3. **Start the development server**
   ```bash
   npm run dev
   ```
4. **Open in browser**
   - Navigate to `http://localhost:5173`


## 🌦️ API Integration (Weather API)
To fetch weather data for outdoor tasks, you need to set up an API key:
1. Sign up at [OpenWeather API](https://openweathermap.org/api) or any weather API provider.
2. Get your API key and create a `.env` file in the root directory:
   ```bash
   REACT_APP_WEATHER_API_KEY=your_api_key_here
   ```
3. Use the API key in your fetch request.

## 📸 Screenshots
![image](https://github.com/user-attachments/assets/0fdcf4bb-7008-4078-bb7d-f8b454c5b454)


## 🚀 Deployment
To deploy the app, use:
```bash
npm run build
```
And then host it on:
- Vercel
- Netlify
- GitHub Pages

## 🤝 Contributing
Feel free to fork the repo and submit pull requests!

## 📬 Contact
For any inquiries, reach out at [dev.prashant.kumaar@gmail.com] or connect on [https://www.linkedin.com/in/prashant-web-developer/].

