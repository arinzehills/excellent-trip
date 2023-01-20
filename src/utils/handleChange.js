const handleChange = (e, formValues, setFormValues) => {
  const { name, value } = e.target;
  setFormValues({ ...formValues, [name]: value });

  console.log(formValues);
};
export default handleChange;
