import { Link } from "react-router-dom";
import './caves2.css';

function cavescontent2() {
	return (
		<div className="caves-container2">
			<div className="caves-text2">
				<h1>Пещера Жылаган Ата</h1>
				<p>Плачущая скала, - так называют место, куда стремятся попасть очень многие паломники. Но с этим, есть определенные сложности,- попасть туда намного сложнее, чем во многие другие святые места.
				<br/>
				Жылаган ата находится у подножия горного хребта Каратау, примерно в 100 км. от г. Туркестан, в Туркестанской области южного Казахстана. 
				<br/>
				Проехав опасный участок, мы увидели первое чудо на нашем пути,- колодец, с очень чистой и вкусной водой, который находился на большой высоте, там, – где колодец, по логике вообще не может быть!
				<br/>
				Спустившись вниз, мы были очарованы этим волшебным местом, в котором сочетались: удивительная чистота небольшой и очень красивой горной речки, потрясающая чистота воздуха и просто необъяснимое спокойствие разума и тела, после этого нелегкого перехода.
				<br/>
				Мы очень легко и по доброму пообщались со смотрителем места (шыракши), и он повел нас к той самой волшебной пещере и плачущей скале.
				<br/>
				Природный горный желоб, который показал нам шыракши, был сухой и тихий. Мы расположились полукругом у подножия скалы и смотритель стал вслух читать молитву.
				<br/>
				Неоднократно были случаи проверок, когда специальные комиссии приезжали сюда с целью раскрыть секрет и понять, как это происходит, но всегда уезжали ни с чем и тайна места Жылаган ата по прежнему не раскрыта.
				<br/>
				От поездки остались незабываемы впечатления, память о которых, я думаю, сохранится на всю жизнь!
				</p>
			</div>
			<div className="caves-image2">
			<div class="wrapper-2">
					<input type="radio" name="point" id="slide1-2" checked/>
					<input type="radio" name="point" id="slide2-2" checked/>
					<input type="radio" name="point" id="slide3-2" checked/>
					<input type="radio" name="point" id="slide4-2" checked/>
					<input type="radio" name="point" id="slide5-2" checked/>
					<div class="slider-2">
						<div class="slides-2 slide1-2"></div>
						<div class="slides-2 slide2-2"></div>
						<div class="slides-2 slide3-2"></div>
						<div class="slides-2 slide4-2"></div>
						<div class="slides-2 slide5-2"></div>
					</div>
					<div class="controls-2">
						<label for="slide1-2"/>
						<label for="slide2-2"/>
						<label for="slide3-2"/>
						<label for="slide4-2"/>
						<label for="slide5-2"/>
					</div>
				</div>
			</div>
				<button className="caves-button2">
					<Link to="/content2" className="caves-button2-link">
						Назад
					</Link>
				</button>
		</div>
	)
  }
  
  export default cavescontent2