"use client"; 

import React from "react";

const Contact = () => {
  return (
    <div className="box-border w-full h-full bg-white text-black pt-28 px-8">
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto">
        <div className="pb-2">
          <p className="text-4xl font-bold inline border-b-4 border-black">
            Contact
          </p>
          <p className="py-6">Submit the form below to get in touch with me</p>
        </div>

        <div className="flex justify-center items-center">
          <form
            action="https://getform.io/f/b18a1b39-925e-4141-9298-d851a2913cc3"
            method="POST"
            className="flex flex-col w-full md:w-1/2"
          >
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                name="first_name"
                placeholder="First name"
                className="p-2 bg-transparent border-2 rounded-md text-black focus:outline-none w-full"
                required
              />
              <input
                type="text"
                name="last_name"
                placeholder="Last name"
                className="p-2 bg-transparent border-2 rounded-md text-black focus:outline-none w-full"
                required
              />
            </div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-black focus:outline-none"
              required
            />
            <textarea
              name="message"
              placeholder="Message"
              rows={8}
              className="p-2 bg-transparent border-2 rounded-md text-black focus:outline-none resize-none"
              required
            ></textarea>

            <button className="text-black border border-black bg-white px-6 py-3 my-8 mx-auto font-semibold flex items-center justify-center rounded-md hover:scale-105 hover:bg-black hover:text-white duration-300 w-full">
              Let's talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
