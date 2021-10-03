import Head from 'next/head'
import { Fragment } from 'react'
import Banner from '../components/layout/banner'

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Вітання</title>
      </Head>
    <Banner 
      title="НАТХНЕННЯ ТА СТИЛЬ" 
      subtitle="Створимо затишок та комфорт у вашому домі" 
      img="/assets/images/default-banner.png"/>
      <section>Content</section>
    </Fragment>
    
  )
}
