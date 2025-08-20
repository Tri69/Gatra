
import express, {Request, Response} from "express"

const PageRedirect = (req: Request, res: Response) => {
	res.render("page")
}
export default PageRedirect;