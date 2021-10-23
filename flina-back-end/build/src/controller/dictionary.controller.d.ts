import { Observable } from 'rxjs';
import { Dictionary } from '../entity/dictionary.entity';
import { DictionaryService } from '../service/dictionary.service';
export declare class DictionaryController {
    private readonly service;
    constructor(service: DictionaryService);
    list(): Observable<Dictionary[]>;
}
