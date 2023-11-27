import { Formik } from 'formik';
import * as Yup from 'yup';

import {
  Form,
  FormInputGroup,
  Field,
  AddContactBtn,
  ErrorMessage,
  InputErrorGroup,
} from './NewPhoneForm.styled';

const PhoneValidateSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  phoneNumber: Yup.string()
    .min(7, 'Too Short!')
    .max(12, 'Too Long!')
    .required('Required'),
});

export const FormContact = ({ onAdd }) => (
  <div>
    <Formik
      initialValues={{
        id: '',
        firstName: '',
        phoneNumber: '',
      }}
      validationSchema={PhoneValidateSchema}
      onSubmit={(values, actions) => {
        onAdd(values);
        actions.resetForm();
      }}
    >
      <Form>
        <FormInputGroup>
          <label htmlFor="firstName">Name</label>
          <InputErrorGroup>
            <Field id="firstName" name="firstName" placeholder="Luna" />
            <ErrorMessage name="firstName" component="span" />
          </InputErrorGroup>
        </FormInputGroup>

        <FormInputGroup>
          <label htmlFor="phoneNumber">Number</label>
          <InputErrorGroup>
            <Field id="phoneNumber" name="phoneNumber" placeholder="1234567" />
            <ErrorMessage name="phoneNumber" component="span" />
          </InputErrorGroup>
        </FormInputGroup>

        <AddContactBtn type="submit">Add contact</AddContactBtn>
      </Form>
    </Formik>
  </div>
);
