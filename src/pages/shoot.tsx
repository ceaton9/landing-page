/**
 * @author Groove Studio
 * @copyright © All rights reserved. Groove Studio 2023
 */

import React, { useCallback } from 'react'
import { Formik } from 'formik'

import { LANG } from '@utils/lang'
import Footer from '@components/v1/footer'
import Navbar from '@components/v1/navbar'
import SEO from '@components/v1/seo'

import projectImage from '@assets/webp/15_1.webp'

export default function ProjectForm() {
  const isTypePicked = useCallback((arrType: string[], type: string) => {
    return arrType.indexOf(type)
  }, [])

  return (
    <SEO>
      <Navbar logo={LANG.NAVBAR.LOGO} />
      <section id="project" about="project" className="px-24">
        <div className="flex items-center justify-between">
          <h1 className="text-white text-[64px] font-bold w-1/2">
            Let's Build Something Great Together
          </h1>
          <img className='-mt-24' alt="project" src={projectImage} />
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
                name: '',
                company: '',
                email: '',
                type: [],
                timeline: '',
                budget: 0,
                description: 0,
              }}
              onSubmit={(values) => {
                // same shape as initial values
                console.log(values)
              }}
            >
              {({
                values,
                handleChange,
                handleBlur,
                handleSubmit,
                setFieldValue,
              }) => (
                <form onSubmit={handleSubmit}>
                  <label
                    htmlFor="name"
                    style={{ display: 'block' }}
                    className="text-white mb-2"
                  >
                    What's your name*
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={values.name}
                    onChange={handleChange}
                    style={{ width: '100%' }}
                    onBlur={handleBlur}
                    className="bg-transparent border-[#FFFFFF80] border-[1px] h-10 text-white px-4 mb-4"
                  />
                  <label
                    htmlFor="company"
                    style={{ display: 'block' }}
                    className="text-white mb-2"
                  >
                    Name of your company/organization
                  </label>
                  <input
                    id="company"
                    type="text"
                    value={values.company}
                    onChange={handleChange}
                    style={{ width: '100%' }}
                    onBlur={handleBlur}
                    className="bg-transparent border-[#FFFFFF80] border-[1px] h-10 text-white px-4 mb-4"
                  />
                  <label
                    htmlFor="email"
                    style={{ display: 'block' }}
                    className="text-white mb-2"
                  >
                    What's your email address?*
                  </label>
                  <input
                    id="email"
                    type="text"
                    value={values.email}
                    onChange={handleChange}
                    style={{ width: '100%' }}
                    onBlur={handleBlur}
                    className="bg-transparent border-[#FFFFFF80] border-[1px] h-10 text-white px-4 mb-4"
                  />
                  <label
                    htmlFor="type"
                    style={{ display: 'block' }}
                    className="text-white mb-2"
                  >
                    Type's of work?*
                  </label>
                  <div className="text-white mb-6 flex gap-4 flex-wrap">
                    <div id="type-button" className="pt-6">
                      <label>
                        <input
                          type="checkbox"
                          className="hidden"
                          onClick={() => {
                            if (
                              isTypePicked(
                                values.type,
                                'mobile-development'
                              ) === -1
                            ) {
                              setFieldValue('type', [
                                ...values.type,
                                'mobile-development',
                              ])
                            } else {
                              values.type.splice(
                                isTypePicked(values.type, 'mobile-development'),
                                1
                              )
                            }
                          }}
                        />
                        <span className="px-4 py-4 border-[1px] border-white font-light text-sm">
                          Mobile App
                        </span>
                      </label>
                    </div>
                    <div id="type-button" className="pt-6">
                      <label>
                        <input
                          type="checkbox"
                          className="hidden"
                          onClick={() => {
                            if (
                              isTypePicked(
                                values.type,
                                'dashboard-development'
                              ) === -1
                            ) {
                              setFieldValue('type', [
                                ...values.type,
                                'dashboard-development',
                              ])
                            } else {
                              values.type.splice(
                                isTypePicked(
                                  values.type,
                                  'dashboard-development'
                                ),
                                1
                              )
                            }
                          }}
                        />
                        <span className="px-4 py-4 border-[1px] border-white font-light text-sm">
                          Dashboard Development
                        </span>
                      </label>
                    </div>
                    <div id="type-button" className="pt-6">
                      <label>
                        <input
                          type="checkbox"
                          className="hidden"
                          onClick={() => {
                            if (
                              isTypePicked(values.type, 'web-development') ===
                              -1
                            ) {
                              setFieldValue('type', [
                                ...values.type,
                                'web-development',
                              ])
                            } else {
                              values.type.splice(
                                isTypePicked(values.type, 'web-development'),
                                1
                              )
                            }
                          }}
                        />
                        <span className="px-4 py-4 border-[1px] border-white font-light text-sm">
                          Web Development
                        </span>
                      </label>
                    </div>
                    <div id="type-button" className="pt-6">
                      <label>
                        <input
                          type="checkbox"
                          className="hidden"
                          onClick={() => {
                            if (
                              isTypePicked(
                                values.type,
                                'landing-page-development'
                              ) === -1
                            ) {
                              setFieldValue('type', [
                                ...values.type,
                                'landing-page-development',
                              ])
                            } else {
                              values.type.splice(
                                isTypePicked(
                                  values.type,
                                  'landing-page-development'
                                ),
                                1
                              )
                            }
                          }}
                        />
                        <span className="px-4 py-4 border-[1px] border-white font-light text-sm">
                          Landing Page Development
                        </span>
                      </label>
                    </div>
                    <div id="type-button" className="pt-6">
                      <label>
                        <input
                          type="checkbox"
                          className="hidden"
                          onClick={() => {
                            if (
                              isTypePicked(values.type, 'graphic-design') === -1
                            ) {
                              setFieldValue('type', [
                                ...values.type,
                                'graphic-design',
                              ])
                            } else {
                              values.type.splice(
                                isTypePicked(values.type, 'graphic-design'),
                                1
                              )
                            }
                          }}
                        />
                        <span className="px-4 py-4 border-[1px] border-white font-light text-sm">
                          Graphic Design
                        </span>
                      </label>
                    </div>
                    <div id="type-button" className="pt-6">
                      <label>
                        <input
                          type="checkbox"
                          className="hidden"
                          onClick={() => {
                            if (
                              isTypePicked(values.type, 'dashboard-design') ===
                              -1
                            ) {
                              setFieldValue('type', [
                                ...values.type,
                                'dashboard-design',
                              ])
                            } else {
                              values.type.splice(
                                isTypePicked(values.type, 'dashboard-design'),
                                1
                              )
                            }
                          }}
                        />
                        <span className="px-4 py-4 border-[1px] border-white font-light text-sm">
                          Dashboard Design
                        </span>
                      </label>
                    </div>
                    <div id="type-button" className="pt-6">
                      <label>
                        <input
                          type="checkbox"
                          className="hidden"
                          onClick={() => {
                            if (
                              isTypePicked(values.type, 'app-design') === -1
                            ) {
                              setFieldValue('type', [
                                ...values.type,
                                'app-design',
                              ])
                            } else {
                              values.type.splice(
                                isTypePicked(values.type, 'app-design'),
                                1
                              )
                            }
                          }}
                        />
                        <span className="px-4 py-4 border-[1px] border-white font-light text-sm">
                          App Design
                        </span>
                      </label>
                    </div>
                    <div id="type-button" className="pt-6">
                      <label>
                        <input
                          type="checkbox"
                          className="hidden"
                          onClick={() => {
                            if (
                              isTypePicked(
                                values.type,
                                'landing-page-design'
                              ) === -1
                            ) {
                              setFieldValue('type', [
                                ...values.type,
                                'landing-page-design',
                              ])
                            } else {
                              values.type.splice(
                                isTypePicked(
                                  values.type,
                                  'landing-page-design'
                                ),
                                1
                              )
                            }
                          }}
                        />
                        <span className="px-4 py-4 border-[1px] border-white font-light text-sm">
                          Landing Page Design
                        </span>
                      </label>
                    </div>
                    <div id="type-button" className="pt-6">
                      <label>
                        <input
                          type="checkbox"
                          className="hidden"
                          onClick={() => {
                            if (isTypePicked(values.type, 'other') === -1) {
                              setFieldValue('type', [...values.type, 'other'])
                            } else {
                              values.type.splice(
                                isTypePicked(values.type, 'other'),
                                1
                              )
                            }
                          }}
                        />
                        <span className="px-4 py-4 border-[1px] border-white font-light text-sm">
                          Other
                        </span>
                      </label>
                    </div>
                  </div>
                  <label
                    htmlFor="timeline"
                    style={{ display: 'block' }}
                    className="text-white mb-2"
                  >
                    Do you have a timeline in mind?
                  </label>
                  <input
                    id="timeline"
                    type="text"
                    value={values.timeline}
                    onChange={handleChange}
                    style={{ width: '100%' }}
                    onBlur={handleBlur}
                    className="bg-transparent border-[#FFFFFF80] border-[1px] h-10 text-white px-4 mb-4"
                  />
                  <label
                    htmlFor="budget"
                    style={{ display: 'block' }}
                    className="text-white mb-2"
                  >
                    What's your budget*
                  </label>
                  <input
                    id="budget"
                    type="text"
                    value={values.budget}
                    onChange={handleChange}
                    style={{ width: '100%' }}
                    onBlur={handleBlur}
                    className="bg-transparent border-[#FFFFFF80] border-[1px] h-10 text-white px-4 mb-4"
                  />
                  <label
                    htmlFor="description"
                    style={{ display: 'block' }}
                    className="text-white mb-2"
                  >
                    Please tell us a bit about your project
                  </label>
                  <textarea
                    id="description"
                    value={values.description}
                    onChange={handleChange}
                    style={{ width: '100%' }}
                    onBlur={handleBlur}
                    className="bg-transparent border-[#FFFFFF80] border-[1px] h-48 text-white p-4 mb-4"
                  />
                  <button className="bg-gradient p-4 text-white" type="submit">
                    Submit
                  </button>
                </form>
              )}
            </Formik>
          </div>
        </div>
      </section>
      <Footer />
    </SEO>
  )
}
