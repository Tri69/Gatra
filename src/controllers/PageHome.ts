
import express, { Request,  Response} from "express"

const PageIndex = (req: Request, res: Response) => {
	res.render("index")
}
export default PageIndex;