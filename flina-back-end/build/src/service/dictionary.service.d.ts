import { Observable } from 'rxjs';
import { Repository } from 'typeorm';
import { Dictionary } from '../entity/dictionary.entity';
export declare class DictionaryService {
    private readonly repo;
    constructor(repo: Repository<Dictionary>);
    findAll(): Observable<Dictionary[]>;
}
