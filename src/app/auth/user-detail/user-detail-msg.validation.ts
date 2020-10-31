export const userDetailValidationMessage = [
  {
    control: 'firstName',
    rules: { required: 'First name is required' },
  },
  {
    control: 'lastName',
    rules: { required: 'Last name is required' },
  },
  {
    control: 'mobileNo',
    rules: {
      phoneinit: 'Mobile number should start with 0 and have 10 digits',
    },
  },
  {
    control: 'altMobileNo',
    rules: {
      phoneinit: 'Alt. Mobile number should start with 0 and have 10 digits',
    },
  },
  {
    control: 'address',
    rules: { required: 'Address is required' },
  },
];

export const userDetailErrorMessage = {
  firstNameValidationMessage: null,
  lastNameValidationMessage: null,
  mobileNoValidationMessage: null,
  altMobileNoValidationMessage: null,
  addressValidationMessage: null,
};
