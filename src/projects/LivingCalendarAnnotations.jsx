import { Media, RichText } from "../components/case-study/CaseStudy.jsx";

// All three clean screenshots share a 1512 × 945 canvas. Marks use source
// coordinates so they stay attached to the same controls at every screen size.
const marks = {
  "1": { ellipse: [173, 171, 50, 34], badge: [125, 135], start: [123, 171], bend: [40, 200, 10, 210] },
  "2": { ellipse: [756, 473, 289, 286], badge: [1007, 218], start: [1045, 490], bend: [1270, 500, 1380, 600] },
  "3": { ellipse: [44, 40, 40, 28], badge: [80, 20], start: [4, 45], bend: [-15, 35, -25, 60] },
  "4": { ellipse: [184, 214, 40, 62], badge: [145, 151], start: [144, 226], bend: [80, 305, 15, 370] },
  "5": { ellipse: [1304, 242, 86, 90], badge: [1225, 154], start: [1390, 240], bend: [1460, 225, 1500, 220] },
  "6": { ellipse: [1304, 475, 94, 90], badge: [1220, 390], start: [1398, 475], bend: [1490, 500, 1470, 590] },
  "7": { ellipse: [756, 473, 124, 77], badge: [638, 398], start: [632, 500], bend: [500, 720, 180, 760] },
  "8": { ellipse: [1338, 83, 44, 31], badge: [1295, 44], start: [1382, 83], bend: [1460, 105, 1480, 160] },
  "9": {
    outline: "M 243 49 C 560 45 1000 47 1273 51 Q 1312 51 1313 88 L 1311 822 Q 1311 855 1278 855 L 873 855 L 873 902 L 243 904 Q 210 902 212 867 L 211 88 Q 210 49 243 49 Z",
    badge: [213, 350], start: [212, 514], bend: [140, 570, 40, 600],
  },
};

function outlinePath(mark) {
  if (mark.outline) return mark.outline;
  const [x, y, rx, ry] = mark.ellipse;
  return `M ${x - rx} ${y}
    C ${x - rx * 1.04} ${y - ry * .6} ${x - rx * .5} ${y - ry * 1.04} ${x} ${y - ry}
    C ${x + rx * .6} ${y - ry * 1.08} ${x + rx * 1.05} ${y - ry * .45} ${x + rx} ${y}
    C ${x + rx * .98} ${y + ry * .65} ${x + rx * .45} ${y + ry * 1.02} ${x} ${y + ry}
    C ${x - rx * .6} ${y + ry * .98} ${x - rx * 1.03} ${y + ry * .5} ${x - rx} ${y} Z`;
}

function AnnotatedScreen({ media }) {
  const { notes } = media.annotations;
  return <figure className="lc-annotated-screen" aria-label={media.alt} data-content-id={media.id}>
    <div className="lc-annotation-board">
      <div className="lc-annotation-stage">
        <Media media={media} />
        <svg className="lc-annotation-marks" viewBox="0 0 1512 945" aria-hidden="true" focusable="false">
          {notes.map(note => {
            const mark = marks[note.number];
            const endX = note.side === "left" ? -30 : 1542;
            const endY = 945 * note.position / 100;
            return <g key={note.number}>
              <path className="lc-annotation-outline" d={outlinePath(mark)} />
              <path className="lc-annotation-leader" d={`M ${mark.start.join(" ")} C ${mark.bend.join(" ")} ${endX} ${endY}`} />
              <circle className="lc-annotation-endpoint" cx={endX} cy={endY} r="4" />
            </g>;
          })}
        </svg>
        {notes.map(note => <span key={note.number} className="lc-annotation-pin" aria-hidden="true"
          style={{ left: `${marks[note.number].badge[0] / 1512 * 100}%`, top: `${marks[note.number].badge[1] / 945 * 100}%` }}>
          {note.number}
        </span>)}
      </div>
      <ol className="lc-annotation-notes" aria-label="Findings marked on the image">
        {notes.map(note => <li key={note.number} value={Number(note.number)} data-side={note.side}
          style={{ "--annotation-position": `${note.position}%` }}>
          <span className="lc-annotation-number" aria-hidden="true">{note.number}</span>
          <div>
            <h4><RichText value={note.title} /></h4>
            <p><RichText value={note.text} /></p>
          </div>
        </li>)}
      </ol>
    </div>
  </figure>;
}

export default function AnnotatedTestingScreens({ block }) {
  const images = block.type === "image" ? [block] : block.items;
  return <div className="lc-annotated-studies" data-content-id={block.type === "image" ? undefined : block.id}>
    {images.map(media => <AnnotatedScreen media={media} key={media.id} />)}
  </div>;
}
