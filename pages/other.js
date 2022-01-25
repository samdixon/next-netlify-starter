import { withSSRContext} from 'aws-amplify';


export default function other({props}) {
    return (
        <p>{JSON.stringify(props.data)}</p>
    )
}

export async function getServerSideProps(context) {
    var q = `query listSjdDummyTables {
      listSjdDummyTables {
        items {
          FirstName
        }
      }
    }`
    const SSR = withSSRContext(context)
    console.log(SSR)
    try {
      var data = await SSR.API.graphql({
        query: q,
        authMode: "AMAZON_COGNITO_USER_POOLS",
      })  
      console.log(data)
    } catch(err) {
      console.log(err)
    }
    return {
      props: {
        data: data
      }
    }
  }