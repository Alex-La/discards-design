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
    style={{ marginBottom: 8 }}
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
    style={{ marginBottom: 8 }}
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
    style={{ marginBottom: 8 }}
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

export const Add = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="6" width="2" height="14" fill="white" />
    <rect
      y="8"
      width="2"
      height="14"
      transform="rotate(-90 0 8)"
      fill="white"
    />
  </svg>
);

export const Camera = () => (
  <svg
    width="30"
    height="26"
    viewBox="0 0 30 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15 20.0898C17.6212 20.0898 19.7461 17.9649 19.7461 15.3438C19.7461 12.7226 17.6212 10.5977 15 10.5977C12.3788 10.5977 10.2539 12.7226 10.2539 15.3438C10.2539 17.9649 12.3788 20.0898 15 20.0898Z"
      fill="#343434"
    />
    <path
      d="M21.9315 3.33203L21.6282 1.81545C21.4645 0.99666 20.7396 0.402344 19.9045 0.402344H10.0956C9.26063 0.402344 8.53565 0.99666 8.37194 1.81545L8.0686 3.33203H21.9315Z"
      fill="#343434"
    />
    <path
      d="M27.3633 5.08984C25.2994 5.08984 3.60258 5.08984 2.63672 5.08984C1.18283 5.08984 0 6.27268 0 7.72656V22.9609C0 24.4148 1.18283 25.5977 2.63672 25.5977H27.3633C28.8172 25.5977 30 24.4148 30 22.9609V7.72656C30 6.27268 28.8172 5.08984 27.3633 5.08984ZM7.5 10.5977H4.6875C4.20211 10.5977 3.80859 10.2041 3.80859 9.71875C3.80859 9.23336 4.20211 8.83984 4.6875 8.83984H7.5C7.98539 8.83984 8.37891 9.23336 8.37891 9.71875C8.37891 10.2041 7.98539 10.5977 7.5 10.5977ZM15 21.8477C11.4137 21.8477 8.49609 18.93 8.49609 15.3438C8.49609 11.7575 11.4137 8.83984 15 8.83984C18.5863 8.83984 21.5039 11.7575 21.5039 15.3438C21.5039 18.93 18.5863 21.8477 15 21.8477Z"
      fill="#343434"
    />
  </svg>
);

