export const baseUrl = "https://stt-server.onrender.com";
// export const baseUrl = "http://localhost:5000";

export const getData = async () => {
  const response = await fetch(baseUrl + "/api/stocked/products");
  const result = await response.json();
  console.log(result.length)
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
  await fetch(baseUrl + "/api/newProducts/uploads", {
    method: "POST",
    body: JSON.stringify(formData),
  })
    .then((res) => res)
    .catch((err) => ("Error occured", err));
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

  return res.statusText;
};
