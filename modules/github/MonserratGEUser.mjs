import fetch from 'node-fetch';
import fs from "fs";

const getUser = async () => {
  const response = await fetch('https://api.github.com/users/MonserratGE');
  const data = await response.json();
  console.log(data);

  fs.writeFile(`./github/MonserratGE.json`, JSON.stringify(data), (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Archivo creado");
    }
    });
};

getUser();