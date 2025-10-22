import React from 'react';
import { View, Text, ScrollView, StyleSheet, Animated } from 'react-native';
import { COLORS, TYPOGRAPHY, SPACING, BORDER_RADIUS } from '@constants/theme';

export default function CompostScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={[TYPOGRAPHY.h1, { color: COLORS.primary }]}>Composting in Progress</Text>
      </View>

      {/* Progress Circle */}
      <View style={styles.progressContainer}>
        <View style={styles.progressCircle}>
          <Text style={[TYPOGRAPHY.h2, { color: COLORS.primary }]}>45%</Text>
          <Text style={[TYPOGRAPHY.body2, { marginTop: SPACING.sm }]}>⏱️72h</Text>
        </View>
      </View>

      {/* Sensor Data */}
      <View style={styles.sensorsContainer}>
        <View style={[styles.sensorCard, { backgroundColor: '#FFF3E0' }]}>
          <Text style={TYPOGRAPHY.h3}>⚖️</Text>
          <Text style={[TYPOGRAPHY.dataValue, { marginTop: SPACING.sm }]}>30 kg</Text>
          <Text style={[TYPOGRAPHY.body2, { marginTop: SPACING.xs, color: COLORS.textSecondary }]}>
            Weight
          </Text>
        </View>

        <View style={[styles.sensorCard, { backgroundColor: '#FFEBEE' }]}>
          <Text style={TYPOGRAPHY.h3}>🌡️</Text>
          <Text style={[TYPOGRAPHY.dataValue, { marginTop: SPACING.sm }]}>70°C</Text>
          <Text style={[TYPOGRAPHY.body2, { marginTop: SPACING.xs, color: COLORS.textSecondary }]}>
            Temperature
          </Text>
        </View>

        <View style={[styles.sensorCard, { backgroundColor: '#F3E5F5' }]}>
          <Text style={TYPOGRAPHY.h3}>☁️</Text>
          <Text style={[TYPOGRAPHY.dataValue, { marginTop: SPACING.sm }]}>CO2 ⬆️</Text>
          <Text style={[TYPOGRAPHY.body2, { marginTop: SPACING.xs, color: COLORS.textSecondary }]}>
            Monitor
          </Text>
        </View>

        <View style={[styles.sensorCard, { backgroundColor: '#E3F2FD' }]}>
          <Text style={TYPOGRAPHY.h3}>💧</Text>
          <Text style={[TYPOGRAPHY.dataValue, { marginTop: SPACING.sm }]}>55%</Text>
          <Text style={[TYPOGRAPHY.body2, { marginTop: SPACING.xs, color: COLORS.textSecondary }]}>
            Humidity
          </Text>
        </View>
      </View>

      {/* Action Buttons */}
      <View style={styles.buttonContainer}>
        <View style={[styles.button, { backgroundColor: COLORS.primary }]}>
          <Text style={[TYPOGRAPHY.body1, { color: '#fff', fontWeight: '600' }]}>🔄 START/STOP</Text>
        </View>
        <View style={[styles.button, { backgroundColor: COLORS.primary }]}>
          <Text style={[TYPOGRAPHY.body1, { color: '#fff', fontWeight: '600' }]}>🔄 MIX COMPOST</Text>
        </View>
      </View>

      {/* Next Actions */}
      <View style={styles.card}>
        <Text style={[TYPOGRAPHY.h3, { marginBottom: SPACING.md }]}>Next Actions</Text>
        <Text style={[TYPOGRAPHY.body2, { marginBottom: SPACING.sm }]}>• Add 10kg organic waste</Text>
        <Text style={[TYPOGRAPHY.body2, { marginBottom: SPACING.sm }]}>• Mix compost in 6 hours</Text>
        <Text style={[TYPOGRAPHY.body2]}>• Check temperature at 3:00 PM</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    paddingHorizontal: SPACING.base,
    paddingVertical: SPACING.lg,
  },
  header: {
    marginBottom: SPACING.lg,
  },
  progressContainer: {
    alignItems: 'center',
    marginBottom: SPACING.xl,
  },
  progressCircle: {
    width: 180,
    height: 180,
    borderRadius: 90,
    backgroundColor: COLORS.primaryLight,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sensorsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: SPACING.md,
    marginBottom: SPACING.lg,
  },
  sensorCard: {
    width: '48%',
    padding: SPACING.lg,
    borderRadius: BORDER_RADIUS.lg,
  },
  buttonContainer: {
    gap: SPACING.md,
    marginBottom: SPACING.lg,
  },
  button: {
    paddingVertical: SPACING.lg,
    borderRadius: BORDER_RADIUS.lg,
    alignItems: 'center',
  },
  card: {
    backgroundColor: COLORS.surface,
    borderRadius: BORDER_RADIUS.lg,
    padding: SPACING.lg,
    marginBottom: SPACING.lg,
  },
});
