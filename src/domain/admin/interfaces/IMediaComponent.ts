export interface IMediaComponent {
  errors?: string;
  list?: any;
  onUpdate: (fields: MediaFields) => Promise<void>;
}

export interface MediaFields {
  headingVideo: string;
  linkVideo: string;
  headingArticle: string;
  linkArticle?: string;
  fragment?: string;
}
