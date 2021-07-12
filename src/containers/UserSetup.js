import PickColor from '../components/PickColor';
import PickUsername from '../components/PickUsername';
import PickIcon from '../components/PickIcon';

import UserIcon from '../components/UserIcon';

export default function UserSetup({ setUser, user, addUserToGame }) {
  const setUserAttribute = (attribute, username) => {
    const newUser = { ...user };
    newUser[attribute] = username;
    setUser(newUser);
  };

  return (
    <div className='UserSetup lobby-card card'>
      <p>Customize your avatar</p>
      <UserIcon user={user} />
      <PickIcon setUserAttribute={setUserAttribute} />
      <PickColor setUserAttribute={setUserAttribute} color={user.color} />
      <PickUsername
        setUserAttribute={setUserAttribute}
        user={user}
        addUserToGame={addUserToGame}
      />
    </div>
  );
}
