import * as moment from 'moment';
import { Identifiable } from '../../shared/models/identifiable.interface';

export class Project implements Identifiable<number> {

	id: number;
	name = '';
	description?: string;
	userStoryIds: number[] = [];
	isFavorite = false;
	deadline?: string;
	progress: number;
	tags: string[] = [];

	constructor( source?: Project ) {
		if ( source ) {
			Object.assign( this, source );
		}
	}

	// TODO: calculate progress on back-end
	// static simpleScoreOfUserStory( userStory: UserStory ): number {
	// 	return userStory.completionPercentage;
	// }
	//
	// static weightedScoreOfUserStory( userStory: UserStory ): number {
	// 	return userStory.completionPercentage * userStory.points;
	// }
	// get progress(): number {
	// 	if ( !this.userStories || this.userStories.length <= 0 ) {
	// 		return 100;
	// 	}
	//
	// 	const sumOfStoryPoints = _.sumBy( this.userStories, ( userStory: UserStory ) => userStory.points );
	//
	// 	const shouldUseSimpleScore = sumOfStoryPoints == 0 || isNaN( sumOfStoryPoints );
	//
	// 	const average = _.sumBy(
	// 		this.userStories,
	// 		shouldUseSimpleScore ? Project.simpleScoreOfUserStory : Project.weightedScoreOfUserStory
	// 	);
	//
	// 	return shouldUseSimpleScore ?
	// 		average / this.userStories.length :
	// 		average / sumOfStoryPoints;
	// }

	get isExpired(): boolean {
		if ( !this.deadline ) {
			return false;
		}
		return moment( this.deadline ).isSameOrBefore( moment(), 'day' );
	}

}
