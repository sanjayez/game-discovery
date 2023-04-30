import { AxiosResponse } from "axios";

const wrapPromise = (promise: Promise<any>) => {
  let status = "pending";
  let response: AxiosResponse;

  const suspender = promise.then(
    (res) => {
      status = "success";
      response = res;
    },
    (err) => {
      status = "error";
      response = err;
    }
  );

  return {
    read() {
      if (status === "pending") {
        throw suspender;
      } else if (status === "error") {
        throw response;
      }
      return response;
    },
  };
};

export default wrapPromise;
