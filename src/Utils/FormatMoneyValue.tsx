const FormatMoneyValue = (salary: string): string => {
  const numericValue = salary.replace(/[^0-9]/g, '');
  const length = numericValue.length;
  let formattedSalary = '';

  if (length <= 3) {
    formattedSalary = numericValue;
  } else {
    let remainingDigits = length % 3;
    if (remainingDigits === 0) remainingDigits = 3;
    formattedSalary += numericValue.substr(0, remainingDigits);
    for (let i = remainingDigits; i < length; i += 3) {
      formattedSalary += '.' + numericValue.substr(i, 3);
    }
  }

  return formattedSalary;
};

export default FormatMoneyValue;
