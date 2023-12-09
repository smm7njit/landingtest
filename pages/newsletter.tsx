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
        <Navbar isCompact variant={"static"}>
        <Navbar.Brand>
          <Text b color="inherit">
            Our Soda Brand
          </Text>
        </Navbar.Brand>
        <Navbar.Content hideIn="md">
          <Navbar>Established in 1970</Navbar>
        </Navbar.Content>
        <Navbar.Content>
          <Navbar.Link href="/">Home</Navbar.Link>
        </Navbar.Content>
      </Navbar>
      <br>
      </br>
      <br>
      </br>
    <div className={styles.center}>
    <h2>Sign up for newsletters and our rewards program here:</h2>
    <NewsletterForm />
    </div>
    </Container>
  );
};

export default Newsletter;