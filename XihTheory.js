import { ExponentialCost, FirstFreeCost, LinearCost } from "../api/Costs";
import { Localization } from "../api/Localization";
import { parseBigNumber, BigNumber } from "../api/BigNumber";
import { theory } from "../api/Theory";
import { Utils } from "../api/Utils";

var id = "xih";
var name = "Xih Theory";
var description = "wowowo";
var authors = "The Creator 2022";
var version = 1;

var currency;

var init = () => {
    currency = theory.createCurrency();
}

init();
