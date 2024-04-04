import { useContext, createContext, useReducer } from "react";

const initialState = {
  chat: "",
};

const NoticeContext = createContext(initialState);

const NoticeProvider = ({ children }) => {
  const [state, noticeDispatch] = useReducer(reducerFun, {
    chat: "",
  });

  return (
    <NoticeContext.Provider value={{ state, noticeDispatch }}>
      {children}
    </NoticeContext.Provider>
  );
};

const useNotice = () => useContext(NoticeContext);

export { useNotice, NoticeProvider };

export const reducerFun = (state, action) => {
  switch (action.type) {
    case "notice":
      return {
        ...state,
        chat: action.payload,
      };
    default:
      return state;
  }
};
