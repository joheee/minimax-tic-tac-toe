export default class View {
  // Constructor that initializes the image elements
  constructor() {
    this.planetHoverImg = this.createImage(
      "./assets/planet/planet-hover.png",
      "tile-planet-hover",
      "Planet Hover Image"
    );
    this.starHoverImg = this.createImage(
      "./assets/star/star-hover.png",
      "tile-star-hover",
      "Star Hover Image"
    );
    this.starFillImg = this.createImage(
      "./assets/star/star-fill.png",
      "tile-star-fill",
      "Star Fill Image"
    );
    this.planetFillImg = this.createImage(
      "./assets/planet/planet-fill.png",
      "tile-planet-fill",
      "Planet Fill Image"
    );
  }

  // Method to create image elements
  createImage(src, className, altText) {
    const img = document.createElement("img");
    img.classList.add(className);
    img.src = src;
    img.alt = altText;
    return img;
  }

  // Method to get the images, allowing you to append them as needed
  getPlanetHoverImg() {
    return this.planetHoverImg;
  }

  getStarHoverImg() {
    return this.starHoverImg;
  }

  getStarFillImg() {
    return this.starFillImg;
  }

  getPlanetFillImg() {
    return this.planetFillImg;
  }
}