export const Dots = () => (
  <svg
    width="22"
    height="30"
    viewBox="0 0 22 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M19.1816 5.45453C20.6884 5.45453 21.9089 4.23409 21.9089 2.72723C21.9089 1.22043 20.6884 0 19.1816 0C17.6748 0 16.4543 1.22043 16.4543 2.7273C16.4543 4.23409 17.6748 5.45453 19.1816 5.45453Z"
      fill="#343434"
    />
    <path
      d="M2.81812 8.18188C1.31125 8.18188 0.0908203 9.40232 0.0908203 10.9092C0.0908203 12.416 1.31125 13.6365 2.81812 13.6365C4.32491 13.6365 5.54541 12.416 5.54541 10.9092C5.54541 9.40232 4.32491 8.18188 2.81812 8.18188Z"
      fill="#343434"
    />
    <path
      d="M2.81812 0C1.31125 0 0.0908203 1.22043 0.0908203 2.7273C0.0908203 4.23409 1.31125 5.45459 2.81812 5.45459C4.32491 5.45459 5.54541 4.23416 5.54541 2.7273C5.54535 1.22043 4.32491 0 2.81812 0Z"
      fill="#343434"
    />
    <path
      d="M2.81812 16.3635C1.31125 16.3635 0.0908203 17.584 0.0908203 19.0908C0.0908203 20.5976 1.31125 21.8181 2.81812 21.8181C4.32491 21.8181 5.54541 20.5977 5.54541 19.0908C5.54535 17.584 4.32491 16.3635 2.81812 16.3635Z"
      fill="#343434"
    />
    <path
      d="M11 24.5454C9.49314 24.5454 8.27271 25.7658 8.27271 27.2727C8.27271 28.7795 9.49314 30 11 30C12.5069 30 13.7273 28.7796 13.7273 27.2727C13.7272 25.7658 12.5068 24.5454 11 24.5454Z"
      fill="#343434"
    />
    <path
      d="M19.1816 8.18188C17.6748 8.18188 16.4543 9.40232 16.4543 10.9092C16.4543 12.416 17.6748 13.6365 19.1816 13.6365C20.6884 13.6365 21.9089 12.416 21.9089 10.9092C21.9089 9.40232 20.6884 8.18188 19.1816 8.18188Z"
      fill="#343434"
    />
    <path
      d="M11 16.3635C9.49314 16.3635 8.27271 17.584 8.27271 19.0908C8.27271 20.5976 9.49314 21.8181 11 21.8181C12.5069 21.8181 13.7273 20.5977 13.7273 19.0908C13.7272 17.584 12.5068 16.3635 11 16.3635Z"
      fill="#343434"
    />
    <path
      d="M19.1816 16.3635C17.6748 16.3635 16.4543 17.584 16.4543 19.0908C16.4543 20.5976 17.6748 21.8181 19.1816 21.8181C20.6884 21.8181 21.9089 20.5977 21.9089 19.0908C21.9089 17.584 20.6884 16.3635 19.1816 16.3635Z"
      fill="#343434"
    />
    <path
      d="M11 8.18188C9.49314 8.18188 8.27271 9.40232 8.27271 10.9092C8.27271 12.416 9.49314 13.6365 11 13.6365C12.5069 13.6365 13.7273 12.416 13.7273 10.9092C13.7273 9.40232 12.5068 8.18188 11 8.18188Z"
      fill="#343434"
    />
    <path
      d="M11 0C9.49314 0 8.27271 1.22043 8.27271 2.7273C8.27271 4.23409 9.49314 5.45459 11 5.45459C12.5069 5.45459 13.7273 4.23416 13.7273 2.7273C13.7272 1.22043 12.5068 0 11 0Z"
      fill="#343434"
    />
  </svg>
);

export const SuccessRound = () => (
  <svg
    width="70"
    height="70"
    viewBox="0 0 70 70"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M34.9999 67.2889C52.8326 67.2889 67.2888 52.8327 67.2888 35C67.2888 17.1674 52.8326 2.71118 34.9999 2.71118C17.1673 2.71118 2.71106 17.1674 2.71106 35C2.71106 52.8327 17.1673 67.2889 34.9999 67.2889Z"
      fill="#FF5151"
    />
    <path
      d="M35 70C15.7026 70 0 54.3002 0 35C0 15.7026 15.7026 0 35 0C54.3002 0 70 15.7026 70 35C70 54.3002 54.3002 70 35 70ZM35 5.42213C18.6901 5.42213 5.42213 18.6901 5.42213 35C5.42213 51.3099 18.6901 64.5779 35 64.5779C51.3099 64.5779 64.5779 51.3071 64.5779 35C64.5779 18.6901 51.3099 5.42213 35 5.42213Z"
      fill="#FF5151"
    />
    <path
      d="M30.7705 47.8777C30.044 47.8777 29.3499 47.5876 28.8375 47.0671L18.8336 36.9005C17.7844 35.8323 17.798 34.119 18.8662 33.0671C19.9343 32.0206 21.6504 32.0314 22.6996 33.0996L30.6919 41.2219L47.2268 23.0117C48.238 21.9029 49.9515 21.8243 51.0548 22.8274C52.1636 23.8332 52.2449 25.5466 51.2391 26.6581L32.7767 46.991C32.2753 47.5441 31.5703 47.864 30.8248 47.8803C30.8058 47.8777 30.7895 47.8777 30.7705 47.8777Z"
      fill="white"
    />
  </svg>
);

