import { UserStory } from '../../models/user-story.class';
import { UserStoryStatus } from '../../models/user-story-status.enum';

export const InitialUserStories = [
	new UserStory( {
		id: 1000,
		projectId: 1000,
		name: 'US1.1',
		description: 'Description of US1.1',
		status: UserStoryStatus.Queue,
		points: 3
	} as UserStory ),
	new UserStory( {
		id: 1001,
		projectId: 1000,
		name: 'US1.2',
		description: 'Description of US1.2',
		status: UserStoryStatus.InProgress,
		points: 5
	} as UserStory ),
	new UserStory( {
		id: 2000,
		projectId: 2000,
		name: 'US2.1',
		description: 'Description of US2.1',
		status: UserStoryStatus.Completed,
		points: 3
	} as UserStory ),
	new UserStory( {
		id: 3000,
		projectId: 3000,
		name: 'US3.1',
		description: 'Description of US3.1',
		status: UserStoryStatus.Queue,
		points: 2
	} as UserStory ),
	new UserStory( {
		id: 4000,
		projectId: 4000,
		name: 'US4.1',
		description: 'Description of US4.1',
		status: UserStoryStatus.Queue,
		points: 3
	} as UserStory ),
	new UserStory( {
		id: 4001,
		projectId: 4000,
		name: 'US4.2',
		description: 'Description of US4.2',
		status: UserStoryStatus.InProgress,
		points: 5
	} as UserStory ),
	new UserStory( {
		id: 4002,
		projectId: 4000,
		name: 'US4.3',
		description: 'Description of US4.3',
		status: UserStoryStatus.Queue,
		points: 3
	} as UserStory ),
	new UserStory( {
		id: 11000,
		projectId: 11000,
		name: 'US_FAV_1.1',
		description: 'Description of US_FAV_1.1',
		status: UserStoryStatus.Queue,
		points: 5
	} as UserStory ),
	new UserStory( {
		id: 12000,
		projectId: 12000,
		name: 'US_FAV_2.1',
		description: 'Description of US_FAV_2.1',
		status: UserStoryStatus.Queue,
		points: 5
	} as UserStory ),
	new UserStory( {
		projectId: 12000,
		id: 12001,
		name: 'US_FAV_2.2',
		description: 'Description of US_FAV_2.2',
		status: UserStoryStatus.Queue,
		points: 2
	} as UserStory )
];
