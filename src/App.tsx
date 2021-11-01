import React from 'react';
import { exec } from 'child_process';

const App = () => {
  const test = () => {
    exec("cat index.js", (error: any, data: any, getter: any) => {
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

  return (
    <>
      <button onClick={() => test()}/>
    </>
  );
}

export default App;
