import React from 'react';
import {
  View,
  Text,
  TextInput as RNTextInput,
  StyleSheet,
  ViewStyle,
  TextStyle,
  KeyboardTypeOptions,
  TouchableOpacity,
} from 'react-native';
import { COLORS, SPACING, TYPOGRAPHY, BORDER_RADIUS } from '@constants/theme';

interface TextInputProps {
  label?: string;
  placeholder?: string;
  value: string;
  onChangeText: (text: string) => void;
  keyboardType?: KeyboardTypeOptions;
  secureTextEntry?: boolean;
  error?: string;
  style?: ViewStyle;
  icon?: string;
  disabled?: boolean;
  multiline?: boolean;
  numberOfLines?: number;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
  editable?: boolean;
}

const TextInput: React.FC<TextInputProps> = ({
  label,
  placeholder,
  value,
  onChangeText,
  keyboardType = 'default',
  secureTextEntry = false,
  error,
  style,
  icon,
  disabled = false,
  multiline = false,
  numberOfLines,
  autoCapitalize = 'sentences',
  editable = true,
}) => {
  const [showPassword, setShowPassword] = React.useState(!secureTextEntry);

  return (
    <View style={[styles.container, style]}>
      {label && (
        <Text style={[styles.label, { fontSize: TYPOGRAPHY.body1.fontSize }]}>
          {label}
        </Text>
      )}
      <View
        style={[
          styles.inputContainer,
          { borderColor: error ? COLORS.error : COLORS.border },
          (disabled || !editable) && styles.disabledInput,
        ]}
      >
        <RNTextInput
          style={[
            styles.input,
            {
              fontSize: TYPOGRAPHY.body1.fontSize,
              lineHeight: TYPOGRAPHY.body1.lineHeight,
            },
          ]}
          placeholder={placeholder}
          placeholderTextColor={COLORS.textDisabled}
          value={value}
          onChangeText={onChangeText}
          keyboardType={keyboardType}
          secureTextEntry={secureTextEntry && !showPassword}
          editable={!disabled && editable}
          multiline={multiline}
          numberOfLines={numberOfLines}
          autoCapitalize={autoCapitalize}
        />
        {secureTextEntry && (
          <TouchableOpacity
            onPress={() => setShowPassword(!showPassword)}
            disabled={disabled || !editable}
            style={styles.iconButton}
          >
            <Text style={styles.iconText}>
              {showPassword ? '👁️' : '👁️‍🗨️'}
            </Text>
          </TouchableOpacity>
        )}
      </View>
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: SPACING.md,
  },
  label: {
    marginBottom: SPACING.xs,
    fontWeight: '600',
    color: COLORS.textPrimary,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: BORDER_RADIUS.md,
    paddingHorizontal: SPACING.md,
    backgroundColor: COLORS.surface,
    minHeight: 48,
  },
  input: {
    flex: 1,
    color: COLORS.textPrimary,
    paddingVertical: SPACING.md,
  },
  iconButton: {
    padding: SPACING.sm,
    marginLeft: SPACING.sm,
  },
  iconText: {
    fontSize: 18,
  },
  disabledInput: {
    backgroundColor: COLORS.border,
    opacity: 0.6,
  },
  error: {
    color: COLORS.error,
    marginTop: SPACING.xs,
    fontSize: 12,
    fontWeight: '500',
  },
});

export default TextInput;
