export async function GET() {
  return Response.json({
    status: 'ok',
    service: 'localhands-api',
    timestamp: new Date().toISOString()
  });
}
