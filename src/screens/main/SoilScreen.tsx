import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { COLORS, TYPOGRAPHY, SPACING, BORDER_RADIUS } from '@constants/theme';

export default function SoilScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={[TYPOGRAPHY.h1, { color: COLORS.primary }]}>Soil Health Analysis</Text>
      </View>

      {/* Health Score */}
      <View style={styles.scoreContainer}>
        <View style={styles.scoreCircle}>
          <Text style={[TYPOGRAPHY.h2, { color: COLORS.primary }]}>💚</Text>
          <Text style={[TYPOGRAPHY.h3, { marginTop: SPACING.sm }]}>Good</Text>
          <Text style={[TYPOGRAPHY.h1, { color: COLORS.primary, marginTop: SPACING.sm }]}>82</Text>
        </View>
      </View>

      {/* Primary Nutrients */}
      <View style={styles.card}>
        <Text style={[TYPOGRAPHY.h3, { marginBottom: SPACING.md }]}>Primary Nutrients</Text>
        
        <View style={styles.nutrientItem}>
          <Text style={TYPOGRAPHY.body1}>N (Nitrogen)</Text>
          <Text style={[TYPOGRAPHY.body2, { color: COLORS.textSecondary, marginTop: SPACING.xs }]}>
            70 mg/kg • 88%
          </Text>
          <View style={styles.progressBar}>
            <View style={[styles.progress, { width: '88%', backgroundColor: COLORS.primary }]} />
          </View>
        </View>

        <View style={[styles.nutrientItem, { marginTop: SPACING.md }]}>
          <Text style={TYPOGRAPHY.body1}>P (Phosphorus)</Text>
          <Text style={[TYPOGRAPHY.body2, { color: COLORS.textSecondary, marginTop: SPACING.xs }]}>
            35 mg/kg • 70%
          </Text>
          <View style={styles.progressBar}>
            <View style={[styles.progress, { width: '70%', backgroundColor: COLORS.warning }]} />
          </View>
        </View>

        <View style={[styles.nutrientItem, { marginTop: SPACING.md }]}>
          <Text style={TYPOGRAPHY.body1}>K (Potassium)</Text>
          <Text style={[TYPOGRAPHY.body2, { color: COLORS.textSecondary, marginTop: SPACING.xs }]}>
            150 mg/kg • 100%
          </Text>
          <View style={styles.progressBar}>
            <View style={[styles.progress, { width: '100%', backgroundColor: COLORS.success }]} />
          </View>
        </View>
      </View>

      {/* Secondary Nutrients */}
      <View style={styles.card}>
        <Text style={[TYPOGRAPHY.h3, { marginBottom: SPACING.md }]}>Secondary Nutrients</Text>
        <View style={styles.secondaryGrid}>
          <View style={styles.secondaryCard}>
            <Text style={[TYPOGRAPHY.h3, { color: COLORS.primary }]}>100</Text>
            <Text style={[TYPOGRAPHY.caption, { color: COLORS.textSecondary, marginTop: SPACING.xs }]}>
              Mg mg/kg
            </Text>
          </View>
          <View style={styles.secondaryCard}>
            <Text style={[TYPOGRAPHY.h3, { color: COLORS.primary }]}>3500</Text>
            <Text style={[TYPOGRAPHY.caption, { color: COLORS.textSecondary, marginTop: SPACING.xs }]}>
              Ca mg/kg
            </Text>
          </View>
          <View style={styles.secondaryCard}>
            <Text style={[TYPOGRAPHY.h3, { color: COLORS.primary }]}>7.5</Text>
            <Text style={[TYPOGRAPHY.caption, { color: COLORS.textSecondary, marginTop: SPACING.xs }]}>
              pH
            </Text>
          </View>
        </View>
      </View>

      {/* AI Recommendations */}
      <View style={styles.card}>
        <Text style={[TYPOGRAPHY.h3, { marginBottom: SPACING.md }]}>🤖 AI Recommendations</Text>
        <Text style={[TYPOGRAPHY.body2, { marginBottom: SPACING.sm }]}>• Add organic compost for N</Text>
        <Text style={[TYPOGRAPHY.body2, { marginBottom: SPACING.sm }]}>• Phosphorus levels are optimal</Text>
        <Text style={[TYPOGRAPHY.body2]}>• Consider lime to adjust pH</Text>
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
  scoreContainer: {
    alignItems: 'center',
    marginBottom: SPACING.xl,
  },
  scoreCircle: {
    width: 160,
    height: 160,
    borderRadius: 80,
    backgroundColor: COLORS.primaryLight,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: COLORS.surface,
    borderRadius: BORDER_RADIUS.lg,
    padding: SPACING.lg,
    marginBottom: SPACING.md,
  },
  nutrientItem: {
    backgroundColor: '#F9F9F9',
    padding: SPACING.md,
    borderRadius: BORDER_RADIUS.md,
  },
  progressBar: {
    height: 8,
    backgroundColor: '#E0E0E0',
    borderRadius: 4,
    marginTop: SPACING.sm,
    overflow: 'hidden',
  },
  progress: {
    height: '100%',
    borderRadius: 4,
  },
  secondaryGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: SPACING.md,
  },
  secondaryCard: {
    flex: 1,
    padding: SPACING.md,
    backgroundColor: '#F5F5F5',
    borderRadius: BORDER_RADIUS.md,
    alignItems: 'center',
  },
});
