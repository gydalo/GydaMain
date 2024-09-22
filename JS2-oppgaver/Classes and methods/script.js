
class Person {
 #firstName;
 #lastName;

    constructor(firstName, lastName) {
        this.#firstName = firstName;
        this.#lastName = lastName;
    }

    get firstName() {
        return this.#firstName;
    }

    set firstName(newFirstName) {
        this.#firstName = newFirstName;
    }

    
    get lastName() {
        return this.#lastName;
    }

    set lastName(newLastName) {
        this.#lastName = newLastName;
    }

    introduce() {
        console.log(
            `Name: ${this.#firstName} ${this.#lastName}`
        );
    }
}

class Employee extends Person {
    #jobTitle;
    #salary;

    constructor(firstName, lastName, jobTitle, salary) {
        super(firstName, lastName);
        this.#jobTitle = jobTitle;
        this.#salary = salary;
    }

    
    get jobTitle() {
        return this.#jobTitle;
    }

    set jobTitle(newJobTitle) {
        this.#jobTitle = newJobTitle;
    }

    get salary() {
        return this.#salary;
    }

    set salary(newSalary) {
        this.#salary = newSalary;
    }

    getJobDetails() {
        console.log(`Job: ${this.#jobTitle}, Salary: ${this.#salary}`)
    }

    introduce() {
        console.log(`Name: ${this.firstName} ${this.lastName}. Jobtitle: ${this.#jobTitle}, Salary: ${this.#salary}.`);
    }
}


const newPerson = new Person("Ola", "Nordmann");
newPerson.introduce();

const newPerson2 = new Person("Jerry", "Seinfield");
newPerson2.introduce();

const newEmployee = new Employee("Gyda", "Lofthus", "Headchef", "$70K a year")
newEmployee.introduce();

/*

class Order {
    // hidden (private)
    #orderId; 
    #total;
    #date;
  
    constructor(ordId, total, date) {
      this.#orderId = ordId;
      this.#total = total;
      this.#date = date;
    }
  
    // Getter for orderId
    get orderId() {
      return this.#orderId;
    }
  
    // Setter for orderId
    set orderId(newOrderId) {
      this.#orderId = newOrderId;
    }
  
    // Getter for total
    get total() {
      return this.#total;
    }
  
    // Setter for total
    set total(newTotal) {
      if (newTotal >= 0) {
        this.#total = newTotal;
      } else {
        console.log('Total cannot be negative.');
      }
    }
  
    // Getter for date
    get date() {
      return this.#date;
    }
  
    // Setter for date
    set date(newDate) {
      this.#date = newDate;
    }
  
    addTax() {
      // hidden (private)
      this.#total += this.#total * 0.2;
    }
  
    printReceipt() {
      this.addTax();
      console.log(
        `Receipt Id: ${this.#orderId}, Date: ${this.#date}, Total: ${this.#total}`
      );
    }
  }
  
  // Example usage
  const order = new Order(123, 100, '2023-06-24');
  console.log(order.orderId); // 123
  console.log(order.total); // 100
  console.log(order.date); // 2023-06-24
  
  order.total = 120;
  order.date = '2023-07-01';
  
  order.printReceipt();
  // Output: Receipt Id: 123, Date: 2023-07-01, Total: 144

  */

  //RegEX - Regular Expressions

  const regex = /^h.llo$/;
	const str1 = 'hello';
	const str2 = 'hallo';
	const str3 = 'hullo';
	
	console.log(regex.test(str1)); // true
	console.log(regex.test(str2)); // true
	console.log(regex.test(str3)); // true
	console.log(regex.test('heello')); // false
	console.log(regex.test('hello!')); // false

  const regex2 = /^w.rld$/; 
  const str4 = 'w0rld';

  console.log(regex2.test(str4));