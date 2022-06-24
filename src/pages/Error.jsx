import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button/Button";
import Layout from "../components/Layout";

const Error = () => {
  return (
    <Layout>
      <section className="bg-black  bg-fixed bg-shapesContact bg-cover bg-center bg-no-repeat pt-1">
        <div className="px-4 md:px-14 md:pt-6 lg:pt-2 lg:px-6 mt-4  ">
          <div className="flex flex-col gap-y-6 lg:w-10/12 mx-auto">
            <section className=" w-full h-95   rounded  shadow-sm flex flex-col lg:flex-row lg:items-center lg:justify-between lg:px-20 ">
              <div className="lg:w-5/12 flex flex-col items-center justify-center  mb-10">
                <div className="h-56 w-56 lg:h-96 lg:w-96  flex flex-col justify-center items-center rounded-full bg-white ">
                  <div className=" text-gray-500 text-center ">
                    <h1 className="text-8xl lg:text-9xl mb-6">404</h1>
                    <h5 className="capitalize text-xl lg:text-2xl">
                      page not found
                    </h5>
                  </div>
                </div>
              </div>
              <div className="flex-1  text-center text-gray-500">
                <h1 className=" text-6xl lg:text-9xl text-blue-400 mb-10 capitalize">
                  oops!
                </h1>
                <h1 className="text-3xl capitalize text-white mb-10 lg:mb-10 ">
                  page not found on server
                </h1>
                <p className="mb-10 ">
                  The link you followed is either inaccurate, has been removed
                  or the server has been instructed not to let you have it
                </p>
                <Link to="/">
                  <Button
                    text="go back home"
                    color="text-black"
                    bgColor="bg-white"
                  />
                </Link>
              </div>
            </section>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Error;
