"use client";
import React from "react";
import { Formik, Form as FormikForm, Field } from "formik";
import * as Yup from "yup";
import { addUser } from "@/lib/auth";
import toast from "react-hot-toast";
import { useInView } from "react-intersection-observer";

const UserSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.string()
    .matches(/^[0-9]+$/, "Phone must contain only digits")
    .min(10, "Phone must be at least 10 digits")
    .max(15, "Phone must not exceed 15 digits")
    .required("Phone number is required"),
});

function Form() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: false });

  return (
    <Formik
      initialValues={{ name: "", email: "", phone: "" }}
      validationSchema={UserSchema}
      validateOnChange={false}
      validateOnBlur={false}
      onSubmit={async (values, { resetForm, setSubmitting }) => {
        const result = await addUser(values);
        if (result.success) {
          toast.success("User added successfully!");
          resetForm();
        } else {
          alert(`⚠️ ${result.message}`);
        }
        setSubmitting(false);
      }}
      validate={(values) => {
        try {
          UserSchema.validateSync(values, { abortEarly: false });
        } catch (err) {
          if (err instanceof Yup.ValidationError) {
            const messages = err.errors.join("\n");
            toast.error(`${messages}`);
          }
        }
        return {}; // must return an object
      }}
    >
      {({ isSubmitting }) => (
        <FormikForm ref={ref} className="waitlist-form" id="waitlist">
          <div>
            <label htmlFor="name">
              <p className="label">Name</p>
            </label>
            <Field
              type="text"
              name="name"
              id="name"
              placeholder="Enter your name"
              className="waitlist-input"
            />
          </div>

          <div>
            <label htmlFor="email">
              <p className="label">Email</p>
            </label>
            <Field
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              className="waitlist-input"
            />
          </div>

          <div>
            <label htmlFor="phone">
              <p className="label">Phone Number</p>
            </label>
            <Field
              type="tel"
              name="phone"
              id="phone"
              placeholder="Enter your phone number"
              className="waitlist-input"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="waitlist-btn"
          >
            {isSubmitting ? "Saving..." : "Join the waitlist – 500 spot left"}
          </button>

          <p className="privacy-note">
            We respect your privacy, unsubscribe anytime
          </p>
        </FormikForm>
      )}
    </Formik>
  );
}

export default Form;
