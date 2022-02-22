import axios from "axios";

const FILES_TO_PURGE = [
  "https://purge.jsdelivr.net/gh/strigo/strigo-sdk@latest/dist/production/strigo.sdk.min.js",
  "https://purge.jsdelivr.net/gh/strigo/strigo-sdk@latest/dist/production/styles/strigo.min.css"
];

async function purge() {
  for (const fileUrl of FILES_TO_PURGE) {
    console.log(fileUrl);
    const response = await axios.get(fileUrl, {});
    console.log(JSON.stringify(response?.data, null, 2));
  }
}

purge();
