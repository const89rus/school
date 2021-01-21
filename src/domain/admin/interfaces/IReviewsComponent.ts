export interface IReviewsComponent {
  errors?: string;
  list?: ReviewsFields[];
}

export interface ReviewsFields {
  id: any;
  link: string;
  content: any;
  lesson: string;
  student?: string;
}
