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
        <Text fw={500} style={{ textAlign: 'left' }}>
          Trauungslocation:
        </Text>
        <Text style={{ textAlign: 'left' }}>
          Weingut am Cobenzl, 29 Oberer Reisenbergweg, 1190 Wien
        </Text>
        <Text fw={500} style={{ textAlign: 'left' }}>
          Mit Auto:
        </Text>
        <Text style={{ textAlign: 'left' }}>
          Parkmöglichkeiten sind direkt an den Locations verfügbar (z.B. Parkplatz Cobenzl).
        </Text>
        <Text fw={500} style={{ textAlign: 'left' }}>
          Mit öffentlichen Verkehrsmitteln:
        </Text>
        <Text style={{ textAlign: 'left' }}>
          Bahnhof Wien Heiligenstadt, 20 Minuten mit öffentlichen Verkehrsmitteln.
        </Text>
        <Text style={{ textAlign: 'left' }}>
          A38 Busstation: Parkplatz Cobenzl, nur wenige Meter entfernt.
        </Text>
        <Text fw={500} style={{ textAlign: 'left' }}>
          Shuttle-Service (optional):
        </Text>
        <Text style={{ textAlign: 'left' }}>
          Wir bieten einen kostenlosen Shuttle-Service vom Bahnhof Wien Heiligenstadt zur Location.
        </Text>
        <Text style={{ textAlign: 'left' }}>
          Bitte bei Anmeldung angeben. Weitere Infos zur Abfahrt folgen.
        </Text>
      </Box>
   </Stack>
   
  );
};

export default ArrivalInfoComponent;
