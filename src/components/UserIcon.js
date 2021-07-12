import { ReactComponent as ChocolateIcon } from '../images/chocolate.svg';
import { ReactComponent as CookieIcon } from '../images/cookie.svg';
import { ReactComponent as HamburgerIcon } from '../images/hamburger.svg';
import { ReactComponent as CupcakeIcon } from '../images/cupcake.svg';
import { ReactComponent as IceCreamIcon } from '../images/ice-cream.svg';
import { ReactComponent as CakeIcon } from '../images/piece-of-cake.svg';
import { ReactComponent as PizzaIcon } from '../images/pizza.svg';
import { ReactComponent as SodaIcon } from '../images/soda.svg';
import { ReactComponent as TacoIcon } from '../images/taco.svg';
import { ReactComponent as ToastIcon } from '../images/toast.svg';

export default function UserIcon({ user }) {
  const { username, color, icon_id } = user;
  const style = {
    fill: color,
    stroke: color
  };
  console.log(color);
  const showUserIcon = () => {
    switch (icon_id) {
      case 1:
        return <ChocolateIcon style={style} />;
      case 2:
        return <CookieIcon style={style} />;
      case 3:
        return <HamburgerIcon style={style} />;
      case 4:
        return <CakeIcon style={style} />;
      case 5:
        return <CupcakeIcon style={style} />;
      case 6:
        return <IceCreamIcon style={style} />;
      case 7:
        return <PizzaIcon style={style} />;
      case 8:
        return <SodaIcon style={style} />;
      case 9:
        return <TacoIcon style={style} />;
      case 10:
        return <ToastIcon style={style} />;
      default:
        return <ChocolateIcon style={style} />;
    }
  };
  return (
    <div className='UserIcon'>
      {showUserIcon()}
      <p className='user-icon-name' style={{ color: color }}>
        {username}
      </p>
    </div>
  );
}
