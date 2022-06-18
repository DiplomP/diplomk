import { Link } from "react-router-dom";
import './index4.css';

function content4() {
	return (
		<div className="content-14">
			<div className="content-span">
				<h1>
					Интересные места
				</h1>
			</div>
			<Link className="text-content-4" to="/content4/palace-of-peace-and-accord">
			<div className="content-eart">
					<span className="text-btn1">Дворцы Казахстана</span>
			</div>
			</Link>
			<Link className="text-content-4" to="/content4/military-history-museum">
			<div className="content-eart-2">
					<span className="text-btn2">Музеи Казахстана</span>
			</div>
			</Link>
			<Link className="text-content-4" to="/content4/cathedral-of-christ-the-savior">
			<div className="content-eart-3">
					<span className="text-btn3">Храмы Казахстана</span>
			</div>
			</Link>
			<Link className="text-content-4" to="/content4/alakolsky-state-nature-reserve">
			<div className="content-eart-4">
					<span className="text-btn4">Заповедники Казахстана</span>
			</div>
			</Link>
		</div>
	)
  }
  
  export default content4