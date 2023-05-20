import Table from 'react-bootstrap/Table';
import { Link} from 'react-router-dom';
// import { Checkmark } from 'react-checkmark'
import './style.css'
const Tableform = (props)=> {
  return (
    <div className="Table">
    <Table striped bordered hover >
      <thead>
        <tr>
          <th>S.N</th>
          <th>Patient Name</th>
          <th>Patient Id</th>
          <th>Address</th>
          <th>View Details</th>
        </tr>
      </thead>
      <tbody >
        <tr>
          <td>1</td>
          <td>Akash Sunar</td>
          <td>0291</td>
          <td>Nawalprasii</td>
          <td>
         <Link to = '/aakash0291'>
         <button className="btn btn-transparent"> View Details</button>
         </Link>
          </ td>
        </tr>
        <tr>
        <td>2</td>
          <td>Navaraj Poudel</td>
          <td>0292</td>
          <td>Butwal</td>
          <td>
         <Link to='/nawaraj0292'><button className="btn btn-transparent"> View Details</button></Link>
          </ td>
        </tr>
        <tr>
          <td>3</td>
          <td>Jagdish Yogi</td>
          <td>0293</td>
          <td>Pyuthan</td>
          <td>
         <Link to='/jagdish0293'><button className="btn btn-transparent"> View Details</button></Link>
          </ td>
        </tr>

        <tr>
          <td>4</td>
          <td>Gobinda Pandey</td>
          <td>0294</td>
          <td>Syanga</td>
          <td>
         <Link to= '/gobinda0293'><button className="btn btn-transparent"> View Details</button></Link>
          </ td>
        </tr>

        <tr>
          <td>5</td>
          <td>Karun Kc</td>
          <td>0295</td>
          <td>Baglung</td>
          <td>
         <Link to= '/karun0293'><button className="btn btn-transparent"> View Details</button></Link>
          </ td>
        </tr>

        <tr>
          <td>6</td>
          <td>Karan Subedi</td>
          <td>0296</td>
          <td>Nawalparasi</td>
          <td>
         <Link to= '/karan0293'><button className="btn btn-transparent"> View Details</button></Link>
          </ td>
        </tr>

        <tr>
          <td>7</td>
          <td>Ashish Lamichhane</td>
          <td>0297</td>
          <td>Kaski</td>
          <td>
         <Link to= '/ashish0293'><button className="btn btn-transparent"> View Details</button></Link>
          </ td>
        </tr>
        <tr>
          <td>8</td>
          <td>Nischal Lamichhane</td>
          <td>0297</td>
          <td>Chitwan</td>
          <td>
         <Link to= '/nischal0293'><button className="btn btn-transparent"> View Details</button></Link>
          </ td>
        </tr>
      </tbody>
    </Table>
          </div>
  );
}

export default Tableform;