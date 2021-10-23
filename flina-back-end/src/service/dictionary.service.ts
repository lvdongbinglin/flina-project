import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Observable, from } from 'rxjs';
import { Repository } from 'typeorm';
import { Dictionary } from '../../../entity/dictionary.entity';

@Injectable()
export class DictionaryService {
  constructor(
    @InjectRepository(Dictionary)
    private readonly repo: Repository<Dictionary>,
  ) { }

  findAll(): Observable<Dictionary[]> {
    return from(this.repo.find());
  }
}
