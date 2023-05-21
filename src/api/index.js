import axios from "axios";

let url = "http://127.0.0.1:5000";

export const sendMail = async (mail) => {
  try {
    let { data } = await axios.post(`${url}/${mail}`);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
