/* eslint-disable @typescript-eslint/no-unused-vars */
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
import InfoCard from "@/components/InfoCard";

interface FormValues {
  first_name: string;
  last_name: string;
  email: string;
  message: string;
}

const Contact = () => {
  const [showModal, setShowModal] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const { isDarkMode } = useSelector(
    (state: { theme: { isDarkMode: boolean } }) => state.theme
  );

  const validationSchema = Yup.object().shape({
    first_name: Yup.string().required("First name is required"),
    last_name: Yup.string().required("Last name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    message: Yup.string().required("Message is required"),
  });

  const formik = useFormik<FormValues>({
    initialValues: {
      first_name: "",
      last_name: "",
      email: "",
      message: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values, { resetForm }) => {
      console.log(values);
      setIsSubmitting(true);
      try {
        await axios.post(
          "https://getform.io/f/b18a1b39-925e-4141-9298-d851a2913cc3",
          values
        );

        toast.success("The message has been sent successfully!");
        resetForm();
      } catch (error) {
        console.error(error);
        // setErrorMessage("An error occurred while submitting the form. Please try again later.");
        // // setShowModal(true);
        // setShowSuccessMessage(false);
        toast.error(
          "An error occurred while submitting the form. Please try again later."
        );
      } finally {
        setIsSubmitting(false);
      }
    },
    validateOnBlur: false,
    validateOnChange: false,
  });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    formik.validateForm().then((errors) => {
      if (Object.keys(errors).length === 0) {
        formik.handleSubmit(e);
      } else {
        Object.values(errors).forEach((error) => {
          if (error) {
            toast.error(error);
          }
        });
      }
    });
  };

  return (
    <section id="contact">
      <div
        className={`box-border w-full h-screen ${
          isDarkMode ? "bg-black text-white" : "bg-white text-black"
        } pt-16 pb-12 px-8`}
      >
        <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto">
          <div className="pb-2">
            <motion.p
              className={`text-4xl font-bold inline border-b-4 ${
                isDarkMode ? "border-white" : "border-black"
              }`}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Contact
            </motion.p>
            <p className="py-6">
              Submit the form below to get in touch with me
            </p>
          </div>

          <div className="flex justify-between items-center">
            <InfoCard />
            <form
              onSubmit={handleFormSubmit}
              className="flex flex-col gap-4 w-full md:w-1/2"
            >
              <div className="flex flex-col md:flex-row w-full gap-4">
                <div className="w-full">
                  <TextInput
                    label="First Name"
                    name="first_name"
                    placeholder="First name"
                    value={formik.values.first_name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    isDarkMode={isDarkMode}
                    type="text"
                  />
                </div>
                <div className="w-full">
                  <TextInput
                    label="Last Name"
                    name="last_name"
                    placeholder="Last name"
                    value={formik.values.last_name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    isDarkMode={isDarkMode}
                  />
                </div>
              </div>
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
                className={`w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 ${
                  isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={isSubmitting} // Disable when submitting
              >
                {isSubmitting ? "Submitting..." : "Let's talk"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
