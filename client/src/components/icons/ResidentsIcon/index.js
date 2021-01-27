import * as React from 'react';

const ResidentsIcon = ({ active }) => {
  const getColor = () => (active ? '#476FF5' : '#07005A');

  <svg
    width="24"
    height="20"
    viewBox="0 0 24 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16.5455 18.3608V16.5426C16.5455 15.5782 16.1623 14.6533 15.4804 13.9713C14.7984 13.2894 13.8735 12.9063 12.9091 12.9062H5.63636C4.67194 12.9063 3.74702 13.2894 3.06507 13.9713C2.38312 14.6533 2 15.5782 2 16.5426V18.3608"
      stroke={getColor()}
      stroke-width="2.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M9.27308 9.27273C11.2814 9.27273 12.9094 7.64467 12.9094 5.63636C12.9094 3.62806 11.2814 2 9.27308 2C7.26477 2 5.63672 3.62806 5.63672 5.63636C5.63672 7.64467 7.26477 9.27273 9.27308 9.27273Z"
      stroke={getColor()}
      stroke-width="2.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M21.9997 18.3637V16.5455C21.9991 15.7398 21.731 14.9571 21.2373 14.3204C20.7437 13.6836 20.0526 13.2288 19.2725 13.0273"
      stroke={getColor()}
      stroke-width="2.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M15.6367 2.11719C16.4189 2.31746 17.1122 2.77237 17.6073 3.4102C18.1024 4.04802 18.3711 4.83249 18.3711 5.63991C18.3711 6.44734 18.1024 7.23181 17.6073 7.86963C17.1122 8.50746 16.4189 8.96237 15.6367 9.16264"
      stroke={getColor()}
      stroke-width="2.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>;
};

export default ResidentsIcon;