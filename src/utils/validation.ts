// Validation utilities

export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePassword = (password: string): {
  isValid: boolean;
  errors: string[];
} => {
  const errors: string[] = [];

  if (password.length < 8) {
    errors.push('Password must be at least 8 characters');
  }
  if (!/[A-Z]/.test(password)) {
    errors.push('Password must contain uppercase letter');
  }
  if (!/[a-z]/.test(password)) {
    errors.push('Password must contain lowercase letter');
  }
  if (!/[0-9]/.test(password)) {
    errors.push('Password must contain number');
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
};

export const validatePhoneNumber = (phone: string): boolean => {
  const phoneRegex = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;
  return phoneRegex.test(phone.replace(/\s/g, ''));
};

export const validateUrl = (url: string): boolean => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

export const validateFarmName = (name: string): boolean => {
  return name.length >= 2 && name.length <= 100;
};

export const validateArea = (area: number): boolean => {
  return area > 0 && area <= 10000;
};

export const validateSensorValue = (
  value: number,
  min: number,
  max: number
): boolean => {
  return value >= min && value <= max;
};

export const validateForm = (
  data: Record<string, any>,
  rules: Record<string, (value: any) => { isValid: boolean; error?: string }>
): {
  isValid: boolean;
  errors: Record<string, string>;
} => {
  const errors: Record<string, string> = {};

  Object.entries(rules).forEach(([field, validate]) => {
    const result = validate(data[field]);
    if (!result.isValid) {
      errors[field] = result.error || `${field} is invalid`;
    }
  });

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};

export const sanitizeInput = (input: string): string => {
  return input
    .trim()
    .replace(/[<>]/g, '')
    .substring(0, 255);
};
