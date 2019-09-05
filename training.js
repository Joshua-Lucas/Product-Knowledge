//create a function that calls for credientials of asscoates. 
function credientials (EmployeeId) {
    if(isNaN(EmployeeId)){
        alert('Error! Please retype your employee ID number.')
    } else if ( EmployeeId.length !== 6){
       alert('Error! Please retype your employee ID number.')}
 
}

var idEntry = prompt('Please enter your employee ID.')
credientials(idEntry);

