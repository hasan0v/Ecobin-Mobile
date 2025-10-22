import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
  ActivityIndicator,
} from 'react-native';
import { COLORS, SPACING, TYPOGRAPHY, BORDER_RADIUS, SHADOWS } from '@constants/theme';

interface ButtonProps {
  onPress: () => void;
  title: string;
  variant?: 'primary' | 'secondary' | 'text';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  loading?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
  icon?: React.ReactNode;
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  onPress,
  title,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  loading = false,
  style,
  textStyle,
  icon,
  fullWidth = false,
}) => {
  const getButtonStyles = (): ViewStyle => {
    const baseStyles: ViewStyle = {
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: BORDER_RADIUS.md,
      flexDirection: 'row',
      opacity: disabled ? 0.6 : 1,
    };

    if (fullWidth) {
      baseStyles.width = '100%';
    }

    switch (size) {
      case 'small':
        return { ...baseStyles, paddingVertical: 8, paddingHorizontal: 16 };
      case 'large':
        return { ...baseStyles, paddingVertical: 16, paddingHorizontal: 32, height: 48 };
      case 'medium':
      default:
        return { ...baseStyles, paddingVertical: 12, paddingHorizontal: 24, height: 48 };
    }
  };

  const getBackgroundColor = (): string => {
    if (disabled) return COLORS.textDisabled;
    if (variant === 'primary') return COLORS.primary;
    if (variant === 'secondary') return 'transparent';
    return 'transparent';
  };

  const getBorderStyle = () => {
    if (variant === 'secondary') {
      return { borderWidth: 2, borderColor: COLORS.primary };
    }
    return {};
  };

  const getTextColor = (): string => {
    if (variant === 'primary') return '#fff';
    if (variant === 'secondary') return COLORS.primary;
    return COLORS.primary;
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled || loading}
      activeOpacity={0.7}
      style={[
        getButtonStyles(),
        {
          backgroundColor: getBackgroundColor(),
          ...getBorderStyle(),
          ...SHADOWS.sm,
        },
        style,
      ]}
    >
      {loading ? (
        <ActivityIndicator color={getTextColor()} />
      ) : (
        <>
          {icon && <>{icon}</> }
          <Text
            style={[
              TYPOGRAPHY.button,
              { color: getTextColor(), marginLeft: icon ? 8 : 0 },
              textStyle,
            ]}
          >
            {title}
          </Text>
        </>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: BORDER_RADIUS.md,
  },
});
