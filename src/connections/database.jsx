import { Client, Databases, ID } from "appwrite";

const client = new Client();

const databases = new Databases(client);

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("6466156953c7cbf55e25");

const SubmitDetails = async (details) => {
  let data = await databases.createDocument(
    "646615fd3106cc9881b6",
    "646616113672ba02e88e",
    ID.unique(),
    {
      FirstName: details.fname,
      LastName: details.lname,
      Email: details.email,
      PhoneNumber: details.phone,
      Organization: details.org,
      OrgWebsite: details.orgWeb,
      SecurityPlan: details.plan,
      AdditionalComments: details.others,
    }
  );
  console.log(data);
};

export default SubmitDetails;
