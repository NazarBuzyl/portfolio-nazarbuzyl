import React from "react";
import { motion } from "framer-motion";

import { SectionHeader, SubmitBtn } from "./index";

import { sendEmail } from "../lib/sendEmail";
import { useStateContext } from "../contexts/ContextProvider";

const nameBtn = {
  en: "Submit",
  de: "Senden",
  ru: "Отправить",
  ua: "Відправити",
};

const placeholderData = {
  en: {
    email: "Your email",
    message: "Your message",
  },
  de: {
    email: "Ihre E-Mail",
    message: "Ihre Nachricht",
  },
  ru: {
    email: "Ваша почта",
    message: "Ваше сообщение",
  },
  ua: {
    email: "Ваша пошта",
    message: "Ваше повідомлення",
  },
};

const contactData = {
  en: (
    <p className="text-gray-700 -mt-6 dark:text-white/80">
      Please contact me directly at{" "}
      <a className="underline" href="mailto:nazarbuzyl@gmail.com">
        nazarbuzyl@gmail.com
      </a>{" "}
      {/* or through this form. */}
    </p>
  ),
  de: (
    <p className="text-gray-700 -mt-6 dark:text-white/80">
      Bitte kontaktieren Sie mich direkt unter{" "}
      <a className="underline" href="mailto:nazarbuzyl@gmail.com">
        nazarbuzyl@gmail.com
      </a>{" "}
      {/* oder über dieses Formular. */}
    </p>
  ),
  ru: (
    <p className="text-gray-700 -mt-6 dark:text-white/80">
      Пожалуйста, свяжитесь со мной напрямую по адресу{" "}
      <a className="underline" href="mailto:nazarbuzyl@gmail.com">
        nazarbuzyl@gmail.com
      </a>{" "}
      {/* или через эту форму. */}
    </p>
  ),
  ua: (
    <p className="text-gray-700 -mt-6 dark:text-white/80">
      Будь ласка, зв'яжіться зі мною безпосередньо за адресою{" "}
      <a className="underline" href="mailto:nazarbuzyl@gmail.com">
        nazarbuzyl@gmail.com
      </a>{" "}
      {/* або через цю форму. */}
    </p>
  ),
};
// ----------------------------------------------------------------
const Contact = ({ title }) => {
  const { ref } = useStateContext("Contact");
  const [formData, setFormData] = React.useState({
    senderEmail: "",
    message: "",
  });
  const [pending, setPending] = React.useState(false);
  const { languageMode, showErrorToast, showSuccessToast } = useStateContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setPending(true);

    try {
      const response = await sendEmail(formData);
      if (response.error) {
        showErrorToast();
      } else {
        showSuccessToast();
        setFormData({ senderEmail: "", message: "" });
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }

    setPending(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeader name={title} />
      {contactData[languageMode]}
      {/* <form
        className="mt-10 flex flex-col dark:text-black relative"
        onSubmit={handleSubmit}
      >
        <input
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder={placeholderData[languageMode].email}
          value={formData.senderEmail}
          onChange={handleInputChange}
          disabled={true}
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="message"
          placeholder={placeholderData[languageMode].message}
          required
          maxLength={5000}
          value={formData.message}
          onChange={handleInputChange}
          disabled={true}
        />
        <div className="absolute z-[500] flex justify-center items-center font-semibold italic text-3xl dark:text-white w-full h-full rounded-lg rounded-b-3xl p-4 bg-red-500/80 origin-center">
          In Developing...
        </div>
        <SubmitBtn name={nameBtn[languageMode]} pending={pending} />
      </form> */}
    </motion.section>
  );
};

export default Contact;
