const handleChangeList = (e, index, formValues, setFormValues) => {
  const { name, value } = e.target;
  // console.log(e.target.name);
  const list = [...formValues];
  list[index][name] = value;
  list[index]["value"] = value;
  setFormValues(list);
};
export default handleChangeList;
