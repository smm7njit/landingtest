import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Container, Navbar, Text, Button, Grid, Col } from '@nextui-org/react';
import InfoCard from '../components/InfoCard';
import { Table } from "@nextui-org/react";
import Link from 'next/link';
import {Textarea} from "@nextui-org/react";

const Home: NextPage = () => {
  return (
    <Container>
      {/* Navbar */}
      <Navbar isCompact variant={"static"}>
        <Navbar.Brand>
          <Text b color="inherit">
            Our Soda Brand
          </Text>
        </Navbar.Brand>
        <Navbar.Content hideIn="md">
          <Navbar.Link href="#">View Products</Navbar.Link>
          <Navbar.Link href="#">Discover</Navbar.Link>
          <Navbar.Link href="#">Contact Us</Navbar.Link>
        </Navbar.Content>
        <Navbar.Content>
          <Navbar.Link href="#">Try Our Flavors</Navbar.Link>
        </Navbar.Content>
      </Navbar>
      {/* Jumbotron */}
      <Grid.Container justify="center" css={{"height": "500px", "borderRadius": "10px", "backgroundImage": "url(https://cdn.discordapp.com/attachments/819846167634116611/1181700264575635506/AdobeStock_284656117_Editorial_Use_Only_1_1.png?ex=65820322&is=656f8e22&hm=cf02243b50ff5ce5a05c16b808e0d6c91d4340d7c7e37f9cf79f928706a3f5a4&)"}}>
        <Grid xs={12} sm={6} alignItems="center">
          <Col css={{"width": "100%"}}>
            <Text weight={"bold"} size={70} css={{"textAlign": "center"}}>Watch Out For Our</Text>
            <Text weight={"bold"} size={70} css={{"textAlign": "center"}}>New Flavors!</Text>
            <Button size="md" shadow color="gradient" css={{"width": "100%", "marginTop": "10px"}}>Learn More</Button>
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
            <Button size="md" shadow color="gradient" css={{"width": "100%", "marginTop": "10px"}}>Discover More</Button>
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
      <Table
      aria-label="Standard table with static content"
      css={{
        height: "auto",
        minWidth: "100%",
      }}
    >
      <Table.Header>
        <Table.Column>HELP</Table.Column>
        <Table.Column>SHOP</Table.Column>
        <Table.Column>LEGAL</Table.Column>
      </Table.Header>
      <Table.Body>
        <Table.Row key="1">
          <Table.Cell><Link href="#">Contact Us</Link></Table.Cell>
          <Table.Cell><Link href="#">Online Store</Link></Table.Cell>
          <Table.Cell><Link href="#">Company</Link></Table.Cell>
        </Table.Row>
        <Table.Row key="2">
          <Table.Cell><Link href="#">Terms & Conditions</Link></Table.Cell>
          <Table.Cell><Link href="#">Product Facts</Link></Table.Cell>
          <Table.Cell><Link href="#">Careers</Link></Table.Cell>
        </Table.Row>
        <Table.Row key="3">
          <Table.Cell><Link href="#">Privacy Policy</Link></Table.Cell>
          <Table.Cell><Link href="#">Store Locator</Link></Table.Cell>
          <Table.Cell><Link href="#">Cookie Settings</Link></Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
    <br>
    </br>
    <br>
    </br>
    <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
    <Textarea
      minRows={1}
      label="Subscribe To Our Newsletter"
      placeholder="Enter your email here:"
      className="max-w-xs"
    />
    </div>
    <Button size="sm" shadow color="gradient" css={{"width": "13.4%", "marginTop": "10px"}}>Submit</Button>
      <br>
      </br>
      <br>
      </br>
    </Container>
  )
}

export default Home
