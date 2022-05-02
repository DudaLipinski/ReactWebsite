import React from 'react'

import IndividualTeamPhoto from 'images/individual-team.jpg'

const TeamList = ({ cards }) => (

  <div className="flex flex-wrap">
    {cards.map(({
      specialty,
      personName,
      phone,
      mail,
    }) => (
      <article className="team item-wrap">
        <img
          className="left-rounded img-medium"
          src={IndividualTeamPhoto}
          alt=""
        />
        <div>
          <h3 className="margin-small text-center font-mini uppercase font-red semi-bold">{specialty}</h3>
          <div className="text-center">
            <h4 className="font-middle margin-medium bold">{personName}</h4>
            <address className="font-green ">
              <div className="flex flex-start margin-small justify-center">
                <p>Phone:</p>
                <a className="font-green semi-bold" href={`phone:+46${phone}`}>{phone}</a>
              </div>
              <div className="flex flex-start margin-small justify-center">
                <p>Mail:</p>
                <a className="font-green semi-bold" href={`mailto:${mail}`}>{mail}</a>
              </div>
            </address>
          </div>
        </div>
      </article>
    ))}
  </div>
)

export default TeamList
