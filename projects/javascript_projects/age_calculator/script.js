const dob = document.getElementById("dob");
const calculate = document.getElementById("calculate");

const y = document.getElementById("years");
const m = document.getElementById("months");
const d = document.getElementById("days");

function calculateAge() {
  const dobValue = dob.value;

  if (dobValue === "") {
    alert("Please Enter your Birthday!");
    return;
  }

  const currentDate = new Date();
  const dobDate = new Date(dobValue);

  let yrs = currentDate.getFullYear() - dobDate.getFullYear();
  let month = currentDate.getMonth() - dobDate.getMonth();
  let date = currentDate.getDate() - dobDate.getDate();

  if (date < 0) {
    month--;
    const previousMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      0,
    ).getDate();

    date += previousMonth;
  }

  if (month < 0) {
    yrs--;
    month += 12;
  }

  y.innerText = yrs;
  m.innerText = month;
  d.innerText = date;
}

calculate.addEventListener("click", calculateAge);
