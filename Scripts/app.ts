//IIFE -- Immediately Invoked Funciotn Expressoin

(function() {
  function Start() {
    let student: objects.Student;

    student = new objects.Student(20, "Ahmed", "DB110");
    student.saysHello();
    student.studies();
  }

  window.addEventListener("load", Start);
})();
