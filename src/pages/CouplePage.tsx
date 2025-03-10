
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

                setTimeLeft(`${days} Tg ${hours} Std ${minutes} Min ${seconds} Sek`);
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
        <Box className={styles.section} style={{
            position: 'relative',  // Container als Bezugspunkt für das Bild
            minHeight: '100vh',    // Sicherstellen, dass der Container mindestens so hoch wie der Bildschirm ist
        }}>
            {/* Das Bild von couple3 bleibt wie vorher */}
            <Image src={couple3} alt="couple" fit="cover" style={{
                maxHeight: "50vh",  // Bildhöhe begrenzen
                zIndex: 1,          // Das Bild bleibt im Vordergrund
            }} />
            
            {/* Das Blumenbild im Hintergrund */}
            <Image 
                src={blumen_ende_home} 
                alt="blumen_ende_home" 
                w={isMobile ? 200 : 300} 
                style={{
                    position: 'absolute',   // Absolut positionieren
                    left: 0,                // Am linken Rand
                    bottom: 0,              // Am unteren Rand
                    zIndex: -1,             // Im Hintergrund
                    marginBottom: '20px',   // Optional: Abstand nach unten
                }} 
            />

            <Container style={{ position: 'relative', zIndex: 2 }}>
                <Title className={styles.special} pb={'lg'} style={{ fontSize: '3rem' }}>Iris & Calvin</Title>
                <CountdownTimer />
                <Text size="xl" pb={'lg'}>06 / 09 / 2025</Text>
                <RSVPComponent />
            </Container>
        </Box>
    );
};


export default CouplePage;
