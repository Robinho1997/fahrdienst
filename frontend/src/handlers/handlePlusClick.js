const handlePlusClick = (setPlatzValue, setData, data) => {
  setPlatzValue((prevValue) => {
    const newValue = prevValue + 1;
    const clampedValue = newValue > 6 ? 6 : newValue;
    setData({ ...data, plätze: clampedValue });
    return clampedValue;
  });
};

export default handlePlusClick;
