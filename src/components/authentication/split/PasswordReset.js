import React from 'react';
import PasswordResetForm from 'components/authentication/PasswordResetForm';
import bgImg from 'assets/img/generic/20.jpg';
import AuthSplitLayout from 'layouts/AuthSplitLayout';
import Billing from 'components/app/e-commerce/billing/Billing';

const PasswordReset = () => {
  return (
    <AuthSplitLayout bgProps={{ image: bgImg }}>
      <Billing />
    </AuthSplitLayout>
  );
};

export default PasswordReset;
