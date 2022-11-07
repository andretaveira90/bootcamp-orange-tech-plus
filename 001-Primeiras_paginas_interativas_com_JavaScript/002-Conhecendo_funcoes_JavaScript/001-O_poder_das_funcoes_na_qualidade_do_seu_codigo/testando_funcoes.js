function sayMyName(name) {
  console.log(name);
}

function addLastName(lastName) {
  console.log(lastName);
}

function concat(sayMyName, addLastName) {
  console.log(sayMyName + addLastName);
}

function main() {
  concat('André', ' Taveira');
}

main();