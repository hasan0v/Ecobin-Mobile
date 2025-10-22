import React from 'react';
import { View, Text } from 'react-native';
import { COLORS, TYPOGRAPHY } from '@constants/theme';

export default function OnboardingScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: COLORS.background }}>
      <Text style={TYPOGRAPHY.h1}>Onboarding Screen</Text>
    </View>
  );
}
