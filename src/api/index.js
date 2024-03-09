import { reverseSort } from "../utils/utils";

export const baseUrl =
  process.env.NODE_ENV === "development"
    ? "http://localhost:5000"
    : "https://stt-server.onrender.com";


export const getData = async () => {
  const response = await fetch(`${baseUrl}/api/stocked/products`, {
    credentials: "include",
  });
  const result = await response.json();
  console.log(result.length);
  return result;
};

export const uploadFileData = async () => {
  const files = document.getElementById("files");
  const formData = new FormData();

  if (files.files.length <= 0) {
    console.log("File cannot be uploaded");
    return;
  }

  formData.append("files", files.files[0]);
  // console.log(Object.fromEntries(formData));
  const uploadFeedback = await fetch(baseUrl + "/api/newProducts/uploads", {
    method: "POST",
    body: JSON.stringify(formData),
    credentials: "include",
  })
    .then((res) => res)
    .catch((err) => ("Error occured", err));

  return uploadFeedback.json();
};

/**************************************************************** */
/**************************************************************** */
/**************************************************************** */
/*************  AUTHENTICATION AND AUTHORIZATION   ************** */
/**************************************************************** */
export const logout = async () => {
  const response = await fetch(baseUrl + "/api/logout", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  });
  // console.log(response)
  return response.status;
};

export const login = async (email, password) => {
  const data = JSON.stringify({ email, password });

  try {
    const res = await fetch(baseUrl + "/api/login", {
      method: "POST",
      credentials: "include",
      body: data,
      headers: {
        "Content-Type": "application/json",
      },
    });
    const status = await res.json();
    const statusCode = res.status;
    // console.log(res.status);
    return { status, statusCode };
  } catch (error) {
    return { status: { name: undefined}, statusCode: 404};
  }

};

/**************************************************************** */
/**************************************************************** */
/**************************************************************** */
/*********************  CHEMICAL AND LOGS   ********************* */
/**************************************************************** */
export const getCurrentStockLogs = async () => {
  try {
    const result = await fetch(`${baseUrl}/api/stocked/logs`, {
      credentials: "include",
    });
    const logs = await result.json();
    return logs;
  } catch (error) {
    console.error(error);
    return {};
  }
};

/**************************************************************** */
/**************************************************************** */
/**************************************************************** */
/*********************    OFFERS ROUTE   ************************ */
/**************************************************************** */
export const getCurrentOffers = async () => {
  try {
    const response = await fetch(`${baseUrl}/api/current/offers`, {
      credentials: "include",
    });
    const offers = await response.json();

    if (offers.message === "Unauthorized") {
      return [];
    }

    return offers;
  } catch (error) {
    console.error(error.message);
    return [];
  }
};

export const addNewOfferToCurrent = async (newOffer) => {
  // console.log(newOffer);
  const {
    product_code,
    product_description,
    image_link,
    product_link,
    validity,
    discount_condition,
    discount,
  } = newOffer;

  newOffer =
    validity !== ""
      ? newOffer
      : {
          product_code,
          product_description,
          image_link,
          product_link,
          validity: "1995-01-01",
          discount_condition,
          discount,
        };

  try {
    const response = await fetch(`${baseUrl}/api/current/addOffer`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newOffer),
    });
    const responseJson = await response.json();
    // console.log(responseJson);
    return responseJson;
  } catch (error) {
    console.error(error.message);
    return "Error";
  }
};

/**************************************************************** */
/**************************************************************** */
/**************************************************************** */
/*********************   DELIVERY NOTES  ************************ */
/**************************************************************** */
// export const uploadDN = async (inputFile) => {
//   const formData = new FormData();

//   for (const file of inputFile.files) {
//     formData.append("files", file);
//   }

//   try {
//     axios.post(`${baseUrl}/api/delivery/notes`,
//     formData,
//     {
//       onUploadProgress: (ProgressEvent) => {
//         const percentCompleted = Math.round(
//           (ProgressEvent.loaded * 100) / ProgressEvent.total
//         );
//         console.log(percentCompleted);
//       },
//     },
//     );
//   } catch (error) {
//     console.log("Something went wrong!", error.message);
//   }
// };

export const getUploadedDns = async () => {
  try {
    const results = await fetch(`${baseUrl}/api/delivery/dns`, {
      credentials: "include",
    });

    const dns = await results.json();
    // console.log(dns);

    if (dns.message === "Unauthorized") {
      return [];
    }

    return reverseSort(dns);
  } catch (error) {
    console.error(error);
    return [];
  }
};

/**************************************************************** */
/**************************************************************** */
/**************************************************************** */
/*********************   USER DETAILS    ************************ */
/**************************************************************** */
export const getCurrentUser = async () => {
  try {
    const data = await fetch(`${baseUrl}/api/user`, { credentials: "include" });
    const userData = await data.json();

    return userData;
  } catch (error) {
    console.error(error.message);
  }
};
