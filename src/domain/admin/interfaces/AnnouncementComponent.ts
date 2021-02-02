import { AnnouncementsList, AnnouncementsErrors } from 'infra/interfaces/announcements';

export interface AnnouncementComponent {
  loading: boolean;
  errors?: AnnouncementsErrors;
  dataList?: AnnouncementsList;
  onDelete: (id: string) => void;
  onCreate: (fields: AnnouncementFields) => void;
  onUpdate: (fields: AnnouncementFields, id: string) => void;
}

export interface AnnouncementFields {
  date: string;
  time: string;
  heading: string;
  description?: string;
}
