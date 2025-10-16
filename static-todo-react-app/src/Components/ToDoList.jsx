
function ToDoList(){
    const taskArray = ["Learn React", "Build a project", "Read documentation"];

    return (
        <section>
            <ul className="todo-list">
                {taskArray.map((task, i) => (
                <li key={i} className="todo-item">{task}</li>))}
            </ul>
        </section>
    );
}

export default ToDoList;