
//  API Key eb320ce16ab8b120159906958e14b668-us8

const mailchimpClient = require("@mailchimp/mailchimp_transactional")(
  "eb320ce16ab8b120159906958e14b668-us8"
);

const run = async () => {
  const response = await mailchimpClient.messages.sendTemplate({
    template_name: "template_name",
    template_content: [{}],
    message: {},
  });
  console.log(response);
};
