import { Router } from "express";
import PrinterController from "./presentation/controllers/printerController";

const router = Router();

router.get("/print-numbers", PrinterController.index)


export default router
