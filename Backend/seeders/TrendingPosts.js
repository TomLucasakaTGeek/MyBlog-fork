// const connectDB = require("../config/db")
const Blog = require("../models/blogModel")

//getting all the posts in allPosts
// await connectDB
const allPosts = await Blog.find()

//sorting posts by number of likes
allPosts.sort((a, b) => b.postLikes - a.postLikes);

//selecting top 3 posts
let trendingPosts = allPosts.slice(0,3)

//exporting the trendinPosts
module.exports = { trendingPosts }