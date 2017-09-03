import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

import { Project } from '../../models/project.interface';

@Component( {
	selector: 'pm-project-editor',
	templateUrl: './project-editor.component.html',
	styleUrls: [ './project-editor.component.scss' ],
	changeDetection: ChangeDetectionStrategy.OnPush
} )
export class ProjectEditorComponent implements OnDestroy {

	@Output() change = new EventEmitter<Object>();

	projectForm: FormGroup;
	id?: string;
	private formChangeSubscription: Subscription;

	constructor( private formBuilder: FormBuilder ) {
		this.projectForm = this.formBuilder.group( {
			name: [ '', Validators.required ],
			description: ''
		} );

		this.formChangeSubscription = this.projectForm.valueChanges.debounceTime( 500 )
			.subscribe( ( changed ) => {
				this.change.emit( changed );
			} );
	}

	@Input()
	set project( project: Project ) {
		this.projectForm.reset( project, { emitEvent: false } );
		this.id = project.id ? project.id.toString() : '';
	}

	ngOnDestroy() {
		this.formChangeSubscription.unsubscribe();
	}

}
