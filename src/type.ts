export interface IImageData {
  id: string;
  name?: string;
  onBoarding?: IImageDataSize;
  main?: IImageDataSize;
}
interface IImageDataSize {
  [key: string]: string | undefined;
}
