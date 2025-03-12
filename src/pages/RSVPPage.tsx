import { useMediaQuery } from '@mantine/hooks';
import { Loader } from "@mantine/core";
import { useForm } from '@mantine/form';
import { Container, Button, Group, Select, Flex, Text, Box,Checkbox, TextInput, Textarea, Stack, Radio, Alert } from '@mantine/core';
import { useEffect, useState, useRef } from 'react';

import { IconX } from '@tabler/icons-react';


const RSVPPage = () => {
    const isMobile = useMediaQuery('(max-width: 576px)');

    return (
        //<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeXRN_0K57mCCoY47wwOBAjXmSab--n_H9mXfQDvk8C0r6EYQ/viewform?embedded=true" 
        //width={isMobile ? "80%" : "568px"}
        //height="944"
        //style={{
            //border: 'none',
            //overflow: 'hidden', /* Prevent the scrollbars from appearing */
            //width: '100%', /* Ensure the iframe fits within the container */
            //position: 'relative', /* Optional: to better control iframe positioning */
        //}}>
        //Loading...
    //</iframe>
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSeXRN_0K57mCCoY47wwOBAjXmSab--n_H9mXfQDvk8C0r6EYQ/viewform?embedded=true"
          width={isMobile ? "80%" : "568px"}
          height="1800" // feste Höhe, die den gesamten Inhalt abdeckt
          scrolling="no"
          style={{
            border: 'none',
            position: 'relative',
          }}
        >
          Loading...
        </iframe>

    );
};

export default RSVPPage;
