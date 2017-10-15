import { Identifiable } from '../../shared/models/identifiable.interface';
import { Observable } from 'rxjs/Observable';

export interface SaveService <T extends Identifiable<ID>, ID extends string | number > {

	save$( modelToSave: T ): Observable<T>;

}
