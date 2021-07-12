import { useState } from 'react';

import { SliderPicker } from 'react-color';

export default function PickColor({ setUserAttribute, color }) {
  const handleChangeComplete = (colorObj, e) => {
    setUserAttribute('color', colorObj.hex);
  };
  console.log(color);
  return (
    <div className='PickColor'>
      <SliderPicker color={color} onChangeComplete={handleChangeComplete} />
    </div>
  );
}
