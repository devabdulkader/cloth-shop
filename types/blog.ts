export interface IBlog {
    id: number;
    title: string;
    image: string;
    pathName: string;
    description: {
        para: string;
    }[];
    date: string;
    author: string;
  }