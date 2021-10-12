import {
  collection,
  getDocs,
  orderBy,
  query,
  where,
} from "@firebase/firestore";
import { auth, db } from "fbase";
import React, { useEffect } from "react";
import { useHistory } from "react-router";

const Profile = ({ userObj }) => {
  const history = useHistory();
  const onLogOutClick = () => {
    auth.signOut();
    history.push("/");
  };
  const getMyNweets = async () => {
    const q = query(
      collection(db, "nweets"),
      where("creatorId", "==", userObj.uid),
      orderBy("createdAt", "desc")
    );

    const nweets = await getDocs(q);
    console.log(nweets.docs.map((doc) => doc.data()));
  };
  useEffect(() => {
    getMyNweets();
  });
  return (
    <>
      <button onClick={onLogOutClick}>Log Out</button>
    </>
  );
};

export default Profile;
