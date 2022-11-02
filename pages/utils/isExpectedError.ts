const isExpectedError = (res: any) => {
  if (res.message === "OMG") return true;
  return false;
};

export default isExpectedError;
