import { IsString, IsUrl, IsNotEmpty } from 'class-validator';

export class Category {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  @IsUrl()
  readonly image: string;
}
