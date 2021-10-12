import { deleteDoc, doc, updateDoc } from "@firebase/firestore";
import { db } from "fbase";
import React, { useState } from "react";

const Nweet = ({ nweetObj, isOwner }) => {
  const [editing, setEditing] = useState(false);
  const [newNweet, setNewNweet] = useState(nweetObj.text);

  const onDeleteClick = async () => {
    const ok = window.confirm("Are you sure you want to delete this nweet?");
    if (ok) {
      await deleteDoc(doc(db, `nweets/${nweetObj.id}`));
    }
  };

  const toggleEditting = () => {
    setEditing((prev) => !prev);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    await updateDoc(doc(db, `nweets/${nweetObj.id}`), { text: newNweet });
    setEditing(false);
  };
  const onChange = (event) => {
    setNewNweet(nweetObj.text);
    const {
      target: { value },
    } = event;
    setNewNweet(value);
  };

  return (
    <div>
      {editing ? (
        <>
          {isOwner && (
            <>
              <form onSubmit={onSubmit}>
                <input
                  type="text"
                  placeholder="Edit your nweet"
                  value={newNweet}
                  onChange={onChange}
                  required
                />
                <input type="submit" value="Update Nweet" />
              </form>
              <button onClick={toggleEditting}>Cancel</button>
            </>
          )}
        </>
      ) : (
        <>
          <h4>{nweetObj.text}</h4>
          {isOwner && (
            <>
              <button onClick={onDeleteClick}>Delete Nweet</button>
              <button onClick={toggleEditting}>Edit Nweet</button>
            </>
          )}{" "}
        </>
      )}
    </div>
  );
};

export default Nweet;
