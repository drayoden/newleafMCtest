"use server"
require('dotenv').config({quite: true})

const mailchimp = require("@mailchimp/mailchimp_marketing");


mailchimp.setConfig({
  apiKey: process.env.NLAPI_KEY,
  server: process.env.SVR_PREFIX,
});

export const addSub = async (formData) => {
  const email = formData.get("email")
  console.log(email)
}
