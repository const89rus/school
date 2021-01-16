import { useState, useEffect, useRef, useCallback } from 'react';
import { AxiosRequestConfig, AxiosInstance, AxiosResponse, AxiosError } from 'axios';

import axios from 'axios';

interface Props {
  url: string;
  config?: AxiosRequestConfig;
  skip?: boolean;
  isAutoFetch?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  mock?: any;
}

interface UseApiReturn<T, U> {
  axios: AxiosInstance;
  onRefetch: (newUrl?: string, newConfig?: AxiosRequestConfig) => void;
  loading: boolean;
  data?: AxiosResponse<T> | null;
  error?: AxiosError<U> | null;
}

interface UseApiState<T, U> {
  loading: boolean;
  data?: AxiosResponse<T> | null;
  error?: AxiosError<U> | null;
}

export const useApi = <TDataResponse, TErrorResponse = any>(
  props: Props
): UseApiReturn<TDataResponse, TErrorResponse> => {
  const { url, config, isAutoFetch, skip } = props;

  const isMountedRef = useRef(true);

  const [data, setData] = useState<UseApiState<TDataResponse, TErrorResponse>>({
    loading: !!isAutoFetch,
    data: undefined,
    error: undefined,
  });

  const onFetch = useCallback(
    async (newUrl: string = url, newConfig: AxiosRequestConfig | undefined = config): Promise<void> => {
      try {
        const response: AxiosResponse = await axios(newUrl, newConfig);

        if (isMountedRef.current) setData({ data: response, loading: false, error: null });
      } catch (error) {
        const axError = error as AxiosError;
        if (isMountedRef.current) setData({ loading: false, error: axError, data: null });
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [axios, config, url, setData]
  );

  useEffect(() => {
    if (isAutoFetch && !skip) {
      if (isMountedRef.current && !!url) {
        setData({ ...data, loading: true });
        onFetch();
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url, config, isAutoFetch, skip]);

  useEffect(() => {
    return () => {
      isMountedRef.current = false;
    };
  }, []);

  return { axios, ...data, onRefetch: onFetch };
};
