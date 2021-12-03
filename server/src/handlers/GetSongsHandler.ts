import { DB } from '../Database';
import { MessageHandler } from '../MessageHandler';

async function onMessage(): Promise<any> {
  const songs = await DB.runQuery('get_songs');

  console.log('songs message');

  return { songs };
}

async function onMessage1(): Promise<any> {
  const songs = await DB.runQuery('get_genre');

  console.log('songs message');

  return { songs };
}

const schema = {};

export const GetSongsHandler = new MessageHandler(
  'get_songs',
  schema,
  onMessage,
);

export const GetSongsGenreChristmas = new MessageHandler(
  'get_genre',
  schema,
  onMessage1,
);