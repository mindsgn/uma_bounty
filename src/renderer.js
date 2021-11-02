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

const Port = 9545; 
const amount = 1000000; 
const limt = 10000000;

let type = null;
let directory = `~`;
let nuemonic = null;
let url = null;
let gas = 80;
let testNet = null;

const Install = () => {
        exec(`cd ${directory} && git clone https://github.com/UMAprotocol/launch-lsp.git && cd launch-lsp && yarn`, (error, data, getter) => {
                if(error){
                        console.log("error",error.message);
                        return;
                }

                if(getter){
                        console.log("data",data);
                        return;
                }

                console.log("data",data);
        });
}

const InstallUmaProtocol = () => {
        exec(`cd ${directory} && git clone https://github.com/UMAprotocol/launch-lsp.git && cd launch-lsp && yarn`, (error, data, getter) => {
                if(error){
                        console.log("error",error.message);
                        return;
                }

                if(getter){
                        console.log("data",data);
                        return;
                }

                console.log("data",data);
        });
}

const CheckNode = () => {
        exec(`node -v`, (error, data, getter) => {
                if(error){
                        console.log("please install node 14 + ")
                        return;
                }

                if(getter){
                        console.log("data",data);
                        return;
                }

                versionNumber = parseInt(data.replace('v', ''));

                if(versionNumber && versionNumber <= 14){
                        checkGanache();
                }else{
                        console.log("please install node 14 + ");
                }
        });
}

const checkGanache = () => {
        exec(`ganache-cli -v`, (error, data, getter) => {
                if(error){
                        console.log("please install node 14 + ")
                        return;
                }

                if(getter){
                        console.log("data",data);
                        return;
                }
                console.log(data);
                versionNumber = parseInt(data.replace('v', ''));

                if(versionNumber && versionNumber <= 14){
                        //Install();
                }else{
                        console.log("please install node 14 + ");
                }
        });
};

const Startup = () => {
        console.log("starting up:");
        CheckNode();
};

/*
* button events
*/
startButton.onclick = () => {
        document.getElementById("start").style.display = "none";
        document.getElementById("walk").style.display = "flex";
};

Startup();
