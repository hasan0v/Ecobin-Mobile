import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { COLORS, TYPOGRAPHY, SPACING, BORDER_RADIUS } from '@constants/theme';

export default function WaterScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={[TYPOGRAPHY.h1, { color: COLORS.primary }]}>Water Management</Text>
      </View>

      {/* Tank Status */}
      <View style={styles.card}>
        <Text style={[TYPOGRAPHY.h3, { marginBottom: SPACING.md }]}>💧 Rainwater Tank Status</Text>
        <View style={styles.tankContainer}>
          <View style={styles.tankVisual}>
            <View style={[styles.tankFill, { height: '75%' }]} />
          </View>
          <View style={{ marginLeft: SPACING.lg }}>
            <Text style={[TYPOGRAPHY.h2, { color: COLORS.primary }]}>75%</Text>
            <Text style={[TYPOGRAPHY.body2, { color: COLORS.textSecondary, marginTop: SPACING.sm }]}>
              3,750 L / 5,000 L
            </Text>
          </View>
        </View>
      </View>

      {/* Water Quality */}
      <View style={styles.card}>
        <Text style={[TYPOGRAPHY.h3, { marginBottom: SPACING.md }]}>Water Quality Metrics</Text>
        <View style={styles.qualityGrid}>
          <View style={styles.qualityCard}>
            <Text style={[TYPOGRAPHY.h3, { color: COLORS.primary }]}>7.2</Text>
            <Text style={[TYPOGRAPHY.caption, { color: COLORS.textSecondary, marginTop: SPACING.xs }]}>
              pH
            </Text>
          </View>
          <View style={styles.qualityCard}>
            <Text style={[TYPOGRAPHY.h3, { color: COLORS.info }]}>6.8</Text>
            <Text style={[TYPOGRAPHY.caption, { color: COLORS.textSecondary, marginTop: SPACING.xs }]}>
              DO mg/L
            </Text>
          </View>
          <View style={styles.qualityCard}>
            <Text style={[TYPOGRAPHY.h3, { color: COLORS.water }]}>30</Text>
            <Text style={[TYPOGRAPHY.caption, { color: COLORS.textSecondary, marginTop: SPACING.xs }]}>
              NO3 mg/L
            </Text>
          </View>
          <View style={styles.qualityCard}>
            <Text style={[TYPOGRAPHY.h3, { color: COLORS.warning }]}>8</Text>
            <Text style={[TYPOGRAPHY.caption, { color: COLORS.textSecondary, marginTop: SPACING.xs }]}>
              COD mg/L
            </Text>
          </View>
          <View style={styles.qualityCard}>
            <Text style={[TYPOGRAPHY.h3, { color: COLORS.primary }]}>300</Text>
            <Text style={[TYPOGRAPHY.caption, { color: COLORS.textSecondary, marginTop: SPACING.xs }]}>
              TDS ppm
            </Text>
          </View>
          <View style={styles.qualityCard}>
            <Text style={[TYPOGRAPHY.h3, { color: COLORS.info }]}>800</Text>
            <Text style={[TYPOGRAPHY.caption, { color: COLORS.textSecondary, marginTop: SPACING.xs }]}>
              EC µS/cm
            </Text>
          </View>
        </View>
      </View>

      {/* Auto Irrigate */}
      <View style={[styles.card, { backgroundColor: COLORS.skyLight }]}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <Text style={[TYPOGRAPHY.h3]}>💧 AUTO IRRIGATE</Text>
          <View style={{ width: 50, height: 30, backgroundColor: COLORS.primary, borderRadius: 15 }} />
        </View>
        <Text style={[TYPOGRAPHY.body2, { marginTop: SPACING.md, color: COLORS.textSecondary }]}>
          Next scheduled: Today, 6:00 PM
        </Text>
        <Text style={[TYPOGRAPHY.body2, { color: COLORS.textSecondary }]}>
          Estimated usage: 150 L
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
    marginBottom: SPACING.lg,
  },
  card: {
    backgroundColor: COLORS.surface,
    borderRadius: BORDER_RADIUS.lg,
    padding: SPACING.lg,
    marginBottom: SPACING.md,
  },
  tankContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  tankVisual: {
    width: 80,
    height: 120,
    backgroundColor: '#E8F5E9',
    borderRadius: BORDER_RADIUS.md,
    borderWidth: 2,
    borderColor: COLORS.primary,
    overflow: 'hidden',
  },
  tankFill: {
    width: '100%',
    backgroundColor: COLORS.water,
  },
  qualityGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: SPACING.md,
  },
  qualityCard: {
    width: '31%',
    padding: SPACING.md,
    backgroundColor: '#F5F5F5',
    borderRadius: BORDER_RADIUS.md,
    alignItems: 'center',
  },
});
