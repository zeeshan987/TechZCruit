import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const ProfileTop = ({
  profile: {
    user: { name, avatar },
    status,
    company,
    location,
    website,
    socialLinks
  }
}) => {
  return (
    <Fragment>
      <div className='row profile-top p-3 my-3'>
        <div className='col-md-12'>
          <div className='row'>
            <div className='col-md-12'>
              <img src={avatar} alt='' className='round-img' style={{width: '200px', height: '200px'}} />
            </div>
          </div>
          <div className='row'>
            <div className='col-md-12'>
              <h2 className='large'>{name}</h2>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-12'>
              {status} {company ? `at ${company}` : ''}
            </div>
          </div>
          <div className='row'>
            <div className='col-md-12'>{location}</div>
          </div>
          <div className='row'>
            <div className='col-md-12 social-links'>
              {website && (
                <a href={website}>
                  <i className='fas fa-globe fa-2x'></i>
                </a>
              )}

              {socialLinks && socialLinks.facebook && (
                <a href={socialLinks.facebook}>
                  <i className='fab fa-facebook fa-2x'></i>
                </a>
              )}

              {socialLinks && socialLinks.twitter && (
                <a href={socialLinks.twitter}>
                  <i className='fab fa-twitter fa-2x'></i>
                </a>
              )}

              {socialLinks && socialLinks.linkedin && (
                <a href={socialLinks.linkedin}>
                  <i className='fab fa-linkedin fa-2x'></i>
                </a>
              )}

              {socialLinks && socialLinks.instagram && (
                <a href={socialLinks.instagram}>
                  <i className='fab fa-instagram fa-2x'></i>
                </a>
              )}

              {socialLinks && socialLinks.youtube && (
                <a href={socialLinks.youtube}>
                  <i className='fab fa-youtube fa-2x'></i>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

ProfileTop.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileTop;
