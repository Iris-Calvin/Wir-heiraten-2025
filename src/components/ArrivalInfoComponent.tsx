import { Box, Stack, Title, Text, Space } from '@mantine/core';

const ArrivalInfoComponent = () => {
  return (
    <Box pl={'lg'} pr={'lg'}>
      <Stack>
        <Title order={4} fw={700} style={{ textAlign: 'left' }}>
          Anreiseinformationen
        </Title>
        <Text style={{ textAlign: 'left' }}>
          Damit ihr stressfrei zu unserer Hochzeit anreisen könnt, haben wir hier alle wichtigen Infos für euch zusammengefasst. 😊
        </Text>
        <Space h="lg" />
        <Text fw={500} style={{ textAlign: 'left' }}>
          Adresse der Trauungslocation:
        </Text>
        <Text style={{ textAlign: 'left' }}>
          Weingut am Cobenzl
          <br /> Eingang: 29 Oberer Reisenbergweg, 1190 Wien
        </Text>
        <Text fw={500} style={{ textAlign: 'left' }}>
          Mit dem Auto:
        </Text>
        <Text style={{ textAlign: 'left' }}>
          Falls ihr auf der Suche nach einem Parkplatz seid, gibt es ausreichend Parkmöglichkeiten direkt an den Locations.
        </Text>
        <Text style={{ textAlign: 'left' }}>
          Parkplatz Cobenzl
        </Text>
        <Text fw={500} style={{ textAlign: 'left' }}>
          Mit öffentlichen Verkehrsmitteln:
        </Text>
        <Text style={{ textAlign: 'left' }}>
          Der nächstgelegene Bahnhof ist Wien Heiligenstadt, ca. 17 Minuten mit öffentlichen Verkehrsmitteln.
        </Text>
        <Text style={{ textAlign: 'left' }}>
          A38 Busstation: Parkplatz Cobenzl, nur wenige Meter von der Location entfernt.
        </Text>
        <Text fw={500} style={{ textAlign: 'left' }}>
          Shuttle-Service (optional):
        </Text>
        <Text style={{ textAlign: 'left' }}>
          Für unsere Gäste, die ohne Auto anreisen, bieten wir einen Shuttle-Service vom Wien Heiligenstadt Bahnhof zur Trauungslocation und Hochzeitsfeierlocation an.
        </Text>
        <Text style={{ textAlign: 'left' }}>
          Weitere Details und Abfahrtszeiten bekommt ihr nach der Anmeldung zeitgerecht übermittelt.
        </Text>
      </Stack>
    </Box>
  );
};

export default ArrivalInfoComponent;
