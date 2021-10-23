
import { Injectable } from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { Dictionary } from '../entity/dictionary.entity';

@Injectable()
@EntityRepository(Dictionary)
export class DictionaryRepository extends Repository<Dictionary> {


}