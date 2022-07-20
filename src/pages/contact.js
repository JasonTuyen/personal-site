import React from "react"
import Helmet from "react-helmet"
import Layout from "../components/layout"

export default function Contact() {
    return (
        <Layout>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Contact - Jason Tuyen</title>
                <description>The internet contact page of Jason Tuyen aka iCookieStalker.</description>
            </Helmet>
            <h1>Contact</h1>
            <p>Hi, thanks for wanting to reach out! Just fill out this form or shoot me a DM from my socials listed below.</p>
            <form method="post" netlify-honeypot="bot-field" data-netlify="true" name="contact">
                <input type="hidden" name="bot-field" />
                <input type="hidden" name="form-name" value="contact" />
                <label>
                Name
                <input type="text" name="name" id="name" />
                </label>
                <label>
                Email
                <input type="email" name="email" id="email" />
                </label>
                <label>
                Subject
                <input type="text" name="subject" id="subject" />
                </label>
                <label>
                Message
                <textarea name="message" id="message" rows="5"/>
                </label>
                <button type="submit">Send</button>
            </form>
        </Layout>
    )
  }