import { TestBed, inject } from '@angular/core/testing';

import { ProjectRepositoryService } from './project-repository.service';

describe('ProjectRepositoryService', () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [ProjectRepositoryService]
		});
	});

	it('should be created', inject([ProjectRepositoryService], (service: ProjectRepositoryService) => {
		expect(service).toBeTruthy();
	}));
});
