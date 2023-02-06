import { toast } from 'react-toastify';

export const onExistContact = findedContact =>
  toast(`${findedContact.name} is already in contacts!`, {
    position: 'top-right',
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'dark',
  });

export const onSuccesAddContact = contact =>
  toast(`${contact.name} was successfully added!`, {
    position: 'top-right',
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'dark',
  });

export const onDeleteContact = name =>
  toast(`${name} was removed from your list!`, {
    position: 'top-right',
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'dark',
  });