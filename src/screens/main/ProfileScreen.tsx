import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { COLORS, TYPOGRAPHY, SPACING, BORDER_RADIUS } from '@constants/theme';

export default function ProfileScreen() {
  return (
    <ScrollView style={styles.container}>
      {/* Profile Header */}
      <View style={styles.profileHeader}>
        <View style={styles.profilePhoto}>
          <Text style={TYPOGRAPHY.h1}>👤</Text>
        </View>
        <Text style={[TYPOGRAPHY.h2, { marginTop: SPACING.md }]}>Ali Hasanov</Text>
        <Text style={[TYPOGRAPHY.body2, { color: COLORS.textSecondary, marginTop: SPACING.xs }]}>
          📧 ali@example.com
        </Text>
        <Text style={[TYPOGRAPHY.body2, { color: COLORS.textSecondary }]}>
          📞 +994 XX XXX XX XX
        </Text>
      </View>

      {/* Farm Info */}
      <View style={styles.card}>
        <Text style={[TYPOGRAPHY.h3, { marginBottom: SPACING.md }]}>🏪 Farm Information</Text>
        <Text style={[TYPOGRAPHY.body2, { marginBottom: SPACING.sm }]}>Baku State University Farm</Text>
        <Text style={[TYPOGRAPHY.body2, { marginBottom: SPACING.sm }]}>🌾 Mixed Farming</Text>
        <Text style={[TYPOGRAPHY.body2, { marginBottom: SPACING.sm }]}>📏 5.2 hectares</Text>
        <Text style={[TYPOGRAPHY.body2]}>📍 Baku, Azerbaijan</Text>
      </View>

      {/* Devices */}
      <View style={styles.card}>
        <Text style={[TYPOGRAPHY.h3, { marginBottom: SPACING.md }]}>My Devices</Text>
        
        <View style={styles.deviceCard}>
          <View style={{ flex: 1 }}>
            <Text style={[TYPOGRAPHY.body1, { fontWeight: '600' }]}>♻️ EcoBin Unit #1</Text>
            <Text style={[TYPOGRAPHY.body2, { color: COLORS.textSecondary, marginTop: SPACING.xs }]}>
              Status: Active
            </Text>
            <Text style={[TYPOGRAPHY.body2, { color: COLORS.textSecondary }]}>Battery: 87%</Text>
          </View>
          <Text style={[TYPOGRAPHY.h3, { color: COLORS.success }]}>✅</Text>
        </View>

        <View style={[styles.deviceCard, { marginTop: SPACING.md }]}>
          <View style={{ flex: 1 }}>
            <Text style={[TYPOGRAPHY.body1, { fontWeight: '600' }]}>💧 Water Sensor Kit</Text>
            <Text style={[TYPOGRAPHY.body2, { color: COLORS.textSecondary, marginTop: SPACING.xs }]}>
              Status: Active
            </Text>
            <Text style={[TYPOGRAPHY.body2, { color: COLORS.textSecondary }]}>Battery: 92%</Text>
          </View>
          <Text style={[TYPOGRAPHY.h3, { color: COLORS.success }]}>✅</Text>
        </View>

        <TouchableOpacity style={styles.addButton}>
          <Text style={[TYPOGRAPHY.body1, { color: COLORS.primary, fontWeight: '600' }]}>
            ➕ Add New Device
          </Text>
        </TouchableOpacity>
      </View>

      {/* Settings Menu */}
      <View style={styles.card}>
        <Text style={[TYPOGRAPHY.h3, { marginBottom: SPACING.md }]}>Settings</Text>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={TYPOGRAPHY.body1}>🔔 Notifications</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={TYPOGRAPHY.body1}>🌐 Language & Region</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={TYPOGRAPHY.body1}>📊 Units & Measurements</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={TYPOGRAPHY.body1}>🔐 Privacy & Security</Text>
        </TouchableOpacity>
      </View>

      {/* Support */}
      <View style={styles.card}>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={TYPOGRAPHY.body1}>❓ Help & Support</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={TYPOGRAPHY.body1}>📄 Terms & Privacy Policy</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={TYPOGRAPHY.body1}>ℹ️ About EcoBin</Text>
        </TouchableOpacity>
      </View>

      {/* Logout */}
      <TouchableOpacity style={styles.logoutButton}>
        <Text style={[TYPOGRAPHY.body1, { color: COLORS.error, fontWeight: '600' }]}>
          🚪 Logout
        </Text>
      </TouchableOpacity>
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
  profileHeader: {
    alignItems: 'center',
    paddingVertical: SPACING.xl,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
    marginBottom: SPACING.lg,
  },
  profilePhoto: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: COLORS.primaryLight,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: SPACING.md,
  },
  card: {
    backgroundColor: COLORS.surface,
    borderRadius: BORDER_RADIUS.lg,
    padding: SPACING.lg,
    marginBottom: SPACING.md,
  },
  deviceCard: {
    flexDirection: 'row',
    padding: SPACING.md,
    backgroundColor: '#F9F9F9',
    borderRadius: BORDER_RADIUS.md,
    alignItems: 'center',
  },
  addButton: {
    marginTop: SPACING.md,
    paddingVertical: SPACING.md,
    paddingHorizontal: SPACING.base,
    borderWidth: 1,
    borderColor: COLORS.primary,
    borderRadius: BORDER_RADIUS.md,
    alignItems: 'center',
  },
  menuItem: {
    paddingVertical: SPACING.md,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },
  logoutButton: {
    backgroundColor: COLORS.surface,
    borderRadius: BORDER_RADIUS.lg,
    padding: SPACING.lg,
    alignItems: 'center',
    marginBottom: SPACING.lg,
    borderWidth: 1,
    borderColor: COLORS.error,
  },
});
