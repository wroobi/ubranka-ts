export const getImage = (number: number) => {
  switch (number) {
    case 1:
      return "/dres.jpg";

    case 2:
      return "/spodnica.jpg";

    case 3:
      return "/spodnie.png";

    default:
      return "/sukienka.jpg";
  }
};
