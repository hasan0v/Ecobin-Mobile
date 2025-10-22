# How to View Pages in Your EcoBin Mobile App

## ✅ Current Status
- **Android App**: Successfully built and installed on emulator
- **App Version**: Debug build running on Medium_Phone_API_35_2
- **Navigation**: All 10+ screens available

---

## 🚀 Quick Start

### Step 1: Ensure Metro Bundler is Running
If not already running, start it in a terminal:
```bash
cd c:\Users\alien\Desktop\Projects\Ecobin-Mobile
npm start
```

### Step 2: Launch the App
- The app should auto-launch on the emulator when Metro bundler starts
- Or manually open it from the emulator's app drawer (look for "EcoBin")

### Step 3: Login
On the LoginScreen, enter **any email and password** (minimum 6 characters):
- Email: `test@example.com`
- Password: `password123`

The validation will pass and you'll be taken to the **HomeScreen** automatically.

---

## 📱 Available Pages

After logging in, you can navigate between these screens using the **bottom tab navigation**:

### 1. **Home Screen** 🏠
- Main dashboard showing app overview
- Weather widget (if implemented)
- Personalized greeting
- Status cards for connected devices

**To Access**: Tap the "Home" tab at the bottom

### 2. **Compost Screen** ♻️
- Compost monitoring and tracking
- Batch history
- Active composting sessions
- Temperature and humidity data

**To Access**: Tap the "Compost" tab at the bottom

### 3. **Water Screen** 💧
- Water management features
- Irrigation tracking
- Water usage statistics
- Irrigation history

**To Access**: Tap the "Water" tab at the bottom

### 4. **Soil Screen** 🌱
- Soil analysis results
- Soil composition data
- pH levels
- Nutrient information

**To Access**: Tap the "Soil" tab at the bottom

### 5. **Profile Screen** 👤
- User profile information
- Settings
- Account preferences
- Logout option

**To Access**: Tap the "Profile" tab at the bottom

---

## 🔑 Login Test Credentials

You can use any email and password with these requirements:
- **Email**: Must be a valid email format (e.g., `test@example.com`)
- **Password**: At least 6 characters long

Examples that work:
- `user@test.com` / `password`
- `demo@ecobin.com` / `123456`
- `jane@example.com` / `securepass`

---

## 🔄 Navigation Flow

```
SplashScreen
    ↓
LoginScreen ← Enter credentials
    ↓
HomeScreen (with bottom tab navigation)
    ├── Home
    ├── Compost
    ├── Water
    ├── Soil
    └── Profile
```

---

## 🛠️ Troubleshooting

### App Won't Start
1. Make sure Metro bundler is running: `npm start`
2. Check that Java 21 is configured:
   ```bash
   $env:JAVA_HOME="C:\Program Files\Java\jdk-21"
   ```

### Stuck on Splash Screen
- Wait 3-5 seconds for the app to initialize
- If still stuck, rebuild: `npx react-native run-android`

### Can't Login
- Make sure your password is at least 6 characters
- Check that your email format is valid (contains @ and .)

### Crashes After Login
- Check Metro bundler console for errors
- Rebuild the app: `./gradlew clean assembleDebug` (in android directory)

---

## 🎯 What's Next

The following screens are ready for interactive development based on your design files:

- ✅ LoginScreen - Complete
- ✅ Navigation Structure - Complete
- 📋 SignupScreen - Ready to develop
- 📋 HomeScreen - Basic structure (ready to expand)
- 📋 CompostScreen - Basic structure (ready to expand)
- 📋 WaterScreen - Basic structure (ready to expand)
- 📋 SoilScreen - Basic structure (ready to expand)
- 📋 ProfileScreen - Basic structure (ready to expand)

---

## 📊 Current Architecture

**Authentication Flow**:
- Zustand auth store handles login state
- Successful login sets `isAuthenticated = true`
- RootNavigator automatically switches to Main stack
- Form validation with email and password strength checks

**Navigation**:
- Stack Navigator for auth flow (LoginScreen → HomeScreen)
- Tab Navigator for main app (5 screens)
- All screens connected through RootNavigator

**Styling**:
- Design system: `src/constants/theme.ts`
- Colors, typography, spacing, and shadows defined
- Reusable components: TextInput, Button

---

## 🎨 Customize Pages

To modify screen designs:
1. Find the design file in `designs/` folder (e.g., `designs/home_dashboard_screen/code.html`)
2. Open the corresponding screen in `src/screens/main/` (e.g., `src/screens/main/HomeScreen.tsx`)
3. Update the React Native JSX to match the design
4. Rebuild: `./gradlew assembleDebug && ./gradlew installDebug`
5. Reload: Press 'r' in Metro bundler console

---

## 📝 Notes

- All screens currently show placeholder/basic content
- Real API integration can be added when backend is ready
- Zustand stores are ready for state management
- TypeScript types are defined for all data models

Enjoy exploring your EcoBin app! 🌱
