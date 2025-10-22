// Centralized exports for easier imports

// Components
export * from './Button';
export * from './TextInput';

// Utils
export * as FormattingUtils from '../utils/formatting';
export * as ValidationUtils from '../utils/validation';

// Hooks
export {
  useAuth,
  useAsync,
  useDebounce,
  useTheme,
  useInterval,
  usePrevious,
  useMount,
  useUnmount,
  useFetch,
} from '../hooks/index';

// Stores
export {
  useAuthStore,
  useDeviceStore,
  useCompostStore,
  useSoilStore,
  useNotificationStore,
} from '../store/index';

// Types
export type {
  User,
  AuthState,
  ConnectedDevice,
  SensorReading,
  CompostBatch,
  WaterQualityMetrics,
  RainwaterTank,
  IrrigationSchedule,
  IrrigationEvent,
  SoilNutrient,
  SoilAnalysis,
  Weather,
  WeatherForecast,
  AppNotification,
  Alert,
  ChatMessage,
  EducationContent,
  ApiResponse,
  PaginatedResponse,
} from '../types/index';

// Constants
export { COLORS, SPACING, BORDER_RADIUS, TYPOGRAPHY, SHADOWS, ANIMATIONS } from '../constants/theme';

// Services
export { default as apiService } from '../services/api';
