import axios from "axios";

export const shortenUrl = async (url: string) => {
  const linkRequest = {
    destination: url,
    domain: { fullName: "rebrand.ly" },
  };

  const requestHeaders = {
    "Content-Type": "application/json",
    apikey: process.env.NEXT_PUBLIC_REBRAND_KEY || undefined,
  };

  try {
    // const response = await axios.post(
    //   "https://api.rebrandly.com/v1/links",
    //   linkRequest,
    //   {
    //     headers: requestHeaders,
    //   }
    // );
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    return response.data.shortUrl;
  } catch (err) {
    return `There was an error generating a short URL, please use the standard one: `;
  }
};