export const BackArrow = () => (
  <svg
    width="10"
    height="16"
    viewBox="0 0 10 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0.439793 7.99996C0.439793 7.7132 0.549281 7.42649 0.767797 7.20786L7.64751 0.328226C8.08514 -0.109409 8.79469 -0.109409 9.23215 0.328226C9.66961 0.765684 9.66961 1.47509 9.23215 1.91276L3.1446 7.99996L9.23194 14.0872C9.66939 14.5248 9.66939 15.2342 9.23194 15.6716C8.79448 16.1094 8.08493 16.1094 7.64729 15.6716L0.767585 8.79205C0.549032 8.57332 0.439793 8.2866 0.439793 7.99996Z"
      fill="black"
    />
  </svg>
);

export const ArrowRigth = ({ red = false }) => (
  <svg
    width="6"
    height="10"
    viewBox="0 0 6 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6 5.00002C6 5.17924 5.92797 5.35844 5.78422 5.49507L1.25832 9.79486C0.970413 10.0684 0.503627 10.0684 0.21584 9.79486C-0.0719467 9.52145 -0.0719467 9.07807 0.21584 8.80452L4.22061 5.00002L0.21598 1.19549C-0.0718068 0.921968 -0.0718068 0.478632 0.21598 0.205242C0.503767 -0.0684128 0.970553 -0.0684128 1.25846 0.205242L5.78436 4.50496C5.92814 4.64166 6 4.82086 6 5.00002Z"
      fill={red ? "#FF5151" : "#5B5B5B"}
    />
  </svg>
);

export const Dot = () => (
  <svg
    width="6"
    height="6"
    viewBox="0 0 6 6"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="3" cy="3" r="3" fill="#0058AF" />
  </svg>
);

export const Dollar = () => (
  <svg
    width="33"
    height="33"
    viewBox="0 0 33 33"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16.1148 30.5797C24.1035 30.5797 30.5797 24.1035 30.5797 16.1148C30.5797 8.12606 24.1035 1.6499 16.1148 1.6499C8.12605 1.6499 1.6499 8.12606 1.6499 16.1148C1.6499 24.1035 8.12605 30.5797 16.1148 30.5797Z"
      fill="#FF901D"
    />
    <path
      d="M16.1143 1.65063C15.4653 1.65063 14.8265 1.69406 14.2002 1.77688C21.2838 2.71355 26.7506 8.77561 26.7506 16.1152C26.7506 23.4548 21.2838 29.5169 14.2002 30.4535C14.8265 30.5364 15.4653 30.5798 16.1143 30.5798C24.1029 30.5798 30.5789 24.1038 30.5789 16.1152C30.5789 8.12664 24.1029 1.65063 16.1143 1.65063Z"
      fill="#FF6D3A"
    />
    <path
      d="M16.1148 27.6127C22.4648 27.6127 27.6124 22.465 27.6124 16.1151C27.6124 9.7651 22.4648 4.61743 16.1148 4.61743C9.76485 4.61743 4.61719 9.7651 4.61719 16.1151C4.61719 22.465 9.76485 27.6127 16.1148 27.6127Z"
      fill="#FEE570"
    />
    <path
      d="M24.2447 24.2455C28.7349 19.7553 28.7349 12.4752 24.2447 7.98511L7.98438 24.2455C12.4745 28.7357 19.7545 28.7357 24.2447 24.2455Z"
      fill="#F4D451"
    />
    <path
      d="M15.8802 23.4089C13.411 23.3691 11.7383 22.0349 11.7383 21.0591C11.7383 20.5812 12.1564 19.924 12.6543 19.924C13.3114 19.924 13.8491 21.318 15.8802 21.4773V16.7977C14.0881 16.1604 12.0967 15.4436 12.0967 12.8947C12.0967 10.3856 13.9884 9.38996 15.8802 9.1908V8.61329C15.8802 8.37433 16.1192 8.15527 16.4577 8.15527C16.7564 8.15527 17.0551 8.37433 17.0551 8.61329V9.151C18.4092 9.1908 20.3209 9.60902 20.3209 10.5848C20.3209 10.9631 20.0421 11.7198 19.4446 11.7198C18.9667 11.7198 18.449 11.0826 17.055 10.983V15.0253C18.7874 15.6625 20.6792 16.5388 20.6792 19.247C20.6792 21.6963 19.2057 23.0504 17.055 23.3491V24.0261C17.055 24.265 16.7564 24.4841 16.4576 24.4841C16.1191 24.4841 15.8801 24.265 15.8801 24.0261V23.4089H15.8802ZM15.9997 14.647V11.0228C14.8845 11.1622 14.088 11.66 14.088 12.6955C14.0882 13.8306 14.9443 14.2488 15.9997 14.647ZM16.9356 17.2358V21.4375C18.0109 21.2383 18.6879 20.6011 18.6879 19.466C18.6879 18.2115 17.9114 17.6539 16.9356 17.2358Z"
      fill="#FF901D"
    />
  </svg>
);

