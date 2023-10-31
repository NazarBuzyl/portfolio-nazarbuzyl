import React from "react";
import { Resend } from "resend";
import ContactFormEmail from "./ContactFormEmail";

const resend = new Resend(
  process.env.RESEND_API_KEY || "re_h9BJ5KER_2UoQCoozJPiU4BzL6XJn5WME"
);

export const sendEmail = async (formData) => {
  const senderEmail = formData.senderEmail;
  const message = formData.message;

  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender email",
    };
  }
  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }

  try {
    const data = await resend.emails.send({
      from: "<onboarding@resend.dev>",
      to: ["nazarbuzyl@gmail.com"],
      subject: "Message from contact form | Portfolio Nazar Buzyl",
      // reply_to: senderEmail,
      react: ContactFormEmail({
        message: message,
        senderEmail: senderEmail,
      }),
    });

    return { data };
  } catch (error) {
    return {
      error: getErrorMessage(error),
    };
  }
};

const validateString = (value, maxLength) => {
  if (!value || typeof value !== "string" || value.length > maxLength) {
    return false;
  }

  return true;
};

const getErrorMessage = (error) => {
  let message;

  if (error instanceof Error) {
    message = error.message;
  } else if (error && typeof error === "object" && "message" in error) {
    message = String(error.message);
  } else if (typeof error === "string") {
    message = error;
  } else {
    message = "Something went wrong";
  }

  return message;
};
