export interface VideoInterface {
  img: string;
  title: string;
  views: string;
  duration: string;
  createdAt: string;
  creator: {
    name: string;
    img: string;
    isVerified: boolean;
  };
}
