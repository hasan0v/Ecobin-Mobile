import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, ActivityIndicator, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Screens
import SplashScreen from '@screens/auth/SplashScreen';
import WelcomeScreen from '@screens/auth/WelcomeScreen';
import LoginScreen from '@screens/auth/LoginScreen';
import SignupScreen from '@screens/auth/SignupScreen';
import OnboardingScreen from '@screens/auth/OnboardingScreen';

import HomeScreen from '@screens/main/HomeScreen';
import CompostScreen from '@screens/main/CompostScreen';
import WaterScreen from '@screens/main/WaterScreen';
import SoilScreen from '@screens/main/SoilScreen';
import ProfileScreen from '@screens/main/ProfileScreen';

import { useAuthStore } from '@store/index';
import { COLORS } from '@constants/theme';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Auth Stack
const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animationEnabled: true,
      }}
    >
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
      <Stack.Screen name="Onboarding" component={OnboardingScreen} />
    </Stack.Navigator>
  );
};

// Main App Stack
const MainStack = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarLabel: ({ color }) => {
          let label = 'Home';
          if (route.name === 'Home') label = '🏠';
          else if (route.name === 'Compost') label = '♻️';
          else if (route.name === 'Water') label = '💧';
          else if (route.name === 'Soil') label = '🌱';
          else if (route.name === 'Profile') label = '👤';
          return <Text style={{ color, fontSize: 12 }}>{label}</Text>;
        },
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: COLORS.textSecondary,
        headerShown: false,
        tabBarStyle: {
          borderTopColor: COLORS.border,
          backgroundColor: COLORS.surface,
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: 'Home' }}
      />
      <Tab.Screen
        name="Compost"
        component={CompostScreen}
        options={{ title: 'Compost' }}
      />
      <Tab.Screen
        name="Water"
        component={WaterScreen}
        options={{ title: 'Water' }}
      />
      <Tab.Screen
        name="Soil"
        component={SoilScreen}
        options={{ title: 'Soil' }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ title: 'Profile' }}
      />
    </Tab.Navigator>
  );
};

const RootNavigator = () => {
  const { isAuthenticated, isLoading } = useAuthStore();
  const [initializing, setInitializing] = React.useState(true);
  const [hasSeenOnboarding, setHasSeenOnboarding] = React.useState(false);

  useEffect(() => {
    const checkOnboarding = async () => {
      try {
        const seen = await AsyncStorage.getItem('hasSeenOnboarding');
        setHasSeenOnboarding(!!seen);
      } catch (e) {
        console.error('Error checking onboarding:', e);
      }
      setInitializing(false);
    };

    checkOnboarding();
  }, []);

  if (initializing || isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: COLORS.background }}>
        <ActivityIndicator size="large" color={COLORS.primary} />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        {isAuthenticated ? (
          <Stack.Screen
            name="Main"
            component={MainStack}
            options={{ animationEnabled: false }}
          />
        ) : (
          <Stack.Screen
            name="Auth"
            component={AuthStack}
            options={{ animationEnabled: false }}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
