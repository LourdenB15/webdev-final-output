const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  const title = document.querySelector('.input-title');
  const des = document.querySelector('.input-description');
  if (!title.value || !des.value) {
    return;
  }
  document.querySelector('.card-wrapper').innerHTML += cardTemplate(
    title.value,
    des.value,
    GenerateCurrTime()
  );
});

function cardTemplate(title, des, date) {
  return `<div class="card text-bg-dark">
    <div class="card-header card-title">
      <p class="card-title lead fw-semibold">${title}</p>
      <p class="time small">${date}</p>
    </div>
    <div class="card-body">
     
      <p class="card-text text-truncate ">${des}</p>
     <div class="d-flex justify-content-end"> <a href="#" class="btn btn-danger">Delete</a></div>
    </div>
  </div>`;
}
function deleteTodo(event) {
  event.preventDefault();
  var todoRemove = event.target.closest('.card');
  if (todoRemove) {
    todoRemove.remove();
  }
}
document.addEventListener('click', function (event) {
  if (event.target && event.target.matches('.btn.btn-danger')) {
    deleteTodo(event);
  }
});

function padZero(num) {
  return (num < 10 ? '0' : '') + num;
}

function GenerateCurrTime() {
  const currentDate = new Date();
  const date = currentDate.getDate();
  const month = currentDate.getMonth() + 1;
  const year = currentDate.getFullYear();
  const hours = padZero(currentDate.getHours());
  const minutes = padZero(currentDate.getMinutes());
  const seconds = padZero(currentDate.getSeconds());
  const curDate = month + '/' + date + '/' + year;
  const curTime = hours + ':' + minutes + ':' + seconds;
  const dateTimeString = `${curDate} ${curTime}`;
  return dateTimeString;
}
