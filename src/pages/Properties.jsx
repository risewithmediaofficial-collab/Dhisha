import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import useScrollReveal from '../hooks/useScrollReveal'
import vipNagarBlueprint from '../assets/vip_nagar_blueprint.jpg'
import vipNagarIIBlueprint from '../assets/vip_nagar_ii_blueprint.jpg'
import vipFarmLandBlueprint from '../assets/vip_farm_land_blueprint.jpg'

/* --- Data --------------------------------------------------------------- */
const properties = [
  {
    id: 1,
    name: 'Disha VIP Nagar',
    tagline: 'DTCP & RERA Approved Residential Plots',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=900&q=80',
    location: 'S.F.No: 38/2, Natham Kiramam, Tiruppattur Taluk, Tiruppattur District',
    contacts: ['8667320187', '7010550674', '9360196898', '9003513246'],
    email: 'Disharealtyofficial@gmail.com',
    rera: 'DTCP & RERA Approved',
    description: 'Disha VIP Nagar is a premium DTCP & RERA approved residential layout situated in the fast-developing Tiruppattur region. Strategically located near NH highways and top institutions, these plots offer excellent connectivity and investment potential with fully formed infrastructure including 33-ft tar roads, underground electricity, and park areas.',
    plots: [
      { number: 1, area: 1271.50, facing: 'East', price: 'Contact Us', status: 'sold', roadWidth: '30 ft' },
      { number: 2, area: 1995.75, facing: 'West', price: 'Contact Us', status: 'sold', roadWidth: '30 ft' },
      { number: 3, area: 2052.50, facing: 'North', price: 'Contact Us', status: 'available', roadWidth: '30 ft' },
      { number: 4, area: 2079.90, facing: 'East', price: 'Contact Us', status: 'available', roadWidth: '30 ft' },
      { number: 5, area: 2367.25, facing: 'South', price: 'Contact Us', status: 'reserved', roadWidth: '33 ft' },
      { number: 6, area: 1650.00, facing: 'East', price: 'Contact Us', status: 'sold', roadWidth: '30 ft' },
      { number: 7, area: 1500.00, facing: 'East', price: 'Contact Us', status: 'available', roadWidth: '30 ft' },
      { number: 8, area: 1500.00, facing: 'North', price: 'Contact Us', status: 'available', roadWidth: '30 ft' },
      { number: 9, area: 1500.00, facing: 'East', price: 'Contact Us', status: 'reserved', roadWidth: '30 ft' },
      { number: 10, area: 1081.25, facing: 'West', price: 'Contact Us', status: 'sold', roadWidth: '30 ft' },
      { number: 11, area: 1250.00, facing: 'East', price: 'Contact Us', status: 'available', roadWidth: '30 ft' },
      { number: 12, area: 1500.00, facing: 'North', price: 'Contact Us', status: 'available', roadWidth: '30 ft' },
      { number: 13, area: 1500.00, facing: 'East', price: 'Contact Us', status: 'available', roadWidth: '30 ft' },
      { number: 14, area: 1606.25, facing: 'South', price: 'Contact Us', status: 'sold', roadWidth: '30 ft' },
      { number: 15, area: 1550.00, facing: 'East', price: 'Contact Us', status: 'reserved', roadWidth: '30 ft' },
      { number: 16, area: 1500.00, facing: 'West', price: 'Contact Us', status: 'available', roadWidth: '30 ft' },
      { number: 17, area: 1500.00, facing: 'North', price: 'Contact Us', status: 'available', roadWidth: '30 ft' },
      { number: 18, area: 1500.00, facing: 'East', price: 'Contact Us', status: 'sold', roadWidth: '30 ft' },
      { number: 19, area: 1500.00, facing: 'East', price: 'Contact Us', status: 'available', roadWidth: '30 ft' },
      { number: 20, area: 2337.50, facing: 'South', price: 'Contact Us', status: 'available', roadWidth: '33 ft' },
      { number: 21, area: 1320.00, facing: 'East', price: 'Contact Us', status: 'reserved', roadWidth: '30 ft' },
      { number: 22, area: 1220.00, facing: 'West', price: 'Contact Us', status: 'available', roadWidth: '30 ft' },
      { number: 23, area: 1220.00, facing: 'North', price: 'Contact Us', status: 'available', roadWidth: '30 ft' },
      { number: 24, area: 1295.50, facing: 'East', price: 'Contact Us', status: 'sold', roadWidth: '30 ft' },
      { number: 25, area: 1295.50, facing: 'East', price: 'Contact Us', status: 'available', roadWidth: '30 ft' },
      { number: 26, area: 1150.00, facing: 'South', price: 'Contact Us', status: 'available', roadWidth: '30 ft' },
      { number: 27, area: 1200.00, facing: 'East', price: 'Contact Us', status: 'available', roadWidth: '30 ft' },
      { number: 28, area: 1200.00, facing: 'West', price: 'Contact Us', status: 'reserved', roadWidth: '30 ft' },
      { number: 29, area: 1200.00, facing: 'North', price: 'Contact Us', status: 'available', roadWidth: '30 ft' },
      { number: 30, area: 1255.00, facing: 'East', price: 'Contact Us', status: 'available', roadWidth: '30 ft' },
      { number: 31, area: 1365.00, facing: 'East', price: 'Contact Us', status: 'sold', roadWidth: '30 ft' },
      { number: 32, area: 1200.00, facing: 'West', price: 'Contact Us', status: 'available', roadWidth: '30 ft' },
      { number: 33, area: 1200.00, facing: 'North', price: 'Contact Us', status: 'available', roadWidth: '30 ft' },
      { number: 34, area: 1200.00, facing: 'East', price: 'Contact Us', status: 'available', roadWidth: '30 ft' },
      { number: 35, area: 1085.00, facing: 'South', price: 'Contact Us', status: 'reserved', roadWidth: '30 ft' },
      { number: 36, area: 1200.00, facing: 'East', price: 'Contact Us', status: 'available', roadWidth: '30 ft' },
      { number: 37, area: 1200.00, facing: 'East', price: 'Contact Us', status: 'available', roadWidth: '30 ft' },
      { number: 38, area: 1200.00, facing: 'West', price: 'Contact Us', status: 'sold', roadWidth: '30 ft' },
      { number: 39, area: 1200.00, facing: 'North', price: 'Contact Us', status: 'available', roadWidth: '30 ft' },
      { number: 40, area: 1415.00, facing: 'East', price: 'Contact Us', status: 'available', roadWidth: '30 ft' },
      { number: 41, area: 1430.00, facing: 'South', price: 'Contact Us', status: 'available', roadWidth: '30 ft' },
      { number: 42, area: 1110.00, facing: 'East', price: 'Contact Us', status: 'sold', roadWidth: '30 ft' },
      { number: 43, area: 1110.00, facing: 'West', price: 'Contact Us', status: 'available', roadWidth: '30 ft' },
      { number: 44, area: 922.00, facing: 'North', price: 'Contact Us', status: 'available', roadWidth: '30 ft' },
    ],
  },
  {
    id: 2,
    name: 'Disha VIP Nagar II',
    tagline: 'DTCP Approved Premium Layout - Approval No: 07/2026',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80',
    location: 'S.F.No: 49/6A2, 49/7A, 49/7B, Periyakannalapatti Village, Tirupattur Taluk, Tirupattur District',
    contacts: ['8667320187', '9751119889'],
    email: 'Disharealtyofficial@gmail.com',
    rera: 'DTCP Approval No: 07/2026',
    description: 'Disha VIP Nagar II is the second phase of our flagship residential layout, located in Periyakannalapatti Village near Tirupattur. Approved by DTCP with 28 spacious plots plus 4 corner plots, the layout features wide internal roads (7.20M, 9.0M & 10.0M), proximity to the national highway, and superior connectivity to schools, colleges, and commercial centres.',
    plots: [
      { number: 1, area: 1103.00, facing: 'East', price: 'Contact Us', status: 'available', roadWidth: '7.20 M' },
      { number: 2, area: 1263.75, facing: 'West', price: 'Contact Us', status: 'sold', roadWidth: '7.20 M' },
      { number: 3, area: 1222.50, facing: 'North', price: 'Contact Us', status: 'available', roadWidth: '9.0 M' },
      { number: 4, area: 1609.25, facing: 'East', price: 'Contact Us', status: 'available', roadWidth: '10.0 M' },
      { number: 5, area: 1217.50, facing: 'South', price: 'Contact Us', status: 'reserved', roadWidth: '7.20 M' },
      { number: 6, area: 1201.00, facing: 'East', price: 'Contact Us', status: 'available', roadWidth: '9.0 M' },
      { number: 7, area: 1230.00, facing: 'North', price: 'Contact Us', status: 'available', roadWidth: '7.20 M' },
      { number: 8, area: 1681.00, facing: 'East', price: 'Contact Us', status: 'sold', roadWidth: '9.0 M' },
      { number: 9, area: 1225.00, facing: 'West', price: 'Contact Us', status: 'available', roadWidth: '9.0 M' },
      { number: 10, area: 1050.00, facing: 'East', price: 'Contact Us', status: 'reserved', roadWidth: '7.20 M' },
      { number: 11, area: 958.00, facing: 'South', price: 'Contact Us', status: 'available', roadWidth: '9.0 M' },
      { number: 12, area: 1260.75, facing: 'East', price: 'Contact Us', status: 'available', roadWidth: '7.20 M' },
      { number: 13, area: 1230.00, facing: 'North', price: 'Contact Us', status: 'sold', roadWidth: '10.0 M' },
      { number: 14, area: 1435.00, facing: 'West', price: 'Contact Us', status: 'available', roadWidth: '10.0 M' },
      { number: 15, area: 1120.00, facing: 'East', price: 'Contact Us', status: 'available', roadWidth: '7.20 M' },
      { number: 16, area: 960.00, facing: 'South', price: 'Contact Us', status: 'reserved', roadWidth: '7.20 M' },
      { number: 17, area: 736.00, facing: 'East', price: 'Contact Us', status: 'available', roadWidth: '6.70 M' },
      { number: 18, area: 792.50, facing: 'North', price: 'Contact Us', status: 'available', roadWidth: '6.70 M' },
      { number: 19, area: 990.00, facing: 'East', price: 'Contact Us', status: 'sold', roadWidth: '6.70 M' },
      { number: 20, area: 1251.25, facing: 'West', price: 'Contact Us', status: 'available', roadWidth: '6.70 M' },
      { number: 21, area: 1122.25, facing: 'East', price: 'Contact Us', status: 'available', roadWidth: '10.0 M' },
      { number: 22, area: 1681.00, facing: 'South', price: 'Contact Us', status: 'reserved', roadWidth: '10.0 M' },
      { number: 23, area: 1435.00, facing: 'East', price: 'Contact Us', status: 'available', roadWidth: '10.0 M' },
      { number: 24, area: 1230.00, facing: 'North', price: 'Contact Us', status: 'available', roadWidth: '10.0 M' },
      { number: 25, area: 990.00, facing: 'East', price: 'Contact Us', status: 'sold', roadWidth: '10.0 M' },
      { number: 26, area: 1324.00, facing: 'West', price: 'Contact Us', status: 'available', roadWidth: '10.0 M' },
      { number: 27, area: 990.00, facing: 'East', price: 'Contact Us', status: 'available', roadWidth: '10.0 M' },
      { number: 28, area: 1392.00, facing: 'South', price: 'Contact Us', status: 'available', roadWidth: '10.0 M' },
      { number: 'C1', area: 2178.00, facing: 'East', price: 'Contact Us', status: 'available', roadWidth: 'Corner' },
      { number: 'C2', area: 1275.00, facing: 'North', price: 'Contact Us', status: 'sold', roadWidth: 'Corner' },
      { number: 'C3', area: 1065.00, facing: 'East', price: 'Contact Us', status: 'available', roadWidth: 'Corner' },
      { number: 'C4', area: 1105.00, facing: 'West', price: 'Contact Us', status: 'reserved', roadWidth: 'Corner' },
    ],
  },
  {
    id: 3,
    name: 'Disha VIP Farm Land',
    tagline: 'Premium Agricultural & Farm Land Plots',
    image: 'https://images.unsplash.com/photo-1500916434205-0c77489c6cf7?auto=format&fit=crop&w=900&q=80',
    location: 'S.F.No: 79/2A12, 85/2A, Kakangarai Village, Tirupathur Taluk, Tirupathur District',
    contacts: ['8667320187', '9751117889'],
    email: 'Disharealtyofficial@gmail.com',
    rera: null,
    description: 'Disha VIP Farm Land is a serene agricultural layout nestled in Kakangarai Village with direct frontage to the Kakangarai Junction Road and Dharmapuri-Tirupattur State Highway (SH-60). The plots feature a wide 240-ft internal road network, making them ideal for premium farm house development and long-term agricultural investment.',
    plots: [
      { number: 1, area: 1052, facing: 'East', price: 'On Request', status: 'available', roadWidth: '240 ft' },
      { number: 2, area: 1989, facing: 'West', price: 'On Request', status: 'available', roadWidth: '240 ft' },
      { number: 3, area: 5562, facing: 'North', price: 'On Request', status: 'sold', roadWidth: '240 ft' },
      { number: 4, area: 5000, facing: 'East', price: 'On Request', status: 'available', roadWidth: '240 ft' },
      { number: 5, area: 5000, facing: 'South', price: 'On Request', status: 'reserved', roadWidth: '240 ft' },
      { number: 6, area: 5104, facing: 'East', price: 'On Request', status: 'available', roadWidth: '240 ft' },
      { number: 7, area: 9160, facing: 'North', price: 'On Request', status: 'available', roadWidth: '240 ft' },
      { number: 8, area: 9140, facing: 'East', price: 'On Request', status: 'sold', roadWidth: '240 ft' },
      { number: 9, area: 5050, facing: 'West', price: 'On Request', status: 'available', roadWidth: '240 ft' },
      { number: 10, area: 5100, facing: 'East', price: 'On Request', status: 'available', roadWidth: '240 ft' },
      { number: 11, area: 1997, facing: 'North', price: 'On Request', status: 'reserved', roadWidth: '240 ft' },
      { number: 12, area: 2300, facing: 'East', price: 'On Request', status: 'available', roadWidth: '240 ft' },
      { number: 13, area: 5180, facing: 'West', price: 'On Request', status: 'available', roadWidth: '240 ft' },
      { number: 14, area: 5062, facing: 'South', price: 'On Request', status: 'sold', roadWidth: '240 ft' },
      { number: 15, area: 5000, facing: 'East', price: 'On Request', status: 'available', roadWidth: '240 ft' },
      { number: 16, area: 5010, facing: 'North', price: 'On Request', status: 'available', roadWidth: '240 ft' },
      { number: 17, area: 5100, facing: 'East', price: 'On Request', status: 'reserved', roadWidth: '240 ft' },
      { number: 18, area: 9160, facing: 'West', price: 'On Request', status: 'available', roadWidth: '240 ft' },
      { number: 19, area: 9140, facing: 'East', price: 'On Request', status: 'available', roadWidth: '240 ft' },
      { number: 20, area: 5025, facing: 'South', price: 'On Request', status: 'sold', roadWidth: '240 ft' },
      { number: 21, area: 5037, facing: 'East', price: 'On Request', status: 'available', roadWidth: '240 ft' },
      { number: 22, area: 5069, facing: 'North', price: 'On Request', status: 'available', roadWidth: '240 ft' },
    ],
  },
]

