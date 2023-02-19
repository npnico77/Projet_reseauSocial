import React, { useContext } from "react";
import { UidContext } from "../components/AppContext";
import Log from "../components/Log/index";
import UpdateProfil from "../components/Profil/UpdateProfil";

const Profil = () => {
  const uid = useContext(UidContext);

  return (
    <div className="profil-page">
      {uid ? (
        <UpdateProfil />
      ) : (
        <div className="log-container">
          <Log signIn={false} signUp={true} />
          <div className="img-container">
            <img src="./img/log.svg" alt="" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Profil;
