import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Flex from 'components/common/Flex';
import RegistrationForm from 'components/authentication/RegistrationForm';
import bgImg from 'assets/img/generic/15.jpg';
import AuthSplitLayout from 'layouts/AuthSplitLayout';
import PricingDefault from 'components/pages/pricing/pricing-default/PricingDefault';
import Billing from 'components/app/e-commerce/billing/Billing';

const Registration = () => {

  const auth = useSelector(state => state.auth)
  const [isPlan, setIsPlan] = useState(false)
  const [isBill, setIsBill] = useState(false)
  useEffect(() => {
    setIsBill(false)
    setIsPlan(false)
  }, [])
  console.log(isPlan)
  return (
    <AuthSplitLayout bgProps={{ image: bgImg }}>
      {isPlan && !isBill && <PricingDefault setIsBill={setIsBill} />}
      {!isPlan && !isBill && <>
        <Flex alignItems="center" justifyContent="between">
          <h3>Register</h3>
          <p className="mb-0 fs--1">
            <span className="fw-semi-bold">Already User? </span>
            <Link to="/login">Login</Link>
          </p>
        </Flex>
        <RegistrationForm layout="split" setIsPlan={setIsPlan} hasLabel />
      </>}

      {isBill && <Billing />}
    </AuthSplitLayout>
  );
};

export default Registration;
