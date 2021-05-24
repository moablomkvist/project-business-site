// A function that adds and remove the class "active" on the section you click on.
// We haven't really talked about ´this´ yet, but we will... ;)
// console.log(this) to see how it works

// function toggle () {
//   this.classList.toggle("active")
// }

// Selects an HTML element, and calls a function which will be executed when the element is clicked.

const question1 = document.getElementById("question-1");
const question2 = document.getElementById("question-2");
const question3 = document.getElementById("question-3");
const question4 = document.getElementById("question-4");
const question5 = document.getElementById("question-5");

console.log(question1)
console.dir(question1, question2)


question1.onclick = () => {
  const answerContainer1 = question1.nextElementSibling
  answerContainer1.classList.toggle('active')

  const answerContainer2 = question2.nextElementSibling
  const answerContainer3 = question3.nextElementSibling
  const answerContainer4 = question4.nextElementSibling
  const answerContainer5 = question5.nextElementSibling
  answerContainer2.classList.remove('active')
  answerContainer3.classList.remove('active')
  answerContainer4.classList.remove('active')
  answerContainer5.classList.remove('active')
}

question2.onclick = () => {
  const answerContainer2 = question2.nextElementSibling
  answerContainer2.classList.toggle('active')
  
  //when the others expand, this goes up again)
  const answerContainer1 = question1.nextElementSibling
  const answerContainer3 = question3.nextElementSibling
  const answerContainer4 = question4.nextElementSibling
  const answerContainer5 = question5.nextElementSibling
  answerContainer1.classList.remove('active')
  answerContainer3.classList.remove('active')
  answerContainer4.classList.remove('active')
  answerContainer5.classList.remove('active')
}

question3.onclick = () => {
  const answerContainer3 = question3.nextElementSibling
  answerContainer3.classList.toggle('active')

  const answerContainer1 = question1.nextElementSibling
  const answerContainer2 = question2.nextElementSibling
  const answerContainer4 = question4.nextElementSibling
  const answerContainer5 = question5.nextElementSibling
  answerContainer1.classList.remove('active')
  answerContainer2.classList.remove('active')
  answerContainer4.classList.remove('active')
  answerContainer5.classList.remove('active')
}

question4.onclick = () => {
  const answerContainer4 = question4.nextElementSibling
  answerContainer4.classList.toggle('active')

  const answerContainer1 = question1.nextElementSibling
  const answerContainer2 = question2.nextElementSibling
  const answerContainer3 = question3.nextElementSibling
  const answerContainer5 = question5.nextElementSibling
  answerContainer1.classList.remove('active')
  answerContainer2.classList.remove('active')
  answerContainer3.classList.remove('active')
  answerContainer5.classList.remove('active')
}

question5.onclick = () => {
  const answerContainer5 = question5.nextElementSibling
  answerContainer5.classList.toggle('active')

  const answerContainer1 = question1.nextElementSibling
  const answerContainer2 = question2.nextElementSibling
  const answerContainer3 = question3.nextElementSibling
  const answerContainer4 = question4.nextElementSibling
  answerContainer1.classList.remove('active')
  answerContainer2.classList.remove('active')
  answerContainer3.classList.remove('active')
  answerContainer4.classList.remove('active')
}





