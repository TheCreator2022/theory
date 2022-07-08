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
  
   // a1
    {
        let getDesc = (level) => "a_1=" + getA1(level).toString(0);
        a1 = theory.createUpgrade(0, currency, new FirstFreeCost(new ExponentialCost(15, Math.log2(2))));
        a1.getDescription = (_) => Utils.getMath(getDesc(a1.level));
        a1.getInfo = (amount) => Utils.getMathTo(getDesc(a1.level), getDesc(a1.level + amount));
    }
}

var tick = (elapsedTime, multiplier) => {
    let dt = BigNumber.from(elapsedTime * multiplier);
    let bonus = theory.publicationMultiplier;
    currency.value += dt * bonus * getA1(a1.level)
}

var getPrimaryEquation = () => {
    let result = "\\dot{\\rho} = a_1";

    return result;
}

var getPublicationMultiplier = (tau) => tau.pow(0.1) / BigNumber.THREE;
var getPublicationMultiplierFormula = (symbol) => "\\frac{{" + symbol + "}^{0.1}}{3}";
var getTau = () => currency.value;
var get2DGraphValue = () => currency.value.sign * (BigNumber.ONE + currency.value.abs()).log10().toNumber();

var getA1 = (level) => Utils.getStepwisePowerSum(level, 2, 10, 0);

init();
