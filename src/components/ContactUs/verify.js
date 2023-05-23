const VerifyName = (name) => {
  const regex = /^[a-zA-Z]+$/;
  if (name.length === 0) {
    return true;
  } else if (name.length > 50) {
    return false;
  } else {
    return regex.test(name);
  }
};

const VerifyNumber = (number) => {
  const regex = /^[0-9]+$/;
  if (number.length === 0) {
    return true;
  } else if (number.length > 10) {
    return false;
  } else {
    return regex.test(number);
  }
};

export { VerifyName, VerifyNumber };
