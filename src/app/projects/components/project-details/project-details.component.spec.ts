import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { InitialProjects } from '../../data/initial/projects.data';
import { ProjectEditorComponent } from '../project-editor/project-editor.component';
import { ProjectDetailsComponent } from './project-details.component';

describe( 'ProjectDetailsComponent', () => {
	let component: ProjectDetailsComponent;
	let fixture: ComponentFixture<ProjectDetailsComponent>;

	beforeEach( async( () => {
		TestBed.configureTestingModule( {
			declarations: [
				ProjectDetailsComponent,
				ProjectEditorComponent,
			],
			providers: [
				{
					provide: ActivatedRoute, useValue: {
						snapshot: {
							data: {
								project: InitialProjects[ 0 ]
							}
						}
					}
				}
			],
			imports: [
				ReactiveFormsModule
			]
		} ).compileComponents();
	} ) );

	beforeEach( () => {
		fixture = TestBed.createComponent( ProjectDetailsComponent );
		component = fixture.componentInstance;
		fixture.detectChanges();
	} );

	it( 'should be created', () => {
		expect( component ).toBeTruthy();
	} );
} );
