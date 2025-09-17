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
    await mailchimp.lists.addListMember(process.env.AUD_ID, {
      email_address: email,
      status: sub,
      merge_fields: {
        FNAME: fname,
        LNAME: lname,
        MESSAGE: msg,
      }
    })

    return {successMessage: `${email} subscribed! `}
    
  } catch (error) {

    // console.log(error.response.body.detail)
    return {errorMessage: `${email} ERROR! NOT subscribed!  ---  ${error.response.body.detail}`}

  }

}
