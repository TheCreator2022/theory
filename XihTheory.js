import { ExponentialCost, FirstFreeCost, LinearCost } from "../api/Costs";
import { Localization } from "../api/Localization";
import { parseBigNumber, BigNumber } from "../api/BigNumber";
import { theory } from "../api/Theory";
import { Utils } from "../api/Utils";
import { ui } from "../api/ui/UI"

var id = "xih";
var name = "Xih Theory";
var description = "wowowo";
var authors = "The Creator 2022";
var version = 1;

var currency;

var init = () => {
    currency = theory.createCurrency();
    
    // a1
    {
        let getDesc = (level) => "a_1=" + getA1(level).toString(0);
        a1 = theory.createUpgrade(0, currency, new FirstFreeCost(new ExponentialCost(5, Math.log2(2.25))));
        a1.getDescription = (_) => Utils.getMath(getDesc(a1.level));
        a1.getInfo = (amount) => Utils.getMathTo(getDesc(a1.level), getDesc(a1.level + amount));
    }
    
    // prestige
    {
        prestige = theory.createUpgrade(99999, currency, new FreeCost());
        prestige.getDescription = (_) => "Open prestige Menu";
        prestige.getInfo = (amount) => "Open prestige Menu";
        prestige.boughtOrRefunded = (_) => {
            popup.show();
            prestige.level = 0;
        }
    }
    
    var popup = ui.createPopup({
    title: "Config",
    content: ui.createStackLayout({
        children: [
            ui.createLabel({text: "Enter ID:"}),
            ui.createEntry(),
            ui.createFrame({
                heightRequest: 50,
                cornerRadius: 10,
                content: ui.createLabel({
                    text: "I Confing menu.",
                    horizontalOptions: LayoutOptions.CENTER,
                    verticalOptions: LayoutOptions.CENTER
                })
            }),
            ui.createImage({source: ImageSource.ACCELERATE}),
            ui.createProgressBar({progress: 0.3}),
            ui.createLabel({text: "Result:"}),
            ui.createLatexLabel({text: "\\(K_i=100\\)"}),
            ui.createButton({text: "Close", onClicked: () => popup.hide()})
        ]
    })
});

}

var getPrimaryEquation = () => {
    let result = "\\dot{\\rho} = a_1";

    result += "a_2";

    return result;
}

var get2DGraphValue = () => currency.value.sign * (BigNumber.ONE + currency.value.abs()).log10().toNumber();

var getA1 = (level) => Utils.getStepwisePowerSum(level, 2, 10, 0);

init();
