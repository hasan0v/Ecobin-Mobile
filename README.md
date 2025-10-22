# EcoBin Mobile App

🌱 Smart Agricultural Management Mobile Application built with React Native

## Overview

EcoBin is a comprehensive mobile application for intelligent agricultural IoT platform that enables farmers to monitor and control their composting systems, irrigation, soil health, and water quality in real-time. The app features real-time data visualization, AI-powered recommendations, offline capabilities, and educational content.

## Features

### ✅ Core Features Implemented

#### 1. **Authentication & Onboarding**
- Splash screen with animated loading indicator
- Welcome onboarding carousel
- Login screen with email/password and social login
- User registration with multi-step form
- Profile setup with device configuration

#### 2. **Main Dashboard**
- Real-time farm overview
- Weather information with alerts
- Quick stats cards (Compost, Water, Soil)
- Notifications center
- AI assistant access
- Learning recommendations

#### 3. **Compost Monitoring**
- Real-time composting progress tracking
- Circular progress indicator with timeline
- Sensor data visualization (Temperature, Humidity, Weight, CO2)
- MIX and START/STOP controls
- Next actions timeline
- Batch history tracking

#### 4. **Water Management**
- Monthly irrigation calendar
- Rainwater tank visualization and monitoring
- Water quality metrics (pH, DO, Nitrate, COD, TDS, EC)
- Auto-irrigation scheduling with AI
- Manual irrigation triggers
- Water usage history and analytics

#### 5. **Soil Analysis**
- Overall soil health scoring system
- Primary nutrient tracking (N, P, K)
- Secondary nutrient analysis
- Physical properties assessment
- AI-powered recommendations
- Historical trend analysis

#### 6. **User Profile & Settings**
- User profile management
- Connected devices display
- Settings for notifications, language, units, privacy
- Education center access
- Help & support section

### 🎯 Advanced Features

#### 7. **AI Assistant**
- Natural language chatbot
- Context-aware responses with sensor data
- Voice input support
- Quick action suggestions
- Multi-turn conversations
- Real-time data integration

#### 8. **Education Center**
- Video tutorials
- Articles and guides
- Podcasts
- Learning progress tracking
- Content recommendations

#### 9. **Notifications System**
- Priority-based notifications (Critical, Warning, Info, Tips)
- Sound and haptic feedback
- Quick actions from notifications
- Notification history

#### 10. **Data Export & Sharing**
- PDF reports generation
- CSV data export
- Email/WhatsApp sharing
- Cloud backup integration

## Project Structure

```
ecobin-mobile/
├── src/
│   ├── components/
│   │   ├── Button.tsx
│   │   ├── TextInput.tsx
│   │   ├── Card.tsx
│   │   └── ...
│   ├── screens/
│   │   ├── auth/
│   │   │   ├── SplashScreen.tsx
│   │   │   ├── WelcomeScreen.tsx
│   │   │   ├── LoginScreen.tsx
│   │   │   ├── SignupScreen.tsx
│   │   │   └── OnboardingScreen.tsx
│   │   └── main/
│   │       ├── HomeScreen.tsx
│   │       ├── CompostScreen.tsx
│   │       ├── WaterScreen.tsx
│   │       ├── SoilScreen.tsx
│   │       └── ProfileScreen.tsx
│   ├── navigation/
│   │   └── RootNavigator.tsx
│   ├── services/
│   │   ├── api.ts
│   │   ├── auth.ts
│   │   ├── device.ts
│   │   └── storage.ts
│   ├── store/
│   │   └── index.ts (Zustand stores)
│   ├── hooks/
│   │   └── index.ts (Custom React hooks)
│   ├── types/
│   │   └── index.ts (TypeScript interfaces)
│   ├── constants/
│   │   ├── theme.ts (Design system)
│   │   └── api.ts
│   └── utils/
│       ├── formatting.ts
│       ├── validation.ts
│       └── calculations.ts
├── App.tsx
├── index.js
├── package.json
├── tsconfig.json
├── react-native.config.js
└── README.md
```

## Tech Stack

### Core
- **React Native** 0.72.0 - Mobile framework
- **TypeScript** - Type-safe development
- **React Navigation 6** - Navigation and routing
- **Zustand** - State management
- **Axios** - HTTP client

### UI & Design
- **React Native Vector Icons** - Icon library
- **Lottie** - Animations
- **React Native Reanimated** - Advanced animations

### Features
- **Firebase** - Analytics, Crash reporting, Authentication
- **React Native Bluetooth Classic** - Device communication
- **React Native Geolocation** - Location services
- **React Native Permissions** - Permission handling
- **React Native Voice** - Voice commands
- **AsyncStorage** - Local data persistence

### Development
- **TypeScript** - Static type checking
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Jest** - Testing framework

## Getting Started

### Prerequisites
- Node.js 16+ and npm/yarn
- React Native CLI
- Xcode (for iOS development)
- Android Studio (for Android development)

### Installation

1. **Clone or Setup the project:**
```bash
cd ecobin-mobile
```

