const intialState = {
  email: '',
  phoneNumber: '',
  uid: '',
};

export const Register = (state = intialState, action) => {
  const {payload} = action;
  switch (action.type) {
    case 'REGISTER':
      return {
        email: payload.email,
        phoneNumber: payload.phoneNumber,
      };

    case 'SUCCESS_REGISTER':
      return {
        uid: payload.uid,
      };

    default:
      return {
        ...state,
      };
  }
};
