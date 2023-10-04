import React, { useState } from "react";
import { Form, Formik } from "formik";
import { ValidatorSchema } from "../validation";
// import { useSelector } from "react-redux";
import "./Table.css";

const TableForm = () => {
  const [data, setData] = useState([]);

  const initialValues = {
    firstName: "",
    lastName: "",
    age: "",
  };

  // const data1 = useSelector((c) => c.show.value);
  // const data2 = useSelector((c) => c.show.value1);

  return (
    <>
      {/* <h3>{data1}</h3>
      <h3>{data2}</h3> */}
      <Formik
        initialValues={initialValues}
        onSubmit={(values, action) => {
          setData([...data, values]);
          action.resetForm();
        }}
        validationSchema={ValidatorSchema}>
        {({ values, handleChange, handleSubmit, errors, touched }) => (
          <Form style={{ marginTop: "100px", marginLeft: "100px" }}>
            <div className='col' style={{ width: "400px" }}>
              <div className='col'>
                <input
                  type='text'
                  name='firstName'
                  className='form-control'
                  onChange={handleChange}
                  placeholder='First name'
                  aria-label='First name'
                  value={values.firstName}
                />
              </div>
              {errors.firstName && touched.firstName && errors.firstName}
              <div className='col' style={{ marginTop: "40px" }}>
                <input
                  type='text'
                  name='lastName'
                  className='form-control'
                  onChange={handleChange}
                  placeholder='Last name'
                  aria-label='Last name'
                  value={values.lastName}
                />
              </div>
              {errors.lastName && touched.lastName && errors.lastName}

              <div className='col' style={{ marginTop: "40px" }}>
                <input
                  type='number'
                  name='age'
                  className='form-control'
                  onChange={handleChange}
                  placeholder='Age'
                  aria-label='Age'
                  value={values.age}
                />
              </div>
              {errors.age && touched.age && errors.age}

              <button
                type='submit'
                onSubmit={() => {
                  handleSubmit();
                }}
                className='btn btn-primary btn-block'>
                Submit
              </button>
            </div>
          </Form>
        )}
      </Formik>
      <div className='table-wrapper'>
        <table className='table'>
          <thead>
            <tr>
              <th scope='col'>Id</th>
              <th scope='col'>First Name</th>
              <th scope='col'>Last Name</th>
              <th scope='col'>Age</th>
              {/* <th scope='col'>Email</th>
              <th scope='col'>Password</th> */}
            </tr>
          </thead>

          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.firstName}</td>
                <td>{item.lastName}</td>
                <td>{item.age}</td>
                {/* <td>{data1}</td>
                <td>{data2}</td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TableForm;
