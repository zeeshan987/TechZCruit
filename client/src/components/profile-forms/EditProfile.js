import React, { Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createProfile, getCurrentProfile } from '../../actions/profile';

const EditProfile = ({
  createProfile,
  getCurrentProfile,
  history,
  profile: { loading, profile }
}) => {
  const [formData, setFormData] = useState({
    status: '',
    company: '',
    website: '',
    location: '',
    skills: '',
    githubUsername: '',
    bio: '',
    facebook: '',
    twitter: '',
    linkedin: '',
    instagram: '',
    youtube: ''
  });

  const {
    status,
    company,
    website,
    location,
    skills,
    githubUsername,
    bio,
    facebook,
    twitter,
    linkedin,
    instagram,
    youtube
  } = formData;

  useEffect(() => {
    getCurrentProfile();

    setFormData({
      status: !loading && profile.status ? profile.status : '',
      company: !loading && profile.company ? profile.company : '',
      website: !loading && profile.website ? profile.website : '',
      location: !loading && profile.location ? profile.location : '',
      githubUsername:
        !loading && profile.githubUsername ? profile.githubUsername : '',
      bio: !loading && profile.bio ? profile.bio : '',
      skills: !loading && profile.skills ? profile.skills.join(',') : '',
      facebook:
        !loading && profile.socialLinks.facebook
          ? profile.socialLinks.facebook
          : '',
      twitter:
        !loading && profile.socialLinks.twitter
          ? profile.socialLinks.twitter
          : '',
      linkedin:
        !loading && profile.socialLinks.linkedin
          ? profile.socialLinks.linkedin
          : '',
      instagram:
        !loading && profile.socialLinks.instagram
          ? profile.socialLinks.instagram
          : '',
      youtube:
        !loading && profile.socialLinks.youtube
          ? profile.socialLinks.youtube
          : ''
    });
  }, [loading, getCurrentProfile]);

  const [displaySocialLinks, setDisplaySocialLinks] = useState(false);

  const toggleSocialLinks = () => {
    setDisplaySocialLinks(!displaySocialLinks);
  };

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
    createProfile(formData, history, true);
  };

  return (
    <Fragment>
      <h1 className='large text-primary'>Edit Profile</h1>
      <p className='lead'>
        <i className='fas fa-user'></i> Fill in the following information to
        setup your profile
      </p>

      <form onSubmit={e => onSubmit(e)}>
        <div className='form-group'>
          <select
            className='form-control'
            name='status'
            value={status}
            onChange={e => onChange(e)}
          >
            <option value=''>Please select your professional status</option>
            <option value='Developer'>Developer</option>
            <option value='Student'>Student</option>
            <option value='Instructor'>Instructor</option>
            <option value='Intern'>Intern</option>
            <option value='Other'>Other</option>
          </select>
          <small className='form-text text-muted'>
            Select your current status from the above mentioned options
          </small>
        </div>

        <div className='form-group'>
          <input
            type='text'
            className='form-control'
            placeholder='Company'
            name='company'
            value={company}
            onChange={e => onChange(e)}
          />
          <small className='form-text text-muted'>
            This can be your own company and also a company that you work for
          </small>
        </div>

        <div className='form-group'>
          <input
            type='text'
            className='form-control'
            placeholder='Website'
            name='website'
            value={website}
            onChange={e => onChange(e)}
          />
          <small className='form-text text-muted'>
            This is the webiste website where you showcase your work
          </small>
        </div>

        <div className='form-group'>
          <input
            type='text'
            className='form-control'
            placeholder='Location'
            name='location'
            value={location}
            onChange={e => onChange(e)}
          />
          <small className='form-text text-muted'>
            This is your location where you live or work at
          </small>
        </div>

        <div className='form-group'>
          <input
            type='text'
            className='form-control'
            placeholder='Skills'
            name='skills'
            value={skills}
            onChange={e => onChange(e)}
          />
          <small className='form-text text-muted'>
            Please enter your skills separated by commas such as HTML, CSS,
            JavaScript etc.
          </small>
        </div>

        <div className='form-group'>
          <input
            type='text'
            className='form-control'
            placeholder='GitHub username'
            name='githubUsername'
            value={githubUsername}
            onChange={e => onChange(e)}
          />
          <small className='form-text text-muted'>
            Please enter your GitHub username
          </small>
        </div>

        <div className='form-group'>
          <textarea
            cols='30'
            rows='5'
            placeholder='A short bio about yourself'
            className='form-control'
            name='bio'
            value={bio}
            onChange={e => onChange(e)}
          ></textarea>
          <small className='form-text text-muted'>
            Please enter some information so that people may get to know you
          </small>
        </div>

        <div className='my-3'>
          <button
            onClick={toggleSocialLinks}
            type='button'
            className='btn btn-light'
          >
            Add Social Network Links
          </button>
          <span>Optional</span>
        </div>

        {displaySocialLinks && (
          <Fragment>
            <div className='form-group social-input'>
              <i className='fab fa-facebook fa-2x'></i>
              <input
                type='text'
                className='form-control'
                placeholder='Fabebook URL'
                name='facebook'
                value={facebook}
                onChange={e => onChange(e)}
              />
            </div>

            <div className='form-group social-input'>
              <i className='fab fa-twitter fa-2x'></i>
              <input
                type='text'
                className='form-control'
                placeholder='Twitter URL'
                name='twitter'
                value={twitter}
                onChange={e => onChange(e)}
              />
            </div>

            <div className='form-group social-input'>
              <i className='fab fa-linkedin fa-2x'></i>
              <input
                type='text'
                className='form-control'
                placeholder='Linkedin URL'
                name='linkedin'
                value={linkedin}
                onChange={e => onChange(e)}
              />
            </div>

            <div className='form-group social-input'>
              <i className='fab fa-instagram fa-2x'></i>
              <input
                type='text'
                className='form-control'
                placeholder='Instagram URL'
                name='instagram'
                value={instagram}
                onChange={e => onChange(e)}
              />
            </div>

            <div className='form-group social-input'>
              <i className='fab fa-youtube fa-2x'></i>
              <input
                type='text'
                className='form-control'
                placeholder='Youtube URL'
                name='youtube'
                value={youtube}
                onChange={e => onChange(e)}
              />
            </div>
          </Fragment>
        )}
        <input type='submit' value='Submit' className='btn btn-primary my-2' />
      </form>
    </Fragment>
  );
};

EditProfile.propTypes = {
  createProfile: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { createProfile, getCurrentProfile }
)(withRouter(EditProfile));
