import { updateProfile } from "@firebase/auth";
import {
  collection,
  getDocs,
  orderBy,
  query,
  where,
} from "@firebase/firestore";
import Nweet from "components/Nweet";
import { auth, db } from "fbase";
import React, { useCallback, useEffect, useState } from "react";
import { useHistory } from "react-router";

const Profile = ({ refreshUser, userObj }) => {
  const history = useHistory();
  const [newDisplayName, setNewDisplayName] = useState(userObj.displayName);
  const [nweets, setNweets] = useState([]);
  const onLogOutClick = () => {
    auth.signOut();
    history.push("/");
  };

  const getMyNweets = useCallback(async () => {
    const q = query(
      collection(db, "nweets"),
      where("creatorId", "==", userObj.uid),
      orderBy("createdAt", "desc")
    );

    const querySnapshot = await getDocs(q);
    setNweets(querySnapshot.docs.map((doc) => doc.data()));
  }, [userObj]);

  useEffect(() => {
    getMyNweets();
  }, [getMyNweets]);

  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setNewDisplayName(value);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    if (userObj.displayName !== newDisplayName) {
      const user = auth.currentUser;
      await updateProfile(user, {
        displayName: newDisplayName,
      });
      refreshUser();
    }
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Display name"
          onChange={onChange}
          value={newDisplayName}
        />
        <input type="submit" value="Update Profile" />
      </form>
      <div>
        {nweets.map((nweet, index) => (
          <Nweet
            key={index}
            nweetObj={nweet}
            isOwner={nweet.creatorId === userObj.uid}
          />
        ))}
      </div>
      <button onClick={onLogOutClick}>Log Out</button>
    </>
  );
};

export default Profile;