export const AddOutlined = () => (
  <svg
    width="30"
    height="30"
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20.4351 16H15.7851V20.55H14.2101V16H9.56006V14.525H14.2101V9.95H15.7851V14.525H20.4351V16Z"
      fill="#FF5151"
    />
    <circle cx="15" cy="15" r="14" stroke="#FF5151" stroke-width="2" />
  </svg>
);

export const Settings = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13.6759 8.84099L12.199 7.68248C12.2269 7.45847 12.2479 7.23098 12.2479 6.99998C12.2479 6.76898 12.2269 6.5415 12.199 6.31748L13.6795 5.15897C13.8124 5.05397 13.851 4.86497 13.7635 4.71099L12.3634 2.28549C12.2759 2.13498 12.094 2.07198 11.9365 2.13498L10.1935 2.83848C9.83294 2.56197 9.43746 2.32749 9.01047 2.14899L8.74797 0.294C8.71644 0.129511 8.57295 0 8.39796 0H5.59797C5.42298 0 5.27946 0.129511 5.25147 0.294L4.98897 2.14899C4.56198 2.32749 4.16646 2.55849 3.80598 2.83848L2.06298 2.13498C1.90548 2.07549 1.72347 2.13498 1.636 2.28549L0.235953 4.71099C0.148442 4.8615 0.186964 5.0505 0.319953 5.15897L1.79694 6.31748C1.76895 6.5415 1.74795 6.76898 1.74795 6.99998C1.74795 7.23098 1.76895 7.45847 1.79694 7.68248L0.319953 8.84099C0.186964 8.94599 0.148442 9.13499 0.235953 9.28898L1.63596 11.7145C1.72347 11.865 1.90545 11.928 2.06295 11.865L3.80595 11.1615C4.16646 11.438 4.56195 11.6725 4.98894 11.851L5.25144 13.706C5.27943 13.8705 5.42295 14 5.59794 14H8.39792C8.57291 14 8.71644 13.8705 8.74442 13.706L9.00692 11.851C9.43391 11.6725 9.82943 11.4415 10.1899 11.1615L11.9329 11.865C12.0904 11.9245 12.2724 11.865 12.3599 11.7145L13.7599 9.28898C13.8475 9.1385 13.8089 8.9495 13.6759 8.84099ZM6.99795 9.44999C5.64345 9.44999 4.54794 8.35448 4.54794 6.99998C4.54794 5.64548 5.64345 4.55001 6.99795 4.55001C8.35245 4.55001 9.44796 5.64552 9.44796 7.00002C9.44796 8.35452 8.35245 9.44999 6.99795 9.44999Z"
      fill="#343434"
    />
  </svg>
);

export const Contacts = () => (
  <svg
    width="12"
    height="14"
    viewBox="0 0 12 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M10.6663 0H1.33301V1.16668H10.6663V0Z" fill="#343434" />
    <path
      d="M10.6665 2.33325H1.33318C0.688605 2.33325 0.166504 2.85533 0.166504 3.49993V10.4999C0.166504 11.1445 0.688578 11.6666 1.33318 11.6666H10.6665C11.3111 11.6666 11.8332 11.1445 11.8332 10.4999V3.49993C11.8332 2.85535 11.3111 2.33325 10.6665 2.33325ZM5.99986 3.93743C6.72318 3.93743 7.31236 4.5266 7.31236 5.24993C7.31236 5.97618 6.72318 6.56243 5.99986 6.56243C5.27653 6.56243 4.68736 5.97618 4.68736 5.24993C4.68736 4.5266 5.27653 3.93743 5.99986 3.93743ZM8.91653 9.9166H3.08318V9.0416C3.08318 8.07035 5.02861 7.58328 5.99986 7.58328C6.97111 7.58328 8.91653 8.07035 8.91653 9.0416V9.9166Z"
      fill="#343434"
    />
    <path
      d="M10.6663 12.8333H1.33301V13.9999H10.6663V12.8333Z"
      fill="#343434"
    />
  </svg>
);

