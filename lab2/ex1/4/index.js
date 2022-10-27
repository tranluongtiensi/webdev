const isValidJSON = obj => {
    try {
      JSON.parse(obj);
      return true;
    } catch (e) {
      return false;
    }
  };
  console.log(isValidJSON('{"name":"tiensi","age":22}'));
  console.log(isValidJSON('{"name":"tiensi",age:"22"}'));
  console.log(isValidJSON(null));