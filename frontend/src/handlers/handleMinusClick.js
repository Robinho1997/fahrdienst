const handleMinusClick = (setPlatzValue, setData, data) => {
  setPlatzValue((prevValue) => {
    const newValue = prevValue - 1;
    const clampedValue = newValue < 1 ? 1 : newValue;
    setData({ ...data, plätze: clampedValue });
    return clampedValue;
  });
};

export default handleMinusClick;
