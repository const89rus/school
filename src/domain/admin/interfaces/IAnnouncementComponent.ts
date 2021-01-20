export interface IAnnouncementComponent {
  errors?: string;
  url?: any;
  onUpdate: (fields: AnnouncementFields) => Promise<void>;
}

export interface AnnouncementFields {
  date: string;
  time: string;
  heading: string;
  description?: string;
}
