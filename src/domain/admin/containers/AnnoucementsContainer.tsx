import React, { useCallback, useState, useEffect, useMemo } from 'react';
import axios from 'axios';

import { AnnouncementsList, AnnouncementsErrors } from 'infra/interfaces/announcements';

import { useApi } from 'domain/app/hooks/useApi';

import { AnnouncementComponent, AnnouncementFields } from '../interfaces';

interface Props {
  component: React.ElementType<AnnouncementComponent>;
}

export const AnnoucementsContainer: React.FC<Props> = ({ component: Component }) => {
  const [errors, setErrors] = useState<AnnouncementsErrors>();

  // api url
  const url = useMemo(() => 'api/v1/announcements', []);

  // метод для получения листа, вызывается один раз при инициализации
  const { data, loading, error } = useApi<AnnouncementsList>({
    isAutoFetch: true,
    url,
    config: {
      method: 'GET',
    },
  });

  useEffect(() => {
    if (error) setErrors(error.response?.data);
  }, [error]);

  const onUpdate = useCallback(
    (fields: AnnouncementFields, id) => {
      axios
        .patch(url, { fields, id })
        .then((data) => data)
        .catch((error) => setErrors(error));
    },
    [url]
  );

  const onCreate = useCallback(
    (fields: AnnouncementFields) => {
      axios
        .post(url, fields)
        .then((data) => data)
        .catch((error) => setErrors(error));
    },
    [url]
  );

  const onDelete = useCallback(
    (id) => {
      axios
        .delete(url, { params: { id } })
        .then((data) => data)
        .catch((error) => setErrors(error));
    },
    [url]
  );

  return (
    <Component
      loading={loading}
      dataList={data?.data}
      errors={errors}
      onUpdate={onUpdate}
      onCreate={onCreate}
      onDelete={onDelete}
    />
  );
};
