// decrease let -----
// increase let +++++

document
  .getElementById("discover-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    window.location.href = "blog.html";
  });

function showDate() {
  const realDate = new Date();
  const currentDate = document.getElementById("date-picker");
  currentDate.innerHTML = realDate.toDateString();
}

showDate();

//   // product-time
//   const quantityElement=document.querySelectorAll(".product-number")
//   // console.log(quantityElement);
//   for(const number of quantityElement){
//  document.getElementById()
//   }

document
  .getElementById("card-btn1")
  .addEventListener("click", function (event) {
    alert("Board updated successfully");
    
    taskAssign--;
    taskComplete++;
    document.getElementById("decrease-number").innerText=taskAssign;
    document.getElementById("increase-number").innerText=taskComplete;

    if(taskAssign===0){
      alert("congrates!!! You have completed all the current task")
    }
  
    event.target.disabled = "true";
    const activity = document.getElementById("activity-log");
    const newValue1 = document.createElement("div");

    newValue1.innerHTML = `
<p id="card-clear" class="bg-gray-300 rounded-lg space-y-6 mt-6 gap-10 px-4 py-6 "  >You have completed the task Fix Mobile Button Issue at <span id="clock1"></span> </P>  
`;
    activity.appendChild(newValue1);
    let currentTime = new Date();
    document.getElementById("clock1").innerHTML =
      currentTime.toLocaleTimeString();

    document
      .getElementById("clear-history")
      .addEventListener("click", function () {
        const history = document.getElementById("clear-history");
        document.getElementById("card-clear").remove();
      });

   
  });
//  card2


let taskAssign = 6;
let taskComplete = 23;
document
  .getElementById("card-btn2")
  .addEventListener("click", function (event) {
    alert("Board updated successfully");
  
    taskAssign--;
    taskComplete++;
    document.getElementById("decrease-number").innerText=taskAssign;
    document.getElementById("increase-number").innerText=taskComplete;
  
    if(taskAssign===0){
      alert("congrates!!! You have completed all the current task")
    }
    

    event.target.disabled = "true";


    const activity = document.getElementById("activity-log");
    const newValue1 = document.createElement("div");
    newValue1.innerHTML = `
<p id="card-clear" class="bg-gray-300 rounded-lg space-y-6 mt-6 gap-10 px-4 py-6 "  >You have completed the task Add Dark Mode at <span id="clock2"></span> </P>   
`;
    activity.appendChild(newValue1);
    activity.appendChild(newValue1);
    let currentTime = new Date();
    document.getElementById("clock2").innerHTML =
      currentTime.toLocaleTimeString();

    document
      .getElementById("clear-history")
      .addEventListener("click", function () {
        const history = document.getElementById("clear-history");
        document.getElementById("card-clear").remove();
      });
  });
// card-3
document
  .getElementById("card-btn3")
  .addEventListener("click", function (event) {
    alert("Board updated successfully");

    
    taskAssign--;
    taskComplete++;
    document.getElementById("decrease-number").innerText=taskAssign;
    document.getElementById("increase-number").innerText=taskComplete;
    if(taskAssign===0){
      alert("congrates!!! You have completed all the current task")
    }
    event.target.disabled = "true";
    const activity = document.getElementById("activity-log");
    const newValue1 = document.createElement("div");
    newValue1.innerHTML = `
<p id="card-clear" class="bg-gray-300 rounded-lg space-y-6 mt-6 gap-10 px-4 py-6 "  >You have completed the task Optimize home page at <span id="clock3"></span> </P>  
`;
    activity.appendChild(newValue1);
    let currentTime = new Date();
    document.getElementById("clock3").innerHTML =
      currentTime.toLocaleTimeString();

    document
      .getElementById("clear-history")
      .addEventListener("click", function () {
        const history = document.getElementById("clear-history");
        document.getElementById("card-clear").remove();
      });
  });
// card-4
document
  .getElementById("card-btn4")
  .addEventListener("click", function (event) {
    alert("Board updated successfully");
    
    taskAssign--;
    taskComplete++;
    document.getElementById("decrease-number").innerText=taskAssign;
    document.getElementById("increase-number").innerText=taskComplete;
    if(taskAssign===0){
      alert("congrates!!! You have completed all the current task")
    }

    event.target.disabled = "true";
    const activity = document.getElementById("activity-log");
    const newValue1 = document.createElement("div");
    newValue1.innerHTML = `
<p id="card-clear" class="bg-gray-300 rounded-lg space-y-6 mt-6 gap-10 px-4 py-6"  >You have completed the task Add New Emoji at <span id="clock4"></span> </P> 
`;
    activity.appendChild(newValue1);
    let currentTime = new Date();
    document.getElementById("clock4").innerHTML =
      currentTime.toLocaleTimeString();

    document
      .getElementById("clear-history")
      .addEventListener("click", function () {
        const history = document.getElementById("clear-history");
        document.getElementById("card-clear").remove();
      });
  });
// card-5
document
  .getElementById("card-btn5")
  .addEventListener("click", function (event) {
    alert("Board updated successfully");
    
    taskAssign--;
    taskComplete++;
    document.getElementById("decrease-number").innerText=taskAssign;
    document.getElementById("increase-number").innerText=taskComplete;
    if(taskAssign===0){
      alert("congrates!!! You have completed all the current task")
    }

    event.target.disabled = "true";
    const activity = document.getElementById("activity-log");
    const newValue1 = document.createElement("div");
    newValue1.innerHTML = `
<p id="card-clear" class="bg-gray-300 rounded-lg space-y-6 mt-6 gap-10 px-4 py-6 "  >You have completed the task Integrate openAI API at <span id="clock5"></span> </P>  
`;
    activity.appendChild(newValue1);
    let currentTime = new Date();
    document.getElementById("clock5").innerHTML =
      currentTime.toLocaleTimeString();
    document
      .getElementById("clear-history")
      .addEventListener("click", function () {
        const history = document.getElementById("clear-history");
        document.getElementById("card-clear").remove();
      });
  });
// card-6
document
  .getElementById("card-btn6")
  .addEventListener("click", function (event) {
    alert("Board updated successfully");
    
    taskAssign--;
    taskComplete++;
    document.getElementById("decrease-number").innerText=taskAssign;
    document.getElementById("increase-number").innerText=taskComplete;
    if(taskAssign===0){
      alert("congrates!!! You have completed all the current task")
    }

    event.target.disabled = "true";
    const activity = document.getElementById("activity-log");
    const newValue1 = document.createElement("div");
    newValue1.innerHTML = `
<p id="card-clear" class="bg-gray-300 rounded-lg space-y-6 mt-6 gap-10 px-4 py-6 "  >You have completed the Improve job searching at <span id="clock6"></span> </P> 
`;
    activity.appendChild(newValue1);
    let currentTime = new Date();
    document.getElementById("clock6").innerHTML =
      currentTime.toLocaleTimeString();
    document
      .getElementById("clear-history")
      .addEventListener("click", function () {
        const history = document.getElementById("clear-history");
        document.getElementById("card-clear").remove();
      });
  });

let index= 0;

document.getElementById("bg-color").addEventListener("click", function () {
  const colors = ["red", "blue", "green", "yellow", "purple", "orange"];

  document.body.style.backgroundColor = colors[index];
  index= (index + 1) % colors.length;
});

