export const Now = async () => {
  const now = await Promise.resolve(new Date());
  return <>{now.toISOString()}</>;
};
