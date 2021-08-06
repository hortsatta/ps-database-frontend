import axios from 'axios';

import { API_URL, generateHeaders } from 'config';
import { Game } from 'models';
import { imageUpload } from 'services';
import { parseUser } from './auth.service';

const baseURL = `${API_URL}/games`;

const parseGame = (data: any): Game => { console.log(data);
  const {
    id,
    title,
    developer,
    publisher,
    releaseDate,
    platforms,
    description,
    user,
    slug,
    reviews,
    coverImage,
    featureImage,
    published_at,
    created_at,
    updated_at,
  } = data;

  return {
    id,
    title,
    developer,
    publisher,
    releaseDate,
    platforms,
    description,
    user: parseUser(user),
    slug,
    reviews,
    coverImage,
    featureImage,
    publishedAt: published_at,
    createdAt: created_at,
    updatedAt: updated_at
  };
};

const create = async (game: Game & any, token: string): Promise<Game> => {
  const {
    title,
    description,
    developer,
    publisher,
    platforms,
    releaseDate,
    coverImageFile,
    featureImageFile
  } = game;

  const { status, data } = await axios.post(
    baseURL,
    {
      title,
      description,
      developer,
      publisher,
      platforms,
      releaseDate: releaseDate.toISOString()
    },
    generateHeaders(token)
  );

  if (status !== 200) {
    throw new Error(data.message);
  }

  try {
    const { id, slug } = data;
    const refName = `games-${id}-${slug}-`;

    if (coverImageFile) {
      coverImageFile.height = 600;
      coverImageFile.refName = refName + 'cover';
    }

    if (featureImageFile) {
      featureImageFile.height = 450;
      featureImageFile.refName = refName + 'feature';
    }

    const coverImage = coverImageFile && await imageUpload([coverImageFile], token, 'games', id);
    const featureImage = featureImageFile && await imageUpload([featureImageFile], token, 'games', id);
    const updatedGame = { coverImage, featureImage };

    const { status: updatedStatus , data: updatedData } = await axios.put(
      `${baseURL}/${id}`,
      updatedGame,
      generateHeaders(token)
    );

    if (updatedStatus !== 200) {
      throw new Error(data.message);
    }

    const result = parseGame(updatedData);

    return new Promise<Game>(resolve => resolve(result));
  } catch (error) {
    throw new Error(error.message);
  }
};

export { create };
