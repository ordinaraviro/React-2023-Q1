import { fetchData } from './api';

describe('fetchData', () => {
  it('should return photos response data', async () => {
    const response = await fetchData('cats', 10);
    expect(response).toHaveProperty('photos');
    expect(response.photos).toHaveProperty('page');
    expect(response.photos).toHaveProperty('pages');
    expect(response.photos).toHaveProperty('perpage');
    expect(response.photos).toHaveProperty('total');
    expect(response.photos).toHaveProperty('photo');
    expect(Array.isArray(response.photos.photo)).toBe(true);
  });
});
