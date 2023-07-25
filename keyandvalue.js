const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    MobileNo: 123456789, 
  };
  var keys="";
  var values="";
  keyAndValues();
  function keyAndValues(){
  keys = Object.keys(person);
  values=Object.values(person);

  }
  console.log("The keys are: "+keys);
  console.log("The values are: "+values);

  