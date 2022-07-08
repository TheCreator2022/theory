import { ExponentialCost, FirstFreeCost, LinearCost } from "../api/Costs";
import { Localization } from "../api/Localization";
import { parseBigNumber, BigNumber } from "../api/BigNumber";
import { theory } from "../api/Theory";
import { Utils } from "../api/Utils";

var id = "theory2";
var name = "Theory";
var description = "cool theory";
var authors = "Glitch";
var version = 1;

var currency;

var init = () => {
  currency = theory.createCurrency();
}

var getPrimaryEquation = () => {
    let result = "\\dot{\\rho} = 0";

    return result;
}

init();
