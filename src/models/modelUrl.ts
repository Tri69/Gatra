import mongoose, {Model, Schema} from "mongoose";

const UrlMongo : string|undefined = process.env.URI_MONGODB_ATLAS
mongoose.connect("mongodb+srv://ilhamtauhandoyo:1oBNKnvfmJHTotql@data1.tec7t.mongodb.net/Form?retryWrites=true&w=majority&appName=Data1");
const db = mongoose.connection;

db.once('open', ()=> {
	console.log('connect');
})

const UrlSchema = new mongoose.Schema({
	urls : {
		type: String,
		required: true
	},
	urlTokens : {
		type: String,
		required: true
	}
})

export const UrlTokenSchema = mongoose.model("AppShortUrl", UrlSchema)

