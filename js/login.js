/*
We will be getting the information from the database (e.g. Customer Name) - for this example, we will be using just array with default values
*/

const namelist = ["Mary", "Tom", "Jerry", "Jenny"];

const nameOutputArea = document.querySelector("#output > p");
const customerOutputArea = document.querySelector("#customerList > p");

//Create another function to check if the new name is in the array
/*
1) Check if the new name is in the array
2) Paramter : new name that is entered by the user
3) Return : true (new name is found in the array) or false (new name is not found in the array)
*/
const findName = (newName) => {

    let isFound = false; //default - the newName is NOT found in the array

    //the array function will keep calling depends on the array length
    namelist.forEach(item => {
        if (newName.toUpperCase() == item.toUpperCase()) {
            isFound = true;
        }
    })
    return isFound;
}

//handle the onSubmit function for Display button
function displayNameForm()
{
    nameOutputArea.innerHTML = namelist;
}

//When user clicks on the search button
function searchNameForm()
{
    const searchName = document.querySelector("#searchName").value;

    let found = findName(searchName);
    if (found) {
        nameOutputArea.innerHTML = `${searchName} is found in the System`;
    }
    else {
        nameOutputArea.innerHTML = `${searchName} is not found in the System`;
    }
}

//handle the onSubmit function for Add button - add the new name to the last of the array
function addNameForm()
{
    //Get the new name entered in the form
    const newName = document.querySelector("#addName").value;

    //Check if the name is in the array - if name is in the array, do not add to array, if the name is not in the array, then the name will be added
    let found = findName(newName);
    if (!found) {
        namelist.push(newName);
        nameOutputArea.innerHTML = namelist;
        alert(`${newName} has been added to the array`);
    }
    else {
        alert("Duplicate name in the array");
    }
}

/*objects - all real life items are objects 
- cars, customer, laptop, library members, product item
- object have properties and methods
- class (oop- Object Oriented Programming)

Objects are variables too. But objects can contain many values.
The values are written as name:value pairs (name and value separated by a colon).
It is a common practice to declare objects with the const keyword.
Learn more about using const with objects in the chapter: JS Const.

1) we are going to create a customer object - properties
-id:a111, name : Cornelius Chao, membership : Gold, totalSpending : 3000
2)store the list of our customers into an array
*/
/*
For now, the property values for the customer object property value is hard-corded first,
later part of the course we will retrieve property values from database using for loop
*/

// property are the same but the value is different
const customer1 = {
    id: "a111",
    name: "Cornelius Chao",
    membership: "Gold",
    totalSpending: 3000
};
const customer2 = {
    id: "b112",
    name: "Janice Tay",
    membership: "Silver",
    totalSpending: 2010
};
const customer3 = {
    id: "b113",
    name: "Chirstian Chao",
    membership: "Premium",
    totalSpending: 901
};
const customer4 = {
    id: "b114",
    name: "Laura Tan",
    membership: "Silver",
    totalSpending: 2001
};
const customerList = []; //Create an empty array
customerList.push(customer1, customer2, customer3, customer4);
console.log(customerList);

const displayCustomerInfo = (arrayList) => 
    {//customerOutputArea.innerHTML = customerList(0).id;
        let customerDetails = ""; //Create an empty string
            arrayList.forEach(item => 
                {customerDetails += 
                    `
                    Customer Name: ${item.name}
                    Membership: ${item.membership}
                    Total spending: ${item.totalSpending}
                    <br />
                    `
                }
            );  //End of ForEach
    customerOutputArea.innerHTML = customerDetails;
    }

function displayCustomerForm()
{
    displayCustomerInfo(customerList);
}

function filterCustomerMForm()
{   //array filter method - create a new array filled with element that pass
    //test provided by a function
    const filterGoldMember = customerList.filter(item => item.membership == "Gold");
    console.log(filterGoldMember);
    displayCustomerInfo(filterGoldMember);
}

function filterCustomerSForm()
{   const filterSpending= customerList.filter(item => item.totalSpending >= 1000);
    console.log(filterSpending);
    displayCustomerInfo(filterSpending);
}