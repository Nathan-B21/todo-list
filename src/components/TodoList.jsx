import React, {useState} from 'react';


const TodoList = () =>{

    const [todoList, setTodoList] = useState({
        task: "",
        isComplete: false
    })

    const [allTodoList, setAllTodoList] = useState([]);



    const changeHandler = (e) =>{
        setTodoList({...todoList,[e.target.name]:e.target.value});
    }

    const submitHandler = (e) =>{
        e.preventDefault();
        console.log("submitted the form")

        setAllTodoList([...allTodoList, todoList])
        setTodoList({
            task: "",
            isComplete: false
        });
    }
    
    const completeTask = (e,idx) =>{
        //set the isComplete property to true of the item at that index
        console.log(idx)
        //take idx relate to todolistarray

        let tasks = [...allTodoList]
        console.log(tasks[idx]);
        tasks[idx].isComplete = true;
        setAllTodoList(tasks);

    }

    const deleteTask = (e,idx) =>{
        console.log("deleting this task", idx);

        // let students = [...allStudents]
        // students.splice(indexNumber,1);
        // setAllStudents(students);
        let tasks = [...allTodoList]
        console.log(tasks[idx]);
        tasks.splice(idx,1);
        setAllTodoList(tasks);
        // let result = allTodoList.filter((item, idx)=>{
        //     return idx != indexNumber;
        // })
        // setAllTodoList(result);
            
        
    }
    // const deleteStudent = (e,indexNumber) =>{
    //     console.log("deleteing this student", indexNumber);
    //     // let students = [...allStudents]
    //     // students.splice(indexNumber,1);
    //     // setAllStudents(students);

    //     let result = allStudents.filter((student, idx)=>{
    //         return idx != indexNumber;
    //     })
    //     setAllStudents(result);
        
    // }




    return(
        <div>
            <form onSubmit = {submitHandler}>
                <div className = "form-group">
                <input onChange = {changeHandler} type = "text" className="form-control" name="task" value = {todoList.task}></input>
                </div>
                <button type="submit" className="btn btn-primary mb-2">Add</button>
            </form>


        <div>
            {
                allTodoList.map((item, idx)=>{
                    return(

                        
                        <ul>
                            <li key= {idx} style =  {{textDecorationLine:item.isComplete? "line-through":"none"}}>{item.task}
                            <input onClick={e=> completeTask(e,idx)} type="checkbox" name="isComplete" id="" />
                            <button onClick={e=> deleteTask(e,idx)}>remove</button>
                            </li>
                        </ul>
                    )
                })
            }
        </div>
        </div>
    )
}
export default TodoList;