/* --- PlotModal ----------------------------------------------------------- */
function PlotModal({ plot, propertyId, onClose }) {
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [onClose])

  const dims = getPlotDimensions(plot, propertyId)
  const isCorner = plot.roadWidth === 'Corner'

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-[heroFadeIn_0.2s_ease_forwards]"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className={`bg-white rounded-3xl shadow-2xl max-w-[340px] w-full p-8 relative border flex flex-col items-center justify-center min-h-[290px] ${
          isCorner ? 'border-gold bg-gold/5' : 'border-line'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-soft text-muted hover:bg-line hover:text-ink transition-colors text-sm font-bold cursor-pointer"
          aria-label="Close"
        >&times;</button>

        {/* CAD Border Dimensions (Outside the card interior boundaries) */}
        <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-2 py-0.5 text-[9px] font-black text-accent border border-line rounded-md shadow-sm">
          {dims.top}
        </span>
        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-white px-2 py-0.5 text-[9px] font-black text-accent border border-line rounded-md shadow-sm">
          {dims.bottom}
        </span>
        <span className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-2 py-0.5 text-[9px] font-black text-accent border border-line rounded-md shadow-sm rotate-90 whitespace-nowrap">
          {dims.left}
        </span>
        <span className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 bg-white px-2 py-0.5 text-[9px] font-black text-accent border border-line rounded-md shadow-sm rotate-90 whitespace-nowrap">
          {dims.right}
        </span>

        {/* Large Visual Center Content */}
        <div className="flex flex-col items-center text-center mt-2 w-full">
          <span className="w-12 h-12 rounded-full bg-soft border border-line/80 flex items-center justify-center text-base font-black text-ink shadow-sm mb-3">
            {plot.number}
          </span>
          
          <h4 className="text-xl font-black text-ink m-0 leading-none">
            {plot.area.toLocaleString()} <span className="text-xs font-semibold text-muted">sq.ft</span>
          </h4>
          
          <span className="text-[10px] font-black text-accent uppercase tracking-wider mt-2 bg-soft px-3 py-1 rounded-full border border-line/50">
            {plot.facing} Facing
          </span>

          {/* Core Specs instead of plain list table */}
          <div className="flex flex-col gap-1.5 mt-4 pt-4 border-t border-line/60 w-full text-xs font-semibold text-body">
            <div className="flex justify-between items-center px-2">
              <span className="text-muted">Road Width:</span>
              <span className="text-ink font-bold">{plot.roadWidth}</span>
            </div>
            <div className="flex justify-between items-center px-2">
              <span className="text-muted">Price:</span>
              <span className="text-gold font-bold">{plot.price}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

