import {
  Controller,
  Get,
  Param,
  Post,
  Delete,
  Put,
  Patch,
  Body,
  Query,
} from '@nestjs/common';
import { MoviesService } from './movies.service';
import { Movie } from './entities/movie.entity';
import { CreateMovieDto } from 'src/movies/dto/create-movie.dto';

@Controller('movies')
export class MoviesController {
  constructor(private readonly movieService: MoviesService) {}
  @Get()
  getAll(): Movie[] {
    return this.movieService.getAll();
  }

  @Get('search')
  search(@Query('year') searchingYear: string): string {
    return `We are searching for a movie made after:${searchingYear}`;
  }

  @Get('/:id')
  getOne(@Param('id') movieId: number): Movie {
    console.log(typeof movieId);
    return this.movieService.getOne(movieId);
  }

  @Post()
  create(@Body() movieData: CreateMovieDto) {
    return this.movieService.create(movieData);
  }

  @Delete('/:id')
  remove(@Param('id') movieId: number) {
    return this.movieService.deleteOne(movieId);
  }

  @Patch('/:id')
  patch(@Param('id') movieId: number, @Body() updateData) {
    return this.movieService.update(movieId, updateData);
  }
}
