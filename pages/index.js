import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

import Link from 'next/link';

import { withSSRContext} from 'aws-amplify';

export default function Home({props, signOut, user}) {
  return (
    <div className="container">
      <Head>
        <title>Next.js Vercel3!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
        <p>
          Hello world
        </p>
        <p>
          {JSON.stringify(props.data)}
        </p>
        {/* {props.ret.data.listSjds.items.map(item => { */}
          {/* return <p>{item.FirstName}</p> */}
        {/* })} */}

        <div><pre>{JSON.stringify(user,null,2)}</pre></div>
          
        <Link href="/other" user={user}><a>other</a></Link>
        <button onClick={signOut}>Sign Out</button>
      </main>

      <Footer />
    </div>
  )
}
