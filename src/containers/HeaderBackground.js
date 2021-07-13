import IconOne from '../components/Icons/IconOne';
import IconTwo from '../components/Icons/IconTwo';
import IconThree from '../components/Icons/IconThree';

export default function HeaderBackground() {
  const showIcons = () => {
    let icons = [];
    for (let i = 0; i < 10; i++) {
      icons = [
        ...icons,
        <IconOne className='banner' />,
        <IconTwo className='banner' />,
        <IconThree className='banner' />
      ];
    }
    return icons;
  };
  return <div className='header-background'>{showIcons()}</div>;
}
