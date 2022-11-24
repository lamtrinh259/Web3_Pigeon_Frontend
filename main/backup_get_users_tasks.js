// var users = {}; // Master dictionary, the old JS way
const users = new Map(); // Proper way to create dictionary in modern JS
const users_tasks = new Map() // This dictonary will hold the tasks for users

function createNewUserAndTask(wallet_address, task_name) {
  // Need to create a nested dictionary so that 1 wallet_address can hold multiple tasks
  // users[wallet_address] = task_name; // This is not sufficient
  users.set(wallet_address, users_tasks)
  users_tasks.set('task_1', task_name)
  console.log(`New user with wallet ${wallet_address} with task ${task_name} was created successfully`)
  return users
}

function addNewTaskToExistingUsers(existing_user_address, task_name) {
  users.get(existing_user_address)
  users_tasks.set('task_2', task_name)
  return users
}

function getTasksOfUsers(wallet_address) {
  // Make sure it's a valid address
  // try{
    // The syntax below is wrong in JS
  // if (len(wallet_address) > 0 && wallet_address.startswith('0x')) {
  return users[wallet_address]
  // }} catch {
  console.log('Please enter a valid wallet address')
  // }
}

// For testing
createNewUserAndTask("0x123456", "Buy a vanilla ice cream")
console.log(users)
console.log('Users tasks are', users_tasks)

addNewTaskToExistingUsers("0x123456", "Eat the ice cream")
console.log('Users after added a new task', users)


// Create a 2nd user
createNewUserAndTask('0x7777777', "Buy a dog")
addNewTaskToExistingUsers('0x7777777', "Take the dog for a walk")
console.log(getTasksOfUsers("0x123456"))

console.log(users_tasks)
console.log('Should have 2 users and 4 different tasks', users)
