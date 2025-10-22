import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import {
  AuthState,
  User,
  ConnectedDevice,
  CompostBatch,
  SoilAnalysis,
  AppNotification,
} from '@types/index';

// Auth Store
interface AuthStore extends AuthState {
  login: (email: string, password: string) => Promise<void>;
  signup: (user: Partial<User>) => Promise<void>;
  logout: () => void;
  updateUser: (updates: Partial<User>) => void;
  setError: (error: string | null) => void;
}

export const useAuthStore = create<AuthStore>()(
  immer((set) => ({
    user: null,
    token: null,
    refreshToken: null,
    isAuthenticated: false,
    isLoading: false,
    error: null,

    login: async (email, password) => {
      set((state) => {
        state.isLoading = true;
        state.error = null;
      });
      try {
        // API call would go here
        // const response = await authService.login(email, password);
        // Placeholder implementation
        set((state) => {
          state.token = 'mock_token';
          state.isAuthenticated = true;
          state.isLoading = false;
        });
      } catch (error) {
        set((state) => {
          state.error = error.message;
          state.isLoading = false;
        });
        throw error;
      }
    },

    signup: async (user) => {
      set((state) => {
        state.isLoading = true;
        state.error = null;
      });
      try {
        // API call would go here
        // const response = await authService.signup(user);
        set((state) => {
          state.user = user as User;
          state.isAuthenticated = true;
          state.isLoading = false;
        });
      } catch (error) {
        set((state) => {
          state.error = error.message;
          state.isLoading = false;
        });
        throw error;
      }
    },

    logout: () => {
      set((state) => {
        state.user = null;
        state.token = null;
        state.refreshToken = null;
        state.isAuthenticated = false;
      });
    },

    updateUser: (updates) => {
      set((state) => {
        if (state.user) {
          state.user = { ...state.user, ...updates };
        }
      });
    },

    setError: (error) => {
      set((state) => {
        state.error = error;
      });
    },
  }))
);

// Device Store
interface DeviceStore {
  devices: ConnectedDevice[];
  selectedDevice: ConnectedDevice | null;
  addDevice: (device: ConnectedDevice) => void;
  removeDevice: (deviceId: string) => void;
  selectDevice: (device: ConnectedDevice) => void;
  updateDeviceStatus: (deviceId: string, status: ConnectedDevice['status']) => void;
  updateDeviceBattery: (deviceId: string, battery: number) => void;
}

export const useDeviceStore = create<DeviceStore>()(
  immer((set) => ({
    devices: [],
    selectedDevice: null,

    addDevice: (device) => {
      set((state) => {
        state.devices.push(device);
      });
    },

    removeDevice: (deviceId) => {
      set((state) => {
        state.devices = state.devices.filter((d) => d.id !== deviceId);
        if (state.selectedDevice?.id === deviceId) {
          state.selectedDevice = null;
        }
      });
    },

    selectDevice: (device) => {
      set((state) => {
        state.selectedDevice = device;
      });
    },

    updateDeviceStatus: (deviceId, status) => {
      set((state) => {
        const device = state.devices.find((d) => d.id === deviceId);
        if (device) {
          device.status = status;
        }
      });
    },

    updateDeviceBattery: (deviceId, battery) => {
      set((state) => {
        const device = state.devices.find((d) => d.id === deviceId);
        if (device) {
          device.batteryLevel = battery;
        }
      });
    },
  }))
);

// Compost Store
interface CompostStore {
  batches: CompostBatch[];
  currentBatch: CompostBatch | null;
  addBatch: (batch: CompostBatch) => void;
  updateBatch: (batchId: string, updates: Partial<CompostBatch>) => void;
  startComposting: (deviceId: string) => void;
  stopComposting: (batchId: string) => void;
  setCurrentBatch: (batch: CompostBatch | null) => void;
}

export const useCompostStore = create<CompostStore>()(
  immer((set) => ({
    batches: [],
    currentBatch: null,

    addBatch: (batch) => {
      set((state) => {
        state.batches.push(batch);
      });
    },

    updateBatch: (batchId, updates) => {
      set((state) => {
        const batch = state.batches.find((b) => b.id === batchId);
        if (batch) {
          Object.assign(batch, updates);
        }
      });
    },

    startComposting: (deviceId) => {
      // Implementation for starting compost cycle
    },

    stopComposting: (batchId) => {
      set((state) => {
        const batch = state.batches.find((b) => b.id === batchId);
        if (batch) {
          batch.status = 'ready';
        }
      });
    },

    setCurrentBatch: (batch) => {
      set((state) => {
        state.currentBatch = batch;
      });
    },
  }))
);

// Soil Store
interface SoilStore {
  analyses: SoilAnalysis[];
  currentAnalysis: SoilAnalysis | null;
  addAnalysis: (analysis: SoilAnalysis) => void;
  setCurrentAnalysis: (analysis: SoilAnalysis | null) => void;
}

export const useSoilStore = create<SoilStore>()(
  immer((set) => ({
    analyses: [],
    currentAnalysis: null,

    addAnalysis: (analysis) => {
      set((state) => {
        state.analyses.push(analysis);
      });
    },

    setCurrentAnalysis: (analysis) => {
      set((state) => {
        state.currentAnalysis = analysis;
      });
    },
  }))
);

// Notification Store
interface NotificationStore {
  notifications: AppNotification[];
  unreadCount: number;
  addNotification: (notification: AppNotification) => void;
  markAsRead: (notificationId: string) => void;
  removeNotification: (notificationId: string) => void;
  clearAll: () => void;
}

export const useNotificationStore = create<NotificationStore>()(
  immer((set) => ({
    notifications: [],
    unreadCount: 0,

    addNotification: (notification) => {
      set((state) => {
        state.notifications.unshift(notification);
        if (!notification.isRead) {
          state.unreadCount += 1;
        }
      });
    },

    markAsRead: (notificationId) => {
      set((state) => {
        const notification = state.notifications.find((n) => n.id === notificationId);
        if (notification && !notification.isRead) {
          notification.isRead = true;
          state.unreadCount -= 1;
        }
      });
    },

    removeNotification: (notificationId) => {
      set((state) => {
        const notification = state.notifications.find((n) => n.id === notificationId);
        if (notification && !notification.isRead) {
          state.unreadCount -= 1;
        }
        state.notifications = state.notifications.filter((n) => n.id !== notificationId);
      });
    },

    clearAll: () => {
      set((state) => {
        state.notifications = [];
        state.unreadCount = 0;
      });
    },
  }))
);
