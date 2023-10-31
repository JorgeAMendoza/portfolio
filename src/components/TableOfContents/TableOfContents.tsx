import useClickOutside from '@/hooks/useClickOutside';
import Image from 'next/image';
import { useState } from 'react';
import TableItem from './TableItem/TableItem';
import style from './table-of-contents.module.css';
import hamburgerMenuSVG from '../../../public/icons/hamburger-menu-dark.svg';
import closeMenuSVG from '../../../public/icons/close-menu.svg';

interface TableItemProps {
  tableOfContents: {
    sectionID: string;
    subSections?: string[];
  }[];
}

const TableOfContents = ({ tableOfContents }: TableItemProps) => {
  const [tableOpen, setTableOpen] = useState(false);
  const ref = useClickOutside(setTableOpen);
  return (
    <div className={style.tableContainer} ref={ref}>
      <nav
        className={style.tableOfContents}
        aria-hidden={tableOpen ? 'false' : 'true'}
      >
        <button
          aria-label="close the table of contents menu"
          onClick={() => setTableOpen(!tableOpen)}
          className={style.closeTableButton}
        >
          <Image src={closeMenuSVG} width={30} height={30} alt="" />
        </button>
        <ul aria-label="table of contents for project">
          {tableOfContents.map((section) => (
            <TableItem
              key={section.sectionID}
              mainSection={section.sectionID}
              subSections={section.subSections}
            />
          ))}
        </ul>
      </nav>
      <button
        aria-label="click to open the table of contents for project"
        className={style.menuButton}
        onClick={() => setTableOpen(!tableOpen)}
      >
        <Image src={hamburgerMenuSVG} width={30} height={30} alt="" />{' '}
      </button>
    </div>
  );
};

export default TableOfContents;
