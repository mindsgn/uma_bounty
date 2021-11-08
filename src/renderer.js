// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process unless
// nodeIntegration is set to true in webPreferences.
// Use preload.js to selectively enable features
// needed in the renderer process.
const { exec } = require("child_process");

/*
* buttons
*/
const startButton = document.getElementById("startButton");
const binaryButton = document.getElementById("button-1");
const coveredButton = document.getElementById("button-2");
const linearButton = document.getElementById("button-3");
const rangeButton = document.getElementById("button-4");
const cappedButton = document.getElementById("button-5");
const successButton = document.getElementById("button-6");
const simpleButton = document.getElementById("button-7");
const deployButton = document.getElementById("deployButto");

/*
*input
*/
const inputDirectory = document.getElementById("inputDirectory");
const inputGasPrice = document.getElementById("inputGasPrice");
const inputNetwork = document.getElementById("inputNetwork");
const inputMnemonic = document.getElementById("inputMnemonic");

const inputPairName = document.getElementById("inputPairName");
const InputExpirationTimeStamp = document.getElementById("InputExpirationTimeStamp");
const inputPriceIdentifier = document.getElementById("inputPriceIdentifier");
const inputLongSynthName = document.getElementById("inputLongSynthName");
const inputLongSynthSymbol = document.getElementById("inputLongSynthSymbol");
const nputShortSynthName = document.getElementById("inputLongSynthSymbol");
const inputShortSynthSymbol = document.getElementById("inputLongSynthSymbol");
const inputcollateralToken = document.getElementById("inputcollateralToken");
const inputstrikePrice = document.getElementById("inputstrikePrice");
const inputprepaidProposerBond = document.getElementById("inputprepaidProposerBond");
const inputOptimisticOracleProposerBond = document.getElementById("inputOptimisticOracleProposerBond");

let directory = null;//`~/launch-lsp`;
let gasPrice = 50;
let network = null; //'wss://kovan.infura.io/ws/v3/59d00dc67a404e0f96f2cff39d9b0178';
let nmemonic = null;
let fpl = "BinaryOption";
let pairName = "UMA \$12 Binary Option Token Pair August 2022";
let code = `node ${directory}/index.js --gasprice ${gasPrice} --url ${network} --fpl ${fpl}`;

/*
--pairName "" 
--expirationTimestamp 1661983200 
--collateralPerPair 250000000000000000 
--priceIdentifier UMAUSD 
--longSynthName "UMA \$12 Binary Option Token August 2022" 
--longSynthSymbol UMA-0822 
--shortSynthName "UMA \$12 Binary Option Short Token August 2022" 
--shortSynthSymbol UMA-0822s 
--collateralToken 0x489Bf230d4Ab5c2083556E394a28276C22c3B580 
--strikePrice 12000000000000000000
--prepaidProposerBond 20000000000000000000 
--optimisticOracleProposerBond 40000000000000000000
*/


const deployContact = () => {
        exec(`node ${directory}index.js --gasprice ${gasPrice} --url ${network} --mnemonic "${nuemonic}" --pairName ${pairName} --expirationTimestamp 1661983200 --collateralPerPair 250000000000000000 --priceIdentifier UMAUSD --longSynthName "UMA \$12 Binary Option Token August 2022" --longSynthSymbol UMA-0822 --shortSynthName "UMA \$12 Binary Option Short Token August 2022" --shortSynthSymbol UMA-0822s --collateralToken 0x489Bf230d4Ab5c2083556E394a28276C22c3B580 --fpl BinaryOption --strikePrice 12000000000000000000 --prepaidProposerBond 20000000000000000000 --optimisticOracleProposerBond 40000000000000000000`, (error, data, getter) => {
                if(error){
                        console.log(error)
                        return;
                }

                if(getter){
                        console.log("data",data);
                        return;
                }
                console.log(data);
                versionNumber = parseInt(data.replace('v', ''));

                if(versionNumber && versionNumber <= 14){
                        Install();
                }else{
                        console.log("please install node 14 + ");
                }
        });
}


const updateCode = () => {
        code = `node ${directory}/index.js --gasprice ${gasPrice} --url ${network} --url ${network} --fpl ${fpl}`;
        document.getElementById("code").innerText = code;
};

const updateDirectory = (event) => {     
        directory = event.target.value;
        updateCode();
};

const updateGasPrice = (event) => {     
        gasPrice = event.target.value;
        updateCode();
};

const updateNetwork = (event) => {     
        network = event.target.value;
        updateCode();
};

const updateNmemonic = (event) => {
        nmemonic = event.target.value;
        updateCode();
}

const updatePairName = (event) => {
}

const updateExpirationTimeStamp = (event) => {
}

const updateCollateralPerPair = (event) => {
}

const updatePriceIdentifier = (event) => {
}

const updateLongSynthName = (event) => {
}

const updateLongSynthSymbol = (event) => {
}

const updateShortSynthName = (event) => {
}

const updateShortSynthSymbol = (event) => {
}

const updateCollateralToken = (event) => {
}

const updateStrikePrice = (event) => {
}

const updatePrepaidProposerBond = (event) => {
}

const updateOptimisticOracleProposerBond = (event) => {
}



/*
* button events
*/
startButton.onclick = () => {
        document.getElementById("start").style.display = "none";
        document.getElementById("dashboard").style.display = "flex";
};

