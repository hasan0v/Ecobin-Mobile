# EcoBin Mobile App - Development Setup Guide

## Step-by-Step Setup Instructions

### 1. Prerequisites Installation (Windows)

```bash
# Install Node.js from https://nodejs.org/ (LTS recommended)
# Then verify installation
node --version
npm --version

# Install React Native CLI globally
npm install -g react-native-cli

# Install Android SDK (via Android Studio)
# Download from https://developer.android.com/studio
# During installation, ensure you install:
# - Android SDK
# - Android SDK Platform Tools
# - Android Emulator
```

### 2. Android Environment Setup

After installing Android Studio:

```bash
# Set ANDROID_HOME environment variable
setx ANDROID_HOME %USERPROFILE%\AppData\Local\Android\sdk

# Close and reopen Command Prompt for changes to take effect
# Verify it's set:
echo %ANDROID_HOME%

# Add platform-tools to PATH
setx PATH "%PATH%;%ANDROID_HOME%\platform-tools"
```

### 3. Project Setup

```bash
# Navigate to project directory
cd c:\Users\alien\Desktop\Projects\Ecobin-Mobile

# Install dependencies
npm install

# If you encounter cache issues, clean npm cache
npm cache clean --force

# Then reinstall
npm install
```

### 4. Environment Configuration

Create `.env` file in project root:

```
# API Configuration
API_URL=https://api.ecobin.app/v1
API_TIMEOUT=10000

# Firebase Configuration (optional - add when needed)
FIREBASE_API_KEY=your_firebase_api_key
FIREBASE_PROJECT_ID=ecobin-mobile
FIREBASE_MESSAGING_SENDER_ID=your_sender_id
FIREBASE_APP_ID=your_app_id

# App Configuration
APP_VERSION=1.0.0
ENVIRONMENT=development
DEBUG=true
```

### 5. Running the App on Android

```bash
# Terminal 1: Start Metro bundler (JavaScript transformer)
npm start

# Terminal 2: Build and run on Android emulator
npm run android

# Or if you have a physical Android device connected:
# Make sure USB debugging is enabled on the device
npm run android
```

### 6. VS Code Configuration

#### Recommended Extensions

Install these extensions in VS Code:

- **ES7+ React/Redux/React-Native snippets** - dsznajder.es7-react-js-snippets
- **TypeScript Vue Plugin (Volar)** - Vue.volar
- **Prettier - Code formatter** - esbenp.prettier-vscode
- **ESLint** - dbaeumer.vscode-eslint
- **React Native Tools** - msjsdiab.vscode-react-native
- **Thunder Client** or **REST Client** - for API testing

#### VS Code Settings (.vscode/settings.json)

Create or update `.vscode/settings.json`:

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact"
  ],
  "files.exclude": {
    "node_modules": true
  }
}
```

### 7. Android Emulator Setup

```bash
# List available emulators
emulator -list-avds

# Create new emulator if needed
# Use Android Studio GUI: Tools → Device Manager → Create Virtual Device

# Start specific emulator
emulator -avd Pixel_5_API_33

# Or let React Native handle it:
npm run android
```

### 8. Troubleshooting

#### Metro Bundler Issues

```bash
# Clear Metro cache
npm start -- --reset-cache

# Kill Metro process on port 8081
netstat -ano | findstr :8081
taskkill /PID <PID> /F
```

#### Android Build Issues

```bash
# Clear Gradle cache
cd android
./gradlew clean
cd ..

# Rebuild
npm run android

# Or completely rebuild
npm run android -- --rebuild
```

#### Dependency Installation Issues

```bash
# Complete reset
npm cache clean --force
rmdir /s /q node_modules
del package-lock.json
npm install
```

#### TypeScript Errors

```bash
# Regenerate types (if available)
npm run types:generate

# Or verify tsconfig.json is correct
```

#### Port Already in Use

```bash
# If port 8081 is in use, start Metro on different port
npm start -- --port 8088

# Then in another terminal
npm run android
```

## Development Workflow

### Code Structure Best Practices

1. **Component Organization**
   - One component per file
   - Export as default
   - Use `.tsx` extension for components
   - Keep components focused and reusable

2. **State Management**
   - Use Zustand hooks in components
   - Avoid prop drilling
   - Centralize business logic in stores
   - Example: `const { user, login } = useAuth()`

3. **Navigation**
   - Define screens in `src/navigation/RootNavigator.tsx`
   - Use typed navigation params
   - Handle deep linking in AppNavigator

4. **API Calls**
   - Use services in `src/services/api.ts` for endpoints
   - Handle errors gracefully with try-catch
   - Show loading states using custom hooks

5. **Styling**
   - Import constants from `@constants/theme`
   - Use consistent spacing grid (8px base)
   - Avoid inline styles for complex layouts
   - Use StyleSheet.create() for performance

### Git Workflow

```bash
# Create feature branch
git checkout -b feature/compost-monitoring