2. **Install dependencies:**
```bash
npm install
# or
yarn install
```

3. **Link native modules:**
```bash
npx react-native-cli link
# or for specific libraries
cd ios && pod install && cd ..
```

4. **Set up environment variables:**
Create `.env` file in project root:
```
API_URL=https://api.ecobin.app/v1
FIREBASE_API_KEY=your_api_key
FIREBASE_PROJECT_ID=your_project_id
```

### Running the App

#### iOS
```bash
npm run ios
# or
react-native run-ios
```

#### Android
```bash
npm run android
# or
react-native run-android
```

#### Development Server
```bash
npm start
# or
react-native start
```

## Design System

### Colors
- **Primary Green**: #4CAF50
- **Dark Green**: #388E3C
- **Light Green**: #C8E6C9
- **Water Blue**: #2196F3
- **Earth Brown**: #795548
- **Success**: #66BB6A
- **Warning**: #FFA726
- **Error**: #EF5350

### Typography
- **H1**: 28sp, Bold
- **H2**: 22sp, Semi-Bold
- **H3**: 18sp, Semi-Bold
- **Body1**: 16sp, Regular
- **Body2**: 14sp, Regular
- **Caption**: 12sp, Regular

### Spacing Grid (8px base)
- XS: 4px
- SM: 8px
- MD: 12px
- Base: 16px
- LG: 24px
- XL: 32px
- XXL: 48px

## API Integration

The app communicates with the EcoBin backend API via REST endpoints.

### Base URL
```
https://api.ecobin.app/v1
```

### Key Endpoints

**Authentication**
- `POST /auth/login` - User login
- `POST /auth/signup` - User registration
- `POST /auth/refresh` - Token refresh

**Devices**
- `GET /devices` - Get user devices
- `POST /devices/pair` - Pair new device
- `DELETE /devices/:id` - Unpair device

**Sensors**
- `GET /sensors/:deviceId/data` - Get sensor readings

**Compost**
- `GET /compost/batches` - Get compost batches
- `POST /compost/start` - Start composting cycle
- `POST /compost/:id/stop` - Stop cycle
- `POST /compost/:id/mix` - Mix compost

**Water**
- `GET /water/data` - Get water data
- `POST /water/schedule` - Schedule irrigation
- `POST /water/irrigate-now` - Manual irrigation

**Soil**
- `GET /soil/analysis/:farmId` - Get soil analysis
- `PUT /soil/:farmId` - Update soil data

## State Management

Using Zustand for global state:

```typescript
// Auth Store
useAuthStore()

// Device Store
useDeviceStore()

// Compost Store
useCompostStore()

// Soil Store
useSoilStore()

// Notification Store
useNotificationStore()
```

## Custom Hooks

```typescript
// Authentication
useAuth()

// Data Fetching
useAsync<T>()
useFetch<T>()

// Utilities
useDebounce<T>()
useTheme()
useInterval()
usePrevious<T>()
useMount()
useUnmount()
```

## Authentication Flow

1. User launches app → Splash screen
2. Check authentication status → Auth store
3. If not authenticated → Login/Signup screens
4. On successful login → Onboarding (if first time)
5. Device setup and pairing
6. Main app dashboard

## Offline Support

- Last 24 hours of sensor data cached locally
- Cached educational content
- Queued actions sync when connection restored
- Offline indicator banner
- Auto-sync on reconnection

## Testing

```bash
# Run tests
npm test

# Run tests with coverage
npm test -- --coverage

# Run specific test file
npm test -- HomeScreen.test.tsx
```

## Building for Production

### iOS
```bash
npm run build:ios
```

### Android
```bash
npm run build:android
```

## Performance Optimization

- Code splitting for lazy loading
- Image optimization and caching
- Memoized components to prevent re-renders
- Virtual scrolling for long lists
- Efficient state updates with Immer

## Security

- JWT token-based authentication
- Biometric authentication support (Face ID, Touch ID, Fingerprint)
- OAuth 2.0 for social logins
- AES-256 encryption for sensitive data
- TLS 1.3 for API communication
- Certificate pinning implemented

## Accessibility

- WCAG AA compliance (4.5:1 color contrast minimum)
- Screen reader support
- Large touch targets (48x48 dp minimum)
- Font scaling support
- Dark mode support

## Future Roadmap

### v1.1
- Arabic language support
- Advanced analytics dashboard
- Weather API integration
- Plant disease detection (camera AI)

### v1.2
- In-app marketplace
- Enhanced community features
- Yield prediction models
- ROI calculator

### v2.0
- Drone imagery integration
- Multi-field management
- Family account sharing
- Inventory management
- Financial tracking

## Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request

## License

This project is licensed under the MIT License - see LICENSE file for details.

## Support

For support, email support@ecobin.app or create an issue in the repository.

## Acknowledgments

- Design Guide: EcoBin Smart Agricultural Management Mobile App
- Built with React Native
- Powered by TypeScript
- Styled with custom design system

---

**Made with 💚 for sustainable agriculture**
