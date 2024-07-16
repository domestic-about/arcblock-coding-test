import { useContext, useState } from 'react';
import { HStack, Button, Tag, useToast } from '@chakra-ui/react';
import api from '../../../libs/api';
import { ProfileContext } from '../constant';

const TEST_USER = {
  name: 'test-kui',
  email: 'test-8729@qq.com',
  mobile: '12312312311',
};

function CreateTestUser() {
  const toast = useToast();
  const { getUserData, userList } = useContext(ProfileContext);
  const [isLoading, setIsLoading] = useState(false);
  const createTestUser = async () => {
    setIsLoading(true);
    try {
      const res: any = await api.post('/api/user', TEST_USER);
      if (res) {
        await getUserData();
        toast({
          title: 'Create Success',
          status: 'success',
          duration: 3000,
          isClosable: true,
        });
      }
    } catch (error) {
      console.warn(error, 'error');
    } finally {
      setIsLoading(false);
    }
  };
  const deleteTestUser = async () => {
    setIsLoading(true);
    try {
      const res: any = await api.delete(`/api/user/${userList[0]?._id}`);
      if (res) {
        await getUserData();
        toast({
          title: 'Delete Success',
          status: 'success',
          duration: 3000,
          isClosable: true,
        });
      }
    } catch (error) {
      console.warn(error, 'error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <HStack sx={{ mt: 5, justifyContent: 'center' }} spacing={4}>
      {userList.length ? (
        <>
          User Name:{' '}
          <Tag sx={{ px: 4, py: 2 }} size="large" variant="solid" colorScheme="teal">
            {userList[0]?.name}
          </Tag>
        </>
      ) : null}

      {userList.length ? (
        <Button isLoading={isLoading} onClick={deleteTestUser}>
          Delete Test User
        </Button>
      ) : (
        <Button isLoading={isLoading} onClick={createTestUser}>
          Create Test User
        </Button>
      )}
    </HStack>
  );
}
export default CreateTestUser;
