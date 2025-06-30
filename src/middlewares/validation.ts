import { NextFunction, Request, Response } from "express";

import { customError } from "../helpers/customError";
import {
  loginSchema,
  OTPSchema,
  signupjoischema,
} from "../validators/validators";

export const signupvalidation = {
  async signupschema(req: Request, res: Response, next: NextFunction) {
    try {
      console.log("the data of body in validation middleware ", req.body);
      const { error, value } = signupjoischema.validate(req.body);
      if (error) {
        // throw new customError(
        //   "VALIDATION_ERROR",
        //   `${error.details[0].message}`
        // );
        res.status(401).json({
          data: null,
          msg: error.details[0].message,
        });
      } else {
        next();
      }
    } catch (error) {
      console.log(error);
      if (error instanceof customError) {
        throw error;
      }
    }
  },
  async OTP(req: Request, res: Response, next: NextFunction) {
    try {
      console.log("the otp in the middleware", req.body);
      const { error, value } = OTPSchema.validate(req.body);
      if (error) {
        // throw new customError(
        //   "VALIDATION_ERROR",
        //   `${error.details[0].message}`
        // );
        res.status(401).json({
          data: null,
          msg: error.details[0].message,
        });
      } else {
        next();
      }
    } catch (error) {
      console.log(error);
    }
  },
  async login(req: Request, res: Response, next: NextFunction) {
    try {
      console.log("the login body in middleware", req.body);
      const { error, value } = loginSchema.validate(req.body);
      if (error) {
        // throw new customError(
        //   "VALIDATION_ERROR",
        //   `${error.details[0].message}`
        // );
        res.status(401).json({
          data: null,
          msg: error.details[0].message,
        });
      } else {
        next();
      }
    } catch (error) {
      console.log(error);
    }
  },
};
