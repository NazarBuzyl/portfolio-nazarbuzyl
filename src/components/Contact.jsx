import React from "react";
import { motion } from "framer-motion";

import { SectionHeader, SubmitBtn } from "./index";

import { sendEmail } from "../lib/sendEmail";
import { useStateContext } from "../contexts/ContextProvider";

const Contact = () => {
  const { ref } = useStateContext("Contact");
  const [formData, setFormData] = React.useState({
    senderEmail: "",
    message: "",
  });
  const [pending, setPending] = React.useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setPending(true);

    try {
      const response = await sendEmail(formData);
      if (response.error) {
      } else {
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
      <SectionHeader name="Contact me" />

      <p className="text-gray-700 -mt-6 dark:text-white/80">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:nazarbuzyl@gmail.com">
          nazarbuzyl@gmail.com
        </a>{" "}
        or through this form.
      </p>

      <form
        className="mt-10 flex flex-col dark:text-black"
        onSubmit={handleSubmit}
      >
        <input
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
          value={formData.senderEmail}
          onChange={handleInputChange}
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
          value={formData.message}
          onChange={handleInputChange}
        />
        <SubmitBtn pending={pending} />
      </form>
    </motion.section>
  );
};

export default Contact;
