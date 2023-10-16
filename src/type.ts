export interface IProfileData {
  id: string;
  name?: string;
  onBoarding?: IImageDataSize;
  main?: IImageDataSize;
  profile?: IProfile[];
}
interface IImageDataSize {
  [key: string]: string | undefined;
}

export interface IProfile {
  name: string;
  id: number;
  profileClassName: string;
}
