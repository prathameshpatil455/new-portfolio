"use client"; 

import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { toast } from "react-toastify";
import { motion, AnimatePresence } from "framer-motion";
import TextInput from "@/components/TextInput/TextInput";
import TextareaInput from "@/components/TextareaInput/TextareaInput";
import { useSelector } from "react-redux";

interface FormValues {
  first_name: string;
  Last_name: string;
  email: string;
  message: string;
}

const Contact = () => {
  const [showModal, setShowModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const { isDarkMode } = useSelector((state: { theme: { isDarkMode: boolean }}) => state.theme);

  const validationSchema = Yup.object().shape({
    first_name: Yup.string().required("First name is required"),
    Last_name: Yup.string().required("Last name is required"),
    email: Yup.string().email("Invalid email address").required("Email is required"),
    message: Yup.string().required("Message is required"),
  });

  const formik = useFormik<FormValues>({
    initialValues: {
      first_name: "",
      Last_name: "",
      email: "",
      message: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values, { resetForm }) => {
      console.log(values);
      try {
        await axios.post("https://getform.io/f/b18a1b39-925e-4141-9298-d851a2913cc3", values);
        resetForm();
      } catch (error) {
        console.error(error);
        setErrorMessage("An error occurred while submitting the form. Please try again later.");
        setShowModal(true);
      }
      }
    }
)

  return (
    <div className={`box-border w-full h-full ${isDarkMode ? "bg-black text-white" : "bg-white text-black"} pt-16 pb-12 px-8`}>
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto">
        <div className="pb-2">
        <p className={`text-4xl font-bold inline border-b-4 ${isDarkMode ? "border-white" : "border-black"}`}>
            Contact
        </p>
          <p className="py-6">Submit the form below to get in touch with me</p>
        </div>

        <div className="flex justify-center items-center">
          <form 
            onSubmit={formik.handleSubmit}
            className="flex flex-col gap-4 w-full md:w-1/2"
          >
            <div className="flex flex-col md:flex-row w-full gap-4">
              {/* <input
                type="text"
                name="first_name"
                placeholder="First name"
                className="p-2 bg-transparent border-2 rounded-md text-black focus:outline-none w-full"
                value={formik.values.first_name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                required
              />
              <input
                type="text"
                name="last_name"
                placeholder="Last name"
                className="p-2 bg-transparent border-2 rounded-md text-black focus:outline-none w-full"
                value={formik.values.Last_name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                required
              /> */}
              <div className="w-full">
              <TextInput
              label="First Name"
              name="first_name"
              placeholder="First name"
              value={formik.values.first_name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              isDarkMode={isDarkMode}
            />
            </div>
            <div className="w-full">
            <TextInput
              label="Last Name"
              name="last_name"
              placeholder="Last name"
              value={formik.values.Last_name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              isDarkMode={isDarkMode}
            />
            </div>
            </div>
            {/* <input
              type="email"
              name="email"
              placeholder="Email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-black focus:outline-none"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              required
            />
            <textarea
              name="message"
              placeholder="Message"
              rows={8}
              className="p-2 bg-transparent border-2 rounded-md text-black focus:outline-none resize-none"
              value={formik.values.message}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              required
            ></textarea> */}
             <TextInput
            label="Email"
            name="email"
            placeholder="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            isDarkMode={isDarkMode}
          />
          <TextareaInput
            label="Message"
            name="message"
            placeholder="Message"
            rows={8}
            value={formik.values.message}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            isDarkMode={isDarkMode}
          />


            <button
              type="submit" 
              // className="text-black border border-black bg-white px-6 py-3 my-8 mx-auto font-semibold flex items-center justify-center rounded-md hover:scale-105 hover:bg-black hover:text-white duration-300 w-full"
              className="w-full bg-blue-500 text-white p-3 rounded-md  hover:bg-blue-600"
              >
              Let's talk
            </button>
          </form>
        </div>
      </div>

      {/* error modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
          >
            <div className="bg-white dark:bg-black p-6 rounded-md text-center">
              <p className="text-black dark:text-white">
                {errorMessage}
              </p>
              <button
                onClick={() => setShowModal(false)}
                className="mt-4 px-4 py-2 bg-gray-800 text-white rounded"
              >
                Close
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Contact;
