//Create a Person constructor that accepts name and age as parameters and sets those properties accordingly in the Constructor.

  //code here

  function Person (name, age)
  {
  	this.name = name;
  	this.age = age;
  }

  var p1 = new Person('Christian', '27');
  var p2 = new Person('Brett', '28');

  Person.prototype.sayName = function () {
  	alert(this.name);
  }

  p1.sayName();


//Now create three instances of Person with data you make up

  //code here


//Now add a sayName method on your Person class that will alert the name of whatever Person instance called it.

  //code here
