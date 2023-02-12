// import { Formik, Field, ErrorMessage, Form } from 'formik';
// import React from 'react';
// import * as yup from 'yup';
// import { Label } from 'components/Filter/Filter.styled';
// import { Button } from 'components/ContactList/ContactList.styled';

// const initialValues = {
//   name: '',
//   number: '',
// };

// const schema = yup.object().shape({
//   name: yup.string().required(),
//   number: yup.number().required(),
// });

// export const ContactForm = ({ onSubmit }) => {
//   const handleSubmit = (values, { resetForm }) => {
//     onSubmit({ ...values });
//     resetForm();
//   };

//   return (
//     <Formik
//       initialValues={initialValues}
//       onSubmit={handleSubmit}
//       validationSchema={schema}
//     >
//       <Form autoComplete="off">
//         <Label htmlFor="name">
//           Name
//           <Field type="text" name="name" />
//         </Label>
//         <ErrorMessage name="name" />
//         <Label htmlFor="number">
//           Number
//           <Field type="text" name="number" />
//         </Label>
//         <ErrorMessage name="number" />
//         <Button type="submit">Add contact</Button>
//       </Form>
//     </Formik>
//   );
// };
