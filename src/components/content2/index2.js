import { Link } from "react-router-dom";
import './index2.css';

function content2() {
	return (
		<div className="content-12">
			<div className="content-span-2">
				<h1>
					Пещеры
				</h1>
			</div>
			<Link className="text-content2" to="/content2/content-caves">
			<div className="content-south">
					<span className="text-btn1">Плачущая пещера</span>
			</div>
			</Link>
			<Link className="text-content2" to="/content2/content-caves2">
			<div className="content-south-2">
					<span className="text-btn2">Пещера Жылаган Ата</span>
			</div>
			</Link>
			<Link className="text-content2" to="/content2/content-caves3">
			<div className="content-south-3">
					<span className="text-btn3">Пещера Кенесары</span>
			</div>
			</Link>
			<Link className="text-content2" to="/content2/content-caves4">
			<div className="content-south-4">
					<span className="text-btn4">Священная пещера Ак мечеть</span>
			</div>
			</Link>
		</div>
	)
  }
  
  export default content2