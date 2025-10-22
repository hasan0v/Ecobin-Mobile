// Formatting utilities

export const formatDate = (date: Date | string): string => {
  const d = new Date(date);
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  const year = d.getFullYear();
  return `${day}/${month}/${year}`;
};

export const formatTime = (date: Date | string): string => {
  const d = new Date(date);
  const hours = String(d.getHours()).padStart(2, '0');
  const minutes = String(d.getMinutes()).padStart(2, '0');
  return `${hours}:${minutes}`;
};

export const formatDateTime = (date: Date | string): string => {
  return `${formatDate(date)} ${formatTime(date)}`;
};

export const formatTemperature = (celsius: number, unit: 'C' | 'F' = 'C'): string => {
  if (unit === 'F') {
    const fahrenheit = (celsius * 9/5) + 32;
    return `${fahrenheit.toFixed(1)}°${unit}`;
  }
  return `${celsius.toFixed(1)}°${unit}`;
};

export const formatVolume = (liters: number, unit: 'L' | 'GAL' = 'L'): string => {
  if (unit === 'GAL') {
    const gallons = liters / 3.785;
    return `${gallons.toFixed(2)} ${unit}`;
  }
  return `${liters.toFixed(2)} ${unit}`;
};

export const formatWeight = (kg: number, unit: 'KG' | 'LBS' = 'KG'): string => {
  if (unit === 'LBS') {
    const lbs = kg * 2.20462;
    return `${lbs.toFixed(2)} ${unit}`;
  }
  return `${kg.toFixed(2)} ${unit}`;
};

export const formatArea = (hectares: number, unit: 'HA' | 'ACRES' = 'HA'): string => {
  if (unit === 'ACRES') {
    const acres = hectares * 2.47105;
    return `${acres.toFixed(2)} ${unit}`;
  }
  return `${hectares.toFixed(2)} ${unit}`;
};

export const formatPercentage = (value: number, decimals: number = 0): string => {
  return `${value.toFixed(decimals)}%`;
};

export const formatNumber = (value: number, decimals: number = 2): string => {
  return value.toFixed(decimals);
};

export const formatCurrency = (value: number, currency: string = 'USD'): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
  }).format(value);
};

export const truncateString = (str: string, length: number = 50): string => {
  if (str.length <= length) return str;
  return `${str.substring(0, length)}...`;
};

export const capitalize = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
