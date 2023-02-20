export const getImage = (number) => {
  let image = "";

  switch (number) {
    case 1:
      image = "/dres.jpg";
      break;
    case 2:
      image = "/spodnica.jpg";
      break;
    case 3:
      image = "/spodnie.png";
      break;
    case 4:
      image = "/sukienka.jpg";
      break;
    default:
      console.log("Nie wybrano");
      break;
  }
  return image;
};
