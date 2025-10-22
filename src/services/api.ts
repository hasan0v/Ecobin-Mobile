import axios, { AxiosInstance } from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const API_BASE_URL = 'https://api.ecobin.app/v1';

class ApiService {
  private api: AxiosInstance;

  constructor() {
    this.api = axios.create({
      baseURL: API_BASE_URL,
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // Add request interceptor
    this.api.interceptors.request.use(
      async (config) => {
        const token = await AsyncStorage.getItem('authToken');
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    // Add response interceptor
    this.api.interceptors.response.use(
      (response) => response,
      async (error) => {
        if (error.response?.status === 401) {
          // Handle token refresh
          await AsyncStorage.removeItem('authToken');
        }
        return Promise.reject(error);
      }
    );
  }

  // Auth endpoints
  login(email: string, password: string) {
    return this.api.post('/auth/login', { email, password });
  }

  signup(userData: any) {
    return this.api.post('/auth/signup', userData);
  }

  refreshToken(token: string) {
    return this.api.post('/auth/refresh', { token });
  }

  // User endpoints
  getUser() {
    return this.api.get('/users/me');
  }

  updateUser(updates: any) {
    return this.api.put('/users/me', updates);
  }

  // Device endpoints
  getDevices() {
    return this.api.get('/devices');
  }

  pairDevice(deviceCode: string) {
    return this.api.post('/devices/pair', { deviceCode });
  }

  unpairDevice(deviceId: string) {
    return this.api.delete(`/devices/${deviceId}`);
  }

  // Sensor data endpoints
  getSensorData(deviceId: string, timeRange: string = '24h') {
    return this.api.get(`/sensors/${deviceId}/data`, { params: { timeRange } });
  }

  // Compost endpoints
  getCompostBatches() {
    return this.api.get('/compost/batches');
  }

  startCompostingCycle(deviceId: string) {
    return this.api.post('/compost/start', { deviceId });
  }

  stopCompostingCycle(batchId: string) {
    return this.api.post(`/compost/${batchId}/stop`);
  }

  mixCompost(batchId: string) {
    return this.api.post(`/compost/${batchId}/mix`);
  }

  // Water endpoints
  getWaterData() {
    return this.api.get('/water/data');
  }

  getWaterQuality() {
    return this.api.get('/water/quality');
  }

  scheduleIrrigation(schedule: any) {
    return this.api.post('/water/schedule', schedule);
  }

  irrigateNow(volume: number) {
    return this.api.post('/water/irrigate-now', { volume });
  }

  // Soil endpoints
  getSoilAnalysis(farmId: string) {
    return this.api.get(`/soil/analysis/${farmId}`);
  }

  updateSoilData(farmId: string, data: any) {
    return this.api.put(`/soil/${farmId}`, data);
  }

  // Weather endpoints
  getWeather(latitude: number, longitude: number) {
    return this.api.get('/weather', { params: { latitude, longitude } });
  }

  // Notifications endpoints
  getNotifications(page: number = 1, limit: number = 20) {
    return this.api.get('/notifications', { params: { page, limit } });
  }

  markNotificationAsRead(notificationId: string) {
    return this.api.put(`/notifications/${notificationId}/read`);
  }

  // Education endpoints
  getEducationContent(category?: string) {
    const params = category ? { category } : undefined;
    return this.api.get('/education/content', { params });
  }

  searchEducationContent(query: string) {
    return this.api.get('/education/search', { params: { q: query } });
  }

  // Analytics
  trackEvent(eventName: string, data?: any) {
    return this.api.post('/analytics/events', { eventName, data });
  }
}

export default new ApiService();
