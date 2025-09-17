"use server"
require('dotenv').config({quite: true})

const mailchimp = require("@mailchimp/mailchimp_marketing");


mailchimp.setConfig({
  apiKey: process.env.NLAPI_KEY,
  server: process.env.SVR_PREFIX,
});

async function run() {
  const response = await mailchimp.ping.get();
  console.log(response);
}

run();
