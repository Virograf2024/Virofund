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
});

function Form() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: false });
  return (
    <Formik
      initialValues={{ name: "", email: "" }}
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
        <FormikForm
          ref={ref}
          style={{
            boxShadow: inView ? "0 6px 20px rgba(0, 0, 0, 0.2)" : "none",
            transition: "box-shadow 0.3s ease-in-out 0.5s",
          }}
          className="waitlist-form"
          id="waitlist"
        >
          <div>
            <label>Name</label>
            <Field
              type="text"
              name="name"
              id="name"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label>Email</label>
            <Field
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
            />
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="waitlist-btn"
          >
            {isSubmitting ? "Saving..." : "Join the waitlist – 500 spot left"}
          </button>
        </FormikForm>
      )}
    </Formik>
  );
}

export default Form;
