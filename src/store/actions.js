export const SHOW_CONTACT = 'SHOW_CONTACT';
export const HIDE_CONTACT = 'HIDE_CONTACT';

export const showContact = () => {
  return { type: SHOW_CONTACT };
};

export const hideContact = () => {
  return { type: HIDE_CONTACT };
};