/* --- PlotCard ------------------------------------------------------------ */
function PlotCard({ plot, onClick }) {
  /* COMMENTED STATUS STYLES FOR LATER USE
  const statusStyles = {
    available: 'bg-emerald-50 border-2 border-emerald-400 text-emerald-700 hover:bg-emerald-100 hover:scale-110 hover:shadow-md cursor-pointer',
    sold: 'bg-red-50 border-2 border-red-400 text-red-700 opacity-70 cursor-not-allowed',
    reserved: 'bg-orange-50 border-2 border-orange-400 text-orange-700 hover:bg-orange-100 hover:scale-110 hover:shadow-md cursor-pointer',
  }
  */

  // Neutral style for all plot cards since status is hidden
  const neutralStyle = 'bg-white border-2 border-line text-ink hover:bg-soft hover:border-accent/40 hover:scale-110 hover:shadow-md cursor-pointer'

  return (
    <button
      className={`rounded-lg font-bold text-[11px] transition-all duration-200 flex items-center justify-center min-w-[70px] min-h-[44px] px-2 py-1.5 select-none ${neutralStyle}`}
      onClick={() => onClick(plot)}
      title={`Plot ${plot.number} - ${plot.area} sq.ft`}
      aria-label={`Plot ${plot.number}, ${plot.area} sq.ft`}
    >
      {plot.area}
    </button>
  )
}

