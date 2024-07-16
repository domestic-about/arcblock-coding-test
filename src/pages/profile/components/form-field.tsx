import { useContext } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Input, FormControl, FormErrorMessage, Text, FormLabel } from '@chakra-ui/react';
import { FormProps, ProfileContext } from '../constant';

type FormFieldProps = {
  field: any;
  form: any;
};

function FormField({ field, form }: FormFieldProps) {
  const { isEdit, userList } = useContext(ProfileContext);
  const userData = userList[0];
  const key = field.name as keyof FormProps;
  return (
    <FormControl isInvalid={form.errors[key] && form.touched[key]} sx={{ mt: 10 }}>
      <FormLabel as="legend">{key}</FormLabel>
      {isEdit ? (
        <>
          <Input {...field} variant="filled" placeholder={key} />
          <FormErrorMessage>{form.errors[key]}</FormErrorMessage>
        </>
      ) : (
        <Text>{userData?.[key]}</Text>
      )}
    </FormControl>
  );
}
export default FormField;
