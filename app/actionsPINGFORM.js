"use server"
// require('dotenv').config({quite: true})

const mailchimp = require("@mailchimp/mailchimp_marketing");
// import ApiClientError from "@mailchimp/mailchimp_marketing"; 
mailchimp.setConfig({
  apiKey: process.env.NLAPI_KEY,
  server: process.env.SVR_PREFIX,
});

export const addSub = async (formData) => {
  const email = formData.get("email")
  const fname = formData.get("firstname")
  const lname = formData.get("lastname")
  const msg = formData.get("message")
  let sub = formData.get("subscribe")
   
  if (!sub) {
    sub = "unsubscribed"
  }

  try {
    const res = await mailchimp.ping.get()
    return {successMessage: `{res}`}
    
  } catch (error) {

    // console.log(error.response.body.detail)
    return {errorMessage: `{res} ping failed`}

  }

}
