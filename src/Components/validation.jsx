import * as Yup from "yup";

export const ValidatorSchema = Yup.object().shape({
    firstName:Yup.string()
    .min(3, 'Too Short!')
    .max(10, 'Too Long!')
    .required(''),

   lastName:Yup.string()
    .min(3, 'Too Short!')
    .max(10, 'Too Long!')
    .required(''), 

   age:Yup.number()
    .min(18, 'Must be 18+')
    .max(45, 'Please enter valid Age')
    .required(''),  
})