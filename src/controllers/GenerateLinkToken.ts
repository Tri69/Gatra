import express, {Request, Response} from "express";
import {UrlTokenSchema} from "../models/modelUrl";

/*interface ResponseMassage = {
	statusCode: number,
	message : string,
	Url : string,
	UrlTokenHash : string
}
*/
const GenerateLinkToken = async (req: Request, res: Response) => {
	const Links: string = req.body.linksearch;
	const UrlToken: string = generateLink();
	if(!UrlToken){
		res.json({massage : "Invallid Created Token"})
	}
	const data: {urls: string, urlTokens: string} = {
		urls: Links,
		urlTokens: UrlToken
	}
	const SaveData = new UrlTokenSchema(data);
    await SaveData.save();
	console.log(SaveData);
	
	res.json( {
		statusCode: 201,
		message: "Succes created link.",
		url: Links,
		urlToken: UrlToken
	});
}
function generateLink():string  {
	const BaseUrl:any = process.env.BASE_URI_PRODUCTION;
	const Karakter: string[]= ["Z", "B", "I", "D", "E", "F", "G", "H"];
	const abc: string[] = ["f", "d", "c", "b", "I", "a", "u", "m"];
	const Angkka : number[] = [1, 2, 3, 4, 5, 9, 7, 9];
	
	let HashLink:any = "";
	let TokenLink:string = "";
	
	if(BaseUrl.length == 0) {
		return "Gagal";
	}
	const acak:number = Math.round(Math.random() * 5);
	const an:number = Math.floor(Math.random() * 2);
	const nnn: number = Math.round(Math.random() * 100);
	
	HashLink = abc[acak + an] + nnn + Karakter[acak + an] + abc[acak + 2] + acak;
	TokenLink = `${BaseUrl}/${HashLink}`;
	
	return TokenLink;
}
export default GenerateLinkToken;