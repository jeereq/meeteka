/* eslint-disable @typescript-eslint/no-explicit-any */
import API_MAIL from "../config/apiMail";
import { Method } from "../config/types";
import { useState } from "react";

export const useFetchDataEmail = ({ uri }: { uri: string }) => {
  const [loading, setLoading] = useState(false);

  const fetch = async (
    data: Record<string, unknown> = {},
    method: Method = "GET",
  ) => {
    try {
      let response;
      setLoading(true);
      switch (method.toUpperCase()) {
        case "POST":
          response = await API_MAIL.post(uri, { data });
          break;
        case "PUT":
          response = await API_MAIL.put(uri, data);
          break;
        case "DELETE":
          response = await API_MAIL.delete(uri, { data });
          break;
        case "GET":
        default:
          response = await API_MAIL.get(uri, { params: data });
          break;
      }
      setLoading(false);
      return { data: response.data, error: null };
    } catch (error: any) {
      setLoading(false);
      return {
        data: null,
        error: error?.response?.data?.message || error.message || error,
      };
    }
  };

  return { fetch, loading };
};
