import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ProjectRepositoryService } from '../../services/project-repository.service';
import { ProjectStartComponent } from './start.component';

describe( 'StartComponent', () => {
	let component: ProjectStartComponent;
	let fixture: ComponentFixture<ProjectStartComponent>;

	beforeEach( async( () => {
		TestBed.configureTestingModule( {
			declarations: [
				ProjectStartComponent
			],
			providers: [
				ProjectRepositoryService
			],
			imports: [
				RouterTestingModule,
				NgbModule.forRoot()
			]
		} )
			.compileComponents();
	} ) );

	beforeEach( () => {
		fixture = TestBed.createComponent( ProjectStartComponent );
		component = fixture.componentInstance;
		fixture.detectChanges();
	} );

	it( 'should be created', () => {
		expect( component ).toBeTruthy();
	} );
} );
