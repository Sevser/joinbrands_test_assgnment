export const createQuadriplet = () => {
  const rand = Math.random();
  return Math.floor(rand * (16 ** 4)).toString(16);
};

export const createGUID = () => `${createQuadriplet()}${createQuadriplet()}-${createQuadriplet()}-${createQuadriplet()}-${createQuadriplet()}-${createQuadriplet()}${createQuadriplet()}${createQuadriplet()}`;

export const createCode = () => `${createQuadriplet()}-${createQuadriplet()}`;
