export interface IReviewsComponent {
  //data: any;
  loading: boolean;
  errors?: string;
  list?: unknown;
}

export interface ReviewsFields {
  id: any;
  link: string;
  content: any;
  lesson: string;
  student?: string;
}
