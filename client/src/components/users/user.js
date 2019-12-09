import React, { useEffect, Fragment } from "react";
import Loading from "./../loading/loading";
import { Link } from 'react-router-dom';
import Repos from './../repos/repos';

const User = props => {
  useEffect(() => {
    props.getUser(props.match.params.username);
    props.getRepos(props.match.params.username);
  }, []);
  const { loading, repos } = props;
  const {
    name,
    login,
    company,
    location,
    bio,
    blog,
    followers,
    following,
    avatar_url,
    html_url,
    public_repos,
    public_gists,
    hireable
  } = props.user;
  
  if (loading) {
    return <Loading />;
  }
  return (
    <div>
      <div>
     
      <Link to='/' className='btn btn-dark mr-3 btn-sm'>
        <i className="fas fa-long-arrow-alt-left" style={{fontSize: "1.3rem", color: "white", textAlign:"center", marginRight: "1rem"}}/>
        Back to Search
      </Link>
      <Fragment>
      <span className="text-center" style={{marginLeft: "2rem", fontSize: "2rem"}}>
      Hireable: {""}
        {hireable ? (
          <i className="fas fa-check text-success" />
        ) : (
          <i className="fas fa-times-circle text-danger" />
        )}
      </span>
        </Fragment>
      </div>
      <div className="container mt-4 border border-light rounded-left shadow p-5">
        <div className="row">
          <div className="col mt-5">
            <div className="card text-center shadow" style={{width: "80%"}}>
              <img src={avatar_url} className="card-img-top" alt={login}/>
              <div className="card-body">
                <h3 className="card-title text-success">{name}</h3>
                <h5 className="card-text"><strong>Location</strong>: {location}</h5>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                <button type="button" className="btn btn-info">
                  Followers <span className="badge badge-light">{followers}</span>
                </button>
                </li>
                <li className="list-group-item">
                <button type="button" className="btn btn-dark">
                  Following <span className="badge badge-light">{following}</span>
                </button>
                </li>
                <li className="list-group-item">
                <button type="button" className="btn btn-success">
                  Public Repos <span className="badge badge-light">{public_repos}</span>
                </button>
                </li>
                <li className="list-group-item">
                <button type="button" className="btn btn-danger">
                  Public Gists <span className="badge badge-light">{public_gists}</span>
                </button>
                </li>
              </ul>
            </div>
          </div>
          <div className="col">
          <div>
            {bio && (
              <Fragment>
                <h3 className="text-dark display-4">Bio</h3>
                <p style={{fontSize: "1.3rem"}} className="text-dark">{bio}</p>
              </Fragment>
            )}
            <a className="btn btn-danger my-2" href={html_url}>
              Visit Github Profile
            </a>
            <div>
            <ul>
              <li style={{listStyleType: "none"}}>
                {login && (
                  <Fragment>
                    <p style={{fontSize: "1rem"}}>
                      <strong>Username:</strong>
                       {login}
                    </p>
                  </Fragment>
                )}
              </li>
              <li style={{listStyleType: "none"}}>
                {blog && (
                  <Fragment>
                    <p style={{fontSize: "1rem"}}>
                      <strong>Blog:</strong>
                       {blog}
                    </p>
                  </Fragment>
                )}
              </li>
              <li style={{listStyleType: "none"}}>
                {company && (
                  <Fragment>
                    <p style={{fontSize: "1rem"}}>
                      <strong>Company:</strong>
                       {company}
                    </p>
                  </Fragment>
                )}
              </li>
            </ul>
            </div>
          </div>
          <h2 className="text-left text-danger">RESENT REPOS</h2>
          <Repos repos={repos} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;