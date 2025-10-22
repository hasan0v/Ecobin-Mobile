import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { COLORS, TYPOGRAPHY, SPACING, BORDER_RADIUS } from '@constants/theme';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={[TYPOGRAPHY.h1, { color: COLORS.primary }]}>Good Morning, Ali! 👋</Text>
        <Text style={[TYPOGRAPHY.body2, { color: COLORS.textSecondary, marginTop: SPACING.sm }]}>
          Baku State University Farm
        </Text>
      </View>

      {/* Weather Card */}
      <View style={styles.card}>
        <Text style={[TYPOGRAPHY.body1, { fontWeight: '600' }]}>🌤️ Weather</Text>
        <Text style={[TYPOGRAPHY.h2, { marginTop: SPACING.sm }]}>24°C Sunny</Text>
        <Text style={[TYPOGRAPHY.body2, { color: COLORS.textSecondary, marginTop: SPACING.xs }]}>
          Humidity: 65% | Wind: 12km/h
        </Text>
      </View>

      {/* Quick Stats */}
      <View style={styles.statsContainer}>
        <View style={[styles.statCard, { backgroundColor: '#F3E5F5' }]}>
          <Text style={TYPOGRAPHY.h2}>45%</Text>
          <Text style={[TYPOGRAPHY.body2, { marginTop: SPACING.sm }]}>♻️ Compost</Text>
        </View>
        <View style={[styles.statCard, { backgroundColor: '#E3F2FD' }]}>
          <Text style={TYPOGRAPHY.h2}>75%</Text>
          <Text style={[TYPOGRAPHY.body2, { marginTop: SPACING.sm }]}>💧 Water</Text>
        </View>
      </View>

      {/* Alerts */}
      <View style={styles.card}>
        <Text style={[TYPOGRAPHY.h3, { marginBottom: SPACING.md }]}>⚠️ Alerts</Text>
        <Text style={[TYPOGRAPHY.body2, { marginBottom: SPACING.sm }]}>• Compost will be ready in 12h</Text>
        <Text style={[TYPOGRAPHY.body2, { marginBottom: SPACING.sm }]}>• Soil moisture low - irrigate</Text>
        <Text style={[TYPOGRAPHY.body2]}>• Water tank 80% full</Text>
      </View>

      {/* Learning */}
      <View style={styles.card}>
        <Text style={[TYPOGRAPHY.h3, { marginBottom: SPACING.md }]}>🎓 Today's Learning</Text>
        <Text style={[TYPOGRAPHY.body2]}>Optimizing Compost Quality</Text>
        <Text style={[TYPOGRAPHY.caption, { color: COLORS.textSecondary, marginTop: SPACING.sm }]}>
          🕐 15 min
        </Text>
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
    marginBottom: SPACING.xl,
  },
  card: {
    backgroundColor: COLORS.surface,
    borderRadius: BORDER_RADIUS.lg,
    padding: SPACING.lg,
    marginBottom: SPACING.md,
  },
  statsContainer: {
    flexDirection: 'row',
    gap: SPACING.md,
    marginBottom: SPACING.md,
  },
  statCard: {
    flex: 1,
    padding: SPACING.lg,
    borderRadius: BORDER_RADIUS.lg,
  },
});
