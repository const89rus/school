import React, { useCallback, useState, useEffect, useMemo } from 'react';
import axios from 'axios';

import { useApi } from 'domain/app/hooks/useApi';

import { IReviewsComponent } from '../interfaces';

interface Props {
  component: React.ElementType<IReviewsComponent>;
}

export const ReviewsContainer: React.FC<Props> = ({ component: Component }) => {
  const [errors, setErrors] = useState<any>();

  // api url
  const url = useMemo(() => 'api/v1/reviews', []);

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

  return <Component loading={loading} list={data} errors={errors} />;
};
