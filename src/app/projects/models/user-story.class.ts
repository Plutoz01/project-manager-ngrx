import { Identifiable } from '../../shared/models/identifiable.interface';
import { UserStoryStatus } from './user-story-status.enum';

export class UserStory implements Identifiable<number> {
	id: number;
	projectId: number;
	name = '';
	description = '';
	points = 0;
	status: UserStoryStatus = UserStoryStatus.Queue;

	constructor( source?: UserStory ) {
		if ( source ) {
			Object.assign( this, source );
		}
	}

	get completionPercentage(): number {
		switch ( this.status ) {
			case UserStoryStatus.Queue:
				return 0;
			case UserStoryStatus.InProgress:
				return 50;
			case UserStoryStatus.Completed:
				return 100;
			default:
				throw new Error( 'Unhandled userStoryStatus: ' + this.status );
		}
	}
}
