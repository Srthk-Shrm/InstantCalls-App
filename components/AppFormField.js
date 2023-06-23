import React from 'react';
import AppTextInput from './AppTextInput';
import ErrorMessage from './ErrorMessage';
import { useFormikContext } from 'formik';


function AppFormField({name, ...otherprops}) {
    const {setFieldTouched, handleChange, errors, touched}=useFormikContext();
    return (
        <>
        <AppTextInput
              //autoCapitalize="none"
              //autoCorrect={false}
              //icon="email"
              //keyboardType="email-address"
              onBlur={()=> setFieldTouched(name)}
              onChangeText={handleChange(name)}
              {...otherprops}
              //placeholder="Email"
              //textContentType="emailAddress"
            />
            <ErrorMessage error={errors[name]} visible={touched[name]}/>
        </>
    );
}

export default AppFormField;