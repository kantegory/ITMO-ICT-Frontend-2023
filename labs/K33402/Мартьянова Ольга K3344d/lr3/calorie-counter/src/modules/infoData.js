export function processInfoData(userData) {
  const infoData = {
    Name: userData.name,
    Email: userData.email,
    Gender: userData.gender,
    'Date of birth': userData.dateOfBirth
  }
  return infoData
}
