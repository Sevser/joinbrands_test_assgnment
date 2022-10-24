export const createQuadriplet = () => {
  const rand = Math.random();
  return Math.floor(rand * (16 ** 4)).toString(16);
};

export const createGUID = () => `${createQuadriplet()}${createQuadriplet()}-${createQuadriplet()}-${createQuadriplet()}-${createQuadriplet()}-${createQuadriplet()}${createQuadriplet()}${createQuadriplet()}`;

export const createCode = () => `${createQuadriplet()}-${createQuadriplet()}`;

export const wait = async (): Promise<boolean> => new Promise((resolve) => {
  setTimeout(() => {
    resolve(true);
  }, 250);
});