export const Partners = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11.5518 2.85933C11.4913 3.03996 11.3888 3.20621 11.2546 3.34039L10.8116 3.78339C10.7351 3.8599 10.6914 3.96563 10.6914 4.07337V4.55402C10.6914 4.78032 10.8753 4.96417 11.1016 4.96417C11.7801 4.96417 12.332 5.51614 12.332 6.19465V6.8215C12.332 7.01135 12.2872 7.20161 12.2023 7.37144L12.0621 7.65183C11.9695 7.83648 12.0436 7.99228 12.0801 8.05077C12.1161 8.10926 12.2223 8.24543 12.429 8.24543H13.8846C13.9562 7.84523 14 7.43543 14 7.01496C14 5.04828 13.151 3.27271 11.8369 2.00391L11.5518 2.85933Z"
      fill="#343434"
    />
    <path
      d="M3.58231 4.92206C3.48858 5.0923 3.55068 5.31619 3.72412 5.43155L4.57648 5.99992C4.56606 5.35625 4.93017 4.72939 5.56982 4.40094C5.68959 4.33966 5.7697 4.18265 5.7697 4.01001V3.73364C5.7697 3.05513 6.32166 2.50317 7.00017 2.50317H7.49523C7.62902 2.50317 7.75079 2.44069 7.8285 2.33173C7.90659 2.22279 7.92663 2.0878 7.88337 1.96084L7.23432 0.0267598C7.15592 0.0241621 7.0792 0.0148926 7.00014 0.0148926C4.76031 0.0148926 2.74188 1.10812 1.46533 2.75457L2.77641 3.07556C3.58146 3.27558 3.9858 4.18596 3.58231 4.92206Z"
      fill="#343434"
    />
    <path
      d="M8.49553 2.8092C8.26521 3.13122 7.89112 3.32351 7.49497 3.32351H6.99991C6.77361 3.32351 6.58975 3.50737 6.58975 3.73366V4.01003C6.58975 4.48988 6.33622 4.92968 5.94408 5.13074C5.46743 5.37546 5.26716 5.9134 5.48826 6.35519L5.61292 6.60473H6.08266C6.80443 6.60473 7.45373 7.00608 7.77696 7.65175C7.96 8.01785 8.3281 8.24535 8.73747 8.24535H9.46085C9.68755 8.24535 9.871 8.4288 9.871 8.65551V9.47582C9.871 10.0286 9.6543 10.5469 9.26137 10.935C8.6282 11.5599 8.01833 12.8473 7.59206 13.9849C10.4617 13.7419 12.8694 11.7308 13.6912 9.06567H12.4289C11.9991 9.06567 11.6078 8.84738 11.3819 8.48207C11.1564 8.11678 11.1359 7.66897 11.3282 7.28485L11.4684 7.00447C11.4968 6.948 11.5116 6.8847 11.5116 6.82143V6.19457C11.5116 5.96828 11.3278 5.78442 11.1015 5.78442C10.423 5.78442 9.871 5.23246 9.871 4.55395V4.0733C9.871 3.74485 9.99919 3.43564 10.2315 3.20333L10.6745 2.76033C10.7194 2.71546 10.7534 2.65979 10.7738 2.59931L11.1623 1.43413C10.2864 0.779143 9.25437 0.299451 8.13035 0.11499L8.65937 1.6965C8.78712 2.071 8.72585 2.48714 8.49553 2.8092Z"
      fill="#343434"
    />
    <path
      d="M6.32218 13.9805C5.93275 13.1658 5.76953 11.4832 5.76953 10.764C5.76953 10.5717 5.69464 10.3911 5.55885 10.2553L5.0694 9.76584C4.90919 9.60563 4.90919 9.34606 5.0694 9.18585L5.31374 8.94151C5.53323 8.72202 5.58731 8.38796 5.44873 8.11078L5.04118 7.29566L3.26897 6.11405C2.74466 5.76479 2.56602 5.06783 2.86281 4.5271C3.00639 4.26679 2.86511 3.94307 2.57761 3.87143L0.974586 3.47729C0.359598 4.51597 0 5.72285 0 7.01489C0 10.6309 2.79445 13.6385 6.32218 13.9805Z"
      fill="#343434"
    />
    <path
      d="M9.05071 9.47583V9.06567H8.73749C8.01573 9.06567 7.36642 8.66432 7.04319 8.01865C6.86015 7.65255 6.49205 7.42505 6.08269 7.42505H6.023L6.18241 7.74388C6.4696 8.31826 6.37026 9.0056 5.93848 9.47504L6.13874 9.6753C6.42957 9.9661 6.58978 10.3526 6.58978 10.764C6.58978 11.4301 6.72877 12.6611 6.95506 13.3572C7.32997 12.4163 7.9416 11.0848 8.68502 10.3514C8.92094 10.1183 9.05071 9.80748 9.05071 9.47583Z"
      fill="#343434"
    />
  </svg>
);

