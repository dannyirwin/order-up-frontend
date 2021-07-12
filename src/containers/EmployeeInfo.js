import generateEmployee from '../generateEmployee';

export default function EmployeeInfo({ user }) {
  return (
    <div className='EmployeeInfo'>
      <div>
        <h5>Employee:</h5>
        <p className='color-2'>{user.username}</p>
      </div>
      <div>
        <h5>Completed Orders:</h5>
        <h3 className='color-3'>{user.points || 0}</h3>
      </div>
    </div>
  );
}
