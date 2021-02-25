import { Formik, Form, Field } from 'formik';
import { Contact } from 'queries/page';
import * as Yup from 'yup';

interface ContactFormProps {
  formTexts: Contact['contactForm']
}

const ContactForm: React.FC<ContactFormProps> = ({ formTexts }) => {
  const errorClasses = 'text-xs font-light text-red-300 mt-2 ml-4'
  const labelClasses = 'uppercase tracking-wide text-xs font-bold'
  const inputClasses = 'w-full p-4 border-0 bg-black rounded-sm ring-rounded-sm focus:outline-none focus:ring-2 focus:ring-fullMint focus:border-transparent laptop:hover:border-fullMint transition-colors  duration-200 ease-in'
  const inputWrapperClasses = 'mb-4 w-5/6 mx-auto'

  const handleSubmit = async (values, actions) => {
    try {
    } catch (error) {
      actions.setSubmitting(false);
    }
  };
  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        message: '',
      }}
      validationSchema={Yup.object().shape({
        name: Yup.string()
          .required(formTexts.yup_required)
          .min(3, formTexts.yup_error_name),
        email: Yup.string()
          .email(formTexts.yup_error_email)
          .required(formTexts.yup_required),
        message: Yup.string()
          .required(formTexts.yup_required)
          .min(8, formTexts.yup_error_message),
      })}
      onSubmit={handleSubmit}
    >
      {({ touched, errors, isSubmitting }) => (
        <Form>
          <div className={inputWrapperClasses}>
            <label
              htmlFor="name"
              className={labelClasses}
            >
              {formTexts.name}

              <Field
                type="text"
                name="name"
                placeholder={formTexts.ph_name}
                className={`${inputClasses} border-b-2 border-fadedPink`}
              />
            </label>
            {errors.name && touched.name ? (
              <div className={errorClasses}>{errors.name}</div>
            ) : null}
          </div>
          <div className={inputWrapperClasses}>
            <label
              htmlFor="email"
              className={labelClasses}
            >
              {formTexts.email}

              <Field
                type="email"
                name="email"
                placeholder={formTexts.ph_email}
                className={`${inputClasses} border-b-2 border-fadedPink`}
              />
            </label>
            {errors.email && touched.email ? (
              <div className={errorClasses}>
                {errors.email}
              </div>
            ) : null}
          </div>
          <div className={inputWrapperClasses}>
            <label
              htmlFor="message"
              className={labelClasses}
            >
              {formTexts.message}

              <Field
                component="textarea"
                name="message"
                placeholder={formTexts.ph_message}
                className={`${inputClasses} h-30`}
              />
            </label>
            {errors.message && touched.message ? (
              <div className={errorClasses}>
                {errors.message}
              </div>
            ) : null}
          </div>
          <button
            className='block mx-auto text-black font-bold text-xl bg-fullPink py-4 px-24 my-8 uppercase laptop:bg-black laptop:border-2 laptop:border-fadedPink rounded-sm laptop:text-fullPink laptop:hover:bg-fullPink laptop:hover:text-black transition-colors  duration-200 ease-in'
            type="submit"
            disabled={isSubmitting}
          >
            {formTexts.send}
          </button>
        </Form>
      )
      }
    </Formik >

  );
}

export default ContactForm;
