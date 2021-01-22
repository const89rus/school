export interface IAnnouncementComponent {
  //data: any;
  loading: boolean;
  errors?: string;
  list?: unknown;
  onUpdate: (fields: AnnouncementFields) => void;
}

export interface AnnouncementFields {
  date: string;
  time: string;
  heading: string;
  description?: string;
}
