export const getResolvedLatLon = async (location, lat, lon) => {
  if (lat && lon) {
    return { lat, lon };
  }

  const locationLatLon = await getLocationLatLon(location);
  if (locationLatLon.latitude && locationLatLon.longitude) {
    return { lat: locationLatLon.latitude, lon: locationLatLon.longitude };
  }

  return undefined;
};

export const getLocationData = async (lat, lon) => {
  try {
    const response = await fetch(
      `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=en`
    );
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err.message);
  }
};

export const getLocationLonLatList = async () => {
  try {
    const response = await fetch(
      `https://eco-today-nojn.vercel.app/api/location`
    );
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err.message);
  }
};

export const getLocationLatLonList = async () => {
  try {
    const response = await fetch(
      `https://eco-today-nojn.vercel.app/api/location`
    );
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err.message);
  }
};

export const getLocationLatLon = async (locationName) => {
  try {
    const response = await fetch(
      `https://eco-today-nojn.vercel.app/api/location/${locationName}`
    );
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err.message);
  }
};
