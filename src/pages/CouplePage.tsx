
import { useState, useEffect } from 'react'
import { Loader, Container, Box, Image, Title, Text } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks';

import styles from '../css/App.module.css'

import ICalenderButton from '../components/ICalenderButton';
import RSVPComponent from '../components/RSVPComponent';

import couple from '../assets/couple.jpeg';
import couple2 from '../assets/couple2.jpeg';
import couple3 from '../assets/couple3.jpeg';
import second from '../assets/second.jpeg';
import blumen_unterhalb from '../assets/blumen_unterhalb.png';
import blumen_ende_home from '../assets/blumen_ende_home.png';

const CountdownTimer = () => {
    const targetDate = new Date("2025-09-06T14:00:00").getTime();
    const [timeLeft, setTimeLeft] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const updateCountdown = () => {
            const now = new Date().getTime();
            const distance = targetDate - now;

            if (distance <= 0) {
                setTimeLeft("Die Hochzeit hat begonnen! 🎉");
            } else {
                const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((distance % (1000 * 60)) / 1000);

                setTimeLeft(`${days} Tage ${hours} Stunden ${minutes} Minuten ${seconds} Sekunden`);
            }
            setLoading(false); // Stop loading after first update
        };

        // Run once immediately to prevent delay
        updateCountdown();

        // Update every second
        const interval = setInterval(updateCountdown, 1000);

        return () => clearInterval(interval);
    }, [targetDate]);

    return loading ? <Loader color="blue" /> : <Text size="xl">{timeLeft}</Text>;
};

const CouplePage = () => {
    const isMobile = useMediaQuery('(max-width: 576px)');

    return (
        <Box className={styles.section}style={{
            position: 'relative',
        }}>
            <Image src={couple3} alt="couple" fit="cover" style={{
                maxHeight: "50vh",
            }} />
            <Image src={blumen_unterhalb} alt="blumen_unterhalb" w={300}/>
            <Container>
                <Title className={styles.special} pb={'lg'}>Iris & Calvin</Title>
                <CountdownTimer />
                <Text size="xl" pb={'lg'}>06 / 09 / 2025</Text>
                <RSVPComponent />
            </Container>
            <Image src={blumen_ende_home} alt="blumen_ende_home" w={isMobile ? 200 : 300} style={{
                position: 'absolute',
                left: 0,
                bottom: 0,
            }}/>
        </Box>
    );
};

export default CouplePage;
