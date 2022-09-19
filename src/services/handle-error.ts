import request from "axios";
import { toast } from "react-toastify";

enum HttpCode {
  BadRequest = 400,
  Unauthorized = 401,
  NotFound = 404,
}

type ErrorType = unknown;

export const handleError = (error: ErrorType): void => {
  if (!request.isAxiosError(error)) {
    throw error;
  }

  const { response } = error;

  if (response) {
    switch (response.status) {
      case HttpCode.BadRequest:
        toast.info(response.data.error);
        break;
      case HttpCode.Unauthorized:
        toast.info(response.data.error);
        break;
      case HttpCode.NotFound:
        toast.info(response.data.error);
        break;
      default:
        toast.info("Unknown error!");
    }
  }
};