export const Info = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7.00001 0C3.14026 0 0 3.14026 0 7.00001C0 10.8598 3.14026 14 7.00001 14C10.8598 14 14 10.8598 14 7.00001C14 3.14026 10.8597 0 7.00001 0ZM7.45534 11.1533C7.12278 11.2087 6.46104 11.3472 6.125 11.375C5.84056 11.3986 5.57215 11.2358 5.40852 11.002C5.24447 10.7683 5.20516 10.4693 5.30255 10.2009L6.62573 6.56252H5.25C5.24882 5.80438 5.81749 5.24693 6.54482 5.03299C6.89191 4.93086 7.53858 4.79111 7.87499 4.81253C8.07654 4.82535 8.42785 4.9518 8.59148 5.18553C8.75553 5.41923 8.79484 5.71831 8.69745 5.98662L7.37426 9.62504H8.74958C8.74984 10.3823 8.20238 11.0288 7.45534 11.1533ZM7.87499 4.37502C7.39173 4.37502 6.99999 3.98322 6.99999 3.50001C6.99999 3.01674 7.39173 2.625 7.87499 2.625C8.35826 2.625 8.75 3.01674 8.75 3.50001C8.75 3.98324 8.35828 4.37502 7.87499 4.37502Z"
      fill="#343434"
    />
  </svg>
);

