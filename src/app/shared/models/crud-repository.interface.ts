import { Observable } from 'rxjs/Observable';

import { Identifiable } from './identifiable.interface';

export interface CrudRepository<T extends Identifiable<ID>, ID extends string | number> {

	getById(id: ID): Observable<T>;

	exists?( id: ID ): Observable<boolean>;

	getAll(): Observable<T[]>;

	create(entity: T): Observable<T>;

	update(entity: T): Observable<T>;

	delete(id: ID): Observable<void>;

}
