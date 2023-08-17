import { hourly_sales } from "@/data"

export default function Output(props) {
    return (
      <div className="flex flex-col p-2 space-y-2 bg-green-100 text-center max-w-[200vh]">
        {props.handeler === 0 ? (
          <p className="mt-4 text-center text-gray-600">
            Report Table Coming Soon...
          </p>
        ) : (
          <>
            <table className='w-1/2 mx-auto my-8 text-xl center'>
              <thead>
                <tr key="">
                  <th className='border border-black '>Location</th>
                  <th className='border border-black ' >6am</th>
                  <th className='border border-black ' >7am</th>
                  <th className='border border-black ' >8am</th>
                  <th className='border border-black ' >9am</th>
                  <th className='border border-black ' >10am</th>
                  <th className='border border-black ' >11am</th>
                  <th className='border border-black ' >12pm</th>
                  <th className='border border-black ' >1pm</th>
                  <th className='border border-black ' >2pm</th>
                  <th className='border border-black ' >3pm</th>
                  <th className='border border-black ' >4pm</th>
                  <th className='border border-black ' >5pm</th>
                  <th className='border border-black ' >6pm</th>
                  <th className='border border-black ' >7pm</th>
                  <th className='border border-black ' >Total</th>
  
  
  
                </tr>
              </thead>
              {/* table body */}
              <tbody>
                {props.handeler2.map(obj => (
                  <tr key={obj.id}>
                    <td className='border border-black '>{obj.location}</td>
                    <td className='border border-black '>{hourly_sales[0]}</td>
                    <td className='border border-black '>{hourly_sales[1]}</td>
                    <td className='border border-black '>{hourly_sales[2]}</td>
                    <td className='border border-black '>{hourly_sales[3]}</td>
                    <td className='border border-black '>{hourly_sales[4]}</td>
                    <td className='border border-black '>{hourly_sales[5]}</td>
                    <td className='border border-black '>{hourly_sales[6]}</td>
                    <td className='border border-black '>{hourly_sales[7]}</td>
                    <td className='border border-black '>{hourly_sales[8]}</td>
                    <td className='border border-black '>{hourly_sales[9]}</td>
                    <td className='border border-black '>{hourly_sales[10]}</td>
                    <td className='border border-black '>{hourly_sales[11]}</td>
                    <td className='border border-black '>{hourly_sales[12]}</td>
                    <td className='border border-black '>{hourly_sales[13]}</td>
                    <td className='border border-black '>{hourly_sales[14]}</td>
  
                  </tr>
                ))}
                <tr>
                  <td className='border border-black '>Total</td>
                  <td className='border border-black '>{hourly_sales[0] * props.handeler}</td>
                  <td className='border border-black '>{hourly_sales[1] * props.handeler}</td>
                  <td className='border border-black '>{hourly_sales[2] * props.handeler}</td>
                  <td className='border border-black '>{hourly_sales[3] * props.handeler}</td>
                  <td className='border border-black '>{hourly_sales[4] * props.handeler}</td>
                  <td className='border border-black '>{hourly_sales[5] * props.handeler}</td>
                  <td className='border border-black '>{hourly_sales[6] * props.handeler}</td>
                  <td className='border border-black '>{hourly_sales[7] * props.handeler}</td>
                  <td className='border border-black '>{hourly_sales[8] * props.handeler}</td>
                  <td className='border border-black '>{hourly_sales[9] * props.handeler}</td>
                  <td className='border border-black '>{hourly_sales[10] * props.handeler}</td>
                  <td className='border border-black '>{hourly_sales[11] * props.handeler}</td>
                  <td className='border border-black '>{hourly_sales[12] * props.handeler}</td>
                  <td className='border border-black '>{hourly_sales[13] * props.handeler}</td>
                  <td className='border border-black '>{hourly_sales[14] * props.handeler}</td>
  
  
                </tr>
              </tbody>
            </table>
  
          </>
        )}
      </div>
    )
  }
  