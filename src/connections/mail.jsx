// Client ID 681809056083
// Secret ID 019ec2c9ba5a4efa9b1890f53c4b4f648dc4c861f4afd7d5aa
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
