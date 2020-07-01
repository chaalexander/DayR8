/*
Copyright 2018 Google Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
const webPush = require('web-push');

const pushSubscription = YOUR_SUBSCRIPTION_OBJECT;

const vapidPublicKey = 'BIaxVOV4GWELIuDl2Uy9TqJgEyZ5EJH_Ukeo36_0basokUvNXfl_8PLMIx0epX1GpV71sFGBm3Tt-zXPeL3swkY';
const vapidPrivateKey = 'qMg9_1kU1TWCFLtVd0iHZHqwiKsH5g52E1emFAdDDDc';

const payload = alert("payload");

const options = {
  TTL: 60,
  vapidDetails: {
    subject: 'mailto:timothy.mickiewicz@gmail.com',
    publicKey: vapidPublicKey,
    privateKey: vapidPrivateKey
  }
};

webPush.sendNotification(
  pushSubscription,
  payload,
  options
);
