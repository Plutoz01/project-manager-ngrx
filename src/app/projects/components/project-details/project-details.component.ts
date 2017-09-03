import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component( {
	selector: 'pm-project-details',
	templateUrl: './project-details.component.html',
	styleUrls: [ './project-details.component.scss' ]
} )
export class ProjectDetailsComponent implements OnInit {
	projectForm: FormGroup;

	constructor( private formBuilder: FormBuilder ) {
	}

	ngOnInit() {
		this.projectForm = this.formBuilder.group( {
			name: [ '', Validators.required ],
			description: ''
		} );
	}
}
