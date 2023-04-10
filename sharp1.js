function dothis(e) {
  e.preventDefault();
  let user = e.target;
  // console.log(user.name.value,user.email.value,user.phone.value)
  let obj = {
    name: user.name.value,
    email: user.email.value,
    phone: user.phone.value,
  };
  axios
    .post(
      "https://crudcrud.com/api/5e23e7d240c14587b1b0194169f1a010/users",
      obj
    )
    .then((res) => {
      console.log(res);
    })
    .catch(err=>{
        console.log(err);
    });
}