/* --- PlotGrid ------------------------------------------------------------ */
// Helper to calculate or map dimensions based on user layout drawings
function getPlotDimensions(plot, propertyId) {
  const area = plot.area;
  
  // Property 2 (VIP Nagar II) exact layouts from the drawing
  if (propertyId === 2) {
    if (plot.number === 18) return { top: "29'6\"", bottom: "31'9\"", left: "26'6\"", right: "25'3\"" };
    if (plot.number === 19) return { top: "31'9\"", bottom: "34'3\"", left: "30'", right: "30'" };
    if (plot.number === 20) return { top: "34'3\"", bottom: "37'3\"", left: "35'", right: "35'" };
    if (plot.number === 'C1') return { top: "37'", bottom: "30'", left: "58'8\"", right: "49'6\"" };
  }
  
  // Property 3 (VIP Farm Land) exact layout from drawing
  if (propertyId === 3) {
    if (plot.number === 20) return { top: "146'9\"", bottom: "140'6\"", left: "104'3\"", right: "119'3\"" };
  }

  // Realistic defaults based on square footage & facing
  let width = 30;
  if (propertyId === 3) {
    // Large Farm Land
    if (area >= 9000) {
      width = 90;
    } else if (area >= 5000) {
      width = 50;
    } else {
      width = 30;
    }
  } else {
    // Residential plots
    if (area >= 2300) {
      width = 40;
    } else if (area >= 1800) {
      width = 35;
    } else if (area >= 1500) {
      width = 30;
    } else if (area >= 1200) {
      width = 25;
    } else {
      width = 20;
    }
  }
  
  const length = Math.round(area / width);
  return {
    top: `${width}'`,
    bottom: `${width}'`,
    left: `${length}'`,
    right: `${length}'`,
  }
}

