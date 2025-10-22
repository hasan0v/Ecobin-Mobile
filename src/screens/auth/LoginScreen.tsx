import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ActivityIndicator,
  Alert,
} from 'react-native';
import { COLORS, TYPOGRAPHY, SPACING, BORDER_RADIUS } from '@constants/theme';
import { Button } from '@components/Button';
import TextInput from '@components/TextInput';
import { useAuthStore } from '@store/index';

export default function LoginScreen({ navigation }: any) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<{email?: string; password?: string}>({});
  const { login } = useAuthStore();

  const validateEmail = (email: string) => {
    const re = /^\S+@\S+\.\S+$/;
    return re.test(email);
  };

  const handleLogin = async () => {
    const newErrors: {email?: string; password?: string} = {};

    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(email)) {
      newErrors.email = 'Invalid email address';
    }

    if (!password) {
      newErrors.password = 'Password is required';
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setLoading(true);
      try {
        // Call the auth store login method
        await login(email, password);
        // Navigate to Home on success
        // The RootNavigator will automatically show Main stack when isAuthenticated is true
      } catch (error) {
        Alert.alert('Login Failed', 'Invalid email or password');
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <ScrollView 
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Logo and Heading */}
        <View style={styles.header}>
          <View style={styles.logoContainer}>
            <Text style={styles.logo}>🌱</Text>
          </View>
          <Text style={[TYPOGRAPHY.h1, styles.title]}>Welcome Back!</Text>
        </View>

        {/* Form */}
        <View style={styles.formContainer}>
          {/* Email Input */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              placeholder="Enter your email"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
              editable={!loading}
            />
            {errors.email && (
              <Text style={styles.errorText}>{errors.email}</Text>
            )}
          </View>

          {/* Password Input */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Password</Text>
            <View style={styles.passwordContainer}>
              <TextInput
                placeholder="Enter your password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={!showPassword}
                editable={!loading}
              />
              <TouchableOpacity
                style={styles.visibilityButton}
                onPress={() => setShowPassword(!showPassword)}
                disabled={loading}
              >
                <Text style={styles.visibilityIcon}>
                  {showPassword ? '�️' : '👁️‍🗨️'}
                </Text>
              </TouchableOpacity>
            </View>
            {errors.password && (
              <Text style={styles.errorText}>{errors.password}</Text>
            )}
          </View>

          {/* Forgot Password */}
          <TouchableOpacity 
            style={styles.forgotPasswordContainer}
            disabled={loading}
          >
            <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
          </TouchableOpacity>

          {/* Login Button and Biometric */}
          <View style={styles.buttonRow}>
            <Button
              title="LOGIN"
              onPress={handleLogin}
              loading={loading}
              style={styles.loginButton}
              disabled={loading}
            />
            <TouchableOpacity 
              style={styles.biometricButton}
              disabled={loading}
            >
              <Text style={styles.biometricIcon}>👆</Text>
            </TouchableOpacity>
          </View>

          {/* Divider */}
          <View style={styles.divider}>
            <View style={styles.dividerLine} />
            <Text style={styles.dividerText}>or continue with</Text>
            <View style={styles.dividerLine} />
          </View>

          {/* Social Login Buttons */}
          <View style={styles.socialButtonsContainer}>
            <TouchableOpacity 
              style={styles.socialButton}
              disabled={loading}
            >
              <Text style={styles.socialIcon}>G</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.socialButton}
              disabled={loading}
            >
              <Text style={styles.socialIcon}>f</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.socialButton}
              disabled={loading}
            >
              <Text style={styles.socialIcon}>𝕏</Text>
            </TouchableOpacity>
          </View>

          {/* Sign Up Link */}
          <View style={styles.signupContainer}>
            <Text style={[TYPOGRAPHY.body2, { color: COLORS.textSecondary }]}>
              Don't have an account?{' '}
            </Text>
            <TouchableOpacity 
              onPress={() => navigation.navigate('Signup')}
              disabled={loading}
            >
              <Text style={[TYPOGRAPHY.body2, styles.signupLink]}>
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingHorizontal: SPACING.lg,
    paddingVertical: SPACING.xl,
  },
  header: {
    alignItems: 'center',
    marginBottom: SPACING.xl * 1.5,
  },
  logoContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: COLORS.primary + '20',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: SPACING.lg,
  },
  logo: {
    fontSize: 48,
  },
  title: {
    color: COLORS.textPrimary,
    textAlign: 'center',
    marginBottom: SPACING.sm,
  },
  subtitle: {
    color: COLORS.textSecondary,
    fontSize: 14,
  },
  formContainer: {
    backgroundColor: COLORS.surface,
    borderRadius: BORDER_RADIUS.lg,
    padding: SPACING.lg,
  },
  inputGroup: {
    marginBottom: SPACING.lg,
  },
  label: {
    ...TYPOGRAPHY.body2,
    fontWeight: '600',
    color: COLORS.textPrimary,
    marginBottom: SPACING.sm,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  visibilityButton: {
    padding: SPACING.md,
    marginLeft: -SPACING.xl,
  },
  visibilityIcon: {
    fontSize: 18,
  },
  errorText: {
    color: '#F44336',
    fontSize: 12,
    marginTop: SPACING.xs,
    fontWeight: '500',
  },
  forgotPasswordContainer: {
    alignItems: 'flex-end',
    marginBottom: SPACING.lg,
  },
  forgotPasswordText: {
    ...TYPOGRAPHY.body2,
    color: COLORS.primary,
    fontWeight: '500',
  },
  buttonRow: {
    flexDirection: 'row',
    gap: SPACING.md,
    marginBottom: SPACING.lg,
  },
  loginButton: {
    flex: 1,
    minHeight: 48,
  },
  biometricButton: {
    width: 48,
    height: 48,
    borderRadius: BORDER_RADIUS.md,
    backgroundColor: COLORS.border,
    justifyContent: 'center',
    alignItems: 'center',
  },
  biometricIcon: {
    fontSize: 24,
  },
  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: SPACING.lg,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: COLORS.border,
  },
  dividerText: {
    ...TYPOGRAPHY.body2,
    color: COLORS.textSecondary,
    marginHorizontal: SPACING.md,
    fontSize: 12,
  },
  socialButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: SPACING.md,
    marginBottom: SPACING.lg,
  },
  socialButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.border,
    justifyContent: 'center',
    alignItems: 'center',
  },
  socialIcon: {
    fontSize: 20,
    fontWeight: '600',
  },
  signupContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: SPACING.lg,
  },
  signupLink: {
    color: COLORS.primary,
    fontWeight: '600',
  },
});
