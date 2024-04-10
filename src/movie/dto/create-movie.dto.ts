import { IsInt, IsPositive, IsString } from "class-validator";

export class CreateMovieDto {
  @IsString()
  title: string;
  @IsString()
  category: string;
  @IsInt()
  @IsPositive()
  duration: number;
}
