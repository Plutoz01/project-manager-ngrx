import { Inject, Injectable, Optional } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AbstractInMemoryCrudRepository } from '../../shared/services/AbstractInMemoryCrudRepository.service';
import { UserStory } from '../models/user-story.class';

@Injectable()
export class UserStoryRepositoryService extends AbstractInMemoryCrudRepository<UserStory, number> {

	private static nextId = 0;

	constructor( @Inject( 'INITIAL_USER_STORIES' ) @Optional() initialUserStories: UserStory[] = [] ) {
		super( initialUserStories );
	}

	public generateNewId(): number {
		return ++UserStoryRepositoryService.nextId;
	}

	public getByProjectId( projectId: number ): Observable<UserStory[]> {
		return this.getAll().map( ( userStories: UserStory[] ) =>
			userStories.filter( ( userStory: UserStory ) => userStory.projectId === projectId )
		);
	}

}
