use blogger

function insertUser(
	id,
	name,
	email
	){
	db.users.insert(
		{_id: ObjectId(id),
			name : name,
			email : email
		});
}

insertUser("5bb26043708926e438db6cad", "Sai", "Sai@gmail.com")

insertUser("5bb26043708926e438db6cae", "Lohith", "Lohith@gmail.com")

insertUser("5bb26043708926e438db6caf", "Kolli", "Kolli@gmail.com")

db.users.find().pretty()

db.users.find({"_id" : ObjectId("5bb26043708926e438db6cad")})

function insertBlog(
	title, 
	body, 
	slug, 
	author, 
	comments, 
	category
	){
	db.blogs.insert(
		{title:title, 
			body:body, 
			slug:slug, 
			author: ObjectId(author), 
			comments:comments, 
			category:category
		});
}

insertBlog(
    "Hi",
    "How are you doing",
    "Hope this works",
    "5bb26043708926e438db6cad",
    [
        {
            user_id:ObjectId("5bb26043708926e438db6cae"),
            comment: "Yes this works for me",
            approved: true,
            created_at: ISODate("2020-10-02"),
        },
        {
            user_id:ObjectId("5bb26043708926e438db6caf"),
            comment: "I Hope this works",
            approved: true,
            created_at: ISODate("2020-02-02"),
        },
        ],
    [
        {name: "Websites"},
        {name: "Websites1"}
        ]
)

insertBlog(
	"What is a Framework?",
	"A framework is a software framework is a collection of reusable software components that provide a starting point for developing a software application.",
	"what-is-a-framework",
	"5bb26043708926e438db6cae",
	[
	{
		    user_id:ObjectId("5bb26043708926e438db6caf"),
            comment: "I tried this and didn't like it",
            approved: false,
            created_at: ISODate("2020-10-02"),

	},
	 {
            user_id:ObjectId("5bb26043708926e438db6cad"),
            comment: "Got full clarity on what a framework is",
            approved: true,
            created_at: ISODate("2020-10-01"),
        },
        ],
    [
        {name: "FrameWork"},
        {name: "Explanation"}

	]
	)


insertBlog(
	"How to Learn a Framework",
	"The best way to learn a framework is to start by building a simple application. There are many tutorials and resources available online to help you get started.",
	"how-to-learn-a-framework",
	"5bb26043708926e438db6caf",
	[
	{
		    user_id:ObjectId("5bb26043708926e438db6cad"),
            comment: "I watched some Videos they are better",
            approved: false,
            created_at: ISODate("2020-10-02"),

	},
	 {
            user_id:ObjectId("5bb26043708926e438db6cae"),
            comment: "I have lots of knowledge on this and this is legit",
            approved: true,
            created_at: ISODate("2020-04-02"),
        },
        ],
    [
        {name: "Learn Framework"},
        {name: "Framework integration"}

	]
	)


db.blogs.find(
    {'comments':{ $elemMatch:{'user_id':ObjectId('5bb26043708926e438db6caf')}}},
    {_id:0, title:1, slug:1, "comments.comment.$":1}
).pretty()

db.blogs.find({body: /framework/i},{_id:0,title:1,body:1})


