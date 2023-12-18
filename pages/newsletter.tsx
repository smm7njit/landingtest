import React from 'react';
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
import backgroundImage from '..public/img9.png'

const Newsletter = () => {
const homeLink = '/index';
  return (
    <Container>
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
        <Link href="/" passHref>
        <Button
        as="a" // Use the 'a' element for an external link
        size="sm"
        bordered color="gradient"
        css={{"width": "20%", "marginTop": "10px"}}
      >
        To Home Page
      </Button>
      </Link>
        </Navbar.Content>
      </Navbar>
      <br>
      </br>
      <br>
      </br>
    <div className={styles.center}>
    <h2 text-color="black">Sign up for newsletters and our rewards program here:</h2>
    <div className={styles.centered}>
    <NewsletterForm 
    />
    </div>
    </div>
    <br>
      </br>
      <br>
      </br>
      <br>
      </br>
    </Container>
  );
};

export default Newsletter;