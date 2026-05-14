
async function test() {
  try {
    const res = await fetch('https://content-guanaco-48.convex.cloud');
    console.log('Status:', res.status);
  } catch (e) {
    console.error('Fetch failed:', e);
  }
}
test();
