var form = document.getElementById("myform");
var list = document.getElementById("list");

function SaveToLocalstorage(event) {
  event.preventDefault();
  const username = event.target.username.value;
  const email = event.target.email.value;
  const phone = event.target.Phone.value; // corrected to event.target.Phone.value
  const time = event.target.time.value;
  const date = event.target.date.value;
  const userdetails = {
    username: username,
    email: email,
    phone: phone,
    time: time,
    date: date,
  };
  localStorage.setItem(email, JSON.stringify(userdetails));
  showonscreen(userdetails);
  event.target.reset();
}
function showonscreen(userdetails) {
  const list = document.getElementById("list");
  const listitem = document.createElement("li");
  listitem.className = "user";

  const userInfo = document.createElement("span");
  userInfo.textContent = `${userdetails.username}-${userdetails.email}-${userdetails.phone}-${userdetails.time}-${userdetails.date}`;
  listitem.appendChild(userInfo);
  list.appendChild(listitem);

  const dltbtn = document.createElement("input");
  dltbtn.type = "button";
  dltbtn.value = "Delete";
  dltbtn.className = "dbtn";
  dltbtn.onclick = () => {
    localStorage.removeItem(userdetails.email);
    list.removeChild(listitem);
  };
  listitem.appendChild(dltbtn);

  const editbtn = document.createElement("input");
  editbtn.type = "button";
  editbtn.value = "Edit";
  editbtn.className = "ebtn";
  editbtn.onclick = () => {
    localStorage.removeItem(userdetails.email);
    list.removeChild(listitem);
    document.getElementById("username").value = userdetails.username;
    document.getElementById("emailid").value = userdetails.email;
    document.getElementById("Phone").value = userdetails.phone;
    document.getElementById("Itime").value = userdetails.time;
    document.getElementById("Idate").value = userdetails.date;
  };
  listitem.appendChild(editbtn);
}

document.getElementById("filter").addEventListener("keyup", function (event) {
  const searchTerm = event.target.value.toLowerCase();
  const listItems = document.querySelectorAll("#list li");
  listItems.forEach((item) => {
    const itemText = item.textContent.toLowerCase();
    if (itemText.includes(searchTerm)) {
      item.style.display = "flex";
    } else {
      item.style.display = "none";
    }
  });
});
