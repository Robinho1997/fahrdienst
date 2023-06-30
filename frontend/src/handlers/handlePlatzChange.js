const handlePlatzChange = (e, setPlatzValue, setData, data) => {
  let newValue = parseInt(e.target.value);
  const minValue = 1;
  const maxValue = 6;
  if (newValue < minValue) {
    newValue = minValue;
  } else if (newValue > maxValue) {
    newValue = maxValue;
  }
  setPlatzValue(newValue);
  setData({ ...data, plätze: newValue });
};

export default handlePlatzChange;
