# EcoBin Mobile App - Quick Start Guide (Windows)

## 🚀 5-Minute Setup

### 1. Prerequisites
Ensure you have:
- Node.js (v16+) installed
- Android SDK and Android Studio installed
- ANDROID_HOME environment variable set

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Metro Bundler (Terminal 1)
```bash
npm start
```

### 4. Run App on Android (Terminal 2)
```bash
npm run android
```

The app will build and launch on your Android emulator or connected physical device.

## 📖 File Guide

### Key Files to Understand

**App Structure:**
- `App.tsx` - Root component with GestureHandler
- `src/navigation/RootNavigator.tsx` - Navigation logic (5 tabs + auth stack)

**Authentication Screens:**
- `src/screens/auth/SplashScreen.tsx` - Initial splash with loader
- `src/screens/auth/WelcomeScreen.tsx` - Onboarding carousel
- `src/screens/auth/LoginScreen.tsx` - Email/password login
- `src/screens/auth/SignupScreen.tsx` - User registration
- `src/screens/auth/OnboardingScreen.tsx` - Farm setup

**Main App Screens:**
- `src/screens/main/HomeScreen.tsx` - Dashboard with stats
- `src/screens/main/CompostScreen.tsx` - Compost monitoring
- `src/screens/main/WaterScreen.tsx` - Water management
- `src/screens/main/SoilScreen.tsx` - Soil health tracking
- `src/screens/main/ProfileScreen.tsx` - User profile

**Core Services:**
- `src/services/api.ts` - All API endpoints (25+ methods)
- `src/store/index.ts` - Zustand state stores (5 stores)
- `src/hooks/index.ts` - Custom React hooks (9 hooks)
- `src/constants/theme.ts` - Design system (colors, typography, spacing)
- `src/types/index.ts` - TypeScript interfaces (25+ types)

**Utilities:**
- `src/utils/formatting.ts` - Date, temperature, volume formatting
- `src/utils/validation.ts` - Email, password, form validation

## 🔧 Common Tasks

### Adding a New Screen

1. Create file: `src/screens/main/NewScreen.tsx`

```typescript
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS, TYPOGRAPHY, SPACING } from '@constants/theme';

export default function NewScreen() {
  return (
    <View style={styles.container}>
      <Text style={TYPOGRAPHY.h1}>New Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    padding: SPACING.base,
  },
});
```

2. Add to RootNavigator in `src/navigation/RootNavigator.tsx`:

```typescript
<Tab.Screen name="NewFeature" component={NewScreen} />
```

### Using Global State (Zustand)

```typescript
import { useAuthStore, useCompostStore } from '@store/index';

// In component
export default function MyComponent() {
  const { user, login, logout } = useAuthStore();
  const { batches, startComposting } = useCompostStore();
  
  return (
    <View>
      <Text>Welcome, {user?.name}</Text>
    </View>
  );
}
```

### Making API Calls

```typescript
import apiService from '@services/api';

export default function MyComponent() {
  const [loading, setLoading] = React.useState(false);
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await apiService.getUser();
        setData(response.data);
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Use data...
}
```

### Using Custom Hooks

```typescript
import { useAuth, useAsync, useDebounce } from '@hooks/index';

// Get auth info
const { user, isAuthenticated, login } = useAuth();

// Handle async operations
const { execute, status, data, error } = useAsync(
  async () => await apiService.getCompostBatches(),
  true // run immediately
);

// Debounce search input
const [searchTerm, setSearchTerm] = React.useState('');
const debouncedSearch = useDebounce(searchTerm, 300);
```

### Formatting Utilities

```typescript
import {
  formatDate,
  formatTemperature,
  formatVolume,
  formatWeight,
  formatPercentage,
} from '@utils/formatting';

formatDate(new Date());           // "19/10/2025"
formatTemperature(70, 'C');       // "70.0°C"
formatVolume(150, 'L');           // "150.00 L"
formatWeight(30, 'KG');           // "30.00 KG"
formatPercentage(0.75);           // "75%"
```

### Input Validation

```typescript
import {
  validateEmail,
  validatePassword,
  validateForm,
} from '@utils/validation';

// Single field validation
const isValidEmail = validateEmail('user@example.com');  // boolean
const pwdValidation = validatePassword('Pass123');       // { isValid, errors }

// Multiple field validation
const { isValid, errors } = validateForm(
  { email: 'user@example.com', password: 'Pass123' },
  {
    email: (value) => ({
      isValid: validateEmail(value),
      error: 'Invalid email format',
    }),
    password: (value) => ({
      isValid: value.length >= 8,
      error: 'Password must be 8+ characters',
    }),
  }
);
```

