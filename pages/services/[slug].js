import Link from "next/link"
import { useRouter } from "next/router"
import { NextSeo } from 'next-seo';
export default function WebService()
{
    const router = useRouter()
const finalSlashIndex = router.asPath.lastIndexOf('/')
const previousPath = router.asPath.slice(0, finalSlashIndex)

 
return (
    <>
     <NextSeo
     title="Разработка мобильных приложений"
     description="Разработка мобильных приложений"
     />
   
<Link  className="tw-text-lg  tw-p-10 tw-hover:text-base" href={previousPath}> Назад</Link>
</>
)

}