binaryButton.onclick = () => {
        fpl = "BinaryOption";
        updateCode();
        document.getElementById("main-title").innerText = "Binary Option";
        document.getElementById("main-about").innerText = "Binary options settle with all collateral allocated to either the long or short side, depending on the settlement price. They can be used to make prediction markets or any kind of binary bet. Settlement is defined using a strike price which informs which side of the bet was correct. If the settlement price is greater or equal to the strike then all value is sent to the long side. Otherwise, all value is sent to the short side. The settlement price could be a scalar (like the price of ETH) or a binary bet with settlement being 0 or 1 depending on the outcome.";
}

coveredButton.onclick = () => {
        fpl = "CoveredCall";
        updateCode();
        document.getElementById("main-title").innerText = "Covered Call";
        document.getElementById("main-about").innerText = "The contract will payout a scaled amount of collateral depending on where the settlement price lands relative to the call's strike price. If the settlement is below the strike price then longs expire worthless. If the settlement is above the strike then the payout is the fraction above the strike defined by (expiryPrice - strikePrice) / expiryPrice.";
}

linearButton.onclick = () => {
        fpl = "Linear";
        updateCode();
        document.getElementById("main-title").innerText = "Linear";
        document.getElementById("main-about").innerHTML = "The linear fpl contract will payout a scaled amount of collateral depending on where the settlement price lands within a price range between an upperBound and a lowerBound. If the settlement price is within the price range then the expiryPercentLong is defined by (expiryPrice - lowerBound) / (upperBound - lowerBound). This number represents the amount of collateral from the collateralPerPair that will be sent to the long and short side. If the price is higher than the upperBound then expiryPercentLong = 1. if the price is lower than the lower bound then expiryPercentLong = 0. For example, consider a linear LSP on the price of ETH collateralized in USDC with an upperBound = 4000 and lowerBound = 2000 with a collateralPerPair of 1000 (i.e each pair of long and shorts is worth 1000 USDC). At settlement, the expiryPercentLong would equal 1 (each long worth 1000 and short worth 0) if ETH price was > 4000 and it would equal 0 if < 2000 (each long is worthless and each short is worth 1000). If between the two (say 3500) then expiryPercentLong = (3500 - 2000) / (4000 - 2000) = 0.75. Therefore each long is worth 750 and each short is worth 250.";
}

rangeButton.onclick = () => {
        fpl = "RangeBond";
        updateCode();
        document.getElementById("main-title").innerText = "Range Token";
        document.getElementById("main-about").innerHTML = "Binary options settle with all collateral allocated to either the long or short side, depending on the settlement price. They can be used to make prediction markets or any kind of binary bet. Settlement is defined using a strike price which informs which side of the bet was correct. If the settlement price is greater or equal to the strike then all value is sent to the long side. Otherwise, all value is sent to the short side. The settlement price could be a scalar (like the price of ETH) or a binary bet with settlement being 0 or 1 depending on the outcome.";
}

cappedButton.onclick = () => {
        fpl = "CappedYieldDollar";
        updateCode();
        document.getElementById("main-title").innerText = "Capped Yield Dollar";
}

successButton.onclick = () => {
        fpl = "SuccessToken";
        updateCode();
        document.getElementById("main-title").innerText = "Success Token";
        document.getElementById("main-about").innerHTML = "Binary options settle with all collateral allocated to either the long or short side, depending on the settlement price. They can be used to make prediction markets or any kind of binary bet. Settlement is defined using a strike price which informs which side of the bet was correct. If the settlement price is greater or equal to the strike then all value is sent to the long side. Otherwise, all value is sent to the short side. The settlement price could be a scalar (like the price of ETH) or a binary bet with settlement being 0 or 1 depending on the outcome.";
}

simpleButton.onclick = () => {
        fpl = "SimpleSuccessToken"
        updateCode();
        document.getElementById("main-title").innerText = "Simple Success Token";
        document.getElementById("main-about").innerHTML = "Binary options settle with all collateral allocated to either the long or short side, depending on the settlement price. They can be used to make prediction markets or any kind of binary bet. Settlement is defined using a strike price which informs which side of the bet was correct. If the settlement price is greater or equal to the strike then all value is sent to the long side. Otherwise, all value is sent to the short side. The settlement price could be a scalar (like the price of ETH) or a binary bet with settlement being 0 or 1 depending on the outcome.";
}

inputDirectory.addEventListener('input', updateDirectory);
inputGasPrice.addEventListener('input', updateGasPrice);
inputNetwork.addEventListener('input', updateNetwork);
inputMnemonic.addEventListener('input', updateNmemonic);

document.getElementById("main-title").innerText = "Binary Option";
document.getElementById("main-about").innerText = "Binary options settle with all collateral allocated to either the long or short side, depending on the settlement price. They can be used to make prediction markets or any kind of binary bet. Settlement is defined using a strike price which informs which side of the bet was correct. If the settlement price is greater or equal to the strike then all value is sent to the long side. Otherwise, all value is sent to the short side. The settlement price could be a scalar (like the price of ETH) or a binary bet with settlement being 0 or 1 depending on the outcome.";

console.log("Timestamp: ", Math.floor(Date.now() / 1000))

updateCode();