# Make changes and stage
git add .

# Commit with conventional commits
git commit -m "feat: add compost real-time monitoring"

# Push to remote
git push origin feature/compost-monitoring

# Create Pull Request via GitHub
```

### Testing

```bash
# Run all tests
npm test

# Run specific test file
npm test -- HomeScreen.test.tsx

# Watch mode for development
npm test -- --watch

# Coverage report
npm test -- --coverage
```

## Performance Testing

### Debug Release Build

```bash
# Build release APK
npm run build:android

# Install release APK
adb install android/app/build/outputs/apk/release/app-release.apk
```

### Debug with Chrome DevTools

```bash
# Start development build
npm start

# Press 'd' in Metro terminal to open debugger menu
# Open Chrome and navigate to chrome://inspect
# React DevTools available via React Native Tools extension
```

## Device Testing

### Android Physical Device

```bash
# Enable USB Debugging on device:
# Settings → Developer Options → USB Debugging (toggle ON)

# List connected devices
adb devices

# Install and run app
npm run android

# Or install specific APK
adb install path/to/app.apk

# View logs
adb logcat
```

### Android Emulator

```bash
# List running emulators
adb devices

# Logs from emulator
adb logcat | grep EcoBin
```

## Deployment Checklist

### Pre-Release

- [ ] Update version in `package.json`
- [ ] Update `CHANGELOG.md`
- [ ] Run tests: `npm test`
- [ ] Check lint: `npm run lint`
- [ ] Build release: `npm run build:android`
- [ ] Test on physical Android device
- [ ] Update screenshots for Google Play

### Android Release

- [ ] Generate signed APK/AAB:
  ```bash
  cd android
  ./gradlew assembleRelease
  cd ..
  ```
- [ ] Sign APK with keystore
- [ ] Upload to Google Play Console
- [ ] Submit for review
- [ ] Monitor feedback

## Useful Commands

```bash
# Clear all caches and reinstall
npm cache clean --force
rmdir /s /q node_modules
del package-lock.json
npm install

# Format code with Prettier
npm run format

# Check code style with ESLint
npm run lint

# Type checking
npm run type-check

# Start Metro with specific port
npm start -- --port 8088

# Build for Android only
npm run build:android

# Clear Watchman cache (if installed)
watchman watch-del-all

# Start app in production mode
npm start -- --max-workers=1
```

## Project Structure Reference

```
ecobin-mobile/
├── src/
│   ├── components/          # Reusable UI components
│   ├── screens/             # Screen components
│   │   ├── auth/           # Authentication screens
│   │   └── main/           # Main app screens
│   ├── services/           # API and external services
│   ├── store/              # Zustand state management
│   ├── navigation/         # React Navigation setup
│   ├── hooks/              # Custom React hooks
│   ├── constants/          # App constants and theme
│   ├── utils/              # Utility functions
│   ├── types/              # TypeScript type definitions
│   ├── App.tsx             # Root component
│   └── index.ts            # Exports index
├── android/                # Android native code
├── app.json               # App configuration
├── package.json           # Dependencies and scripts
├── tsconfig.json          # TypeScript configuration
├── .env.example           # Environment variables template
└── README.md              # Project documentation
```

## Additional Resources

- [React Native Documentation](https://reactnative.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [React Navigation](https://reactnavigation.org/)
- [Zustand](https://github.com/pmndrs/zustand)
- [Android Developer Docs](https://developer.android.com/docs)

## Support & Issues

If you encounter any issues:

1. Check the [React Native troubleshooting guide](https://reactnative.dev/docs/troubleshooting)
2. Search existing GitHub issues
3. Check `.env` configuration
4. Verify Android SDK installation
5. Create an issue with:
   - Error message and stack trace
   - Node and React Native versions
   - Steps to reproduce
   - Expected vs actual behavior

```bash
# Get system info
node --version
npm --version
react-native --version
echo %ANDROID_HOME%
```

---

**Happy coding! 🚀**

**Windows-Specific Setup Guide for EcoBin Mobile Development**
