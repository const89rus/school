export interface AnnouncementsList {
  '@type': 'announcementList';
  announcements: AnnouncementsListItem[];
}

export interface AnnouncementsListItem {
  id: string;
  date: string;
  time: string;
  heading: string;
  description: string;
}
