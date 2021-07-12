import IconOne from './Icons/IconOne';
import IconTwo from './Icons/IconTwo';
import IconThree from './Icons/IconThree';

export default function SetCard({ card, toggleSelectedCard, isSelected }) {
  const { color, fill, id, shape, count } = card;

  const showIcons = () => {
    const components = [];

    for (let i = 0; i < count + 1; i++) {
      components.push(createIconComponent(i));
    }
    return components;
  };

  const createIconComponent = i => {
    switch (shape + 1) {
      case 1:
        return <IconOne className={`fill-${fill + 1}`} key={i} />;
      case 2:
        return <IconTwo className={`fill-${fill + 1}`} key={i} />;
      case 3:
        return <IconThree className={`fill-${fill + 1}`} key={i} />;
      default:
        console.error(`ERROR: no valid input for prop shape. Got: ${shape}`);
        break;
    }
  };

  return (
    <div
      className={`SetCard color-${color + 1} ${isSelected ? 'selected' : ''}`}
      onClick={() => toggleSelectedCard(card)}
    >
      {showIcons()}
    </div>
  );
}
