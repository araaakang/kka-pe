import { NextResponse } from 'next/server';
import { fetchPlaces } from '../../lib/data';
export async function GET() {
  try {
    const places = await fetchPlaces();
    return NextResponse.json(places);
  } catch (error) {
    console.error('Error fetching places:', error);
    return NextResponse.json(
      { error: 'Failed to fetch places' },
      { status: 500 }
    );
  }
}
