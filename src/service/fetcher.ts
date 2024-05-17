// import { getCookie } from "@/apis/cookie";
// import axios, { AxiosRequestConfig } from "axios";

// const BASE_URL = process.env.NEXT_PUBLIC_AITUTOR_BACKEND_PRODUCT_SERVER;

// type FetcherParams = {
//   endpointKey: [string, string]; // [API endpoint, management key]
//   method?: "GET" | "POST"; // HTTP method
//   data?: any; // Data to be sent in POST request
//   token?: string; // Authentication token
// };

// const fetcher = async ({
//   endpointKey,
// }: //todo token = getCookie("token"),
// FetcherParams): Promise<any> => {
//   const [endpoint, key] = endpointKey;
//   const url = `${BASE_URL}${endpoint}`;

//   const myStorage = window.sessionStorage;

//   switch (key) {
//     case "main":
//       if (questionStore.getState().main.length > 0) {
//         console.log("AXIOS NOT CALLED");
//         return questionStore.getState().main;
//       } else {
//         break;
//       }
//     case "recommend1":
//       if (questionStore.getState().recommend1.length > 0) {
//         return questionStore.getState().recommend1;
//       } else {
//         break;
//       }
//     case "recommend2":
//       if (questionStore.getState().recommend2.length > 0) {
//         return questionStore.getState().recommend2;
//       } else {
//         break;
//       }
//     case "recomment3":
//       if (questionStore.getState().recomment3.length > 0) {
//         return questionStore.getState().recomment3;
//       } else {
//         break;
//       }
//     case "recommend4":
//       if (questionStore.getState().recommend4.length > 0) {
//         return questionStore.getState().recommend4;
//       } else {
//         break;
//       }
//     case "recommend5":
//       if (questionStore.getState().recommend5.length > 0) {
//         return questionStore.getState().recommend5;
//       } else {
//         break;
//       }
//     default:
//       break;
//   }
//   const option: AxiosRequestConfig = {
//     url: url,
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json",
//     },
//   };
//   const questions = await axios
//     .request(option)
//     .then((response) => {
//       console.log("AXIOS CALLED");
//       questionStore.getState().setQuestions(response.data.data, key);
//       return response.data.data;
//     })
//     .catch((error) => console.log(`ERROR IS : ${error.message}`));
//   if (!questions) {
//     return null;
//   }
//   return questions as Question[];
// };

// export default fetcher;
