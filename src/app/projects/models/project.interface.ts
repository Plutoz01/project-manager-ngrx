import { UserStory } from './user-story.interface';
import { Identifiable } from '../../shared/models/identifiable.interface';

export interface Project extends Identifiable<number> {
	id: number;
	name: string;
	description: string;
	userStories: UserStory[];
}
