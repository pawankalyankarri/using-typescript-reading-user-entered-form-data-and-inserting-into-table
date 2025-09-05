  interface Formdata {
      name : string;
      role : string;
      number : number;
  }

const EmpTable = ({data}) => {
  return (
    <div className="emptable">
      <table>
        <thead>
          <tr>
            <th>Employee Name</th>
            <th>Employee Role</th>
            <th>Mobile Number</th>
          </tr>
        </thead>
        <tbody>
          <tr></tr>
        </tbody>
      </table>
    </div>
  );
};

export default EmpTable;
