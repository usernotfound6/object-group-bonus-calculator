// array of employee objects
const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

console.log('array of employee data: ',  employees );


// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// This problem is massive! Break the problem down, take small steps, and test as you go.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.




// This function will calculate 1 employee's bonus!
//
function calculateIndividualEmployeeBonus( employee ) {  
  console.log(' Name of employee: ', employee);
  // your logic here
  let bonusPercentage;

  const salaryNumber = Number(employee.annualSalary)

    if (employee.reviewRating <= 2){
      bonusPercentage = 0
    } else if (employee.reviewRating == 3) {
      bonusPercentage = 4
    } else if (employee.reviewRating == 4) {
      bonusPercentage = 6
    } else if (employee.reviewRating == 5) {
      bonusPercentage = 10
    }
    if (employee.employeeNumber.length == 4) {
      bonusPercentage += 5
    }
    if (employee.annualSalary > 65000) {
      bonusPercentage -= 1
    }
    if (bonusPercentage > 13) {
      bonusPercentage = 13
    }
    if (bonusPercentage < 0) {
      bonusPercentage = 0
    }

    let bonusAsDecimal = bonusPercentage/100
    let totalBonus = Math.floor(salaryNumber * bonusAsDecimal)


    let totalCompensation = totalBonus + salaryNumber
    

    let result = {
      name: employee.name,
      bonusPercentage: bonusPercentage,
      totalCompensation: totalCompensation,
      totalBonus: totalBonus
    }

    return result
  }
  
  for (let individual of employees){
    console.log(`%c ${individual.name}`, 'color: black; background: yellow;')
    console.log(calculateIndividualEmployeeBonus(individual))
  }

  // return new object with bonus results
// return employees.name
;