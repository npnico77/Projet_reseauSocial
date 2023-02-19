import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { dateParser, isEmpty } from "../Utils";

const Card = ({ post }) => {
  const [isLoading, setIsLoading] = useState(true);
  const usersData = useSelector((state) => state.usersReducer);
  const userData = useSelector((state) => state.userReducer);

  useEffect(() => {
    !isEmpty(usersData[0]) && setIsLoading(false);
  }, [usersData]);

  return (
    <li className="card-container" key={post._id}>
      {isLoading ? (
        <i className="fa fa-spinner fa-spin" aria-hidden="true"></i>
      ) : (
        <>
          <div className="card-left">
            <img
              src={
                !isEmpty(usersData[0]) &&
                usersData
                  .filter((user) => user._id.includes(post.posterId))
                  .map((user) => user.picture)
              }
              alt="poster-pic"
            />
          </div>
          <div className="card-right">
            <div className="card-header">
              <div className="pseudo">
                <h3>
                  {!isEmpty(usersData[0]) &&
                    usersData
                      .filter((user) => user._id.includes(post.posterId))
                      .map((user) => user.pseudo)}
                </h3>
              </div>
              <span>{dateParser(post.createdAt)}</span>
            </div>
          </div>
        </>
      )}
    </li>
  );
};

export default Card;
