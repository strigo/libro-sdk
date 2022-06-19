import axios from 'axios';

const FILES_TO_PURGE = [
  'https://purge.jsdelivr.net/gh/strigo/strigo-sdk@master/dist/production/strigo.sdk.min.js',
  'https://purge.jsdelivr.net/gh/strigo/strigo-sdk@master/dist/production/styles/strigo.min.css',
  'https://purge.jsdelivr.net/gh/strigo/strigo-sdk@master/dist/production/styles/strigo-widget.min.css',
  'https://purge.jsdelivr.net/gh/strigo/strigo-sdk@master/dist/production/styles/strigo-assessment-recorder.min.css',
  'https://purge.jsdelivr.net/gh/strigo/strigo-sdk@master/dist/development/strigo.sdk.js',
  'https://purge.jsdelivr.net/gh/strigo/strigo-sdk@master/dist/development/styles/strigo.css',
  'https://purge.jsdelivr.net/gh/strigo/strigo-sdk@master/dist/development/styles/strigo-widget.css',
  'https://purge.jsdelivr.net/gh/strigo/strigo-sdk@master/dist/development/styles/strigo-assessment-recorder.css',
];

async function purge() {
  for (const fileUrl of FILES_TO_PURGE) {
    console.log(fileUrl);
    const response = await axios.get(fileUrl, {});
    console.log(JSON.stringify(response?.data, null, 2));
  }
}

purge();
