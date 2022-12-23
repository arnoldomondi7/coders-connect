//seeding data.

//create the users
export const Users = [
	{
		id: 1,
		profileImage: './assets/user/anodi.jpg',
		username: 'Arnold Omondi',
	},
	{
		id: 2,
		profileImage: './assets/user/girlmod1.jpg',
		username: 'Jane Doe',
	},
	{
		id: 3,
		profileImage: './assets/user/manmod2.jpg',
		username: 'Tony Stark',
	},
	{
		id: 4,
		profileImage: './assets/user/woman2.jpg',
		username: 'Lisa Parker',
	},
]

//create the posts.
export const Posts = [
	{
		id: 1,
		description: 'This is the first post by the Arnold Omondi',
		postImage: './assets/posts/potrait.jpg',
		date: '3 seconds ago',
		userId: 1,
		likes: 5,
		comments: 3,
	},
	{
		id: 2,
		description: 'This is the First Post By  post by the Jewells Ortega',
		postImage: './assets/posts/model.jpg',
		date: '4 weeks ago',
		userId: 2,
		likes: 15,
		comments: 30,
	},
	{
		id: 3,
		postImage: './assets/posts/model3.jpg',
		date: '77 weeks ago',
		userId: 3,
		likes: 500,
		comments: 3000,
	},
	{
		id: 4,
		description: 'This is the second post by Arnold Omondi',
		date: '215 weeks ago',
		userId: 1,
		likes: 5000,
		comments: 30,
	},
	{
		id: 5,
		postImage: './assets/posts/model5.jpg',
		date: '21 hours ago',
		userId: 4,
		likes: 300,
		comments: 30,
	},
]

//create the stories.
export const Stories = [
	{
		id: 1,
		storyImage: './assets/story/eva.jpg',
		userId: 1,
	},
	{
		id: 2,
		storyImage: './assets/story/car.jpg',
		userId: 4,
	},
	{
		id: 1,
		storyImage: './assets/story/cardrug.jpg',
		userId: 1,
	},
]
