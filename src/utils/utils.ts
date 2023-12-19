export const getTimeStamp = () => {
    return (new Date().getTime() + 3600 * 1000) * 1000000 + "";
  };