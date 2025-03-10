import { Box, Stack, Title, Text, Space } from '@mantine/core';

const ArrivalInfoComponent = () => {
  return (
     <Stack>
            <Box pl={'lg'}>
        <Title order={4} fw={700} style={{ textAlign: 'left' }}>
          Wie kommst du zur Feier? 
        </Title>
        <Text style={{ textAlign: 'left' }}>
          Hier findest du alle Infos für eine stressfreie Anreise. 😊
        </Text>
              <Space h="lg"/>
        <Text fw={500} style={{ textAlign: 'left' }}>
          Trauungslocation:
        </Text>
        <Text style={{ textAlign: 'left' }}>
          Weingut am Cobenzl, 29 Oberer Reisenbergweg, 1190 Wien
        </Text>
              <Space h="lg"/>
        <Text fw={700} style={{ textAlign: 'left' }}>
          Mit dem Auto:
        </Text>
        <Text style={{ textAlign: 'left' }}>
          Es stehen ausreichend Parkmöglichkeiten direkt an den Locations zur Verfügung, z. B. am Parkplatz Cobenzl.
        </Text>
        <Text fw={700} style={{ textAlign: 'left' }}>
          Mit öffentlichen Verkehrsmitteln:
        </Text>
        <Text style={{ textAlign: 'left' }}>
          Bahnhof Wien Heiligenstadt – mit der Buslinie A38 bis zur Haltestelle Parkplatz Cobenzl (Fahrtzeit ca. 20 Minuten).
        </Text>
        <Text fw={700} style={{ textAlign: 'left' }}>
          Shuttle-Service (optional):
        </Text>
        <Text style={{ textAlign: 'left' }}>
          Für alle Gäste die nicht mit Auto anreisen wollen, bieten wir einen <b>kostenlosen Shuttle-Service</b> vom Bahnhof Wien Heiligenstadt zu den Locations an.
        </Text>
        <Text style={{ textAlign: 'left' }}>
          Bitte bei Anmeldung angeben. Die genauen Abfahrtszeiten teilen wir rechtzeitig mit.
        </Text>
      </Box>
   </Stack>
   
  );
};

export default ArrivalInfoComponent;
