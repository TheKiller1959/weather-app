import '../App.css'

const FullDate = ({date, dt, mn}) => {

  const data = new Date(date * 1000);
  const day = data.getDay();
  const dayNum = data.getDate();
  const month = data.getMonth();
  const year = data.getFullYear();

  if (day === 0) {
    dt = 'Sunday'
  } else if (day === 1) {
    dt = 'Monday'
  } else if (day === 2) {
    dt = 'Tuesday'
  } else if (day === 3) {
    dt = 'Wednesday'
  } else if (day === 4) {
    dt = 'Thursday'
  } else if (day === 5) {
    dt = 'Friday'
  } else if (day === 6) {
    dt = 'Saturday'
  }

  if (month === 0) {
    mn = 'January'
  } else if (month === 1) {
    mn = 'February'
  } else if (month === 2) {
    mn = 'March'
  } else if (month === 3) {
    mn = 'April'
  } else if (month === 4) {
    mn = 'May'
  } else if (month === 5) {
    mn = 'June'
  } else if (month === 6) {
    mn = 'July'
  } else if (month === 7) {
    mn = 'August'
  } else if (month === 8) {
    mn = 'September'
  } else if (month === 9) {
    mn = 'October'
  } else if (month === 10) {
    mn = 'November'
  } else if (month === 11) {
    mn = 'December'
  }

  return (
    <div>
      <h2 className='full-date padding'>{mn} {dayNum}, {year} ({dt})</h2>
    </div>
  );
}

export default FullDate