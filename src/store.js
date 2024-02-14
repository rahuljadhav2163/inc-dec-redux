import rootReducer from "./reducer/index";
import { createStoreHook } from "react-redux";

const store = createStoreHook(rootReducer)

export default store;