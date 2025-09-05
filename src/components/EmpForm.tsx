import { useRef } from "react";
import "../App.css";
import EmpTable from "./EmpTable";
const EmpForm = () => {
  interface Formdata {
      name : string;
      role : string;
      number : number;
  }
  let arr :[{}] = []
  let nameRef = useRef<HTMLInputElement | null>(null);
  let roleRef = useRef<HTMLInputElement | null>(null);
  let mobileRef = useRef<HTMLInputElement | null>(null);

  function handleData(e:React.FormEvent<HTMLFormElement>):void{
    console.log(e)
    e.preventDefault()
    let data : Formdata = {
        name:nameRef.current?.value || "",
        role:roleRef.current?.value || "",
        number: Number(mobileRef.current?.value) || 0
    }
    console.log(data)
  }
  return (
    <div className="emp">
      <form action="" onSubmit ={handleData}>
        <div>
          <label htmlFor="name">Employee Name</label>&emsp;
          <input type="text" id="name" ref={nameRef} />
        </div>
        <br />
        <div>
          <label htmlFor="role">Role</label>&emsp;
          <input type="text" id="role" ref={roleRef} />
        </div>
        <br />
        <div>
          <label htmlFor="num">Mobile Number</label>&emsp;
          <input type="Number" id="num" ref={mobileRef} />
        </div>
        <br />
        <div>
          <input type="submit" value="Insert"/>
        </div>
      </form>
      <br />
      <br />
       <EmpTable data = {data}/>  {/*   */}
    </div>
  );
};
export default EmpForm;
