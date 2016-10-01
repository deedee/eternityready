import mongoose, { Schema } from 'mongoose'
const SchemaTypes = Schema.Types

const channelSchema = new Schema({
	categoryIds: [SchemaTypes.ObjectId],
	categoryNames: [SchemaTypes.String],
	uniqueId: SchemaTypes.String,
	channelNumber: SchemaTypes.String,
	title: SchemaTypes.String,
	slug: SchemaTypes.String,
	description: SchemaTypes.String,
	thumb: SchemaTypes.String,
	embedCode: SchemaTypes.String
})

const Channel = mongoose.model('Channel', channelSchema)

module.exports = Channel
