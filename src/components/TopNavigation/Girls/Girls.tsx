interface MenProps {
    show?: boolean;
  }
const Girls : React.FC<MenProps> = ({ show }) =>{
  
    return (
    <div
    className={`absolute  left-0 right-0 max-0: hover-target mt-4 p-4 bg-white border rounded shadow-lg ${
      show ? "block" : "hidden"
    }`}
  >
    <div className="flex justify-around gap-4">
      <div className="p-4 rounded-lg">
        <h2 className="text-lg font-bold mb-2">Shop By Trend</h2>
        <ul>
          <li>Two Piece Sets</li>
          <li>Family Matching</li>
          <li>Sporty Prep</li>
          <li>Western Wear</li>

          <li>Tennis Outfits</li>
          <li>Style Moodboard </li>
        </ul>
      </div>
      <div className="p-4 rounded-lg">
        <h2 className="text-lg font-bold mb-2">Shop By Trend</h2>
        <ul>
          <li>Two Piece Sets</li>
          <li>Family Matching</li>
          <li>Sporty Prep</li>
          <li>Western Wear</li>

          <li>Tennis Outfits</li>
          <li>Style Moodboard </li>
        </ul>
      </div>
      <div className="p-4 rounded-lg">
        <h2 className="text-lg font-bold mb-2">Shop By Trend</h2>
        <ul>
          <li>Two Piece Sets</li>
          <li>Family Matching</li>
          <li>Sporty Prep</li>
          <li>Western Wear</li>

          <li>Tennis Outfits</li>
          <li>Style Moodboard </li>
        </ul>
      </div>
      <div className="p-4 rounded-lg">
        <h2 className="text-lg font-bold mb-2">Shop By Trend</h2>
        <ul>
          <li>Two Piece Sets</li>
          <li>Family Matching</li>
          <li>Sporty Prep</li>
          <li>Western Wear</li>

          <li>Tennis Outfits</li>
          <li>Style Moodboard </li>
        </ul>
      </div>
    </div>
  </div>
  )
}

export default Girls
