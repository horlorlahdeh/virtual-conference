import React from "react";
import {
    FaFacebookF,
    FaTwitter,
  FaInstagram,
  FaYoutube,
  FaGooglePlus,
} from "react-icons/fa";

import Container from "../components/Container";
import Layout from "../components/Layout";
import Button from "../components/Button/Button";

const Contact = () => {
  return (
    <Layout title="Virtual Conference Contact">
      <Container>
        <section className="py-20 lg:pt-36">
          <div className="flex flex-col lg:flex-row w-10/12 mx-auto max-w-screen gap-x-28 text-white">
            <h1 className="text-4xl md:text-6xl lg:text-9xl mb-10 capitalize tracking-wider lg:w-5/12 ">
              contact us
            </h1>
            <div className="border-4 md:border-8 border-yellow-300 bg-dots bg-repeat-round p-5 md:p-8 lg:p-12 lg:w-7/12 flex flex-col justify-start">
              <h5 className="text-yellow-300 font-bold text-sm  uppercase mb-8">
                email
              </h5>
              <h5 className=" text-sm md:text-2xl  mb-8">
                hello@diviconference.com
              </h5>
              <h5 className="text-yellow-300 font-bold text-sm  uppercase mb-4">
                follow
              </h5>
              <div className="flex items-center gap-x-5 text-xl mb-12">
                <FaFacebookF className="cursor-pointer" />
                <FaTwitter className="cursor-pointer" />
                <FaInstagram className="cursor-pointer" />
                <FaYoutube className="cursor-pointer" />
                <FaGooglePlus className="cursor-pointer" />
              </div>
              <Button
                text="view schedule"
                color="text-home-yellow"
                bgColor="bg-transparent"
                border="border-2"
                borderColor="border-home-yellow"
                bgColorHover="bg-home-yellow"
                colorHover="text-black"
              />
            </div>
          </div>
        </section>
        <section className="pb-20 ">
          <div className="w-10/12 mx-auto max-w-screen">
            <form action="">
              <div className="flex flex-col">
                <div className="flex flex-col md:flex-row gap-x-8 lg:mb-8">
                  <input
                    type="text"
                    placeholder="Name"
                    className="bg-transparent border border-contact-gray p-4 text-contact-gray focus:text-white focus:border-gray-700 w-full mb-4"
                  />
                  <input
                    type="text"
                    placeholder="Email Address"
                    className="bg-transparent border border-contact-gray p-4 text-contact-gray focus:text-white w-full mb-4"
                  />
                </div>
                <input
                  type="textarea"
                  placeholder=""
                  className="w-full h-40 bg-transparent border border-contact-gray  text-contact-gray focus:text-white p-4 pt-0 mb-4"
                />
                <div className="self-end">
                  <Button
                    text="submit"
                    color="text-black"
                    bgColor="bg-home-yellow"
                  />
                </div>
              </div>
            </form>
          </div>
        </section>
      </Container>
    </Layout>
  );
};

export default Contact;
