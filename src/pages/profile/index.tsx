/* eslint-disable import/no-extraneous-dependencies */
import { useEffect, useState, useMemo, useCallback } from 'react';
import { Box, Text, Button, useToast, ButtonGroup, Container } from '@chakra-ui/react';
import { Field, Form, Formik } from 'formik';
import { UserDataProps, ProfileContext, isValidEmail, isValidMobile, isValidName } from './constant';
import FormField from './components/form-field';
import api from '../../libs/api';
import CreateTestUser from './components/create-test-user';

function ProfilePage() {
  const [isEdit, setIsEdit] = useState(false);
  const [userList, setUserList] = useState<UserDataProps[]>([]);
  const [editForm, setEditForm] = useState({
    email: '',
    mobile: '',
    name: '',
  });

  const userData = userList[0];
  const toast = useToast();

  const getUserData = useCallback(async () => {
    try {
      const res: any = await api.get('/api/user');
      if (res.data) {
        setUserList(res.data);
        // mvp version
        if (res.data[0]) {
          setEditForm({
            name: res.data[0].name,
            email: res.data[0].email,
            mobile: res.data[0].mobile,
          });
        }
      }
    } catch (error) {
      console.warn(error, 'error');
    }
  }, []);

  useEffect(() => {
    getUserData();
  }, [getUserData]);

  const validateName = (value: string) => {
    let error;
    if (!value) {
      error = 'Name is required';
    } else if (!isValidName(value)) {
      error = 'Must contain numbers and letters, more than 8 characters';
    }
    return error;
  };
  const validateEmail = (value: string) => {
    let error;
    if (!value) {
      error = 'Email is required';
    } else if (!isValidEmail(value)) {
      error = 'Incorrect email format';
    }
    return error;
  };
  const validateMobile = (value: string) => {
    let error;
    if (!value) {
      error = 'mobile is required';
    } else if (!isValidMobile(value)) {
      error = 'Incorrect mobile format';
    }
    return error;
  };

  const contextValue = useMemo(
    () => ({ isEdit, getUserData, userList, editForm, setEditForm }),
    [isEdit, getUserData, userList, editForm, setEditForm],
  );
  return (
    <ProfileContext.Provider value={contextValue}>
      <Container>
        <Box>
          <Text variant="h1">Get Your Personal</Text>
        </Box>
        <Box>
          <CreateTestUser />
        </Box>
        {userList.length ? (
          <Formik
            initialValues={{ ...editForm }}
            onSubmit={async (values) => {
              const res = await api.put(`/api/user/${userData?._id}`, values);
              if (res.data?.message) {
                toast({
                  title: res.data?.message,
                  status: 'success',
                  duration: 3000,
                  isClosable: true,
                });
                await getUserData();
                setIsEdit(false);
              } else {
                toast({
                  title: res.data?.error,
                  status: 'error',
                  duration: 3000,
                  isClosable: true,
                });
              }
            }}>
            {(props) => (
              <Form>
                <Field name="name" validate={validateName}>
                  {({ field, form }: any) => <FormField field={field} form={form} />}
                </Field>
                <Field name="email" validate={validateEmail}>
                  {({ field, form }: any) => <FormField field={field} form={form} />}
                </Field>
                <Field name="mobile" validate={validateMobile}>
                  {({ field, form }: any) => <FormField field={field} form={form} />}
                </Field>

                <Box sx={{ mt: 8 }}>
                  {isEdit ? (
                    <ButtonGroup>
                      <Button colorScheme="brand" onClick={() => setIsEdit(false)}>
                        Cancel
                      </Button>
                      <Button colorScheme="brand" onClick={() => props.resetForm()}>
                        Reset
                      </Button>
                      <Button type="submit">Submit</Button>
                    </ButtonGroup>
                  ) : (
                    <Button colorScheme="brand" onClick={() => setIsEdit(true)}>
                      Edit
                    </Button>
                  )}
                </Box>
              </Form>
            )}
          </Formik>
        ) : null}
      </Container>
    </ProfileContext.Provider>
  );
}
export default ProfilePage;
