console.log("Hi");

let todoArray = [];

const fetchTodosFromFirebase2 = async () => {
    try {
        const response = await fetch(
            "https://todolist-zahra-default-rtdb.firebaseio.com/todos.json"
        );

        const data = await response.json();

        if (data) {
            todoArray = Object.keys(data).map((key) => ({
                id: key,
                title: data[key].title,
                complete: data[key].complete,
            }));

            console.log("Fetched Todos:", todoArray);
            todoArray.forEach((todo) => createTodoItem(todo));
        }
    } catch (error) {
        console.error("Error fetching todos:", error);
    }
};

fetchTodosFromFirebase2();
