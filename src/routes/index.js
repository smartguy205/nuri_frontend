import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import ErrorLayout from '../layouts/ErrorLayout';
import Error404 from 'components/errors/Error404';
import Error500 from 'components/errors/Error500';


import Landing from 'components/pages/landing/Landing';

import SplitLogin from 'components/authentication/split/Login';
import SplitLogout from 'components/authentication/split/Logout';
import SplitRegistration from 'components/authentication/split/Registration';
import SplitForgetPassword from 'components/authentication/split/ForgetPassword';
import SplitPasswordReset from 'components/authentication/split/PasswordReset';
import SplitConfirmMail from 'components/authentication/split/ConfirmMail';
import CheckPlan from 'components/authentication/split/CheckPlan';

import PricingDefault from 'components/pages/pricing/pricing-default/PricingDefault';
const FalconRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route element={<ErrorLayout />}>
        <Route path="errors/404" element={<Error404 />} />
        <Route path="errors/500" element={<Error500 />} />
      </Route>
      <Route path="/login" element={<SplitLogin />} />
      <Route path="/logout" element={<SplitLogout />} />
      <Route
        path="register"
        element={<SplitRegistration />}
      />
      <Route
        path="forgot-password"
        element={<SplitForgetPassword />}
      />
      <Route
        path="/billing"
        element={<SplitPasswordReset />}
      />
      <Route
        path="confirm-mail"
        element={<SplitConfirmMail />}
      />
      <Route
        path="/verify_email/:token"
        element={<CheckPlan />}
      />
      <Route path="/registerPlan" element={<PricingDefault />} />
    </Routes>
  );
};

export default FalconRoutes;
