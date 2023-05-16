import style from './icons.module.css';

const LinkIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={style.icon}
    >
      <path
        fill="currentColor"
        d="M 5 2 C 3.355469 2 2 3.355469 2 5 L 2 19 C 2 20.644531 3.355469 22 5 22 L 19 22 C 20.644531 22 22 20.644531 22 19 L 22 5 C 22 3.355469 20.644531 2 19 2 Z M 5 4 L 19 4 C 19.566406 4 20 4.433594 20 5 L 20 19 C 20 19.566406 19.566406 20 19 20 L 5 20 C 4.433594 20 4 19.566406 4 19 L 4 5 C 4 4.433594 4.433594 4 5 4 Z M 6 6 L 6 8 L 14.59375 8 L 6 16.59375 L 7.40625 18 L 16 9.40625 L 16 18 L 18 18 L 18 6 Z"
      />
    </svg>
  );
};

export default LinkIcon;
