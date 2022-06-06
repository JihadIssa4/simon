fetch('https://session662022.herokuapp.com/data')
 .then(x => x.json())
 .then(json => {
     var students = document.getElementById("students")
     json.Sheet1.forEach(element => {
     var option = document.createElement('option')
     option.innerHTML = element.A;
     students.appendChild(option)
     })
 })
