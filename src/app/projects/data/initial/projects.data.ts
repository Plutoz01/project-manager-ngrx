import { UserStoryStatus } from '../../models/user-story-status.enum';
import { UserStory } from '../../models/user-story.interface';
import { Project } from '../../models/project.interface';

export const InitialProjects = [
	{ id: 1000, name: 'Initial project 1', description: 'Description of project 1', userStories: [
		{ id: 1000, name: 'US1.1', description: 'Description of US1.1', status: UserStoryStatus.Queue, points: 3 } as UserStory,
		{ id: 1001, name: 'US1.2', description: 'Description of US1.2', status: UserStoryStatus.InProgress, points: 5 } as UserStory
	] } as Project,

	{ id: 2000, name: 'Initial project 2', description: 'Description of project 2', userStories: [
		{ id: 2000, name: 'US2.1', description: 'Description of US2.1', status: UserStoryStatus.Completed, points: 3 } as UserStory,
	] } as Project
];
