import { sql } from '@vercel/postgres';
import { Place } from './definitions';

export async function fetchPlaces() {
  try {
    const data = await sql<Place>`SELECT * FROM places`;
    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch Places data.');
  }
}
