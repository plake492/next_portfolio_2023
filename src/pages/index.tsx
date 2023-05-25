import * as React from 'react'
import Head from 'next/head'
import Hero from '@components/components/Hero'
import AllProjects from '@components/components/AllProjects'
import Projects from '@components/components/Projects'
import GridStripWrapper from '@components/components/GridStripWrapper'
import PageBg from '@components/components/PageBg'
import About from '@components/components/About'

export default function Home() {
  return (
    <>
      <Head>
        <title>Patrick Lake | NodeJS</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PageBg>
        <GridStripWrapper dir="bl">
          <Hero />
        </GridStripWrapper>
        <About />
        <AllProjects />
        {/* <Projects project={'node.js'} /> */}
        {/* <Projects project={'GSAP.js'} /> */}
      </PageBg>
    </>
  )
}
