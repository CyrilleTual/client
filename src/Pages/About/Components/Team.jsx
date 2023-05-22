import React from 'react'

function Team({staff}) {

  // recup de l'image /////////////////////////////////////
  const urlImg = (url) => {
    return (require(`../../../assets/img/about/${url}`));
  };

  return (
    <>
      {!staff ? (
        <p>loading</p>
      ) : (
        <>
          {staff.map((member) => (
            <div key= {member.title} >
              <h3>{member.title}</h3>
              <img src={urlImg(member.photo)} />
              <p>{member.p1}</p>
              <p>{member.p2}</p>
              <p>{member.p3}</p>
              <div className="clear"></div>
            </div>
          ))}
        </>
      )}
    </>
  );
}

export default Team