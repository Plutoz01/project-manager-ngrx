import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectEditorComponent } from './project-editor.component';
import { ReactiveFormsModule } from '@angular/forms';

describe( 'ProjectEditorComponent', () => {
	let component: ProjectEditorComponent;
	let fixture: ComponentFixture<ProjectEditorComponent>;

	beforeEach( async( () => {
		TestBed.configureTestingModule( {
			declarations: [ ProjectEditorComponent ],
			imports: [
				ReactiveFormsModule
			]
		} )
			.compileComponents();
	} ) );

	beforeEach( () => {
		fixture = TestBed.createComponent( ProjectEditorComponent );
		component = fixture.componentInstance;
		fixture.detectChanges();
	} );

	it( 'should be created', () => {
		expect( component ).toBeTruthy();
	} );
} );
