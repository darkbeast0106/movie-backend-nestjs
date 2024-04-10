import { Injectable } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class MovieService {
  constructor (private readonly db: PrismaService) {}
  async create(createMovieDto: CreateMovieDto) {
    return await this.db.movie.create({data: createMovieDto});
  }

  async findAll() {
    return await this.db.movie.findMany();
  }

  async findOne(id: number) {
    return await this.db.movie.findUniqueOrThrow({where: {id}});
  }

  async update(id: number, updateMovieDto: UpdateMovieDto) {
    return await this.db.movie.update({data: updateMovieDto, where: {id}});
  }

  async remove(id: number) {
    return await this.db.movie.delete({where: {id}});
  }
}
