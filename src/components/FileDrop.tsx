import { useState } from 'react';
import { Box, Group, Text, rem, Button, TextInput } from '@mantine/core';
import { IconUpload, IconPhoto, IconX } from '@tabler/icons-react';
import { Dropzone, DropzoneProps, IMAGE_MIME_TYPE } from '@mantine/dropzone';
import { useHover } from '@mantine/hooks';
import DropboxUpload from './DropboxUpload.tsx';

export function FileDrop(props: Partial<DropzoneProps>) {
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [previewUrls, setPreviewUrls] = useState<string[]>([]);
  const { hovered, ref } = useHover();

  const correctPassword = '0609';

  const handleAcceptedFiles = (files: File[]) => {
    const previews = files.map(file => URL.createObjectURL(file));
    setPreviewUrls(previews);
    files.forEach(file => {
      DropboxUpload(file);
    });
  };

  const checkPassword = () => {
    if (password === correctPassword) {
      setAuthenticated(true);
    } else {
      alert('❌ Falsches Passwort');
    }
  };

  if (!authenticated) {
    return (
      <Box style={{ maxWidth: 400, margin: '4rem auto', textAlign: 'center' }}>
        <Text size="xl" mb="md">📸 Hochzeitsbilder hochladen</Text>
        <Text mb="xs">Bitte Passwort eingeben, um Bilder hochzuladen:</Text>
        <TextInput
          type="password"
          placeholder="Passwort"
          value={password}
          onChange={(event) => setPassword(event.currentTarget.value)}
          mb="sm"
        />
        <Button onClick={checkPassword}>🔓 Entsperren</Button>
      </Box>
    );
  }

  return (
    <Box style={{
      display: 'flex',
      justifyContent: 'center',
      maxWidth: 'calc(1280px + 2rem)',
    }}>
      <Box
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
          border: '1px solid var(--mantine-color-gray-5)',
          borderRadius: rem(8),
          padding: rem(20),
          margin: rem(20),
        }}
      >
        <Dropzone
          onDrop={handleAcceptedFiles}
          onReject={(files) => console.log('rejected files', files)}
          maxSize={5 * 1024 ** 2}
          accept={IMAGE_MIME_TYPE}
          {...props}
          styles={{
            root: {
              backgroundColor: hovered ? 'var(--mantine-color-gray-2)' : 'var(--mantine-color-gray-0)',
              border: '1px dashed var(--mantine-color-gray-5)',
              borderRadius: rem(8),
              padding: rem(20),
              cursor: 'pointer',
            },
          }}
          ref={ref}
        >
          <Group justify="center" gap="xl" mih={220} style={{ pointerEvents: 'none' }}>
            <Dropzone.Accept>
              <IconUpload style={{ width: rem(52), height: rem(52), color: 'var(--mantine-color-blue-6)' }} stroke={1.5} />
            </Dropzone.Accept>
            <Dropzone.Reject>
              <IconX style={{ width: rem(52), height: rem(52), color: 'var(--mantine-color-red-6)' }} stroke={1.5} />
            </Dropzone.Reject>
            <Dropzone.Idle>
              <IconPhoto style={{ width: rem(52), height: rem(52), color: 'var(--mantine-color-dimmed)' }} stroke={1.5} />
            </Dropzone.Idle>

            <div>
              <Text size="xl" inline>
                Bilder in den grauen Bereich ziehen oder hier klicken
              </Text>
              <Text size="sm" c="dimmed" inline mt={7}>
                Teile so viele Bilder wie du möchtest mit dem Brautpaar, jedes Bild darf maximal 5 MB groß sein.
              </Text>
            </div>
          </Group>
        </Dropzone>
      </Box>

      {/* Vorschau */}
      {previewUrls.length > 0 && (
        <Group mt="xl" justify="center" wrap="wrap" style={{ marginTop: '2rem' }}>
          {previewUrls.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Vorschau ${i}`}
              style={{ width: '150px', margin: '10px', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}
            />
          ))}
        </Group>
      )}
    </Box>
  );
}
