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





const Home: NextPage = () => {

const externalLink = '/newsletter';
  return (
    <Container>
      <CookieConsent>
      We use cookies to improve your experience. By your continued use of this site you accept such use.
      </CookieConsent>

      <Header />
      
      {/* Navbar */}
      <Navbar isCompact variant={"static"}>
        <Navbar.Brand>
          <Text b color="inherit">
            Our Soda Brand
          </Text>
        </Navbar.Brand>
        <Navbar.Content hideIn="md">
          <Navbar> Established in 1970</Navbar>
        </Navbar.Content>
        <Navbar.Content>
          <Navbar.Link href="/newsletter">More</Navbar.Link>
        </Navbar.Content>
      </Navbar>
      {/* Jumbotron */}
      <Grid.Container justify="center" css={{"height": "500px", "borderRadius": "10px", "backgroundImage": "url(https://cdn.discordapp.com/attachments/819846167634116611/1181700264575635506/AdobeStock_284656117_Editorial_Use_Only_1_1.png?ex=65820322&is=656f8e22&hm=cf02243b50ff5ce5a05c16b808e0d6c91d4340d7c7e37f9cf79f928706a3f5a4&)"}}>
        <Grid xs={12} sm={6} alignItems="center">
          <Col css={{"width": "100%"}}>
            <Text weight={"bold"} size={60} css={{"textAlign": "center"}}>When it comes to drinks,</Text>
            <Text weight={"bold"} size={60} css={{"textAlign": "center"}}>we&#39;re tonic artisans.</Text>
            <Text weight={"normal"} size={25} css={{"textAlign": "center"}}>We always guarantee that our beverages will amaze your taste buds.</Text>
          </Col>
        </Grid>
      </Grid.Container>
      <br>
      </br>
      <br>
      </br>
      <Grid.Container justify="center" css={{"height": "500px", "borderRadius": "10px", "backgroundImage": "url(https://cdn.discordapp.com/attachments/819846167634116611/1181704573837119599/image_2.png?ex=65820725&is=656f9225&hm=78343c5166dedd43cd0a9c93d7aa5fce82d6ebc506a76cbca0ee69c7c8afb0c8&)"}}>
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
        color="gradient"
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



      {/* 3 Displaying Product Cards */}
      <Grid.Container gap={2}>
        <Grid xs={12} sm={4}>
          <InfoCard
            label=""
            title="Follow Our Instagram!"
            imageURL="https://thephotographerspassport.com/wp-content/uploads/2019/06/Insta_Presets_Featured22-1440x960.jpg"
            followerCount="52K"
          />
        </Grid>
        <Grid xs={12} sm={4}>
          <InfoCard
            label=""
            title="Follow Our Twitter!"
            imageURL="https://thefederalist.com/wp-content/uploads/2021/09/twitter-e1631558832208.jpeg"
            followerCount="131.5K"
          />
        </Grid>
        <Grid xs={12} sm={4}>
          <InfoCard
            label=""
            title="Subscribe to our YouTube!"
            imageURL="https://3.bp.blogspot.com/-G7kWVEXkp5o/XkZPuKQ5oKI/AAAAAAAAM08/ujInMimy0f4mg5E2_-qq94rTCkM7G-hXQCLcBGAsYHQ/s1360/youtube-diw.jpg"
            followerCount="81K"
          />
        </Grid>
      </Grid.Container>
      <Grid.Container gap={2}>
      <InfoCard
            label=""
            title="Follow Our Instagram!"
            imageURL="https://thephotographerspassport.com/wp-content/uploads/2019/06/Insta_Presets_Featured22-1440x960.jpg"
            followerCount="52K"
          />
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
        shadow
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
    </Container>
  )
}

export default Home
