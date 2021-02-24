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
