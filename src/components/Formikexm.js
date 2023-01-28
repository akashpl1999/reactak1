import React from 'react';
import { Formik, Form, Field } from 'formik';

function validateEmail(value) {
  let error;
  if (!value) {
    error = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    error = 'Invalid email address';
  }
  return error;
}

function validateUsername(value) {
  let error;
  if (value === 'admin') {
    error = 'Nice try!';
  }
  return error;
}

export const Formikexm = () => (
  <div>
    <h1>Signup</h1>
    <Formik
      initialValues={{
        username: '',
        email: '',
      }}
      onSubmit={values => {
        // same shape as initial values
        console.log(values);
      }}
    >
      {({ errors, touched, isValidating }) => (
        <Form>
          <Field  name="email" validate={validateEmail}  style={{display:'flex' ,alignItems:'left', justifyContent:'center',width:"450px"}}/>
          {errors.email && touched.email && <div>{errors.email}</div>}

          <Field name="username" validate={validateUsername} style={{display:'flex' ,alignItems:'center', justifyContent:'center',width:"200px"}} />
          {errors.username && touched.username && <div>{errors.username}</div>}

          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  </div>
);