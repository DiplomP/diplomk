import { Link } from "react-router-dom";
import './index.css';
function home() {
	return (	
		<div className="content-11">
			<div className="content-span">
				<h1 className="h1">
					Достопримечательности Казахстана
				</h1>
			</div>
			<Link className="content-menu-text" to="/content">
			<div className="content-menu">
				<span className="text-btn1">Города</span>
			</div>
			</Link>
			<Link className="content-menu-text" to="/content2">
			<div className="content-menu-2">
				<span className="text-btn2">Пещеры</span>
			</div>
			</Link>
			<Link className="content-menu-text" to="/content3">
			<div className="content-menu-3">
				<span className="text-btn3">Достопримечательности</span>
			</div>
			</Link>
			<Link className="content-menu-text" to="/content4">
			<div className="content-menu-4">
				<span className="text-btn4">Дворцы, Храмы, Музей</span>
			</div>
			</Link>
		</div>
	)
  }
  
  export default home