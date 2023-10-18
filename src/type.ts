export interface IProfileData {
  email: string;
  name?: string;
  profile?: IProfile[];
}
interface IImageDataSize {
  [key: string]: string | undefined;
}

export interface IProfile {
  name: string;
  id: number;
  image: string;
  isActive: boolean;
}

export interface IClassNames {
  [key: string]: string;
}

export interface IImageData {
  id: string;
  name: string;
  onBoarding?: IImageDataSize;
  main?: IImageDataSize;
}