## 🎨 Using Design System

### Colors
```typescript
import { COLORS } from '@constants/theme';

// Primary and secondary
backgroundColor: COLORS.primary          // #4CAF50 (green)
color: COLORS.secondary                 // #2196F3 (blue)

// Semantic colors
borderColor: COLORS.error               // #F44336 (red)
color: COLORS.success                   // #8BC34A (light green)

// Neutral colors
backgroundColor: COLORS.background      // #FAFAFA
color: COLORS.textSecondary            // #757575
borderColor: COLORS.border              // #E0E0E0
```

### Typography
```typescript
import { TYPOGRAPHY } from '@constants/theme';

<Text style={TYPOGRAPHY.h1}>Page Title</Text>           // 28sp, bold
<Text style={TYPOGRAPHY.h2}>Section Title</Text>        // 24sp, semibold
<Text style={TYPOGRAPHY.body1}>Main body text</Text>    // 16sp
<Text style={TYPOGRAPHY.body2}>Secondary text</Text>    // 14sp
<Text style={TYPOGRAPHY.caption}>Small caption</Text>   // 12sp
<Text style={TYPOGRAPHY.button}>Button text</Text>      // 14sp, semibold
```

### Spacing Grid (Base: 8px)
```typescript
import { SPACING } from '@constants/theme';

SPACING.xs        // 4px   - tiny gap
SPACING.sm        // 8px   - small margin
SPACING.md        // 12px  - medium gap
SPACING.base      // 16px  - standard padding
SPACING.lg        // 24px  - large spacing
SPACING.xl        // 32px  - extra large
SPACING.xxl       // 48px  - 2x large

// Usage
paddingHorizontal: SPACING.base        // 16px
marginVertical: SPACING.lg              // 24px
gap: SPACING.md                         // 12px between items
```

### Shadows
```typescript
import { SHADOWS } from '@constants/theme';

// Elevation levels
style={{...SHADOWS.sm}}  // Subtle shadow for cards
style={{...SHADOWS.md}}  // Medium shadow for modals
style={{...SHADOWS.lg}}  // Strong shadow for overlays
```

## 📱 Screen Navigation

### Navigate Between Screens
```typescript
import { useNavigation } from '@react-navigation/native';

export default function MyComponent() {
  const navigation = useNavigation();

  return (
    <Button
      title="Go to Home"
      onPress={() => navigation.navigate('Home')}
    />
  );
}
```

### Available Screens to Navigate To
```typescript
navigation.navigate('Home');        // Home tab
navigation.navigate('Compost');     // Compost monitoring
navigation.navigate('Water');       // Water management
navigation.navigate('Soil');        // Soil analysis
navigation.navigate('Profile');     // User profile
navigation.navigate('Login');       // Auth screens
```

### Pass Parameters to Screens
```typescript
// Navigate with params
navigation.navigate('Compost', { batchId: '123', action: 'edit' });

// Receive params
function CompostScreen({ route }) {
  const { batchId, action } = route.params;
  // Use params...
}
```

## 🧪 Testing Components

### Basic Component Test Example
```typescript
// HomeScreen.test.tsx
import React from 'react';
import { render } from '@testing-library/react-native';
import HomeScreen from './HomeScreen';

describe('HomeScreen', () => {
  it('renders greeting', () => {
    const { getByText } = render(<HomeScreen />);
    expect(getByText(/Good Morning/i)).toBeTruthy();
  });

  it('shows weather widget', () => {
    const { getByTestId } = render(<HomeScreen />);
    expect(getByTestId('weather-widget')).toBeTruthy();
  });
});
```

### Run Tests
```bash
npm test
npm test -- --watch
npm test -- --coverage
```

## 🐛 Debugging

### Reset Metro Bundler Cache
```bash
npm start -- --reset-cache
```

### Complete Cache Clear
```bash
npm cache clean --force
rmdir /s /q node_modules
del package-lock.json
npm install
```

### View Android Logs
```bash
adb logcat | findstr EcoBin
```

### Chrome DevTools Debugging
```bash
# Terminal with Metro running:
# Press 'd' to open debugger menu
# Open Chrome inspector at chrome://inspect
```

### React DevTools
```bash
# Install React DevTools Chrome extension
# Metro will auto-connect when extension is active
# Inspect component tree and props
```

## 📦 Adding New Dependencies

### Install Regular Package
```bash
npm install package-name
```

### Install Specific Version
```bash
npm install package-name@5.2.0
```

