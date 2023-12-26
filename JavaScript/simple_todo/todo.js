let options = "Choose an option: \nnew: to add an item\nlist: to show your list\ndelete: to delete an item\nquit: to exit the app";
let input = prompt(`${options}`).toLowerCase();
let list = [];

while (input !== "quit") {
    if (input === "new") {
        input = prompt('Add an entry: ');
        list.push(input);
        input = prompt(`${options}`).toLowerCase();
    }
    else if (input === "delete") {
        input = prompt('Choose the item number to delete: ');
        if (input.toLowerCase() === "all") {
            list = [];
        }
        else {
            list.splice(input, 1);
        }
        input = prompt(`${options}`).toLowerCase();
    }
    else if (input === "list") {
        console.log("Here's your todo list:");
        for (let item of list) {
            console.log(`${list.indexOf(item)}: ${item}`);
        }
        input = prompt(`${options}`).toLowerCase();
    }
    else {
        input = prompt("Enter a valid option: ")
    }
}

alert("Closed the app");