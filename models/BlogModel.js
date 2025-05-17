import { model, models, Schema } from "mongoose"

const BlogSchema = new Schema({
  title:{
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now()
  }
})

const BlogModel = models.blog || model('blog', BlogSchema);

export default BlogModel