function PlotGrid({ plots, propertyId }) {
  const [selectedPlot, setSelectedPlot] = useState(null)
  
  /* COMMENTED STATUS COUNTS FOR LATER USE
  const available = plots.filter(p => p.status === 'available').length
  const sold = plots.filter(p => p.status === 'sold').length
  const reserved = plots.filter(p => p.status === 'reserved').length
  */

  const renderMapLayout = () => {
    const cardClass = (plot) => {
      // Neutral style for all plot cards since status is hidden
      let styleClass = "bg-white border border-line text-ink hover:border-accent hover:bg-soft transition-all duration-200 flex flex-col items-center justify-center p-1 select-none min-h-[44px] w-full rounded-md cursor-pointer"
      if (plot.roadWidth === 'Corner') {
        styleClass += " border-gold bg-gold/5 hover:border-gold-light"
      }
      return styleClass
    }

    const renderPlotCard = (plot) => {
      if (!plot) return <div className="invisible" />
      return (
        <button
          key={plot.number}
          className={cardClass(plot)}
          onClick={() => setSelectedPlot(plot)}
          title={`Plot ${plot.number} - ${plot.area} sq.ft (${plot.facing} facing)`}
          aria-label={`Plot ${plot.number}, ${plot.area} sq.ft`}
        >
          <span className="text-[9px] font-black text-ink leading-none">
            {plot.number}
          </span>
          <span className="text-[7.5px] font-bold text-muted mt-0.5 leading-none">
            {Math.round(plot.area)}
          </span>
        </button>
      )
    }

    const renderRoad = (name) => (
      <div className="col-span-full bg-slate-700 text-white/90 h-6 flex items-center justify-center text-[7.5px] font-black tracking-widest uppercase rounded-md my-1 relative overflow-hidden border border-slate-600/50 select-none">
        <div className="absolute top-1/2 left-0 right-0 h-[0.5px] border-t border-dashed border-white/20 -translate-y-1/2" />
        <span className="relative z-10 px-2 bg-slate-700 text-slate-300">
          🛣️ {name}
        </span>
      </div>
    )

    if (propertyId === 1) {
      // Disha VIP Nagar - 11 columns
      return (
        <div className="w-full flex flex-col gap-1 p-0.5">
          <div className="grid grid-cols-11 gap-1 w-full">
            {plots.slice(0, 11).map(renderPlotCard)}
          </div>
          {renderRoad("Internal Road - 30 FT")}
          <div className="grid grid-cols-11 gap-1 w-full">
            {plots.slice(11, 22).map(renderPlotCard)}
          </div>
          <div className="grid grid-cols-11 gap-1 w-full">
            {plots.slice(22, 33).map(renderPlotCard)}
          </div>
          {renderRoad("Main Tar Road - 33 FT")}
          <div className="grid grid-cols-11 gap-1 w-full">
            {plots.slice(33, 44).map(renderPlotCard)}
          </div>
        </div>
      )
    }

    if (propertyId === 2) {
      // Disha VIP Nagar II - 9 columns (4 left + 1 road + 4 right)
      // Standard plots 1-28 mapped to indexes 0-27
      // Corner plots C1-C4 mapped to indexes 28-31
      
      const renderVRoad = () => (
        <div className="bg-slate-700/70 text-slate-400 flex items-center justify-center text-[7px] font-bold rounded select-none min-h-[44px] w-full border-l border-r border-slate-600/30">
          ↕
        </div>
      )

      return (
        <div className="w-full grid grid-cols-9 gap-1 p-0.5">
          {/* Row 1 (Top Plots) */}
          {renderPlotCard(plots[0])}
          {renderPlotCard(plots[1])}
          {renderPlotCard(plots[2])}
          {renderPlotCard(plots[28])} {/* Corner C1 */}
          {renderVRoad()}
          {renderPlotCard(plots[29])} {/* Corner C2 */}
          {renderPlotCard(plots[3])}
          {renderPlotCard(plots[4])}
          {renderPlotCard(plots[5])}

          {/* Row 2 (Middle Top Plots) */}
          {renderPlotCard(plots[6])}
          {renderPlotCard(plots[7])}
          {renderPlotCard(plots[8])}
          {renderPlotCard(plots[9])}
          {renderVRoad()}
          {renderPlotCard(plots[10])}
          {renderPlotCard(plots[11])}
          {renderPlotCard(plots[12])}
          {renderPlotCard(plots[13])}

          {/* Horizontal Divider Road */}
          <div className="col-span-9 bg-slate-700 text-white/90 h-6 flex items-center justify-center text-[7.5px] font-black tracking-widest uppercase rounded-md my-0.5 relative overflow-hidden border border-slate-600/50 select-none">
            <div className="absolute top-1/2 left-0 right-0 h-[0.5px] border-t border-dashed border-white/20 -translate-y-1/2" />
            <span className="relative z-10 px-2 bg-slate-700 text-slate-300">
              🛣️ WIDE INTERNAL ROAD - 9.0 M
            </span>
          </div>

          {/* Row 3 (Middle Bottom Plots) */}
          {renderPlotCard(plots[14])}
          {renderPlotCard(plots[15])}
          {renderPlotCard(plots[16])}
          {renderPlotCard(plots[17])}
          {renderVRoad()}
          {renderPlotCard(plots[18])}
          {renderPlotCard(plots[19])}
          {renderPlotCard(plots[20])}
          {renderPlotCard(plots[21])}

          {/* Row 4 (Bottom Plots) */}
          {renderPlotCard(plots[22])}
          {renderPlotCard(plots[23])}
          {renderPlotCard(plots[24])}
          {renderPlotCard(plots[30])} {/* Corner C3 */}
          {renderVRoad()}
          {renderPlotCard(plots[31])} {/* Corner C4 */}
          {renderPlotCard(plots[25])}
          {renderPlotCard(plots[26])}
          {renderPlotCard(plots[27])}

          {/* Row 5 (Entrance Road - spans all 9 columns) */}
          <div className="col-span-9 bg-slate-700 text-white/90 h-6 flex items-center justify-center text-[7.5px] font-black tracking-widest uppercase rounded-md my-0.5 relative overflow-hidden border border-slate-600/50 select-none">
            <div className="absolute top-1/2 left-0 right-0 h-[0.5px] border-t border-dashed border-white/20 -translate-y-1/2" />
            <span className="relative z-10 px-2 bg-slate-700 text-slate-300">
              🛣️ PREMIUM MAIN ENTRANCE ROAD - 10.0 M
            </span>
          </div>
        </div>
      )
    }

    if (propertyId === 3) {
      // Disha VIP Farm Land - 13 columns grid (12 for layout + 1 for highway on the right)
      // Plots indices mapping:
      // Row 1 (Top): Col 0: Plot 20 (idx 19), Col 1: Plot 19 (idx 18), Col 2: V-Road, Col 3: Plot 18 (idx 17), Col 4: Plot 17 (idx 16), Col 5: Plot 16 (idx 15), Col 6: V-Road, Col 7: Plot 15 (idx 14), Col 8: Plot 14 (idx 13), Col 9: Plot 13 (idx 12), Col 10: Plot 12 (idx 11), Col 11: Empty
      // Row 2: Horizontal Road (col-span-12)
      // Row 3: Col 0: Plot 9 (idx 8), Col 1: Empty, Col 2: V-Road, Col 3: Plot 8 (idx 7), Col 4: Plot 7 (idx 6), Col 5: Plot 6 (idx 5), Col 6: V-Road, Col 7: Plot 5 (idx 4), Col 8: Plot 4 (idx 3), Col 9: Plot 3 (idx 2), Col 10: Plot 2 (idx 1), Col 11: Plot 1 (idx 0)
      // Row 4 (Bottom): Col 0: Plot 10 (idx 9), Col 1: Plot 11 (idx 10), Col 2: V-Road, Col 3: Plot 22 (idx 21), Col 4: Plot 21 (idx 20), Col 5-11: Empty

      const renderVRoad = () => (
        <div className="bg-slate-700/70 text-slate-400 flex items-center justify-center text-[7px] font-bold rounded select-none min-h-[44px] w-full border-l border-r border-slate-600/30">
          ↕
        </div>
      )

      return (
        <div className="w-full grid grid-cols-13 gap-1 p-0.5 relative">
          
          {/* Row 1 (Top Plots) */}
          {renderPlotCard(plots[19])}
          {renderPlotCard(plots[18])}
          {renderVRoad()}
          {renderPlotCard(plots[17])}
          {renderPlotCard(plots[16])}
          {renderPlotCard(plots[15])}
          {renderVRoad()}
          {renderPlotCard(plots[14])}
          {renderPlotCard(plots[13])}
          {renderPlotCard(plots[12])}
          {renderPlotCard(plots[11])}
          <div className="invisible" />

          {/* Highway (Column 12, spans all 4 rows) */}
          <div className="col-start-13 row-span-4 bg-slate-800 text-white/90 flex flex-col items-center justify-center text-[8px] font-black tracking-widest uppercase rounded-lg border border-slate-700/60 p-2 relative overflow-hidden select-none min-h-[190px]">
            <div className="absolute left-1/2 top-0 bottom-0 w-[1px] border-l border-dashed border-white/20 -translate-x-1/2" />
            <span className="relative z-10 [writing-mode:vertical-lr] rotate-180 text-center tracking-widest text-slate-300">
              Kakangarai Junction Road (SH-60)
            </span>
          </div>

          {/* Row 2 (Horizontal Road - spans columns 0-11) */}
          <div className="col-span-12 bg-slate-700 text-white/90 h-6 flex items-center justify-center text-[7.5px] font-black tracking-widest uppercase rounded-md my-0.5 relative overflow-hidden border border-slate-600/50 select-none">
            <div className="absolute top-1/2 left-0 right-0 h-[0.5px] border-t border-dashed border-white/20 -translate-y-1/2" />
            <span className="relative z-10 px-2 bg-slate-700 text-slate-300">
              🛣️ 24'0" ROAD
            </span>
          </div>

          {/* Row 3 (Middle Plots) */}
          {renderPlotCard(plots[8])}
          <div className="invisible" />
          {renderVRoad()}
          {renderPlotCard(plots[7])}
          {renderPlotCard(plots[6])}
          {renderPlotCard(plots[5])}
          {renderVRoad()}
          {renderPlotCard(plots[4])}
          {renderPlotCard(plots[3])}
          {renderPlotCard(plots[2])}
          {renderPlotCard(plots[1])}
          {renderPlotCard(plots[0])}

          {/* Row 4 (Bottom Plots) */}
          {renderPlotCard(plots[9])}
          {renderPlotCard(plots[10])}
          {renderVRoad()}
          {renderPlotCard(plots[21])}
          {renderPlotCard(plots[20])}
          <div className="invisible" />
          <div className="invisible" />
          <div className="invisible" />
          <div className="invisible" />
          <div className="invisible" />
          <div className="invisible" />
          <div className="invisible" />
        </div>
      )
    }

    // Fallback simple grid
    return (
      <div className="flex flex-wrap gap-1">
        {plots.map(renderPlotCard)}
      </div>
    )
  }

  return (
    <>
      <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
        <span className="text-[10px] font-bold text-muted uppercase tracking-wider">
          Interactive Plot Structure Map
        </span>
      </div>

      <div className="w-full bg-white/40 p-1 rounded-xl border border-line">
        {renderMapLayout()}
      </div>

      <div className="flex gap-5 pt-3 border-t border-line mt-3">
        <div className="text-left">
          <p className="text-base font-black text-ink leading-none mb-0.5">{plots.length}</p>
          <p className="text-[9px] font-bold text-muted uppercase tracking-wider m-0">Total Plots</p>
        </div>
        {/* COMMENTED STATUS GRID COUNTS FOR LATER USE
        {[
          ['Available', available, 'text-emerald-600'],
          ['Sold', sold, 'text-red-600'],
          ['Reserved', reserved, 'text-orange-600']
        ].map(([label, count, color]) => (
          <div key={label} className="text-center">
            <p className={`text-lg font-black ${color} leading-none mb-0.5`}>{count}</p>
            <p className="text-[10px] font-bold text-muted uppercase tracking-wider m-0">{label}</p>
          </div>
        ))}
        */}
      </div>

      {selectedPlot && <PlotModal plot={selectedPlot} propertyId={propertyId} onClose={() => setSelectedPlot(null)} />}
    </>
  )
}



