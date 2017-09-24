import { Project } from '../../models/project.class';
import { UserStoryStatus } from '../../models/user-story-status.enum';
import { UserStory } from '../../models/user-story.class';

export const InitialProjects = [
	new Project( {
		id: 1000, name: 'Initial project 1', description: 'Description of project 1', deadline: '2017-12-05',
		userStories: [
			new UserStory( {
				id: 1000,
				name: 'US1.1',
				description: 'Description of US1.1',
				status: UserStoryStatus.Queue,
				points: 3
			} as UserStory ),
			new UserStory( {
				id: 1001,
				name: 'US1.2',
				description: 'Description of US1.2',
				status: UserStoryStatus.InProgress,
				points: 5
			} as UserStory )
		],
		tags: [ 'customer-2', 'low priority' ]

	} as Project ),

	new Project( {
		id: 2000, name: 'Initial project 2', description: 'Description of project 2', deadline: '2017-10-10',
		userStories: [
			new UserStory( {
				id: 2000,
				name: 'US2.1',
				description: 'Description of US2.1',
				status: UserStoryStatus.Completed,
				points: 3
			} as UserStory )
		]
	} as Project ),

	new Project( {
		id: 3000, name: 'Initial project 3', description: 'Description of project 3', deadline: '2017-09-11', userStories: [
			new UserStory( {
				id: 3000,
				name: 'US3.1',
				description: 'Description of US3.1',
				status: UserStoryStatus.Queue,
				points: 2
			} as UserStory )
		]
	} as Project ),

	new Project( {
		id: 4000, name: 'Initial project 4', description: 'Description of project 4', deadline: '2017-12-31', userStories: [
			new UserStory( {
				id: 4000,
				name: 'US4.1',
				description: 'Description of US4.1',
				status: UserStoryStatus.Queue,
				points: 3
			} as UserStory ),
			new UserStory( {
				id: 4001,
				name: 'US4.2',
				description: 'Description of US4.2',
				status: UserStoryStatus.InProgress,
				points: 5
			} as UserStory ),
			new UserStory( {
				id: 4002,
				name: 'US4.3',
				description: 'Description of US4.3',
				status: UserStoryStatus.Queue,
				points: 3
			} as UserStory )
		]
	} as Project ),


	new Project( {
		id: 11000,
		name: 'Favorite project 1',
		description: 'Description of fav project 1',
		isFavorite: true,
		deadline: '2018-06-01',
		userStories: [
			new UserStory( {
				id: 11000,
				name: 'US_FAV_1.1',
				description: 'Description of US_FAV_1.1',
				status: UserStoryStatus.Queue,
				points: 5
			} as UserStory )
		],
		tags: [ 'important', 'customer-1', 'awesome' ]
	} as Project ),

	new Project( {
		id: 12000,
		name: 'Favorite project 2',
		description: 'Description of fav project 2',
		isFavorite: true,
		deadline: '2018-01-15',
		userStories: [
			new UserStory( {
				id: 12000,
				name: 'US_FAV_2.1',
				description: 'Description of US_FAV_2.1',
				status: UserStoryStatus.Queue,
				points: 5
			} as UserStory ),
			new UserStory( {
				id: 12001,
				name: 'US_FAV_2.2',
				description: 'Description of US_FAV_2.2',
				status: UserStoryStatus.Queue,
				points: 2
			} as UserStory )
		]
	} as Project ),
];
