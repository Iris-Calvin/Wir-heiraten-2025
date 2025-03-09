import { Stack, Box, Text, Title, Anchor } from "@mantine/core";
import ICalenderButton from '../components/ICalenderButton';

import styles from '../css/App.module.css';

const LocationPage = () => {
    return (
        <>
            <Stack align="center" pt={"2rem"}>
                <Box>
                    <Title className={styles.special}>
                        Location
                    </Title>
                </Box>

                <Box>
                    <Text fw={700}>Trauung:</Text>
                    <Text size="11pt">
                        <Anchor href="https://www.google.com/maps/search/?q=Weingut+Cobenzl" target="_blank">
                            Weingut Cobenzl
                        </Anchor>
                    </Text>
                    <Text size="11pt">Am Cobenlz 94, 1190 Wien</Text>
                </Box>
                <Box>
                    <Text  fw={700}>Feier:</Text>
                    <Text size="11pt">
                        <Anchor href="https://maps.app.goo.gl/YdkVTGZbnKfnEEKP9" target="_blank">
                            Stiftrestaurant Leopold
                        </Anchor>
                    </Text>
                    <Text size="11pt">Albrechtsbergergasse 1, 3400</Text>
                    <Text size="11pt">Klosterneuburg
                    </Text>
                </Box>

                <Box>
                    <Text size="11pt">Für alle, die sich den Termin noch nicht im Kalender eingetragen haben:</Text>
                    
                </Box>
                <Box pt={'xs'}>
                    <ICalenderButton />
                </Box>
            </Stack>
            
        </>
    );
};

export default LocationPage;