import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS, TYPOGRAPHY, SPACING } from '@constants/theme';

export default function SplashScreen({ navigation }: any) {
  useEffect(() => {
    // Auto-navigate to Login after 2 seconds
    const timer = setTimeout(() => {
      navigation.replace('Login');
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={[styles.container, { backgroundColor: COLORS.primary }]}>
      <Text style={[TYPOGRAPHY.h1, { color: '#fff', marginBottom: SPACING.md }]}>
        🌱 EcoBin
      </Text>
      <Text style={[TYPOGRAPHY.body1, { color: '#fff' }]}>
        Smart Farming, Sustainable Future
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
