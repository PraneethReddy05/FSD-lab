const employee = {
    name: "sohel",
    role: "Developer",
    age: 28,
    location: "IN"
}
function updateEmployeeDetails(...emp){
    emp[0].role = emp[1];
    console.log(emp);
}
updateEmployeeDetails(employee, "Senior Developer")