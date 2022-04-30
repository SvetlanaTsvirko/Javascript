
 function checkAge(age) {
    let age_2 = 18;
    let age_3 = 60;
    if (age < age_2) {
        console.log(`You don't have access cause your age is ${age} and It's less than ${age_2}`);
    } else if (age >= age_2 && age < age_3) {
        console.log('Welcome !');
    } else if (age > age_3) {
        console.log('Keep calm and look Cultura Channel');
    } else {
        console.log('Technical work');
    }
}
checkAge(17);
checkAge(18);
checkAge(61);

// const checkAge = function(age) {
//     //Number(age);
//     let age_2 = 18;
//     let age_3 = 60;
//     if (typeof(age) != "number") {
//         console.log ('Error');
//     } else {
//         if (age < age_2) {
//             console.log(`You don't have access cause your age is ${age} and It's less than ${age_2}`);
//         } else if (age >= age_2 && age < age_3) {
//             console.log('Welcome !');
//         } else if (age > age_3) {
//             console.log('Keep calm and look Cultura Channel');
//         } else {
//             console.log('Technical work');
//         }
//     }
// }
// checkAge(17);

// const checkAge = function(age) {
//     let age_2 = 18;
//     let age_3 = 60;
//     if (typeof(age) == 'number') {
//       if (age < age_2) {
//           console.log('You do not have access cause your age is ' + age + ' and It is less than ' + age_2); 
//       }  else if (age >= age_2 && age < age_3) {
//         console.log('Welcome !');
//     } else if (age >= age_3) {
//         console.log('Keep calm and look Cultura Channel');
//     } else {
//         console.log('Technical work');
//     }
//     } else {
//         console.log('Error');
//     }
// }
// checkAge(17);
// checkAge(18);
// checkAge(61);
// checkAge('userName');


// function checkAge(age) {
//     let age_2 = 18;
//     let age_3 = 60;
//     if (typeof(age) == "number") {
//         if (age < age_2) {
//             console.log(`You don't have access cause your age is ${age} and It's less than ${age_2}`);
//         } else if (age >= age_2 && age < age_3) {
//             console.log('Welcome !');
//         } else if (age >= age_3) {
//             console.log('Keep calm and look Cultura Channel');
//         } else {
//             console.log('Technical work');   
//     } 
//     } else {
//         console.log("Error");
// }
// }
// checkAge(17);
// checkAge('userName');

// let age_2 = 18;
// let age_3 = 60;

// const checkAge = function (age) {
//     age = Number(age);
//     if (!isNaN(age)) {
//         if (age < age_2) {
//             console.log(`You don't have access cause your age is ${age} and It's less than ${age_2}`);
//         } else if (age >= age_2 && age < age_3) {
//             console.log('Welcome !');
//         } else if (age >= age_3) {
//             console.log('Keep calm and look Cultura Channel');
//         } else {
//             console.log('Technical work');   
//     } 
//     } else {
//         console.log("Not a number");
//     }
// }
// checkAge('22a')

// let agePrompt = prompt('Enter age');
// checkAge(agePrompt)