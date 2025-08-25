import {UrlTokenSchema} from "../models/modelUrl";
import express, {Request, Response} from "express"

const PageRedirect = async (req: Request, res: Response) => {
	const URIParams : string = req.params.token;
	const URIS: string =  process.env.BASE_URI_PRODUCTION + "/"+URIParams;
    const URIRealLinkDB = await UrlTokenSchema.findOne({ urlTokens: URIS })
	console.log(URIRealLinkDB?.urls);
	const URIRealLink = URIRealLinkDB?.urls;
	res.render("page", {URIRealLink} );
}
export default PageRedirect;