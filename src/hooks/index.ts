import { useState, useEffect, useCallback } from 'react';
import { useAuthStore } from '@store/index';

// Use Auth Hook
export const useAuth = () => {
  const { user, token, isAuthenticated, isLoading, error, login, signup, logout } =
    useAuthStore();

  return {
    user,
    token,
    isAuthenticated,
    isLoading,
    error,
    login,
    signup,
    logout,
  };
};

// Use Async Hook
export const useAsync = <T,>(
  asyncFunction: () => Promise<T>,
  immediate: boolean = true
) => {
  const [status, setStatus] = useState<'idle' | 'pending' | 'success' | 'error'>('idle');
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);

  const execute = useCallback(async () => {
    setStatus('pending');
    setData(null);
    setError(null);
    try {
      const response = await asyncFunction();
      setData(response);
      setStatus('success');
      return response;
    } catch (err) {
      setError(err as Error);
      setStatus('error');
      throw err;
    }
  }, [asyncFunction]);

  useEffect(() => {
    if (immediate) {
      execute();
    }
  }, [execute, immediate]);

  return { execute, status, data, error };
};

// Use Debounce Hook
export const useDebounce = <T,>(value: T, delay: number): T => {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(handler);
  }, [value, delay]);

  return debouncedValue;
};

// Use Theme Hook
export const useTheme = () => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = useCallback(() => {
    setIsDark((prev) => !prev);
  }, []);

  return { isDark, toggleTheme };
};

// Use Interval Hook
export const useInterval = (callback: () => void, delay: number | null) => {
  useEffect(() => {
    if (delay === null) {
      return;
    }

    const id = setInterval(callback, delay);

    return () => clearInterval(id);
  }, [callback, delay]);
};

// Use Previous Hook
export const usePrevious = <T,>(value: T): T | undefined => {
  const ref = useState<T | undefined>(undefined);

  useEffect(() => {
    ref[1](value);
  }, [value]);

  return ref[0];
};

// Use Mount Hook
export const useMount = (callback: () => void) => {
  useEffect(() => {
    callback();
  }, [callback]);
};

// Use Unmount Hook
export const useUnmount = (callback: () => void) => {
  useEffect(() => {
    return () => {
      callback();
    };
  }, [callback]);
};

// Use Fetch Hook
export const useFetch = <T,>(
  url: string,
  options?: Record<string, any>
) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        // API call would go here
        // const response = await fetch(url, options);
        // const json = await response.json();
        // setData(json);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, options]);

  return { data, loading, error };
};