/* --- PropertyDetailsModal ------------------------------------------------ */
function PropertyDetailsModal({ property, onClose }) {
  const [activeLightboxImage, setActiveLightboxImage] = useState(null)

  // Prevent background scroll when modal is open
  useEffect(() => {
    const originalBodyOverflow = document.body.style.overflow
    const originalHtmlOverflow = document.documentElement.style.overflow

    document.body.style.overflow = 'hidden'
    document.documentElement.style.overflow = 'hidden'

    const handler = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handler)
    return () => {
      document.body.style.overflow = originalBodyOverflow || 'unset'
      document.documentElement.style.overflow = originalHtmlOverflow || 'unset'
      document.removeEventListener('keydown', handler)
    }
  }, [onClose])

  /* COMMENTED STATUS COUNTS FOR LATER USE
  const availableCount = property.plots.filter(p => p.status === 'available').length
  */

  const getBlueprintSrc = () => {
    if (property.id === 1) return '/vip nagar 1.jpeg'
    if (property.id === 2) return '/vip nagar 2.jpeg'
    return '/farm land 3.jpeg'
  }

  const blueprintSrc = getBlueprintSrc()

  return (
    <div
      className="fixed inset-0 z-40 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-[heroFadeIn_0.2s_ease_forwards]"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="bg-white rounded-3xl shadow-2xl w-[92vw] md:w-[80vw] h-[85vh] md:h-[80vh] flex flex-col overflow-hidden relative border border-line"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 md:top-5 md:right-5 z-50 w-9 h-9 md:w-10 md:h-10 flex items-center justify-center rounded-full bg-white/90 md:bg-soft text-muted hover:bg-line hover:text-ink hover:scale-110 transition-all text-xl font-bold cursor-pointer shadow-md border border-line/40 backdrop-blur-sm"
          aria-label="Close"
        >
          &times;
        </button>

        {/* Modal Content - Scrollable container */}
        <div className="flex-1 overflow-y-auto">
          {/* Hero Banner inside Modal */}
          <div className="relative h-[220px] md:h-[300px] w-full overflow-hidden">
            <img
              src={property.image}
              alt={property.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 flex flex-col gap-2">
              <div className="flex flex-wrap items-center gap-2">
                <span className="bg-accent/95 text-white text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md">
                  {property.plots.length} Plots Total
                </span>
                {/* COMMENTED AVAILABLE BADGE FOR LATER USE
                <span className="bg-emerald-600/95 text-white text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md">
                  {availableCount} Available
                </span>
                */}
              </div>
              <h2 className="text-xl md:text-3xl font-black text-white m-0 leading-tight drop-shadow-sm">{property.name}</h2>
              <p className="text-xs md:text-sm text-white/85 m-0 font-medium tracking-wide">{property.tagline}</p>
            </div>
          </div>

          {/* Details Grid */}
          <div className="p-6 md:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10">
              {/* Left Column: Info & Specifications */}
              <div className="lg:col-span-5 flex flex-col gap-6">
                <div>
                  <p className="text-xs font-bold tracking-[2px] uppercase text-accent mb-2">Overview</p>
                  <p className="text-sm text-body leading-relaxed m-0 text-justify">
                    {property.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-line mt-2">
                  <p className="text-xs font-bold tracking-[2px] uppercase text-accent mb-4">Specifications</p>
                  <div className="space-y-4">
                    {[
                      ['Location', property.location],
                      ['Contact Us', property.contacts.join(' / ')],
                      ['Email Address', property.email],
                      ...(property.rera ? [['Approval', property.rera]] : []),
                    ].map(([label, value]) => (
                      <div key={label} className="flex gap-4 items-start py-1">
                        <div className="min-w-[100px] shrink-0 text-xs font-bold uppercase tracking-wider text-muted pt-0.5">{label}</div>
                        <div className="text-ink font-semibold text-sm leading-relaxed">{value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Layout Blueprint Image */}
              <div className="lg:col-span-7 flex flex-col gap-6 lg:border-l lg:border-line lg:pl-10">
                <div>
                  <p className="text-xs font-bold tracking-[2px] uppercase text-accent mb-2">Layout Map</p>
                  <h3 className="text-base font-black text-ink mb-4">Property Layout Blueprint</h3>
                  <p className="text-xs text-muted mb-6 leading-relaxed">
                    Detailed blueprint plan of the layout showing plot divisions, road networks, and dimensions. Click the image to view large zoom.
                  </p>
                </div>

                <div 
                  className="bg-soft border border-line/60 rounded-2xl p-4 shadow-inner flex items-center justify-center overflow-hidden cursor-zoom-in group/blueprint relative"
                  onClick={() => setActiveLightboxImage(blueprintSrc)}
                  title="Click to view large layout plan"
                >
                  <img
                    src={blueprintSrc}
                    alt={`${property.name} Blueprint`}
                    className="w-full h-auto max-h-[440px] object-contain rounded-xl border border-line/45 hover:scale-[1.01] transition-all duration-300 shadow-sm"
                  />
                  {/* Hover hint */}
                  <div className="absolute inset-0 bg-black/0 group-hover/blueprint:bg-black/5 pointer-events-none transition-colors duration-200 flex items-center justify-center">
                    <span className="opacity-0 group-hover/blueprint:opacity-100 bg-ink/85 text-white text-[10px] font-black tracking-wider px-3.5 py-2 rounded-full shadow-lg transition-all duration-200 scale-95 group-hover/blueprint:scale-100">
                      🔍 Click to Zoom Layout Plan
                    </span>
                  </div>
                </div>

                {/* COMMENTED INTERACTIVE GRID FOR LATER USE
                <div className="bg-soft border border-line/60 rounded-2xl p-6 shadow-inner">
                  <PlotGrid plots={property.plots} propertyId={property.id} />
                </div>
                */}
              </div>
            </div>
          </div>
        </div>

        {/* Fullscreen Blueprint Lightbox Modal */}
        {activeLightboxImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md cursor-zoom-out animate-[heroFadeIn_0.2s_ease_forwards]"
            onClick={() => setActiveLightboxImage(null)}
            role="dialog"
            aria-modal="true"
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveLightboxImage(null)}
              className="absolute top-4 right-4 z-[60] w-10 h-10 flex items-center justify-center rounded-full bg-white/15 text-white hover:bg-white/25 transition-all text-2xl font-bold cursor-pointer border border-white/10"
              aria-label="Close Zoom"
            >
              &times;
            </button>
            <img
              src={activeLightboxImage}
              alt="Enlarged Blueprint Layout"
              className="max-w-[95vw] max-h-[90vh] object-contain rounded-2xl border border-white/10 shadow-2xl animate-[heroFadeIn_0.25s_ease_forwards]"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}
      </div>
    </div>
  )
}

/* --- PropertyCard -------------------------------------------------------- */
function PropertyCard({ property, onOpen }) {
  /* COMMENTED STATUS COUNT FOR LATER USE
  const availableCount = property.plots.filter(p => p.status === 'available').length
  */

  return (
    <article 
      className="bg-white rounded-2xl overflow-hidden border border-line hover:border-accent/30 transition-all duration-400 hover:shadow-xl hover:-translate-y-1 cursor-pointer flex flex-col h-full group"
      onClick={onOpen}
    >
      <div className="relative overflow-hidden">
        <img
          src={property.image}
          alt={property.name}
          className="w-full aspect-[16/9] object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h2 className="text-xl font-black text-white mb-1">{property.name}</h2>
          <p className="text-sm text-white/75 m-0">{property.tagline}</p>
        </div>
        <div className="absolute top-4 right-4">
          <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wider backdrop-blur-sm transition-all duration-300 bg-white/90 text-accent group-hover:bg-accent group-hover:text-white">
            View Details
          </span>
        </div>
        <div className="absolute top-4 left-4">
          <span className="bg-black/60 text-white text-[11px] font-bold tracking-wider px-3 py-1.5 rounded-full backdrop-blur-sm">
            {property.plots.length} Plots
          </span>
        </div>
      </div>

      <div className="flex items-center justify-between px-6 py-4 border-t border-line hover:bg-soft transition-colors mt-auto">
        <div className="flex items-center gap-4 text-[13px] flex-wrap">
          <span className="flex items-center gap-1.5 text-muted font-medium">
            {property.location.split(',').slice(-2).join(',').trim()}
          </span>
          {/* COMMENTED STATUS INDICATOR FOR LATER USE
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block" />
            <span className="font-semibold text-emerald-600">{availableCount} available</span>
          </span>
          */}
        </div>
        <span className="text-accent font-black text-xl leading-none transition-transform duration-300 group-hover:translate-x-1">
          &rarr;
        </span>
      </div>
    </article>
  )
}

/* --- Page ---------------------------------------------------------------- */
const sectionKicker = 'inline-block mb-3.5 text-accent text-xs font-semibold tracking-[2.5px] uppercase'
const btnPrimary = 'inline-flex items-center justify-center gap-2 min-h-[50px] px-8 rounded-[4px] font-sans text-[13px] font-semibold tracking-[0.8px] uppercase select-none cursor-pointer transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] bg-accent text-white hover:bg-accent-light hover:-translate-y-0.5 hover:shadow-[0_10px_28px_rgba(26,122,110,0.35)]'
const btnOutline = 'inline-flex items-center justify-center gap-2 min-h-[50px] px-8 rounded-[4px] font-sans text-[13px] font-semibold tracking-[0.8px] uppercase select-none cursor-pointer transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] bg-transparent text-white border-[1.5px] border-white/65 hover:bg-white/10 hover:border-white'

export default function Properties() {
  const [selectedProperty, setSelectedProperty] = useState(null)
  useScrollReveal()

  return (
    <main className="w-full overflow-x-hidden">

      {/* Hero */}
      <section className="relative pt-[160px] px-[52px] pb-[100px] overflow-hidden bg-gradient-to-br from-[#0a1520] to-[#1a3040] flex items-center justify-center text-center min-h-screen">
        <div className="absolute inset-0 z-0" aria-hidden="true">
          <svg className="w-full h-full" viewBox="0 0 800 400" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
            <rect x="600" y="50" width="240" height="300" stroke="rgba(255,255,255,0.06)" strokeWidth="1" rx="4" />
            <rect x="640" y="80" width="160" height="240" stroke="rgba(255,255,255,0.05)" strokeWidth="1" rx="4" />
            <rect x="20" y="100" width="120" height="180" stroke="rgba(255,255,255,0.06)" strokeWidth="1" rx="2" />
            <line x1="0" y1="300" x2="800" y2="100" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
          </svg>
        </div>
        <div className="relative z-10 max-w-[700px]">
          <p className={`${sectionKicker} !text-[#22a08f]`}>Our Portfolio</p>
          <h1 className="text-[clamp(36px,5vw,62px)] font-black text-white mb-5 tracking-[-0.02em]">Explore Our Properties</h1>
        </div>
      </section>

      {/* Info Strip */}
      <div className="flex items-center justify-center flex-wrap gap-y-2 bg-accent py-3.5 px-[52px] overflow-hidden max-md:py-3 max-md:px-5">
        {['All properties are legally verified', 'DTCP & RERA approved options available', 'End-to-end documentation support', 'Contact us for pricing & site visits'].map(text => (
          <span key={text} className="text-[13px] font-semibold text-white/90 tracking-wide px-6 border-r border-white/30 last:border-r-0 max-md:px-3 max-md:text-[12px] max-md:border-r-0">
            {'\u2736'} {text}
          </span>
        ))}
      </div>

      {/* Properties */}
      <section className="py-18 pb-23 max-sm:py-12 bg-soft">
        <div className="max-w-[1280px] mx-auto px-[52px] max-lg:px-8 max-sm:px-5">

          <div className="text-center mb-12 reveal">
            <p className={sectionKicker}>Our Layouts</p>
            <h2 className="text-[clamp(28px,3.5vw,50px)] font-extrabold mb-4 text-ink leading-[1.08]">Premium Approved Properties</h2>
            <p className="text-body max-w-[540px] mx-auto m-0">Click on a property card to view full details and explore individual plot availability.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {properties.map((property, i) => (
              <div key={property.id} className={`reveal reveal-delay-${i + 1}`}>
                <PropertyCard
                  property={property}
                  onOpen={() => setSelectedProperty(property)}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Property Details Popup Modal */}
      {selectedProperty && (
        <PropertyDetailsModal
          property={selectedProperty}
          onClose={() => setSelectedProperty(null)}
        />
      )}

      {/* Banner */}
      <section className="reveal scale relative bg-ink py-16 px-[52px] max-md:py-12 max-md:px-6">
        <div className="max-w-[1100px] mx-auto flex items-center justify-between gap-10 flex-wrap max-md:flex-col">
          <div>
            <h2 className="text-[clamp(24px,3vw,36px)] font-extrabold text-white mb-2.5">{"Can't Find What You're Looking For?"}</h2>
          </div>
          <div className="flex gap-3.5 shrink-0 flex-wrap">
            <Link to="/contact" className={btnPrimary}>Share Your Requirements</Link>
            <a href="tel:+918667320187" className={btnOutline}>Call Us Directly</a>
          </div>
        </div>
      </section>

    </main>
  )
}
