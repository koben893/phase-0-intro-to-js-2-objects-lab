const employee = {
    name : "Sam",
    streetAddress : "11 Broadway",        
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    let newEmployees = {...employee};
    newEmployees[key] = value;
   return (employee, newEmployees);
   }
   function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    let newEmployees = employee;
    newEmployees[key] = value;
   return (newEmployees);
   }
   function deleteFromEmployeeByKey(employee, key, value) {
    let newEmployees = {...employee};
    newEmployees[key] = value;
    delete newEmployees.key;
   return (employee, newEmployees);
   }
   function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return (employee);
   }