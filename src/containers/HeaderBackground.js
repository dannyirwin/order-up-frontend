import IconOne from '../components/Icons/IconOne';
import IconTwo from '../components/Icons/IconTwo';
import IconThree from '../components/Icons/IconThree';

export default function HeaderBackground() {
  let key = 0;
  const showIcons = () => {
    let icons = [];
    for (let i = 0; i < 10; i++) {
      icons = [
        ...icons,
        <IconOne className='banner-icon' key={key} />,
        <IconTwo className='banner-icon' key={key + 1} />,
        <IconThree className='banner-icon' key={key + 2} />
      ];
      key += 3;
    }
    return icons;
  };
  return <div className='header-background'>{showIcons()}</div>;
}
