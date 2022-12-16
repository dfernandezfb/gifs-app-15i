import { Table } from "react-bootstrap";

const GeneralTable = ({headings, items}) => {
  return ( 
    <Table striped bordered hover>
    <thead>
      <tr>
        {headings.map(heading=><th>{heading}</th>)}        
      </tr>
    </thead>
    <tbody>
      {
        items.length!==0 && items.map(item=>
        <tr>
          {
          Object.values(item).map(value=>
            <td>{value}</td>
          )
          }
        </tr>
          )
      }
      
    </tbody>
  </Table>
   );
}
 
export default GeneralTable;

// const test = {
//   a:1,
//   b:2,
//   c:3
// }

// Object.keys(test) ==> ["a","b","c"]
// Object.values(test) ==> [1, 2, 3]