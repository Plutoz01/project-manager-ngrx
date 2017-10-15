import { Inject, Injectable } from '@angular/core';
import * as _ from 'lodash';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { Identifiable } from '../../shared/models/identifiable.interface';
import { SaveService } from './save-service.interface';
import { SaveType } from '../enums/save-type.enum';

@Injectable()
export class ModelEditorService<T extends Identifiable<ID>, ID extends string | number> {

	static readonly DefaultDelayedSaveInterval = 5000;
	private savedModel: T;
	private currentModel: T;
	private currentSaveType: SaveType = null;
	private queuedSaveType: SaveType = null;
	private delayedSaveTriggerSource = new Subject();
	private immediateSaveResultSubject: Subject<T>;

	constructor(
		@Inject( 'ModelEditorInitialValueToken' ) initialModel: T,
		@Inject( 'ModelEditorSaveServiceToken' ) private saveService: SaveService<T, ID>,
		@Inject( 'ModelEditorDelayedSaveIntervalToken' ) delayedSaveInterval: number
	) {
		this.savedModel = initialModel;
		this.currentModel = initialModel;

		this.delayedSaveTriggerSource.auditTime( delayedSaveInterval || ModelEditorService.DefaultDelayedSaveInterval )
			.filter( () => !_.isEqual( this.savedModel, this.currentModel ) )
			.subscribe( () => {
				this.requestSave( SaveType.Delayed );
			} );
	}

	get pendingSaveType(): SaveType {
		return this.currentSaveType;
	}

	save$(): Observable<T> {
		this.immediateSaveResultSubject = new Subject<T>();
		this.requestSave( SaveType.Immediate );
		return this.immediateSaveResultSubject.asObservable();
	}

	setCurrentModel( newModel: T, triggerDelayedSave = true ) {
		this.currentModel = newModel;
		if ( triggerDelayedSave ) {
			this.delayedSaveTriggerSource.next();
		}
	}

	saveTaskFinished() {
		this.currentSaveType = this.queuedSaveType;
		this.queuedSaveType = null;
		if ( !!this.currentSaveType ) {
			this.processCurrentSaveTask();
		}
	}

	private requestSave( saveType: SaveType ) {
		// if no save pending
		if ( !this.currentSaveType ) {
			this.currentSaveType = saveType;
			this.processCurrentSaveTask();
		} else {
			if ( saveType === SaveType.Immediate && this.currentSaveType === SaveType.Immediate ) {
				throw new Error( 'No multiple Immediate save allowed' );
			}
			if ( !this.queuedSaveType ) {
				this.queuedSaveType = saveType;
			} else if ( this.queuedSaveType === SaveType.Delayed ) {
				this.queuedSaveType = saveType;
			}
		}
	}

	private processCurrentSaveTask() {
		const saveTask = this.currentSaveType;

		// no real change happened, further save is unnecessary
		if ( _.isEqual( this.savedModel, this.currentModel ) ) {
			this.saveTaskFinished();
		}

		this.saveService.save$( this.currentModel )
			.finally( () => this.saveTaskFinished() )
			.subscribe(
				( saved: T ) => {
					this.savedModel = saved;
					if ( saveTask === SaveType.Immediate ) {
						this.immediateSaveResultSubject.next( saved );
					}
				},
				( error ) => {
					if ( saveTask === SaveType.Immediate ) {
						this.immediateSaveResultSubject.error( error );
					} else {
						// reschedule auto-save
						this.delayedSaveTriggerSource.next();
					}
				},
				() => {
					if ( saveTask === SaveType.Immediate ) {
						this.immediateSaveResultSubject.complete();
					}
				}
			);
	}

}