export const Faq = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13.9455 12.6776L12.9844 9.88051C13.4467 8.9461 13.6911 7.90452 13.6928 6.85651C13.6956 5.05177 12.9973 3.3453 11.7265 2.05148C10.4555 0.757436 8.76188 0.0290532 6.9576 0.000424258C6.0123 -0.0147515 5.09503 0.159428 4.22987 0.517549C3.39542 0.862955 2.64711 1.36332 2.00573 2.00472C1.36433 2.6461 0.863966 3.39441 0.518559 4.22886C0.160384 5.09402 -0.0136047 6.01176 0.00137971 6.95659C0.0299539 8.76087 0.758364 10.4545 2.05238 11.7255C3.34366 12.9938 5.04575 13.6918 6.84661 13.6918C6.85011 13.6918 6.85386 13.6918 6.85739 13.6918C7.90542 13.6902 8.94697 13.4457 9.88144 12.9834L12.6785 13.9445C12.7861 13.9815 12.8963 13.9995 13.0054 13.9995C13.2645 13.9995 13.5164 13.8977 13.7075 13.7066C13.9791 13.4351 14.0703 13.0408 13.9455 12.6776ZM6.77924 10.7484C6.54657 10.7484 6.37428 10.5583 6.36422 10.3334C6.35418 10.1093 6.56216 9.91839 6.77924 9.91839C7.01191 9.91839 7.1842 10.1086 7.19426 10.3334C7.20433 10.5575 6.99632 10.7484 6.77924 10.7484ZM7.19426 7.57842V8.898C7.19426 9.12719 7.00843 9.31302 6.77924 9.31302C6.55004 9.31302 6.36422 9.12719 6.36422 8.898V7.20528C6.36422 6.97609 6.55004 6.79026 6.77924 6.79026C7.4601 6.79026 8.01406 6.2363 8.01406 5.55544C8.01406 4.87458 7.4601 4.32063 6.77924 4.32063C6.09838 4.32063 5.54442 4.87458 5.54442 5.55544C5.54442 5.78464 5.35859 5.97047 5.1294 5.97047C4.9002 5.97047 4.71438 5.78464 4.71438 5.55544C4.71438 4.4169 5.64067 3.49058 6.77924 3.49058C7.91778 3.49058 8.8441 4.41688 8.8441 5.55544C8.8441 6.5519 8.13461 7.38578 7.19426 7.57842Z"
      fill="#343434"
    />
  </svg>
);

export const Share = () => (
  <svg
    width="16"
    height="14"
    viewBox="0 0 16 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15.7912 4.85186L11.7911 8.5702C11.3694 8.96217 10.6667 8.67156 10.6667 8.0931V6.12536C6.65069 6.15189 4.9565 7.08548 6.08958 10.8108C6.21411 11.2202 5.73275 11.5372 5.39497 11.2847C4.31256 10.4753 3.33333 8.92717 3.33333 7.3645C3.33333 3.42872 6.59997 2.6477 10.6667 2.6255V0.65634C10.6667 0.0773636 11.3699 -0.212316 11.7911 0.179246L15.7912 3.89767C16.0695 4.15642 16.0697 4.59288 15.7912 4.85186ZM10.6667 10.3665V12.2498H1.77778V3.49976H3.19211C3.237 3.49973 3.28142 3.49077 3.3227 3.47342C3.36398 3.45607 3.40127 3.43068 3.43233 3.39878C3.84769 2.97309 4.32781 2.63616 4.84939 2.36858C5.15856 2.20996 5.044 1.74976 4.69536 1.74976H1.33333C0.596944 1.74976 0 2.33738 0 3.06226V12.6873C0 13.4121 0.596944 13.9998 1.33333 13.9998H11.1111C11.8475 13.9998 12.4444 13.4121 12.4444 12.6873V10.259C12.4444 10.0323 12.2168 9.87436 11.9997 9.94993C11.6954 10.0559 11.3695 10.0876 11.05 10.0423C10.8481 10.0137 10.6667 10.1657 10.6667 10.3665Z"
      fill="#343434"
    />
  </svg>
);

export const Cloud = () => (
  <svg
    width="80"
    height="60"
    viewBox="0 0 80 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M64.6667 20C62.3332 8.66667 52.3332 0 40 0C35 0 30.3333 1.33333 26.6667 4L31.6667 9C34 7.33333 37 6.66667 40 6.66667C50 6.66667 58.3333 15 58.3333 25V26.6667H63.3333C69 26.6667 73.3333 31 73.3333 36.6667C73.3333 40.3333 71.3333 43.6667 68 45.3333L73 50.3333C77.3333 47.3333 80 42.3333 80 36.6667C80 28 73 20.6667 64.6667 20ZM10 4.33333L19.3333 13.3333C8.66667 14 0 22.6667 0 33.3333C0 44.3333 9 53.3333 20 53.3333H59L65.6667 60L70 55.6667L14.3333 0L10 4.33333ZM25.6667 20L52.3333 46.6667H20C12.6667 46.6667 6.66667 40.6667 6.66667 33.3333C6.66667 26 12.6667 20 20 20H25.6667Z"
      fill="#5B5B5B"
    />
  </svg>
);
