// User & Authentication Types
export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  profilePhoto?: string;
  farmName: string;
  farmType: 'animal-husbandry' | 'crop-farming' | 'mixed';
  landArea: number;
  landAreaUnit: 'ha' | 'm2';
  country: string;
  region: string;
  soilType: string;
  cropTypes: string[];
  fertiliserUsage: string[];
  preferredLanguage: 'tr' | 'az' | 'en' | 'ru';
  units: 'metric' | 'imperial';
  createdAt: string;
  updatedAt: string;
}

export interface AuthState {
  user: User | null;
  token: string | null;
  refreshToken: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}

// Device & Sensor Types
export interface ConnectedDevice {
  id: string;
  name: string;
  type: 'compost' | 'water-sensor' | 'soil-sensor' | 'weather-station';
  deviceId: string;
  firmwareVersion: string;
  batteryLevel: number;
  signalStrength: number;
  lastSync: string;
  status: 'active' | 'offline' | 'error';
}

export interface SensorReading {
  id: string;
  deviceId: string;
  timestamp: string;
  type: 'temperature' | 'humidity' | 'weight' | 'co2' | 'ph' | 'do' | 'ec' | 'tds' | 'moisture';
  value: number;
  unit: string;
  status: 'normal' | 'warning' | 'critical';
}

// Compost Types
export interface CompostBatch {
  id: string;
  deviceId: string;
  startDate: string;
  endDate?: string;
  status: 'preparing' | 'active' | 'ready' | 'harvested';
  initialWeight: number;
  currentWeight: number;
  percentage: number;
  temperature: number;
  humidity: number;
  co2Level: number;
  nextAction?: string;
  nextActionTime?: string;
}

// Water Management Types
export interface WaterQualityMetrics {
  ph: number;
  dissolvedOxygen: number;
  nitrate: number;
  cod: number;
  tds: number;
  ec: number;
  lastUpdated: string;
}

export interface RainwaterTank {
  currentVolume: number;
  maxCapacity: number;
  lastRefilled: string;
  lastUsed: string;
}

export interface IrrigationSchedule {
  id: string;
  date: string;
  time: string;
  estimatedVolume: number;
  isAuto: boolean;
  isCompleted: boolean;
  reason: string;
}

export interface IrrigationEvent {
  id: string;
  date: string;
  time: string;
  volume: number;
  method: 'auto' | 'manual';
  soilMoistureBefore: number;
  soilMoistureAfter: number;
  weatherConditions: string;
}

// Soil Analysis Types
export interface SoilNutrient {
  name: string;
  symbol: string;
  value: number;
  unit: string;
  optimalMin: number;
  optimalMax: number;
  percentage: number;
  status: 'deficient' | 'optimal' | 'excessive';
}

export interface SoilAnalysis {
  id: string;
  farmId: string;
  timestamp: string;
  healthScore: number;
  healthStatus: 'poor' | 'fair' | 'good' | 'excellent';
  primaryNutrients: {
    nitrogen: SoilNutrient;
    phosphorus: SoilNutrient;
    potassium: SoilNutrient;
  };
  secondaryNutrients: {
    magnesium: SoilNutrient;
    calcium: SoilNutrient;
    ph: SoilNutrient;
  };
  physicalProperties: {
    infiltrationRate: number;
    waterHoldingCapacity: number;
  };
  recommendations: string[];
}

// Weather Types
export interface Weather {
  temperature: number;
  condition: string;
  humidity: number;
  windSpeed: number;
  icon: string;
  timestamp: string;
}

export interface WeatherForecast {
  date: string;
  tempHigh: number;
  tempLow: number;
  condition: string;
  precipitationProbability: number;
  icon: string;
}

// Notification Types
export interface AppNotification {
  id: string;
  type: 'critical' | 'warning' | 'info' | 'tip';
  title: string;
  message: string;
  timestamp: string;
  isRead: boolean;
  action?: {
    label: string;
    screenName: string;
    params?: Record<string, any>;
  };
}

// Chat & AI Types
export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
  attachments?: {
    type: 'image' | 'chart';
    data: string;
  }[];
  suggestions?: string[];
}

// Education Types
export interface EducationContent {
  id: string;
  title: string;
  description: string;
  category: 'articles' | 'videos' | 'podcasts' | 'guides';
  duration?: number;
  thumbnail?: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  rating: number;
  reviewCount: number;
  isPremium: boolean;
  resources?: {
    title: string;
    url: string;
    type: string;
  }[];
}

// Alert Types
export interface Alert {
  id: string;
  priority: 'critical' | 'warning' | 'info';
  icon: string;
  title: string;
  message: string;
  timestamp: string;
  read: boolean;
}

// API Response Types
export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
  error?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  page: number;
  pageSize: number;
  total: number;
  hasMore: boolean;
}
