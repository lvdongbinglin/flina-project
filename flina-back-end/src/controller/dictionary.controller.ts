import { BadRequestException, Controller, Get, HttpException } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Dictionary } from '../../../entity/dictionary.entity';
import { DictionaryService } from './dictionary.service';

@Controller('dictionary')
export class DictionaryController {
  constructor(
    private readonly service: DictionaryService
  ) { }

  @Get('list')
  list(): Observable<Dictionary[]> {
    throw new BadRequestException("参数")
    return this.service.findAll();
  }
}
