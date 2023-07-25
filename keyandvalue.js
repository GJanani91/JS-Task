const person = ({
    firstName: "John",
    lastName: "Doe",
    age: 50,
    MobileNo: 123456789, 
  });
  keyAndValues();
  function keyAndValues(){
  const keys = Object.keys(person);
  const values=Object.values(person);
  }
  console.log("The keys are: "+keys);
  console.log("The values are: "+values);
  