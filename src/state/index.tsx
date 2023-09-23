import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useReducer,
} from "react";
import { reducer } from "./reducer";
import { IState } from "./types";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const initialState: IState = {
  isOnBoarding: false,
};

const context = createContext<{
  state: IState;
  dispatch: React.Dispatch<any>;
}>({ state: initialState, dispatch: () => null });

type ProvideProps = {
  children: ReactNode;
};

export const Provider = ({ children }: ProvideProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    AsyncStorage.setItem("state", JSON.stringify(state));
  }, [state]);

  useEffect(() => {
    AsyncStorage.getItem("state").then((state) => {
      if (!state) return;
      dispatch({ type: "init", payload: JSON.parse(state) });
    });
  }, []);

  return (
    <context.Provider value={{ state, dispatch }}>{children}</context.Provider>
  );
};

export const useAppContext = () => {
  const { state } = useContext(context);
  return state;
};
