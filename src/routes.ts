import { Router } from "express";
import PrinterController from "./presentation/controllers/printerController";
import CountryController from "./presentation/controllers/countryController";
import OfficialLanguageController from "./presentation/controllers/officialLanguagesController";
import HighestLanguagesController from "./presentation/controllers/highestLanguagesController";
import CommonLanguagesController from "./presentation/controllers/commonLanguagesController";

const router = Router();

router.get("/print-numbers", PrinterController.index)

router.get("/countries/list", CountryController.index)
router.get("/countries/official-languages", OfficialLanguageController.index)
router.get("/countries/highest-languages", HighestLanguagesController.index)
router.get("/countries/common-languages", CommonLanguagesController.index)

export default router
