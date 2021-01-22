import React, { useCallback, useState, useEffect, useMemo } from 'react';
import axios from 'axios';

import { useApi } from 'domain/app/hooks/useApi';

import { ICardsComponent, CardsFields } from '../interfaces';

interface Props {
  component: React.ElementType<ICardsComponent>;
}

export const PressContainer: React.FC<Props> = ({ component: Component }) => {
  const [errors, setErrors] = useState<any>();

  // api url
  const url = useMemo(() => 'api/v1/press', []);

  // метод для получения листа, вызывается один раз при инициализации
  const { data, loading, error } = useApi({
    isAutoFetch: true,
    url,
    config: {
      method: 'GET',
    },
  });

  useEffect(() => {
    if (error) setErrors(error.message);
  }, [error]);

  const onUpdate = useCallback(
    (fields: CardsFields) => {
      console.log('onUpdate', fields);
      //   axios
      //     .post(url, fields)
      //     .then((data) => data)
      //     .catch((error) => setErrors(error));
    },
    [axios, setErrors]
  );

  return <Component loading={loading} list={data} errors={errors} onUpdate={onUpdate} />;
};
