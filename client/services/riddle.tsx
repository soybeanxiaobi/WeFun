import ajax from 'axios';

const domainUrl = 'http://127.0.0.1:3000';

export const fetchRiddleList = () => {
  return ajax(
    `${domainUrl}/riddle/list`,
  );
};