const GetActualDate = () => {
  let today = new Date();
  let offset = today.getTimezoneOffset();
  let localDate = new Date(today.getTime() - offset * 60 * 1000);

  return localDate.toISOString().substring(0, 10);
};

export default GetActualDate;
