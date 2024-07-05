import axios from "axios";

export const HOST_API = "/api";

const handelError = (error) => {
  if (error.response) {
    const res = error.response.data?.message || error.response.data?.title;
    throw res;
  }
  if (error.message) {
    throw error.message.toString();
  }

  throw JSON.stringify(error);
};

export const postService = async (url, body, authentication = true) => {
  try {
    const localToken = localStorage.getItem("token");
    const sessionToken = sessionStorage.getItem("token");
    const headers = {
      Accept: "application/json ",
      "Content-Type": "application/json",
      ...(localToken || (sessionToken && authentication)
        ? {
            Authorization: "Bearer " + (localToken || sessionToken),
          }
        : {}),
    };
    axios.defaults.withCredentials = false;

    const response = await axios.post(
      `${HOST_API + url}`,
      JSON.stringify(body),
      { headers }
    );
    if (response.status >= 200 && response.status <= 210) {
      return response.data;
    }
  } catch (error) {
    throw handelError(error);
  }
};

export const getService = async (url, params) => {
  try {
    const localToken = localStorage.getItem("token");
    const sessionToken = sessionStorage.getItem("token");

    const headers = {
      Accept: "application/json",
      "Content-Type": "application/json",
      ...(localToken || sessionToken
        ? {
            Authorization: "Bearer " + (localToken || sessionToken),
          }
        : {}),
    };

    let queryString = "";
    if (params) {
      queryString = `?${Object.keys(params)
        .filter((k) => !!params[k])
        .map((key) => `${key}=${params[key] || ""}`)
        .join("&")}`;
    }
    const response = await axios.get(
      `${HOST_API}${url}${encodeURI(queryString)}`,
      {
        headers,
        withCredentials: true,
      }
    );
    if (response.status >= 200 && response.status <= 210) {
      return response.data;
    }
  } catch (error) {
    throw handelError(error);
  }
};

export const putService = async (url, body) => {
  try {
    const localToken = localStorage.getItem("token");
    const sessionToken = sessionStorage.getItem("token");

    const headers = {
      Accept: "application/json ",
      "Content-Type": "application/json",
      ...(localToken || sessionToken
        ? {
            Authorization: "Bearer " + (localToken || sessionToken),
          }
        : {}),
    };

    const response = await axios.put(
      `${HOST_API + url}`,
      JSON.stringify(body),
      {
        headers: headers,
        withCredentials: true,
      }
    );

    if (response.status >= 200 && response.status <= 210) {
      return response.data;
    }
  } catch (error) {
    throw handelError(error);
  }
};

export const deleteService = async (url, body) => {
  try {
    const localToken = localStorage.getItem("token");
    const sessionToken = sessionStorage.getItem("token");

    const headers = {
      Accept: "application/json",
      "Content-Type": "application/json",
      ...(localToken || sessionToken
        ? {
            Authorization: "Bearer " + (localToken || sessionToken),
          }
        : {}),
    };

    const response = await axios.delete(`${HOST_API + url}`, {
      headers: headers,
      withCredentials: true,
      data: body,
    });
    if (response.status >= 200 && response.status <= 210) {
      return response.data;
    }
  } catch (error) {
    throw handelError(error);
  }
};
