let student = [
    { id: 1,Name:"Janani",total:100,Gender:"Female" },
    { id: 2,Name:"Kumar", total:100,Gender:"Male" },
    { id: 3,Name:"Priya",total:100,Gender:"Female"  },
    { id: 4,Name:"Ram",total:100,Gender:"Male"  }
    ];
    //Finding student name by id
  findStudentByid();
    function findStudentByid(){
        for (i=0;i<student.length;i++){
if (student[i].id >1) 
    console.log("The Name of the student found-  "+student[i].Name);
}
}
//Finding students name by giving gender
findStudentByGender();
function findStudentByGender(){
    for (i=0;i<student.length;i++){
        if (student[i].Gender==="Male")
console.log("The Gender- Male of the student found-  "+student[i].Name);
    }
}
//adding object to the set of objects
includeStudent();
function includeStudent(){

let add={id: 5,Name:"Santhosh",total:40,Gender:"Male"  }
student.push(add);
console.log("Added new student details to the Student details list: ")
console.log(student);
}
//deleting object by giving id
deleteStudentByid()
function deleteStudentByid(id){
    for(i=0;i<student.length;i++){
        if(student[i].id===2){
            let splice_value =student.splice(i,1);
            console.log("the deleted student by id: ");
            console.log(splice_value);
            console.log("the remaining student detaisls are: ");
            console.log(student);
        }

    
    }
}
//to print the students details in a row
function printStudentRow(details) {
    console.log("id: "+details.id, "Name: "+details.Name, "Total: "+details.total,"Gender: "+details.Gender);
  }
  console.log("List of Students:");
  student.forEach(printStudentRow);

                                                 
