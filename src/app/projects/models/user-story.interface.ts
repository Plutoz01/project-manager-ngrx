import { Identifiable } from '../../shared/models/identifiable.interface';
import { UserStoryStatus } from './user-story-status.enum';

export interface UserStory extends Identifiable<number> {
	id: number;
	name: string;
	description: string;
	points: number;
	status: UserStoryStatus;
}
