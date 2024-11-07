import Sign_In from '../components/Sign_In&Up'
import React from 'react';

function SignIn() {
  return <Sign_In route="/api/token/" method="login"/>
}

export default SignIn;
