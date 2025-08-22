
import express, {Request, Response} from "express"

const PageRedirect = (req: Request, res: Response) => {
	const UrlParams : string = req.params.token;
	console.log(UrlParams);
	
	res.render("page")
}
export default PageRedirect;