import { IsString, IsNumber } from 'class-validator';
import { isString } from 'util';
export class CreateMovieDto {
  @IsString()
  readonly title: string;

  @IsNumber()
  readonly year: number;

  @IsString({ each: true })
  readonly genres: string[];
}
