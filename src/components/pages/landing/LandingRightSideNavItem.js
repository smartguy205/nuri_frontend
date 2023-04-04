import React, { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import {
  Card,
  Modal,
  Nav,
  OverlayTrigger,
  Tooltip,
  Dropdown
} from 'react-bootstrap';
import AppContext from 'context/Context';
import { useDispatch, useSelector } from 'react-redux';
import { logoutAction } from 'components/authentication/split/store';

const LandingRightSideNavItem = () => {
  const {
    config: { isDark, isRTL },
    setConfig
  } = useContext(AppContext);

  const auth = useSelector(state => state.auth);
  const dispacth = useDispatch()
  const logout = () => {
    dispacth(logoutAction())
  }
  const RightSide = () => {
    return (
      auth.isAuthenticated ? <><Nav.Item>
        <Nav.Link
        >
          {auth.user.name}
        </Nav.Link>
      </Nav.Item>

        <Nav.Item>
          <Nav.Link
            onClick={() => logout()}
          >
            Logout
          </Nav.Link>
        </Nav.Item></> : <><Nav.Item>
          <Nav.Link
            as={Link}
            to="/login"
          >
            Login
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link
            as={Link}
            to="/register"
          >
            Register
          </Nav.Link>
        </Nav.Item></>
    )
  }
  return (
    <Nav navbar className="ms-auto">
      <Nav.Item as={'li'}>
        <Nav.Link
          className="pe-2 theme-switch-toggle"
          onClick={() => setConfig('isDark', !isDark)}
        >
          <OverlayTrigger
            key="left"
            placement={isRTL ? 'bottom' : 'left'}
            overlay={
              <Tooltip
                style={{ position: 'fixed' }}
                id="ThemeColor"
                className="d-none d-lg-block"
              >
                {isDark ? 'Switch to light theme' : 'Switch to dark theme'}
              </Tooltip>
            }
          >
            <span>
              <div className="theme-switch-toggle-label">
                <FontAwesomeIcon
                  icon={isDark ? 'sun' : 'moon'}
                  className="me-2"
                />
              </div>
              <p className="d-lg-none mb-0">
                {isDark ? 'Switch to light theme ' : 'Switch to dark theme'}
              </p>
            </span>
          </OverlayTrigger>
        </Nav.Link>
      </Nav.Item>
      <RightSide />
    </Nav>
  );
};

export default LandingRightSideNavItem;
