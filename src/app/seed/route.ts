import { db } from '@vercel/postgres';
import { places } from '../lib/initial-data';

const client = await db.connect();

async function seedPlaces() {
  await client.sql`
    DELETE FROM places;
  `;

  await client.sql`
    CREATE TABLE IF NOT EXISTS places (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL UNIQUE,
    lat FLOAT NOT NULL,
    lng FLOAT NOT NULL
    );
  `;

  const insertedPlaces = await Promise.all(
    places.map(
      (place) => client.sql`
          INSERT INTO places (name, lat, lng)
          VALUES (${place.name}, ${place.lat}, ${place.lng})
          ON CONFLICT (name) DO NOTHING;
        `
    )
  );

  return insertedPlaces;
}
export async function GET() {
  //   return Response.json({
  //     message:
  //       'Uncomment this file and remove this line. You can delete this file when you are finished.',
  //   });
  try {
    await client.sql`BEGIN`;
    await seedPlaces();
    await client.sql`COMMIT`;

    return Response.json({ message: 'Database seeded successfully' });
  } catch (error) {
    await client.sql`ROLLBACK`;
    return Response.json({ error }, { status: 500 });
  }
}
