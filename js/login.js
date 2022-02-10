const namelist = ["Mary", "Tom", "Jerry", "Jenny"];
const nameOutpotArea = document.querySelector("#output > p");
const findName = (newName) => {
    let isFound = false; 
    namelist.forEach(item => {
        if (newName.toUpperCase() == item.toUpperCase()) {  isFound = true; }})
        return isFound;
}

function displayNameForm()
{    nameOutputArea.innerHTML = namelist; }
console.log(namelist);

function addNameForm()
{   const newName = document.querySelector("#addName").value;
    let found = findName(newName);
    if (!found) {
        namelist.push(newName);
        nameOutputArea.innerHTML = namelist;
        console.log(namelist);
        alert(`${newName} has been added to the array`);
    }
    else {  alert("Duplicate name in the array"); }
}

