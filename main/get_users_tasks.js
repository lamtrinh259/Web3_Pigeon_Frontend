let users = []

function createNewUserAndTask(wallet_address, task) {
  // Need to create a nested dictionary so that 1 wallet_address can hold multiple tasks
  users.push({wallet: wallet_address, rules: [{'task_name': task}]})
  return users
}

function addNewTaskToExistingUsers(existing_user_address, new_task) {
  for (var i = 0; i < users.length; i++) {
    if (users[i]['wallet'] === existing_user_address) {
      users[i]['rules'].push({'task_name': new_task})
    }
    else {
      // console.log("This user doesn't exist yet in the users database")
    }
  }
  return users
}

function getTasksOfUsers(wallet_address) {
  for (var i = 0; i < users.length; i++) {
    // console.log(users[i]['rules'])
    if (users[i]['wallet'] === wallet_address) {
      return users[i]['rules']
      // inquired_user_tasks = users[i]['rules']
    }
  // console.log("This user doesn't have any task yet")
  // return inquired_user_tasks
}}

// For testing
createNewUserAndTask("0x123456", "Buy a vanilla ice cream")
// console.log(users)
// console.log(users[0]['wallet'])
// for (let user of users){
//   console.log(user["wallet"])
// }

addNewTaskToExistingUsers("0x123456", "Eat the ice cream")
// console.log('Same user after added a new task', users[0]['rules'])


// Create a 2nd user
createNewUserAndTask("0x7777777", "Buy a dog")
addNewTaskToExistingUsers("0x7777777", "Take the dog for a walk")
// console.log('tasks of first user are', getTasksOfUsers("0x123456"))
var user_2_tasks = getTasksOfUsers("0x7777777")
console.log('tasks of second user are', user_2_tasks)

console.log('Should have 2 users and 4 different tasks', users)
