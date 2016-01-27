$("form").on('submit', function (e) {
  form = document.getElementById("gov-contact")
  data = { 
    "ctl00$m$g_3a01d56e_b68a_485b_a7d3_43e25d8506d3$First_x0020_Name": form.elements["firstname"],
    "ctl00$m$g_3a01d56e_b68a_485b_a7d3_43e25d8506d3$Last_x0020_Name": form.elements["lastname"],
    "ctl00$m$g_3a01d56e_b68a_485b_a7d3_43e25d8506d3$Address": form.elements["address"],
    "ctl00$m$g_3a01d56e_b68a_485b_a7d3_43e25d8506d3$City": form.elements["city"],
    "ctl00$m$g_3a01d56e_b68a_485b_a7d3_43e25d8506d3$State": form.elements["state"],
    "ctl00$m$g_3a01d56e_b68a_485b_a7d3_43e25d8506d3$Zip": form.elements["zip"],
    "ctl00$m$g_3a01d56e_b68a_485b_a7d3_43e25d8506d3$Phone": form.elements["phone"],
    "ctl00$m$g_3a01d56e_b68a_485b_a7d3_43e25d8506d3$Email": form.elements["email"],
    "ctl00$m$g_3a01d56e_b68a_485b_a7d3_43e25d8506d3$Comment": form.elements["comment"],
    "ctl00$m$g_3a01d56e_b68a_485b_a7d3_43e25d8506d3$Subject": 36,
    "ctl00$m$g_3a01d56e_b68a_485b_a7d3_43e25d8506d3$Position": "Support",
    "ctl00$m$g_3a01d56e_b68a_485b_a7d3_43e25d8506d3$SOIFeedbackSubmit": "Submit",
  }
  $.post("http://www.illinois.gov/gov/contactus/Pages/VoiceAnOpinion.aspx", data=data)
})
