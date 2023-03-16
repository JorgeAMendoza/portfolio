import Image from 'next/image';

const NavBar = () => {
  return (
    <div>
      <div>
        <Image src="/logo.svg" alt="jorge mendoza logo" width={188} height={40} />
      </div>

      {/* mobile nav */}
      <div>
        <button
          aria-label="open the navigation menu"
          aria-controls="mobile-nav"
        >
          <Image
            src="/icons/hamburger-menu.svg"
            alt="menu icon"
            width={30}
            height={30}
          />
        </button>
        <nav id="mobile-nav">
          <ul>
            <li>About</li>
            <li>Showcase</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
        </nav>
      </div>

      {/* desktop nav */}
      <div>
        <nav>
          <ul>
            <li>About</li>
            <li>Showcase</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
