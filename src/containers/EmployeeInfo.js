import generateEmployee from '../generateEmployee';

export default function EmployeeInfo({ points }) {
  return (
    <div className='EmployeeInfo'>
      <div>
        <h5>Employee:</h5>
        <p className='color-2'>{generateEmployee()}</p>
      </div>
      <div>
        <h5>Completed Orders:</h5>
        <h3 className='color-3'>{points || 0}</h3>
      </div>
    </div>
  );
}
