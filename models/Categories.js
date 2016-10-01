import mongoose, { Schema } from 'mongoose'
const SchemaTypes = Schema.Types

const categoriesSchema = new Schema({
	name: SchemaTypes.String
})

const Categories = mongoose.model('Categories', categoriesSchema)

module.exports = Categories
