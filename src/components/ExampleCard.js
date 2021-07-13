import IconOne from './Icons/IconOne';
import IconTwo from './Icons/IconTwo';
import IconThree from './Icons/IconThree';

export default function ExampleCard({ card }) {
  const { color, fill, shape, count } = card;

  const showIcons = () => {
    const components = [];

    for (let i = 0; i < count; i++) {
      components.push(createIconComponent(i));
    }

    return components;
  };

  const createIconComponent = i => {
    switch (shape) {
      case 'shape-1':
        return <IconOne className={`${fill} example-icon`} key={i} />;
      case 'shape-2':
        return <IconTwo className={`${fill} example-icon`} key={i} />;
      case 'shape-3':
        return <IconThree className={`${fill} example-icon`} key={i} />;
      default:
        console.error(
          `ERROR: no valid input for prop shape. Got: ${shape}. Expected: 'shape-1', 'shape-2', or 'shape-3'`
        );
        break;
    }
  };

  return <div className={`ExampleCard ${color}`}>{showIcons()}</div>;
}
