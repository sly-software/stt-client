export const baseUrl = "https://stt-server.onrender.com";
// export const baseUrl = "http://localhost:5000";

export const getData = async () => {
  const response = await fetch(baseUrl + "/api/stocked/products");
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
  })
    .then((res) => res)
    .catch((err) => ("Error occured", err));

  return uploadFeedback.json();
};

export const logout = async () => {
  const response = await fetch(baseUrl + "/api/logout", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });
  // console.log(response)
  return response.status;
};

export const login = async (email, password) => {
  const data = JSON.stringify({ email, password });

  const res = await fetch(baseUrl + "/api/login", {
    method: "POST",
    body: data,
    headers: {
      "Content-Type": "application/json",
    },
  });

  return res.status;
};

export const getCurrentStockLogs = async () => {
  try {
    const result = await fetch(`${baseUrl}/api/stocked/logs`);
    const logs = await result.json();
    return logs;
  } catch (error) {
    console.error(error);
    return {};
  }
};

export const getCurrentOffers = async () => {
  try {
    const response = await fetch(`${baseUrl}/api/current/offers`);
    const offers = await response.json();

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
