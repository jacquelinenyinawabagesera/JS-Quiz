// Number1.   pseudo-code



// Step1:  Create a class called CustomerOrder with properties 
// a. orderId:(string)
// b. items: an array of objects where each object has a name:(string) quantity: (number) and price:number
// c. Status:(string) Current status of the order

// Step2: Create two methods
// a. calculateTotal() 
// -- Initialize a variable total to 0
// -- Loop through each item in the items array
// -- For each item, multiply quantity by price 
// -- Add the result to the total
// -- Return the total amount

// b. processPayment() and async method
// -- Returns a promise that waits for 2 seconds and after two seconds resolves successfully and after the Promise resolves
//  the status property change to paid and a success message is printed including orderId and the new status of the order


class CustomerOrder {
    constructor(orderId, items, status) {
      this.orderId = orderId;
      this.items = items;
      this.status = status;
    }
  
    calculateTotal() {
      let total = 0;
      for (let i = 0; i < this.items.length; i++) {
        total += this.items[i].quantity * this.items[i].price;
      }
      return total;
    }
  
    async processPayment() {
      await new Promise((resolve) => setTimeout(resolve, 2000));

      this.status = "paid";
      console.log(`Payment processed successfully for order ${this.orderId}. Status updated to ${this.status}`);
    }
  }
  
  let newOrder = new CustomerOrder("001A", [
    { name: "Shoe", quantity: 4, price: 20 },
    { name: "Bag", quantity: 2, price: 30 },
  ]);
  
  console.log("Total amount charged:", newOrder.calculateTotal()); 
  newOrder.processPayment(); 
  


// Number 2. Pseudocode
// Step 1: Create a class TeamMember with three properties: name (string) role (string) and tasks (array of objects, each with title and completed boolean)

// Step 2: Create the constructor
// Initialize the name, role, and tasks attributes with values passed during object creation

// Step 3: Create a method completeTask(taskTitle) Iterate over each task in the tasks array
// For each task: If the task's title matches taskTitle, mark it completed property as true

// Log to the console that the task was completed

// If no match or task is incomplete, log that the task is still pending

// Step 4: Create a method checkProgress()
// This method should be asynchronous and return a Promise

// Inside the Promise:

// Check if all tasks in the tasks array have completed set to true

// If yes, resolve the Promise with the message: "All tasks are completed"

// Else, reject the Promise with the message: "Pending tasks remaining"

class TeamMember {
    constructor(name, role, tasks) {
        this.name = name;
        this.role = role;
        this.tasks = tasks;
    }
    completeTask(taskTitle) {
        let allCompleted = true;
        this.tasks.forEach(task => {
            if (task.completed) {
                console.log(`${task.title} is completed.`);
            } else {
                console.log(`${task.title} is pending.`);
                allCompleted = false;
            }
        });
        return allCompleted;
    }
}

let teamMember1 = new TeamMember(
    'Jacky',
    'Developer',
    [
        { title: 'QA', completed: true },
        { title: 'Backend', completed: false }
    ]
);

let promise = new Promise((resolve, reject) => {
    const allCompleted = teamMember1.completeTask();
    if (allCompleted) {
        resolve('All tasks completed!');
    } else {
        reject('Pending tasks remaining');
    }
});

promise
    .then((response) => {
        console.log(response);
        console.log(`Good job on completing all tasks!`);
    })
    .catch((response) => {
        console.log(response);
    })
    .finally(() => {
        console.log(`I have learned a lot during these tasks.`);
    });




// Number3. Pseudocode



// Create class Candidate with constructor and properties  name, position, and originalInterviews with empty array.

// Create a method scheduleInterview that takes in date.

// Inside scheduleInterview, create newInterview object with date and status = "pending".

// Push newInterview into this.interviews array.

// Create async method sendConfirmation().

// Inside sendConfirmation, return a Promise that waits 1 second using setTimeout.

// After 1 second, resolve Promise with message "Interview confirmed with [name]".

// When Promise resolves, console log the message .

// Create array originalInterviews with two interview objects with dates and status.

// Create new Candidate instance with name and position.

// Call scheduleInterview("2025-06-09") on candidate instance.

// Call sendConfirmation() on candidate instance.

