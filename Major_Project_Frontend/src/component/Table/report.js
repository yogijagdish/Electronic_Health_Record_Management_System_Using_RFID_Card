import React, {useState, useEffect } from 'react'
import Table from 'react-bootstrap/Table';
import { Link} from 'react-router-dom';

import { useDisplayReportAPIQuery } from '../../services/datacommunication';

import { getToken } from '../../services/tokenService';

import ReportDownload from '../Patient/ReportDownload';

import './style.css'
const Report = () => {

  const {access_token} = getToken();

  const [userTest, setUserTest] = useState([0])

  const {data, isSuccess} = useDisplayReportAPIQuery(access_token)

  useEffect(()=> {
    if(data&& isSuccess) {
      setUserTest(data)
      console.log(data)
    }
  })

  return (
    <div className="Table">
    <Table striped bordered hover >
      <thead>
        <tr>
          <th>User Id</th>
          <th>Tests</th>
          <th>Date and Time</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody >
        {userTest.map((item) => (
          <tr key={item.id}>
          <td>{item.user_id}</td>
          <td>{item.test}</td>
          <td>{item.date}</td>
          <td>
          {/* <Link to='/akash0291'><i class="fas fa-eye fa-lg"></i></Link> */}
          {/* <Link to='/akash0291'><i class="fas fa-download fa-lg"></i></Link> */}
          <ReportDownload reporturl={item.report}/>
          </td>
        </tr>
          ))}
        {/* <tr>
        <td>2</td>
          <td>Renal function test(RFT)</td>
          <td>May 09, 2022</td>
          <td>
          <Link to='/akash0291'><i class="fas fa-eye fa-lg"></i></Link>
          <Link to='/akash0291'><i class="fas fa-download fa-lg"></i></Link>
          </td>
        </tr>

        <tr>
          <td>3</td>
          <td>Ultrasound test</td>
          <td>January 05, 2021</td>
          <td>
          <Link to='/akash0291'><i class="fas fa-eye fa-lg"></i></Link>
          <Link to='/akash0291'><i class="fas fa-download fa-lg"></i></Link>
          </td>
        </tr>

        <tr>
          <td>4</td>
          <td>X-ray test</td>
          <td>February 04, 2020</td>
          <td>
          <Link to='/akash0291'><i class="fas fa-eye fa-lg"></i></Link>
          <Link to='/akash0291'><i class="fas fa-download fa-lg"></i></Link>
          </td>
        </tr>

        <tr>
          <td>5</td>
          <td>Ultrasound test</td>
          <td>January 05, 2021</td>
          <td>
          <Link to='/akash0291'><i class="fas fa-eye fa-lg"></i></Link>
          <Link to='/akash0291'><i class="fas fa-download fa-lg"></i></Link>
          </td>
        </tr>

        <tr>
          <td>6</td>
          <td>Ultrasound test</td>
          <td>January 05, 2021</td>
          <td>
          <Link to='/akash0291'><i class="fas fa-eye fa-lg"></i></Link>
          <Link to='/akash0291'><i class="fas fa-download fa-lg"></i></Link>
          </td>
        </tr>

        <tr>
          <td>7</td>
          <td>Ultrasound test</td>
          <td>January 05, 2021</td>
          <td>
          <Link to='/akash0291'><i class="fas fa-eye fa-lg"></i></Link>
          <Link to='/akash0291'><i class="fas fa-download fa-lg"></i></Link>
          </td>
        </tr>
        <tr>
          <td>8</td>
          <td>Ultrasound test</td>
          <td>January 05, 2021</td>
          <td>
          <Link to='/reportview'><i class="fas fa-eye fa-lg"></i></Link>
          <Link to='/reportdownload'><i class="fas fa-download fa-lg"></i></Link>
          </td>
        </tr> */}
      </tbody>
    </Table>
          </div>
  )
}

export default Report
