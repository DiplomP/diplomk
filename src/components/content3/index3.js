import { Link } from "react-router-dom";
import './index3.css';

function content3() {
	return (
		<div className="content-13">
			<div className="content-span">
				<h1>
					Достопримечательности
				</h1>
			</div>
			<Link className="text-content-3" to="/content3/sight-of-almaty">
			<div className="content-west">
					<span className="text-btn1">Достопримечательности Алматы</span>
			</div>
			</Link>
			<Link className="text-content-3" to="/content3/bukhtarma-lake">
			<div className="content-west-2">		
					<span className="text-btn2">Озера</span>
			</div>
			</Link>
			<Link className="text-content-3" to="/content3/borovoye-sights">
			<div className="content-west-3">	
					<span className="text-btn3">Достопримечательности Боровое</span>
			</div>
			</Link>
			<Link className="text-content-3" to="/content3/sights-of-pavlodar">
			<div className="content-west-4">
					<span className="text-btn4">Достопримечательности Павлодара</span>
			</div>
			</Link>
		</div>
	)
  }
  
  export default content3