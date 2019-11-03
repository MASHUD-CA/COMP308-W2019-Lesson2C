//IIFE -- Immediately Invoked Funciotn Expressoin
(function () {
    function Start() {
        var student;
        student = new objects.Student(20, "Ahmed", "DB110");
        student.saysHello();
        student.studies();
    }
    window.addEventListener("load", Start);
})();
//# sourceMappingURL=app.js.map