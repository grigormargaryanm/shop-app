import type { AuthStore } from "./types";

type State = { auth: AuthStore };
const isAuthenticated = (state: State) => state.auth.isAuthenticated;
const authUser = (state: State) => state.auth.authUser;

export default {
    isAuthenticated,
    authUser
};