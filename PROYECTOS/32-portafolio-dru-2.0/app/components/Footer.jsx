const Footer = () => {
  return (
    <footer className="bg-quinary shadow m-4 dark:bg-gray-800 text-white mx-auto absolute bottom-100 w-full ">
      <div className="w-full mx-auto max-w-screen-xl p-4 flex flex-col md:flex-row items-center justify-between container">
        <span className="text-sm  sm:text-center dark:text-gray-400">
          © {new Date().getFullYear().toString()} Roger Morera | Todos los
          Derechos Reservados.
        </span>
        <ul className="flex flex-wrap items-center justify-center gap-3 mt-3 text-sm font-medium  dark:text-gray-400 sm:mt-0">
          <li>
            <a href="#" className="hover:underline hover:text-primary">
              About Me
            </a>
          </li>
          <li>
            <a href="#proyectos" className="hover:underline hover:text-primary">
              Proyectos
            </a>
          </li>
          <li>
            <a href="#contacto" className="hover:underline hover:text-primary">
              Contacto
            </a>
          </li>
          <li className="text-white">
            <a
              href="https://www.instagram.com/drumulberry"
              target="_blank"
              className="size-5"
            >
              <svg
                width="800px"
                height="800px"
                viewBox="0 -0.5 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="size-7 text-white"
                stroke="#fff"
              >
                <path
                  fillRule="evenodd"
                  d="M15.5 5H9.5C7.29086 5 5.5 6.79086 5.5 9V15C5.5 17.2091 7.29086 19 9.5 19H15.5C17.7091 19 19.5 17.2091 19.5 15V9C19.5 6.79086 17.7091 5 15.5 5Z"
                  stroke="#fff"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  fillRule="evenodd"
                  d="M12.5 15C10.8431 15 9.5 13.6569 9.5 12C9.5 10.3431 10.8431 9 12.5 9C14.1569 9 15.5 10.3431 15.5 12C15.5 12.7956 15.1839 13.5587 14.6213 14.1213C14.0587 14.6839 13.2956 15 12.5 15Z"
                  stroke="#fff"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <rect
                  x="15.5"
                  y="9"
                  width="2"
                  height="2"
                  rx="1"
                  transform="rotate(-90 15.5 9)"
                  fill="#fff"
                />
                <rect
                  x="16"
                  y="8.5"
                  width="1"
                  height="1"
                  rx="0.5"
                  transform="rotate(-90 16 8.5)"
                  stroke="#fff"
                  strokeLinecap="round"
                />
              </svg>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/DruMoDev"
              className="hover:underline"
              target="_blank"
            >
              <svg
                className="size-5 text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                />
              </svg>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/roger-morera/"
              className="hover:underline"
              target="_blank"
            >
              <svg
                width="800px"
                height="800px"
                className="size-6"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.5 8C7.32843 8 8 7.32843 8 6.5C8 5.67157 7.32843 5 6.5 5C5.67157 5 5 5.67157 5 6.5C5 7.32843 5.67157 8 6.5 8Z"
                  fill="#fff"
                />
                <path
                  d="M5 10C5 9.44772 5.44772 9 6 9H7C7.55228 9 8 9.44771 8 10V18C8 18.5523 7.55228 19 7 19H6C5.44772 19 5 18.5523 5 18V10Z"
                  fill="#fff"
                />
                <path
                  d="M11 19H12C12.5523 19 13 18.5523 13 18V13.5C13 12 16 11 16 13V18.0004C16 18.5527 16.4477 19 17 19H18C18.5523 19 19 18.5523 19 18V12C19 10 17.5 9 15.5 9C13.5 9 13 10.5 13 10.5V10C13 9.44771 12.5523 9 12 9H11C10.4477 9 10 9.44772 10 10V18C10 18.5523 10.4477 19 11 19Z"
                  fill="#fff"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M20 1C21.6569 1 23 2.34315 23 4V20C23 21.6569 21.6569 23 20 23H4C2.34315 23 1 21.6569 1 20V4C1 2.34315 2.34315 1 4 1H20ZM20 3C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3H20Z"
                  fill="#fff"
                />
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
export default Footer;
