
import  {useState} from 'react';
import { useRouter } from 'next/router';
import {
   Box,
   Button,
   Grid,
    Heading,
    VStack,
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText ,
  Input, chakra} from '@chakra-ui/react';
import cx from 'classnames'
import Navigation from "../../components/header/Navigation";
import styles from '../../styles/signin.module.scss'
import { useSession, signIn, signOut } from 'next-auth/react';
import { BsGithub } from 'react-icons/bs';

const providers = [
  {
    name:'github',
    Icon:  'BsGithub'
}
]
export default function Signin() {
const [email,setEmail] = useState('');
  const {data: session, status} = useSession()
  const {push} = useRouter();
  const handleSubmit = (e)=> {
    e.preventDefault();
    if (!email) return false;
    signIn('email',{email,redirect:false})
  }
  const handleSignOut = async ()=> {
    const data = await signOut({redirect: false, callbackUrl: '/'})
    push(data.url);
    
  }
  if (status ==='loading' ) {
    return <Heading>Check Authentication</Heading>
  }
  if (session) {
    setTimeout(()=>{push('/')},5000)
    return <Heading><p>You already signed in </p>
    <br/>
    <Button onclick={handleSignOut()}>Sign out</Button> </Heading>
  }
  const handleOAuthSignIn = (provider)=>()=>signIn(provider)
 /*
    if (session) {
      return (
        <>
          Signed in as {session.user.email} <br />
          <button onClick={() => signOut()}>Sign out</button>
        </>
      )
    }
    return (
      <>
        Not signed in <br />
        <button onClick={() => signIn()}>Sign in</button>
      </>
  )
}

    */
   return(
    <>
 <Navigation />
      <main className={cx(styles["form-signin"],"text-center","mt-5")}>
        <form onSubmit={handleSubmit}>
          <h1 className="h3 mb-3 fw-normal"> Авторизация</h1>

          <div className="form-floating">
            <input type="email" className="form-control" onChange={e=>setEmail(e.target.value)} id="floatingInput" placeholder="name@example.com" />
            <label htmlFor="floatingInput">Email address</label>
          </div>
         

          <div className={cx(styles.checkbox,"mb-3")}>
            <label>
              <input type="checkbox" value="remember-me" /> Запомнить меня
            </label>
          </div>
          <button className="w-100 btn btn-lg btn-primary"   type="submit">Войти</button>

          
        </form>
      </main>
      
    </> )
  
}
/**
 * <Box>
            <VStack>
             { 
             providers.map(({name,Icon})=> (
              <chakra.Button
              key={name}
              leftIcon={<Icon/>} onclick={handleOAuthSignIn(name)} w='100%' textTransform={'uppercase'}>Sign in with {name}</chakra.Button>
             ))
             }
            </VStack>
          </Box>

           <div className="form-floating">
            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
            <label htmlFor="floatingPassword">Password</label>
          </div>
 */