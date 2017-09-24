import { Project } from '../../models/project.class';

export const InitialProjects = [
	new Project( {
		id: 1000,
		name: 'Initial project 1',
		description: 'Description of project 1',
		deadline: '2017-12-05',
		userStoryIds: [ 1000, 1001 ],
		progress: 65,
		tags: [ 'customer-2', 'low priority' ]

	} as Project ),

	new Project( {
		id: 2000,
		name: 'Initial project 2',
		description: 'Description of project 2',
		deadline: '2017-10-10',
		userStoryIds: [ 2000 ],
		progress: 0
	} as Project ),

	new Project( {
		id: 3000,
		name: 'Initial project 3',
		description: 'Description of project 3',
		deadline: '2017-09-11',
		userStoryIds: [ 3000 ],
		progress: 50
	} as Project ),

	new Project( {
		id: 4000,
		name: 'Initial project 4',
		description: 'Description of project 4',
		deadline: '2017-12-31',
		userStoryIds: [ 4000, 4001, 4002 ],
		progress: 47
	} as Project ),


	new Project( {
		id: 11000,
		name: 'Favorite project 1',
		description: 'Description of fav project 1',
		isFavorite: true,
		deadline: '2018-06-01',
		userStoryIds: [ 11000 ],
		progress: 75,
		tags: [ 'important', 'customer-1', 'awesome' ]
	} as Project ),

	new Project( {
		id: 12000,
		name: 'Favorite project 2',
		description: 'Description of fav project 2',
		isFavorite: true,
		deadline: '2018-01-15',
		userStoryIds: [ 12000, 12001 ],
		progress: 50
	} as Project ),
];
