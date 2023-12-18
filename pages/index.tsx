import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Container, Navbar, Text, Button, Grid, Col } from '@nextui-org/react';
import InfoCard from '../components/InfoCard';
import { Table } from "@nextui-org/react";
import Link from 'next/link';
import {Textarea} from "@nextui-org/react";
import NewsletterForm from '../components/NewsletterForm'
import CookieConsent from 'react-cookie-consent';
import Header from '../components/Header';
import { createTheme, NextUIProvider } from "@nextui-org/react"





const Home: NextPage = () => {

const externalLink = '/newsletter';
  return (
    <Container>
      <title>IS Final</title>
      <div className='bg red-500'>
      <CookieConsent>
      We use cookies to improve your experience. By your continued use of this site you accept such use.
      </CookieConsent>

      <Header />
      
      {/* Navbar */}
      <Navbar>
        <Navbar.Brand>
          <Text b color="inherit">
            Velvet
          </Text>
        </Navbar.Brand>
        <Navbar.Content hideIn="md">
          <Navbar.Brand> Established in 1970</Navbar.Brand>
        </Navbar.Content>
        <Navbar.Content>
        <Link href={externalLink} passHref>
        <Button
        as="a" // Use the 'a' element for an external link
        size="sm"
        bordered color="gradient"
        css={{"width": "20%", "marginTop": "10px"}}
      >
        To Our Newsletter
      </Button>
      </Link>
        </Navbar.Content>
      </Navbar>
      <br>
      </br>
      <br>
      </br>
      {/* Jumbotron */}
      <Grid.Container justify="center" css={{"height": "500px", "borderRadius": "10px",  "backgroundImage": "url(/jumbo.png)",}}>
        <Grid xs={12} sm={6} alignItems="center">
          <Col css={{"width": "100%"}}>
            <Text weight={"bold"} size={60} css={{"textAlign": "center"}}>When it comes to beverages,</Text>
            <Text weight={"bold"} size={60} css={{"textAlign": "center"}}>we&#39;re liquid craftsmen.</Text>
            <Text weight={"normal"} size={25} css={{"textAlign": "center"}}>We always guarantee that our beverages will amaze your taste buds.</Text>
          </Col>
        </Grid>
      </Grid.Container>
      <br>
      </br>
      <br>
      </br>
      <Grid.Container justify="center" css={{"height": "500px", "borderRadius": "10px", "backgroundImage": "url(/jumbotwo.png)"}}>
        <Grid xs={12} sm={6} alignItems="center">
          <Col css={{"width": "100%"}}>
            <Text weight={"bold"} size={70} css={{"textAlign": "center"}}>Drink. Shop.</Text>
            <Text weight={"bold"} size={70} css={{"textAlign": "center"}}>Taste. Smile.</Text>
            <Text weight={"normal"} size={35} css={{"textAlign": "center"}}>Discover our rewards program, featuring soda coupons and chances to try new flavors.</Text>
            <Link href={externalLink} passHref>
      <Button
        as="a" // Use the 'a' element for a link
        size="md"
        shadow
        color="error"
        css={{"width": "100%", "marginTop": "10px"}}
      >
        Discover More
      </Button>
    </Link>
          </Col>
        </Grid>
      </Grid.Container>
      <br>
      </br>
      <br>
      </br>

      <div className="justify-center place-self-center">
          <h3>Social Media</h3>
      </div>



      {/* 3 Displaying Product Cards */}
      <Grid.Container gap={2}>
        <Grid xs={12} sm={4}>
        <Link href="https://www.instagram.com/">
        <a>
      <InfoCard
            label=""
            title="Follow Our Instagram!"
            imageURL="firstinfo.jpg"
            followerCount="52K"
          />
        </a>
        </Link>
        </Grid>
        <Grid xs={12} sm={4}>
        <Link href="https://twitter.com/explore">
        <a>
      <InfoCard
            label=""
            title="Follow Our Twitter!"
            imageURL="secondinfo.jpeg"
            followerCount="52K"
          />
        </a>
        </Link>
        </Grid>
        <Grid xs={12} sm={4}>
        <Link href="https://www.youtube.com/">
        <a>
      <InfoCard
            label=""
            title="Subscribe to our YouTube!"
            imageURL="thirdinfo.jpg"
            followerCount="52K"
          />
        </a>
        </Link>
        </Grid>
      </Grid.Container>
      <Grid.Container gap={2}>
      </Grid.Container>
    <br>
    </br>
    <br>
    </br>
    <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
    </div>
    <Link href={externalLink} passHref>
      <Button
        as="a" // Use the 'a' element for an external link
        size="sm"
        bordered
        color="gradient"
        css={{"width": "20%", "marginTop": "10px"}}
      >
        To Our Newsletter
      </Button>
      
    </Link>
      <br>
      </br>
      <br>
      </br>
      </div>
    </Container>
  )
}

export default Home
