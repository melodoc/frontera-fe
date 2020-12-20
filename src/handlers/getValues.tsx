const getValues = function (array, searchKey) {
    return array.reduce((values, item) => {
      item.key === searchKey && (values = item.value);
      return values;
    }, {});
  };

export default getValues;
