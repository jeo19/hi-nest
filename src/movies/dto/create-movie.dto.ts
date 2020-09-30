import { IsString, IsNumber, IsOptional } from 'class-validator';
import { isString } from 'util';
export class CreateMovieDto {
  @IsString()
  readonly title: string;

  @IsNumber()
  readonly year: number;

  @IsOptional()
  @IsString({ each: true }) //Check if each value type of an array is a string
  readonly genres: string[];
}
