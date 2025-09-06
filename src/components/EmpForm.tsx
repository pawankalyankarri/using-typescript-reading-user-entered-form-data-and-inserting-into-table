import { useRef, useState } from "react";
import "../App.css";
import EmpTable from "./EmpTable";
const EmpForm = () => {
  interface Formdata {
    name: string;
    role: string;
    number: number;
  }
  let [arr, setArr] = useState<Formdata[]>([]);
  let nameRef = useRef<HTMLInputElement | null>(null);
  let roleRef = useRef<HTMLInputElement | null>(null);
  let mobileRef = useRef<HTMLInputElement | null>(null);

  function handleData(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    let data: Formdata = {
      name: nameRef.current?.value || "",
      role: roleRef.current?.value || "",
      number: Number(mobileRef.current?.value) || 0,
    };
    if (nameRef.current) nameRef.current.value = "";
    if (roleRef.current) roleRef.current.value = "";
    if (mobileRef.current) mobileRef.current.value = "";
    console.log(data);
    setArr((prev) => [...prev, data]);
  }

  return (
    <div className="emp">
      <form action="" onSubmit={handleData}>
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
          <input type="submit" value="Insert" />
        </div>
      </form>
      <br />
      <br />
      <EmpTable arr={arr} /> 
    </div>
  );
};
export default EmpForm;
