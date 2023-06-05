import { useState } from 'react';
import Image from 'next/image';
import style from './table-item.module.css';
import { Source_Sans_Pro } from 'next/font/google';

const SourceSansPro = Source_Sans_Pro({
  subsets: ['latin'],
  weight: ['400', '600'],
});

interface TableSubMenuProps {
  subSections?: string[];
  mainSection: string;
}

const TableItem = ({ subSections, mainSection }: TableSubMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <li className={style.tableItem}>
      {subSections ? (
        <>
          <button
            aria-label={`click to ${
              isOpen ? 'open' : 'close'
            } sub-menu for ${mainSection}`}
            aria-controls={`${mainSection.toLowerCase().replace(/\s/gi, '-')}`}
            onClick={() => setIsOpen(!isOpen)}
            data-flip={isOpen}
          >
            <Image src="/icons/triangle.svg" width={10} height={10} alt="" />
          </button>
          <a
            className={SourceSansPro.className}
            href={`#${mainSection.toLowerCase().replace(/\s/gi, '-')}`}
          >
            {mainSection}
          </a>

          {/* grid class to do height animation here */}
          <ul
            id={`${mainSection.toLowerCase().replace(/\s/gi, '-')}-submenu`}
            aria-hidden={isOpen ? 'false' : 'true'}
            className={style.tableSubMenu}
          >
            {subSections.map((subSection) => (
              <li key={subSection}>
                <a
                  className={SourceSansPro.className}
                  href={`#${subSection.toLowerCase().replace(/\s/gi, '-')}`}
                >
                  {subSection}
                </a>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <a
          className={SourceSansPro.className}
          href={`#${mainSection.toLowerCase().replace(/\s/gi, '-')}`}
        >
          {mainSection}
        </a>
      )}
    </li>
  );
};

export default TableItem;
