console.log("Hello World!")

//array in javascript
var arr = [1,2,3,4,5,6,7,8,9,10];
console.log(arr);
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);
console.log(arr[6]);
console.log(arr[7]);
console.log(arr[8]);
console.log(arr[9]);
console.log(arr.length)


for(var i=0;i<arr.length;i++){
    console.log(arr[i]);
}

const personArr0 = ["Raju Singh", "Pinki", "Prince", "Soniya", "Krishna", "Vaishnavi"]
const genderArr = ["Male", "Female", "Male", "Female", "Male", "Female"]
const personArr2 = ["Raju Singh", "Pinki", "Prince", "Soniya", "Krishna", "Vaishnavi"]
const numberOfUsers = personArr0.length;

for(let i = 0; i < numberOfUsers; i++){
  if(genderArr[i] == "Male"){
    console.log(personArr0[i] + " is a Male");
  }else{
     console.log(personArr0[i] + " is a Female");
  }
}



//Object in javascript
const user1 = {
    name: "Raju Singh",
    gender: "Male",
    age: 35,
    address: "Delhi"
};

const user2 = {
    name: "Pinki",
    gender: "female",
    age: 35,
    address: "Delhi"
};
const user3 = {
    name: "Prince",
    gender: "Male",
    age: 21,
    address: "Delhi"
};

const user4 = {
    name: "Soniya",
    gender: "female",
    age: 15,
    address: "Uttar Pradesh"
};

const user5 = {
    name: "Krishna",
    gender: "Male",
    age: 12,
    address: "Delhi"
};

const user6 = {
    name: "Vaishnavi",
    gender: "female",
    age: 6,
    address: "Delhi"
};

const allUsers = [user1, user2, user3, user4, user5, user6]

console.log(allUsers);
console.log(user1);
console.log(user1["name"]);
console.log(user1["gender"]);
console.log(user1["age"]);
console.log(user1["address"]);

for (let i = 0; i < allUsers.length; i++){
  if (allUsers[i]["gender"] == "Male"){
    console.log(allUsers[i]["firstName"])
  }
}

//Function in Javascipt

function add(a,b){
    return a+b;
}

console.log(add(1,2));