### Install Dev Dependency
```bash
npm install --save-dev package-name
```

### Update All Dependencies
```bash
npm update
```

## 🔑 Environment Variables

1. Copy `.env.example` to `.env`
2. Update values in `.env`
3. Access in code:

```typescript
// Option 1: Direct require (simple)
const API_URL = require('../.env').API_URL;

// Option 2: Using react-native-dotenv
import { API_URL } from '@env';

// Option 3: Manual from app config
const API_URL = process.env.API_URL || 'https://api.ecobin.app/v1';
```

## 📋 Common UI Patterns

### Loading State with Spinner
```typescript
import { ActivityIndicator } from 'react-native';
import { COLORS } from '@constants/theme';

export default function LoadingComponent() {
  const [isLoading, setIsLoading] = React.useState(true);

  return isLoading ? (
    <ActivityIndicator size="large" color={COLORS.primary} />
  ) : (
    <Text>Content loaded</Text>
  );
}
```

### Error Display
```typescript
export default function ErrorDisplay({ error }) {
  return (
    <View style={{ 
      backgroundColor: COLORS.error, 
      padding: SPACING.base,
      borderRadius: BORDER_RADIUS.md
    }}>
      <Text style={{ color: '#fff' }}>
        ⚠️ {error || 'Something went wrong'}
      </Text>
    </View>
  );
}
```

### Empty State
```typescript
export default function EmptyState() {
  return (
    <View style={{ 
      alignItems: 'center', 
      padding: SPACING.xl,
      justifyContent: 'center'
    }}>
      <Text style={TYPOGRAPHY.h2}>📭 No items yet</Text>
      <Text style={[TYPOGRAPHY.body2, { color: COLORS.textSecondary }]}>
        Add your first item to get started
      </Text>
    </View>
  );
}
```

### Flat List with Pull-to-Refresh
```typescript
import { FlatList, RefreshControl } from 'react-native';
import { COLORS } from '@constants/theme';

export default function ItemList({ items, onRefresh }) {
  return (
    <FlatList
      data={items}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <ItemCard item={item} />}
      refreshControl={
        <RefreshControl
          refreshing={isRefreshing}
          onRefresh={onRefresh}
          tintColor={COLORS.primary}
        />
      }
      ListEmptyComponent={<EmptyState />}
    />
  );
}
```

## 🚢 Building for Release

### Build Release APK
```bash
npm run build:android
# Output: android/app/build/outputs/apk/release/app-release.apk
```

### Upload to Google Play Store
1. Sign in to [Google Play Console](https://play.google.com/console)
2. Create new app (or select existing)
3. Upload signed APK to Internal Testing
4. Test, then promote to Production
5. Submit for review

### App Version Management
Update in `package.json` and `android/app/build.gradle`:
```
versionCode: 1 (increments with each release)
versionName: "1.0.0" (user-visible version)
```

## 📚 Important Documentation Links

- **[React Native Docs](https://reactnative.dev/)** - Core framework
- **[React Navigation](https://reactnavigation.org/)** - Screen navigation
- **[Zustand](https://github.com/pmndrs/zustand)** - State management
- **[TypeScript](https://www.typescriptlang.org/)** - Type system
- **[Axios](https://axios-http.com/)** - HTTP client
- **[Android Developer Docs](https://developer.android.com/docs)** - Android specific

## ❓ Frequently Asked Questions

**Q: How do I change the app name/icon?**
A: Update `app.json` and place icon in `android/app/src/main/res/`

**Q: How do I connect to a real backend API?**
A: Update `API_URL` in `.env` and adjust `src/services/api.ts` endpoints

**Q: How do I add push notifications?**
A: Install Firebase: `npm install @react-native-firebase/app messaging`

**Q: How do I add dark mode?**
A: Use the `useTheme()` hook and conditionally apply colors

**Q: How do I cache API responses?**
A: Add caching logic to `useAsync()` hook or use React Query

**Q: How do I handle offline mode?**
A: Store data in AsyncStorage and sync when online

**Q: How do I debug native code?**
A: View logs with `adb logcat` or use Android Studio debugger

**Q: How do I build for iOS?**
A: iOS development requires macOS. Use `npm run ios` on a Mac.

---

**🌱 Happy Coding!**

For detailed setup, see **[SETUP.md](./SETUP.md)**  
For implementation details, see **[PROJECT_SUMMARY.md](./PROJECT_SUMMARY.md)**  
For feature checklist, see **[IMPLEMENTATION_CHECKLIST.md](./IMPLEMENTATION_CHECKLIST.md)**
