"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Page = () => {
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    // Check if the entered email is valid
    setIsValidEmail(validateEmail(event.target.value));
  };

  const validateEmail = (email) => {
    // Simple email validation using regular expression
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const sendEmail = () => {
    // Check if email is valid before sending
    if (isValidEmail) {
      // Use client-side library or API to send email
      console.log("Sending email to aniketpatil6400@gmail.com");
      // Here you can integrate with your email sending service
    } else {
      alert("Please enter a valid email address.");
    }
  };

  return (
    <>
      <section className="flex justify-center items-center h-screen">
      <h1 className="mb-5 pr-16 text-3xl font-bold text-black dark:text-white xl:text-hero ">
        Contact Us
      </h1>
        <div 
        className="max-w-lg mx-auto p-6 border border-gray-300 rounded-md"
        style={{
            margin: "5% 0px 0px 5%"
        }}
        >
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Enter your email"
            className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2"
            style={{
                padding: "10px 20px",
                border: "none",
                background: "whitesmoke"
            }}
            />
          <button
            onClick={sendEmail}
            className={`w-full px-4 py-2 text-white bg-blue-500 rounded-md ${
              isValidEmail ? "hover:bg-blue-600" : "opacity-50 cursor-not-allowed"
            }`}
            style={{
                borderRadius: "10px",
                padding: "10px 20px",
                background: "black",
                color: "#fff",
                margin: "0 0 0 10px"
              }}
            
            disabled={!isValidEmail}
          >
            Get in touch with us
          </button>
        </div>
      </section>
    </>
  );
};

export default Page;
