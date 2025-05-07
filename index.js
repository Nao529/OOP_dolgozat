import { szenvedoMondatok } from "./angol.js";
import TesztKerdesek from "./TesztKerdesek.js";

document.addEventListener("DOMContentLoaded", () => {
  const tesztElem = document.querySelector("#tesztContainer");

  const kerdesek = szenvedoMondatok.filter(
    item => typeof item === "object" && "mondat" in item && "valasztas" in item
  );

  if (kerdesek.length === 0) {
    tesztElem.innerHTML = `<p class="text-danger">Nem található érvényes kérdés az angol.js fájlban!</p>`;
    console.error("Nem található megfelelő struktúrájú kérdés.");
    return;
  }
  new TesztKerdesek(kerdesek, tesztElem);
});
