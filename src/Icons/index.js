export const Back = () => (
  <svg
    width="8"
    height="14"
    viewBox="0 0 8 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7 13L1 7L7 1"
      stroke="#FF5151"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

export const Catalog = ({ active = false }) => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M15 6C16.6569 6 18 4.65685 18 3C18 1.34315 16.6569 0 15 0C13.3431 0 12 1.34315 12 3C12 4.65685 13.3431 6 15 6ZM3 18C4.65685 18 6 16.6569 6 15C6 13.3431 4.65685 12 3 12C1.34315 12 0 13.3431 0 15C0 16.6569 1.34315 18 3 18ZM18 15C18 16.6569 16.6569 18 15 18C13.3431 18 12 16.6569 12 15C12 13.3431 13.3431 12 15 12C16.6569 12 18 13.3431 18 15ZM3 6C4.65685 6 6 4.65685 6 3C6 1.34315 4.65685 0 3 0C1.34315 0 0 1.34315 0 3C0 4.65685 1.34315 6 3 6Z"
      fill={active ? "#4D4D4D" : "#8F8F8F"}
    />
  </svg>
);

export const My = ({ active = false }) => (
  <svg
    width="27"
    height="21"
    viewBox="0 0 27 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M4 18C4.00003 19.6568 5.34316 20.9999 7 20.9999H24C25.6569 20.9999 27 19.6568 27 17.9999V7.99995C27 6.69373 26.1652 5.58249 25 5.17065V7.02015C25.2474 7.27266 25.4 7.61849 25.4 7.99995V17.9999C25.4 18.7731 24.7732 19.3999 24 19.3999H7C6.22682 19.3999 5.60003 18.7732 5.6 18H4Z"
      fill={active ? "#4D4D4D" : "#8F8F8F"}
    />
    <rect
      x="0.8"
      y="0.8"
      width="21.4"
      height="14.4"
      rx="2.2"
      stroke={active ? "#4D4D4D" : "#8F8F8F"}
      stroke-width="1.6"
    />
  </svg>
);

export const Profile = ({ active = false }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20 21V19C20 16.7909 18.2091 15 16 15H8C5.79086 15 4 16.7909 4 19V21"
      stroke={active ? "#4D4D4D" : "#8F8F8F"}
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
      stroke={active ? "#4D4D4D" : "#8F8F8F"}
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

export const Search = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14.7949 12.9697L11.874 10.0488C11.7422 9.91699 11.5635 9.84375 11.376 9.84375H10.8984C11.707 8.80957 12.1875 7.50879 12.1875 6.09375C12.1875 2.72754 9.45996 0 6.09375 0C2.72754 0 0 2.72754 0 6.09375C0 9.45996 2.72754 12.1875 6.09375 12.1875C7.50879 12.1875 8.80957 11.707 9.84375 10.8984V11.376C9.84375 11.5635 9.91699 11.7422 10.0488 11.874L12.9697 14.7949C13.2451 15.0703 13.6904 15.0703 13.9629 14.7949L14.792 13.9658C15.0674 13.6904 15.0674 13.2451 14.7949 12.9697ZM6.09375 9.84375C4.02246 9.84375 2.34375 8.16797 2.34375 6.09375C2.34375 4.02246 4.01953 2.34375 6.09375 2.34375C8.16504 2.34375 9.84375 4.01953 9.84375 6.09375C9.84375 8.16504 8.16797 9.84375 6.09375 9.84375Z"
      fill="#C0C0C0"
    />
  </svg>
);

export const Bell = () => (
  <svg
    width="18"
    height="21"
    viewBox="0 0 18 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M17.6534 14.8596C16.8771 14.0081 15.4247 12.7271 15.4247 8.53125C15.4247 5.34434 13.2357 2.79316 10.2842 2.16727V1.3125C10.2842 0.587754 9.70885 0 8.9993 0C8.28974 0 7.71439 0.587754 7.71439 1.3125V2.16727C4.76287 2.79316 2.57394 5.34434 2.57394 8.53125C2.57394 12.7271 1.12148 14.0081 0.345233 14.8596C0.104161 15.1241 -0.00271357 15.4403 -0.000704643 15.75C0.003715 16.4227 0.520813 17.0625 1.28903 17.0625H16.7096C17.4778 17.0625 17.9953 16.4227 17.9993 15.75C18.0013 15.4403 17.8944 15.1237 17.6534 14.8596ZM2.71255 15.0938C3.56514 13.9465 4.49729 12.0451 4.50171 8.55504C4.50171 8.54684 4.4993 8.53945 4.4993 8.53125C4.4993 5.99402 6.51385 3.9375 8.9993 3.9375C11.4847 3.9375 13.4993 5.99402 13.4993 8.53125C13.4993 8.53945 13.4969 8.54684 13.4969 8.55504C13.5013 12.0455 14.4334 13.947 15.286 15.0938H2.71255ZM8.9993 21C10.4184 21 11.5695 19.8249 11.5695 18.375H6.42907C6.42907 19.8249 7.58019 21 8.9993 21Z"
      fill="#5B5B5B"
    />
  </svg>
);

export const Notify = ({ count = false }) => (
  <div style={{ position: "relative" }}>
    <Bell />
    {count && (
      <span style={{ position: "absolute", top: -7, right: -2 }}>
        <div style={{ position: "relative" }}>
          <svg
            width="11"
            height="11"
            viewBox="0 0 11 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="11" height="11" rx="5.5" fill="#FF4D4D" />
          </svg>
          <span
            style={{
              position: "absolute",
              fontWeight: 600,
              fontSize: 6,
              lineHeight: "7.31px",
              marginLeft: "auto",
              marginRight: "auto",
              left: 0,
              right: 0,
              textAlign: "center",
              top: 7,
              color: "white",
            }}
          >
            {count}
          </span>
        </div>
      </span>
    )}
  </div>
);

export const Plus = () => (
  <svg
    width="38"
    height="39"
    viewBox="0 0 38 39"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M23.88 0.405416V14.3254H37.48V24.6454H23.88V38.4854H14.12V24.6454H0.519998L0.519998 14.3254H14.12V0.405416H23.88Z"
      fill="#FF5151"
    />
  </svg>
);
