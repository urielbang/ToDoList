var firstNAme = prompt("type your first name !");
var birthDate = prompt("type your date !");
var date = new Date().getFullYear();
var yearUser = new Date(birthDate).getFullYear();
console.log(date, yearUser);
if (date - yearUser > 18) {
  alert(`welcone ${firstNAme} to Do List App !`);
} else {
  document.body.innerHTML += `<h2 style="color: darkred;">sorry you are not 18 years old yet !</h2>`;
  document.body.innerHTML += `<img src="fotos/giphy.gif" alt="">`;
}
