import React from 'react'

import IndividualTeamPhoto from 'images/individual-team.jpg'

const TeamHorizontal = () => (

  <article className="horizontal-team-card team flex">
    <img
      className="left-rounded img-medium"
      src={IndividualTeamPhoto}
      alt=""
    />
    <div className="horizontal-team-info bg-orange flex justify-center">
      <h3 className="margin-small font-mini uppercase font-red semi-bold">FrontEnd Engineer</h3>
      <div>
        <h4 className="font-middle margin-medium bold">Name</h4>
        <address className="font-green ">
          <div className="flex flex-start margin-small">
            <p>Phone:</p>
            <a className="font-green semi-bold" href="phone:+46">0000-0000</a>
          </div>
          <div className="flex flex-start margin-small">
            <p>Mail:</p>
            <a className="font-green semi-bold" href="mailto:">info@company.se</a>
          </div>
        </address>
      </div>
    </div>
  </article>

)

export default TeamHorizontal
