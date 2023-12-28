var languages=["C","C++","Java","Python","Machine Learning"];
function ArrayDisplay()
{
    var languageList = languages.join('\n');
      alert(languageList);
}
function Employee(EmployeeName, EmployeeNo, Age, Department)
{
    this.EmployeeName=EmployeeName;
    this.EmployeeNo=EmployeeNo;
    this.Age=Age;
    this.Department=Department;
}
var emp1=new Employee('Harshi',101,26,'Engineer');
var message="Employee " + emp1.EmployeeName+ " is working in " + emp1.Department +" department";
document.getElementById("data").innerHTML=message;
function max_of_three(x, y, z) 
 {
  max_val = 0;
  if (x > y)
  {
    max_val = x;
  } else
  {
    max_val = y;
  }
  if (z > max_val) 
  {
    max_val = z;
  }
  return max_val;
}
var input1 = parseFloat(prompt("Enter the first number:"));
var input2 = parseFloat(prompt("Enter the second number:"));
var input3 = parseFloat(prompt("Enter the third number:"));
var largestNumber = max_of_three(input1, input2, input3);
document.getElementById("max").innerHTML=largestNumber;
function myAlert()
{
     alert("You have moved the mouse on the button");
}
var userName = prompt("Please enter your name:");

// Check if a name was entered
if (userName === null || userName === "") {
  alert("Sorry, you have  not  entered  any name");
} else {
  alert("Hello " + userName + ", welcome");
}