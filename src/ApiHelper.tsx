import {User} from "./User";


const getCurrentUser = async (): Promise<User> => {
    // TODO:  Add fetch or axios call
    var demouser = { username: "work" , id: 1001}
    return demouser;
};

const logoutUser = async (): Promise<boolean> => {
    // TODO:  Add fetch or axios call
    return true;
};