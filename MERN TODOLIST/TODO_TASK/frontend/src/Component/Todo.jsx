import React, { useEffect, useState } from 'react'
import axios from "axios";
const Todo = () => {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [task, setTask] = useState("");
  const [Time, setTime] = useState("");
  const [showTask, setShowTask] = useState(true);
  const [AddTask, setTaskTask] = useState(false);
  const[filter,setFilter]=useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api");

        setData(res.data);
        console.log(res.data);
      }
      catch (err) {
        console.log(`Error in the frontend get api ${err}`);
      }
    }
    fetchData();
  }, []);
  async function handleClick() {
    const ename = name;
    const etask = task;
    const etime = Time;
    const data = { "name": ename, "Task": etask, "Time": etime };
    try {
      const res = axios.post("http://localhost:3000/api", data);
      console.log(res.data);
      const res1 = await axios.get("http://localhost:3000/api");
      setData(res1.data);
    } catch (error) {
      console.log(`Error in the adding api in frontend ${error}`);
    }
    setName("");
    setTask("");
    setTime("");
  }
  const handleFilter =()=>{
    const filteredData = data.filter((item) => {
      return item.name.toLowerCase().includes(filter.toLowerCase());
    });
    setData(filteredData);
  }
  async function Delete(id) {
    try {
      const res = await axios.delete("http://localhost:3000/api", { data: { id: id } });
      console.log(res.data);
      const res1 = await axios.get("http://localhost:3000/api");
      setData(res1.data);
    } catch (err) {
      console.log(`Error in the frontend delete api ${err}`);
    }
  }
  async function Update(id)
  {
    const uname=prompt("Enter the name to be updated");
    const utask=prompt("Enter the task to be updated");
    const utime=prompt("Enter the time to be updated");
    const dt={id:id,name:uname,Task:utask,Time:utime};
    try {
      const dat=await axios.put("http://localhost:3000/api",dt);
      console.log(dat.data);
      const res1 = await axios.get("http://localhost:3000/api");
      setData(res1.data);

    } catch (err)
    {
    console.error("Error in the frontend update api",err);
    }

  }

  return (
    <div className="items-center justify-center bg-black flex flex-col items-center">
      <div className="bg-yellow-600 w-110 h-20  items-center text-center">
        <p className="font-bold text-3xl">TASK</p>
        <div className="flex  items-center justify-center gap-4">
          <div className="bg-green-100 h-7 rounded " ><button onClick={() => { setShowTask(!showTask) }}>ShowTask</button></div>
          <div className="bg-green-100  h-7 rounded" ><button onClick={() => { setTaskTask(!AddTask) }}>AddTask</button></div>
        </div>
      </div>
      {showTask && <div className="bg-white w-110 h-60 gap-3">
        <div className="postion-absolute flex  justify-end gap-3">
          <p>Filter:</p>
          <input className="w-30 bg-gray-200" placeholder='Search by Name' value={filter} onChange={(e)=>{setFilter(e.target.value)}}></input>
          <button className="bg-blue-300 rounded-lg text-black" onClick={handleFilter}>Search</button>
          </div>
        <div><table className="border-3 border-black w-full">
          <thead>
            <tr>
              <th className="text-xl">Name</th>
              <th className="text-xl">Task</th>
              <th className="text-xl">Time</th>
              <th className="text-xl">Delete</th>
              <th className="text-xl">Update</th>
            </tr>

          </thead>
          <tbody>
            {data.map((item, ind) => (
              <tr key={ind}>
                <td>{item.name}</td>
                <td>{item.Task}</td>
                <td>{item.Time}</td>

                <td><button className="bg-red-200 " onClick={() => Delete(item._id)}>Detele </button></td>
                <td><button className="bg-green-200" onClick={()=>Update(item._id)}>Update </button></td>
              </tr>
            ))
            }

          </tbody>
        </table></div>
      </div>
      }
      {AddTask && <div className="bg-white w-110 h-60">
        <div className="flex flex-col items-center justify-center gap-1">
          <p>Enter the name of the employee</p>
          <input type="text" className="bg-gray-300  font-bold rounded" value={name} onChange={(e)=>{setName(e.target.value)}}></input>
          <p>Enter the Task</p>
          <input type="text" className="bg-gray-300  font-bold rounded" value={task} onChange={(e)=>{setTask(e.target.value)}}></input>
          <p>Enter the Time</p>
          <input type="text" className="bg-gray-300  font-bold rounded" value={Time} onChange={(e)=>{setTime(e.target.value)}}></input>
          <button className="bg-yellow-200 text-black font-bold items-center text-center justify-center h-10 w-30 rounded-lg" onClick={handleClick}>ADD</button>
        </div>
      </div>
      }</div>
  )
}

export default Todo