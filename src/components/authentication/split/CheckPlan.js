import React, {useState, useEffect} from 'react';
import Avatar from 'components/common/Avatar';
import LockScreenForm from 'components/authentication/LockScreenForm';
import { Col, Row } from 'react-bootstrap';
import team1 from 'assets/img/team/1.jpg';
import { useDispatch, useSelector } from 'react-redux';
import bgImg from 'assets/img/generic/18.jpg';
import AuthSplitLayout from 'layouts/AuthSplitLayout';
import { useParams } from 'react-router-dom';
import Flex from 'components/common/Flex';
import jwt_decode from 'jwt-decode';
import PricingDefault from 'components/pages/pricing/pricing-default/PricingDefault';
import Spinner from 'react-bootstrap/Spinner';
import { toast } from 'react-toastify';
import { setUserAction } from './store';


const CheckPlan = () => {
  const params = useParams();
  const decode = jwt_decode(params.token);
  const dispatch = useDispatch();
  useEffect(() => {
    localStorage.setItem('token', params.token);
    dispatch(setUserAction(decode))
  }, [params])

  const auth = useSelector(state => state.auth);
  console.log(auth.isAuthenticated)
  useEffect(() => {
    if (auth.isAuthenticated) {
      toast.success(`Welcome ${auth.user.username}`, {
        theme: 'colored'
      });
    }

    if (auth.error) {
      toast.error(auth.error.msg, {
        theme: 'colored'
      });
    }
  }, [auth])
  
  return (
    <AuthSplitLayout bgProps={{ image: bgImg }}>
      {auth.isAuthenticated?<Row className="justify-content-center">
        <PricingDefault />
      </Row>: <Spinner animation="border" variant="secondary" />}
    </AuthSplitLayout>
  );
};

export default CheckPlan;
