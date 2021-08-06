import Jimp from 'jimp/es';

export const optimizeImages = (files: any[]): Promise<{
  buffer: Buffer,
  filename: string
}[]> => (
  Promise.all(files.map(async file => {
    const fileUrl = URL.createObjectURL(file);
    const image = await Jimp.read(fileUrl);
    const optimizedImage = image
      .resize(file.width || Jimp.AUTO, file.height || Jimp.AUTO)
      .quality(90);
    const buffer = await optimizedImage.getBufferAsync(Jimp.MIME_JPEG);
    return { buffer, filename: `${file.refName}.jpg` };
  }))
);
