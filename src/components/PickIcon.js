import React from 'react';
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

export default function PickIcon({ setUserAttribute }) {
  const style = {
    fill: '#000',
    stroke: '#000'
  };

  const selectIcon = icon_id => {
    setUserAttribute('icon_id', icon_id);
  };

  return (
    <div className='PickIcon'>
      <div className='character-icons-container'>
        <div>Pick and Icon</div>
        <ChocolateIcon style={style} onClick={() => selectIcon(1)} />
        <CookieIcon style={style} onClick={() => selectIcon(2)} />
        <HamburgerIcon style={style} onClick={() => selectIcon(3)} />
        <CakeIcon style={style} onClick={() => selectIcon(4)} />
        <CupcakeIcon style={style} onClick={() => selectIcon(5)} />
        <IceCreamIcon style={style} onClick={() => selectIcon(6)} />
        <PizzaIcon style={style} onClick={() => selectIcon(7)} />
        <SodaIcon style={style} onClick={() => selectIcon(8)} />
        <TacoIcon style={style} onClick={() => selectIcon(9)} />
        <ToastIcon style={style} onClick={() => selectIcon(10)} />
      </div>
    </div>
  );
}
