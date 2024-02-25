const GetActualDate = () => {
  let date = Date.now();
  let today = new Date(date);

  return today.toISOString().substring(0, 10);
};

export default GetActualDate;
