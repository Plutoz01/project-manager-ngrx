import { Observable } from 'rxjs/Observable';
import { CrudRepository } from '../models/crud-repository.interface';

import { Identifiable } from '../models/identifiable.interface';

export abstract class AbstractInMemoryCrudRepository<T extends Identifiable<ID>, ID extends string | number>
	implements CrudRepository<T, ID> {

	returnDelay = 1000;

	protected entitiesById: { [key: string]: T };

	constructor( initialData: T[] ) {
		initialData = initialData || [];
		this.entitiesById = initialData.reduce( ( acc: Object, current: T ) => {
			acc[ current.id as string ] = current;
			return acc;
		}, {} );
	}

	getById( id: ID ): Observable<T | null> {
		const result = this.entitiesById[ id as string ];
		return Observable.of( result || null ).delay( this.returnDelay );
	}

	exists( id: ID ): Observable<boolean> {
		return this.getById( id ).map( ( entity: T | null ) => !!entity );
	}

	getAll(): Observable<T[]> {
		return Observable.of( Object.values( this.entitiesById ) ).delay( this.returnDelay );
	}

	create( entity: T ): Observable<T> {
		return Observable.of( entity ).map( ( entityToAdd: T ) => {
			if ( !entityToAdd ) {
				throw new Error( 'Entity have to exists' );
			}

			if ( !!this.entitiesById[ entityToAdd.id as string ] ) {
				throw new Error( 'entity already exists with id: ' + entityToAdd.id );
			}

			const newEntity = <T>{
				... <Object>entityToAdd,
				id: this.generateNewId()
			};

			this.entitiesById = {
				...this.entitiesById,
				[newEntity.id as string]: newEntity
			};

			return newEntity;
		} ).delay( this.returnDelay );
	}

	update( entity: T ): Observable<T> {
		return Observable.of( entity ).map( ( entityToUpdate: T ) => {
			if ( !entityToUpdate ) {
				throw new Error( 'Entity have to exists' );
			}

			if ( !entityToUpdate.id ) {
				throw new Error( 'Entity have to have an existing id' );
			}

			if ( !this.entitiesById[ entityToUpdate.id as string ] ) {
				throw new Error( 'entity have to exists with id: ' + entityToUpdate.id );
			}

			const clonedEntityToUpdate = <T>{
				... <Object>entityToUpdate
			};

			this.entitiesById = {
				...this.entitiesById,
				[clonedEntityToUpdate.id as string]: clonedEntityToUpdate
			};

			return clonedEntityToUpdate;
		} ).delay( this.returnDelay );
	}

	delete( id: ID ): Observable<void> {
		return Observable.of( undefined )
			.do( () => {
				if ( !id ) {
					throw new Error( 'id must not be null' );
				}
				if ( !!this.entitiesById[ id as string ] ) {
					const { [id as string]: undefined, ...result } = this.entitiesById;
					this.entitiesById = result;
				}
			} ).delay( this.returnDelay );
	}

	abstract generateNewId(): ID;
}
