import { inject, TestBed } from '@angular/core/testing';

import { UserStoryRepositoryService } from './user-story-repository.service';

describe( 'UserStoryRepositoryService', () => {
	beforeEach( () => {
		TestBed.configureTestingModule( {
			providers: [ UserStoryRepositoryService ]
		} );
	} );

	it( 'should be created', inject( [ UserStoryRepositoryService ], ( service: UserStoryRepositoryService ) => {
		expect( service ).toBeTruthy();
	} ) );
} );
