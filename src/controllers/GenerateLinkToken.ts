import express, {Request, Response} from "express";

const GenerateLinkToken = (req: Request, res: Response) => {
	//const Links: string = req.body.linksearch;
	//console.log(Links)
	console.log(generateLink());
	return res.redirect("/")
}
function generateLink(): string {
	const BaseUrl:any = process.env.BASE_URI;
	const Karakter: string[]= ["A", "B", "C", "D", "E", "%", "&", "H"];
	const abc: string[] = ["f", "d", "c", "b", "e", "a", "g", "h"];
	const Angkka : number[] = [1, 2, 3, 4, 5, 9, 7, 9];
	
	let HashLink:any = "";
	let TokenLink:string = "";
	
	if(BaseUrl.length == 0) {
		return "Gagal";
	}
	const acak:number = Math.round(Math.random() * 5);
	const an:number = Math.floor(Math.random() * 1);
	const nnn: number = Math.floor(Math.random() * 100)
	
	HashLink = abc[acak + an] + nnn + Karakter[acak + an] + abc[acak + 1] + acak;
	TokenLink = `${BaseUrl}/${HashLink}`;
	
	return TokenLink;
}

export default GenerateLinkToken;

