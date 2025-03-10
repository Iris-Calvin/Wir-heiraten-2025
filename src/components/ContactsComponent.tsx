import { Container, Box, Stack, Title, Text } from '@mantine/core';

const ContactsComponent = () => {
  return (
    <>
        <Container size="md">
            <Stack>
                <Box>
                    <Title order={4} fw={700} style={{ textAlign: 'left' }}>
                        Du brauchst einen Ansprechpartner?
                    </Title>
                   <Text style={{ textAlign: 'left' }}>
                   Bitte wende dich an die Trauzeugen:
                  </Text>
                  <List style={{ textAlign: 'left' }} pl={'lg'}>
                      <List.Item>🩷Sabrina: +43 699 17043553</List.Item>
                      <List.Item>💙Quentin: +43 699 17711313</List.Item>
                  </List>
                </Box>
            </Stack>
        </Container>
    </>
  );
};

export default ContactsComponent;
