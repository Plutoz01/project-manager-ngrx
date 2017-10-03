import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ProjectRepositoryService } from '../../services/project-repository.service';
import { ProjectStartComponent } from './start.component';
import { ProjectListItemComponent } from '../project-list-item/list-item.component';
import { GenericListComponent } from '../../../shared/components/generic-list/generic-list.component';
import { LoadingAnimationComponent } from '../../../shared/components/loading-animation/loading-animation.component';

// TODO: fix
xdescribe( 'StartComponent', () => {
	let component: ProjectStartComponent;
	let fixture: ComponentFixture<ProjectStartComponent>;

	beforeEach( async( () => {
		TestBed.configureTestingModule( {
			declarations: [
				ProjectStartComponent,
				ProjectListItemComponent,
				GenericListComponent,
				LoadingAnimationComponent,
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
