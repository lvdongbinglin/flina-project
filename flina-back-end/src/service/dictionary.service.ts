import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Observable, from } from 'rxjs';
import { Repository } from 'typeorm';
import { Dictionary } from '../entity/dictionary.entity';
import { DictionaryRepository } from 'src/repository/dictionary.repository';

@Injectable()
export class DictionaryService {
  constructor(
    @InjectRepository(Dictionary)
    private readonly repo: DictionaryRepository,
  ) { }


}