// Console Log candidate.interviews.





  class Candidate {
    constructor(name, position, originalInterviews = []) {
      this.name = name;
      this.position = position;
      this.interviews = originalInterviews;
    }
  
    scheduleInterview(date) {
      let newInterview = {
        date: date,
        status: "pending"
      };
      this.interviews.push(newInterview);
    }
  
    async sendConfirmation() {
      return new Promise((resolve) => {
        setTimeout(() => {
          let message = `Interview confirmed with ${this.name}`;
          resolve(message);
        }, 1000);
      }).then((msg) => {
        console.log(msg);
        return msg;
      });
    }
  }
  
  let originalInterviews = [
    { date: "2025-05-28", status: "completed" },
    { date: "2025-05-30", status: "pending" }
  ];
  
  let candidate = new Candidate("Jane", "Backend Engineer");
  
  candidate.scheduleInterview("2025-06-09");
  
  candidate.sendConfirmation();
  console.log(candidate.interviews);




// Number4. Pseudocode
// Create a Course class that has three properties: title (string) ,instructor (string) and students (array) 
// Add a method updateProgress(studentName, value) that: Searches in the students array to find the student object whose name matches studentName.
// If found, updates that student's progress property to the new value.
// Add an asynchronous method generateCertificate(studentName) that: Searches for the student by studentName in the students array.
// Returns a Promise that:
// Resolves with a success message if the student's progress is exactly 100.
// Rejects with the message "Incomplete progress" if the progress is less than 100.



class Course {
    constructor(title, instructor, students = []) {
      this.title = title;
      this.instructor = instructor;
      this.students = students; 
    }
  
    updateProgress(studentName, value) {
      let student = this.students.find(element => element.name === studentName);
      if (student) {
        student.progress = value;
      } else {
        console.log(`Student "${studentName}" not found.`);
      }
    }
  
    async generateCertificate(studentName) {
      let student = this.students.find(element => element.name === studentName);
      return new Promise((resolve, reject) => {
        if (!student) {
          reject(`Student "${studentName}" not found.`);
        } else if (student.progress === 100) {
          resolve(`Certificate generated for ${student.name} in course "${this.title}".`);
        } else {
          reject("Incomplete progress");
        }
      });
    }
  }
  
  let course = new Course("Frontend Mobile", "Jane", [
    { name: "Jack", progress: 60 },
    { name: "Jackson", progress: 100 }
  ]);
  
  course.updateProgress("Jack", 100);
  
  course.generateCertificate("Jacky")
    .then(msg => console.log(msg)) 
    .catch(err => console.error(err)); 
  
  course.generateCertificate("Mary")
    .then(msg => console.log(msg))
    .catch(err => console.error(err)); 
  
  course.generateCertificate("Jack")
    .then(msg => console.log(msg))  
    .catch(err => console.error(err));
  
  






// Number5. Pseudocode



//   Create a class StockTracker.
  
//   Initialize property watchlist as an empty array inside the constructor.
  
//   Create method addStock(symbol, threshold, currentPrice) to add a new stock object to watchlist.
  
//   Create a method updatePrice(symbol, newPrice) to find a stock by symbol and update its currentPrice.
  
//   Create async method checkAlerts() that: Creates an empty array triggeredStocks. and Loops through each stock in watchlist.
  
//   If a stock's currentPrice is greater than or equal to its threshold, add it to triggeredStocks.
  
//   If triggeredStocks is not empty, resolve a Promise with this array after a short delay.
  
//   Else, reject the Promise with the message "No alerts triggered".


class StockTracker {
    constructor() {
      this.watchlist = [];
    }
  
    addStock(symbol, threshold, currentPrice) {
      this.watchlist.push({ symbol, threshold, currentPrice });
    }
  
    updatePrice(symbol, newPrice) {
      let stock = this.watchlist.find(item => item.symbol === symbol);
      if (stock) {
        stock.currentPrice = newPrice;
      }
    }
  
    async checkAlerts() {
      return new Promise((resolve, reject) => {
        let triggeredStocks = [];
        for (let i = 0; i < this.watchlist.length; i++) {
          let stock = this.watchlist[i];
          if (stock.currentPrice >= stock.threshold) {
            triggeredStocks.push(stock);
          }
        }
  
        setTimeout(() => {
          if (triggeredStocks.length > 0) {
            resolve(triggeredStocks);
          } else {
            reject("No alerts triggered");
          }
        }, 500);
      });
    }
  }
  
  const tracker = new StockTracker();
  
  tracker.addStock("XYZ", 100, 95);
  tracker.addStock("LMN", 200, 210);
  
  tracker.updatePrice("XYZ", 105);
  tracker.updatePrice("LMN", 199);
  
  tracker.checkAlerts()
    .then(alerts => {
      console.log("Stocks triggering alerts:");
      alerts.forEach(stock => {
        console.log(`${stock.symbol} Current: ${stock.currentPrice}, Threshold: ${stock.threshold}`);
      });
    })
    .catch(message => {
      console.log(message);
    });
  
  