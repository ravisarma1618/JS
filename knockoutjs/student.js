function Student(name, age) {
    this.name = ko.observable(name);
    this.age = ko.observable(age);
}

function Subject(name, marks) {
    this.name = ko.observable(name);
    this.marks = ko.observable(marks);
}

function AppViewModel() {
    var self = this;

    self.departmentName = ko.observable("Computer Science");
    self.students = ko.observableArray([
        new Student("John Doe", 20),
        new Student("Jane Smith", 22)
    ]);
    self.subjects = ko.observableArray([
        new Subject("Math", 90),
        new Subject("Science", 85)
    ]);

    self.addStudent = function() {
        self.students.push(new Student("", 0));
    };

    self.addSubject = function() {
        self.subjects.push(new Subject("", 0));
    };
}

ko.applyBindings(new AppViewModel());
