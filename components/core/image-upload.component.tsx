import { useImperativeHandle, useState, useEffect, useRef, forwardRef } from 'react';
import {
  Box,
  Button,
  Image as CImage,
  Text
} from '@chakra-ui/react';
import { FilePond, registerPlugin } from 'react-filepond';
import FPPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FPPluginImagePreview from 'filepond-plugin-image-preview';
import FPPluginFileValidateType from 'filepond-plugin-file-validate-type';

import { fonts } from 'config';

import 'filepond/dist/filepond.min.css';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';

registerPlugin(
  FPPluginImageExifOrientation,
  FPPluginImagePreview,
  FPPluginFileValidateType
);

export const ImageUpload: any = forwardRef<any>((props: any, ref) => {
  const { name, onChange } = props;
  const pond = useRef<any>(null);
  const [files, setFiles] = useState<any>([]);

  useImperativeHandle(
    ref,
    () => ({
      clear() {
        setFiles([]);
      }
    }),
  );
  
  useEffect(() => {
    const file = files.length ? files[0].file : null;
    onChange && onChange(file);
  }, [files, onChange]);

  return (
    <Box
      className='image-upload'
      d='flex'
      flexDir='column'
      justifyContent='flex-start'
    >
      <FilePond
        ref={pond}
        name={name}
        labelIdle='Drop images here'
        files={files}
        acceptedFileTypes={['image/png', 'image/jpeg']}
        allowMultiple={false}
        maxFiles={1}
        onupdatefiles={setFiles}
        imagePreviewHeight={400}
      />
      <Button
        variant='link'
        height='75px'
        bgColor='#232323'
        color='rgba(255,255,255,0.8)'
        fontFamily={fonts.body}
        textTransform='none'
        borderRadius={0}
        onClick={() => pond.current?.browse()}
      >
        <CImage
          src='/assets/svgs/image.svg'
          alt='cover-art'
          d='inline-block'
          mr='16px'
          w='24px'
          h='24px'
          boxSizing='content-box'
        />
        <Text as='span'>
          Select an Image
        </Text>
      </Button>
    </Box>
  );
});

ImageUpload.displayName = 'ImageUpload';
