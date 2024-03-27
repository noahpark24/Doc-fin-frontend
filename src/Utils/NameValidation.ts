const NameValidation = (name: string) => {
  if (name === '') {
    return false;
  } else {
    return true;
  }
};

export default NameValidation;
