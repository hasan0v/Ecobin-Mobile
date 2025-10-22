import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS, TYPOGRAPHY, SPACING } from '@constants/theme';

export default function WelcomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={[TYPOGRAPHY.h1, { color: COLORS.primary }]}>
        Welcome to EcoBin
      </Text>
      <Text style={[TYPOGRAPHY.body1, { marginTop: SPACING.lg }]}>
        Smart Agricultural Management
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.background,
    paddingHorizontal: SPACING.base,
  },
});
