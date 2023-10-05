import React from 'react';
import { Toaster, toast } from 'react-hot-toast';

const useNotifications: React.FC = () => {
  
  const notificationError = (notification) => {
    toast.error(notification, {
      duration: 3000,
      position: 'top-center',
      style: {
        background: '#fff',
        color: 'black'
      }
    })
  }

  const notificationSuccess = (notification) => {
    toast.success(notification, {
      duration: 3000,
      position: 'top-center',
      style: {
        background: '#16565D',
        color: 'white'
      }
    })
  }

  const notificationLoading = (myPromise) => {
    toast.loading(myPromise, {
      duration: 3000,
      position: 'top-center',
      loading: 'Loading',
      success: 'Got data',
      error: 'Error fetching'
    })
  }

  return {
    Toaster,
    notificationSuccess,
    notificationError,
    notificationLoading
  }
};

export default useNotifications;