import * as client from "./client";
import { useEffect, useState } from "react";
import { setCurrentUser } from "./reducer";
import { useDispatch } from "react-redux";

const fetchProfile = async (dispatch: any, setPending: any) => {
  try {
    const currentUser = await client.profile();
    dispatch(setCurrentUser(currentUser));
  } catch (err: any) {
    console.error(err);
  }
  setPending(false);
};

export default function Session({ children }: { children: any }) {
  const [pending, setPending] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchProfile(dispatch, setPending);
  }, [dispatch]); 

  if (!pending) {
    return children;
  }

  return null; 
}
