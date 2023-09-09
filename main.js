var firstNAme;
var birthDate;
var date;
var yearUser;

// function promptUSer() {
//   firstNAme = prompt("type your first name !");
//   birthDate = prompt("type your date !");
//   date = new Date().getFullYear();
//   yearUser = new Date(birthDate).getFullYear();
// }
// promptUSer();

// if (date - yearUser > 18) {
document.body.innerHTML += `<h1 style="color: darkred; text-align:center;">welcome ${firstNAme} to do list App !</h1>`;
document.body.innerHTML += `
  <form
      
      style="display: flex; flex-direction: column"
      id="myform"
  <label for="titleTask">title task:</label>
  <input id="titleTask" type="text" />

  <label for="detailsTask">detils task:</label>
  <input id="detailsTask" type="text" />

  <label for="datefinish">date finish:</label>
  <input id="datefinish" type="text" />

  <label for="isTaskDone">is the task done:</label>
  <input id="isTaskDone" type="text" />

  <button id="btn">submit</button>
</form>
<div id="myDiv"></div>
  `;
document.getElementById("myDiv").innerHTML = `
  <table id="myTable" >
  <thead>
    <th>title task</th>
    <th>detils task</th>
    <th>date finish</th>
    <th>is the task done</th>
  </thead>
  <tbody id="myTbody">
    
  </tbody>
</table>`;

// } else {
//   document.body.innerHTML += `<h2 style="color: darkred;">sorry you are not 18 years old yet !</h2>`;
//   document.body.innerHTML += `<img src="fotos/giphy.gif" alt="">`;
// }

function addDateToBale() {
  value1 = document.getElementById("titleTask").value;
  document.getElementById("myTbody").innerHTML += `<tr><td>${value1}</td><td>${
    document.getElementById("detailsTask").value
  }</td><td>
  ${document.getElementById("datefinish").value}</td><td>${
    document.getElementById("isTaskDone").value
  }</td></tr>`;

  console.log(value1);
}
document.getElementById("myform").addEventListener("submit", addDateToBale);
console.log(value1);
