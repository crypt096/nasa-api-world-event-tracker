import { Icon } from "@iconify/react";
import locationIcon from "@iconify/icons-mdi/projector";

const Header = () => {
  return (
    <header className="header">
      <h1>
        <Icon icon={locationIcon} className="icon" />
        Event tracker powered by NASA API
      </h1>
    </header>
  );
};

export default Header;
