import 'styles/globals.css';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import { Amplify } from 'aws-amplify';

Amplify.configure({
  aws_cognito_region: process.env.NEXT_PUBLIC_AWS_REGION,
  aws_user_pools_id: process.env.NEXT_PUBLIC_USER_POOL_ID,
  aws_user_pools_web_client_id: process.env.NEXT_PUBLIC_WEB_CLIENT_ID,
  aws_mandatory_sign_in: true,  
  API: {
    aws_appsync_graphqlEndpoint: process.env.APPSYNC_API_ENDPOINT,
  },
  ssr: true,
});

function Application({ Component, pageProps, signOut, user }) {
  return <Component signOut={signOut} user={user} props={pageProps} />
}

export default Application