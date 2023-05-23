import { Client, Databases, ID } from "appwrite";
import { sendMail } from "../api";
import { SuccessfullySubmited } from "../components/ContactUs/Contactus";

const client = new Client();

const databases = new Databases(client);

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("6466156953c7cbf55e25");

const SubmitDetails = async (details, setisSubmitted, setsuccess) => {
  try {
    await databases.createDocument(
      "646615fd3106cc9881b6",
      "646616113672ba02e88e",
      ID.unique(),
      {
        FirstName: details.fname,
        LastName: details.lname,
        Email: details.email,
        PhoneNumber: details.phone,
        Country: details.country,
        Organization: details.org,
        OrgWebsite: details.orgWeb,
        SecurityPlan: details.plan,
        AdditionalComments: details.others,
      }
    );
    sendMail(details.email);
    setsuccess(SuccessfullySubmited);
  } catch (err) {
    console.log("Something went wrong");
    setisSubmitted(false);
  }
};

export default SubmitDetails;
