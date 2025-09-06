
interface Formdata {
  name: string;
  role: string;
  number: number;
}
interface Emparr {
  arr: Formdata[];
}

const EmpTable = ({ arr }: Emparr) => {

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
          {arr.map((item, idx) => {
            return (
              <tr key={idx}>
                <td>{item.name}</td>
                <td>{item.role}</td>
                <td>{item.number}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default EmpTable;
