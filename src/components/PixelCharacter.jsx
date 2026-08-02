import characterGb from '../assets/character-gb.png'

/** Game Boy DMG-style sprite derived from the reference character art. */
export default function PixelCharacter() {
  return (
    <img
      className="pixel-character"
      src={characterGb}
      alt=""
      width={320}
      height={900}
      draggable={false}
    />
  )
}
