import { useEffect, useState } from 'react';
import api from '../api';

type MethodTypes = 'GET' | 'POST' | 'DELETE' | 'PUT';

export const useFetch = <T>(url: string, method: MethodTypes) => {
  const [data, setData] = useState<T>();

  useEffect(() => {
    (async () => {
      const result = await api.request({ method, url });
      console.log(result);
      setData(result.data);
    })();
  }, []);

  return data;
};
