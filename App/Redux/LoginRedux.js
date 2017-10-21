import { createActions } from 'reduxsauce';

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  login : null,
  logout: null,
});

export const StartupTypes = Types;
export default Creators;
