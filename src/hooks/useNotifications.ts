import { Toaster, toast } from 'react-hot-toast';

type NotificationType = 'error' | 'success';

const useNotifications = () => {
  const notification = (type: NotificationType, message: string) => {
    toast[type](message, {
      duration: 3000,
      position: 'top-center',
      style: {
        background: type === 'success' ? '#16565D' : '#fff',
        color: type === 'success' ? 'white' : 'black',
      },
    });
  };

  const notificationError = (message: string) => {
    notification('error', message);
  };

  const notificationSuccess = (message: string) => {
    notification('success', message);
  };

  const notificationLoading = (promise: Promise<any>) => {
    return toast.promise(
      promise,
      {
        loading: 'Loading',
        success: 'Got data',
        error: 'Error fetching',
      },
      {
        duration: 3000,
        position: 'top-center',
        style: {
          background: '#fff',
          color: 'black',
        },
      }
    );
  };

  return {
    Toaster,
    notificationSuccess,
    notificationError,
    notificationLoading,
  };
};

export default useNotifications;
