import { sourceSansPro } from '@/utils/fonts';
import Image from 'next/image';
import { useState } from 'react';
import triangleSVG from '../../../../public/icons/triangle.svg';
import style from './table-item.module.css';

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
              !isOpen ? 'open' : 'close'
            } sub-menu for ${mainSection}`}
            aria-controls={`${mainSection.toLowerCase().replace(/\s/gi, '-')}-submenu`}
            onClick={() => setIsOpen(!isOpen)}
            data-flip={isOpen}
            type="button"
          >
            <Image src={triangleSVG} width={10} height={10} alt="" />
          </button>
          <a
            className={sourceSansPro.className}
            href={`#${mainSection.toLowerCase().replace(/\s/gi, '-')}`}
          >
            {mainSection}
          </a>

          <div className={style.tableSubMenuContainer} data-show={isOpen}>
            <ul
              id={`${mainSection.toLowerCase().replace(/\s/gi, '-')}-submenu`}
              aria-hidden={isOpen ? 'false' : 'true'}
              className={style.tableSubMenu}
            >
              {subSections.map((subSection) => (
                <li key={subSection}>
                  <a
                    className={sourceSansPro.className}
                    href={`#${subSection.toLowerCase().replace(/\s/gi, '-')}`}
                  >
                    {subSection}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </>
      ) : (
        <a
          className={sourceSansPro.className}
          href={`#${mainSection.toLowerCase().replace(/\s/gi, '-')}`}
        >
          {mainSection}
        </a>
      )}
    </li>
  );
};

export default TableItem;
