import Button from "@components/button";
import Footer from "@components/footer";
import Navbar from "@components/navbar";
import { LANG } from "@utils/lang";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";

export default function ProjectForm() {
  const FormProjectsSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
  });

  return (
    <>
      <Navbar logo={LANG.NAVBAR.LOGO} />
      <section id="project" about="project" className="px-24 mb-96">
        <div className="flex items-center justify-between">
          <h1 className="text-white text-[64px] font-bold">
            Let's Build
            <br />
            Something Great
            <br />
            Together
          </h1>
          <div className="w-[600px] h-80 rounded-3xl bg-slate-300"></div>
        </div>
        <div className="flex gap-8">
          <div className="mt-40 w-1/2">
            <div className="h-60 bg-slate-50 rounded-xl mb-12"></div>
            <h4 className="text-white text-5xl leading-normal">
              Send us your project details,
              <br /> and we will be in touch soon!
            </h4>
            <h4 className="text-white font-bold text-xl leading-normal mt-12 mb-2">
              Send us email
            </h4>
            <div className="flex gap-2 mb-12 items-center">
              <div className="w-6 h-6 bg-slate-200"></div>
              <p className="text-white">admin@grvstudio.id</p>
            </div>
          </div>
          <div className="h-60 rounded-xl mb-12 w-1/2 mt-40 flex-col">
            <Formik
              initialValues={{
                email: "",
              }}
              validationSchema={FormProjectsSchema}
              onSubmit={(values) => {
                // same shape as initial values
                console.log(values);
              }}
            >
              {({
                values,
                touched,
                errors,
                dirty,
                isSubmitting,
                handleChange,
                handleBlur,
                handleSubmit,
                handleReset,
              }) => (
                <form onSubmit={handleSubmit}>
                  <label
                    htmlFor="email"
                    style={{ display: "block" }}
                    className="text-white mb-2"
                  >
                    What's your name*
                  </label>
                  <input
                    id="email"
                    placeholder="Enter your email"
                    type="text"
                    value={values.email}
                    onChange={handleChange}
                    style={{ width: "100%" }}
                    onBlur={handleBlur}
                    className="bg-transparent border-[#FFFFFF80] border-[1px] h-10 text-white px-4 mb-4"
                  />
                  <label
                    htmlFor="company-name"
                    style={{ display: "block" }}
                    className="text-white mb-2"
                  >
                    Name of your company/organization
                  </label>
                  <input
                    id="company-name"
                    placeholder="Enter your email"
                    type="text"
                    value={values.email}
                    onChange={handleChange}
                    style={{ width: "100%" }}
                    onBlur={handleBlur}
                    className="bg-transparent border-[#FFFFFF80] border-[1px] h-10 text-white px-4 mb-4"
                  />
                  <label
                    htmlFor="email"
                    style={{ display: "block" }}
                    className="text-white mb-2"
                  >
                    What's your email address?*
                  </label>
                  <input
                    id="email"
                    placeholder="Enter your email"
                    type="text"
                    value={values.email}
                    onChange={handleChange}
                    style={{ width: "100%" }}
                    onBlur={handleBlur}
                    className="bg-transparent border-[#FFFFFF80] border-[1px] h-10 text-white px-4 mb-4"
                  />
                  <label
                    htmlFor="email"
                    style={{ display: "block" }}
                    className="text-white mb-2"
                  >
                    Type's of work?*
                  </label>
                  <div className="text-white">
                    <label>
                      <input type="checkbox" />
                      Mobile App
                    </label>
                    <label>
                      <input type="checkbox" />
                      Mobile App
                    </label>
                    <label>
                      <input type="checkbox" />
                      Mobile App
                    </label>
                    <label>
                      <input type="checkbox" />
                      Mobile App
                    </label>
                  </div>
                  <label
                    htmlFor="email"
                    style={{ display: "block" }}
                    className="text-white mb-2"
                  >
                    Do you have a timeline in mind?
                  </label>
                  <input
                    id="email"
                    placeholder="Enter your email"
                    type="text"
                    value={values.email}
                    onChange={handleChange}
                    style={{ width: "100%" }}
                    onBlur={handleBlur}
                    className="bg-transparent border-[#FFFFFF80] border-[1px] h-10 text-white px-4 mb-4"
                  />
                  <label
                    htmlFor="email"
                    style={{ display: "block" }}
                    className="text-white mb-2"
                  >
                    What's your budget*
                  </label>
                  <input
                    id="email"
                    placeholder="Enter your email"
                    type="text"
                    value={values.email}
                    onChange={handleChange}
                    style={{ width: "100%" }}
                    onBlur={handleBlur}
                    className="bg-transparent border-[#FFFFFF80] border-[1px] h-10 text-white px-4 mb-4"
                  />
                  <label
                    htmlFor="email"
                    style={{ display: "block" }}
                    className="text-white mb-2"
                  >
                    Please tell us a bit about your project
                  </label>
                  <textarea
                    id="email"
                    placeholder="Enter your email"
                    value={values.email}
                    onChange={handleChange}
                    style={{ width: "100%" }}
                    onBlur={handleBlur}
                    className="bg-transparent border-[#FFFFFF80] border-[1px] h-48 text-white p-4 mb-4"
                  />
                  <Button primary>Send</Button>
                </form>
              )}
            </Formik>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
