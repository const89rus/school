export interface IAnnouncementComponent {
  errors?: string;
  list?: AnnouncementFields;
  onUpdate: (fields: AnnouncementFields) => Promise<void>;
}

export interface AnnouncementFields {
  date: string;
  time: string;
  heading: string;
  description?: string;
}
