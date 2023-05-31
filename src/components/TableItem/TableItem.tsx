import { useState } from 'react';
import Image from 'next/image';
import style from './table-item.module.css';

interface TableSubMenuProps {
  subSections?: string[];
  mainSection: string;
}

const TableItem = ({ subSections, mainSection }: TableSubMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <li>
      {subSections ? (
        <>
          <button
            aria-label={`click to ${
              isOpen ? 'open' : 'close'
            } sub-menu for ${mainSection}`}
            aria-controls={`${mainSection.toLowerCase().replace(/\s/gi, '-')}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <Image src="/icons/triangle.svg" width={10} height={10} alt="" />
          </button>
          <a href={`#${mainSection.toLowerCase().replace(/\s/gi, '-')}`}>
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
                <a href={`#${subSection.toLowerCase().replace(/\s/gi, '-')}`}>
                  {subSection}
                </a>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <a href={`#${mainSection.toLowerCase().replace(/\s/gi, '-')}`}>
          {mainSection}
        </a>
      )}
    </li>
  );
};

export default TableItem;
