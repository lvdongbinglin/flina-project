import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DictionaryController } from '../controller/dictionary.controller';
import { Dictionary } from '../entity/dictionary.entity';
import { DictionaryService } from '../service/dictionary.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Dictionary])
  ],
  controllers: [DictionaryController],

  providers: [
    DictionaryService
  ]
})
export class DictionaryModule { }
