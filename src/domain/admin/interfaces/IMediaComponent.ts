export interface IMediaComponent {
  //data: any;
  loading: boolean;
  errors?: string;
  list?: unknown;
  onUpdate: (fields: MediaFields) => void;
}

export interface MediaFields {
  headingVideo: string;
  linkVideo: string;
  headingArticle: string;
  linkArticle?: string;
  fragment?: string;
}
