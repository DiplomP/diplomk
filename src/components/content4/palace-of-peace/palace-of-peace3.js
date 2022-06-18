import './palace-of-peace.css';

function Palace3() {


	return (
		<div className="palace1-container">
				<div className="palace-text">
				<h1>Дворец Независимости</h1>
				<p>
				Государственное коммунальное казенное предприятие «Дворец Независимости» акимата города Астаны появилось по инициативе президента Республики Казахстан в 2008 году. Здание выполнено в форме остова юрты, части древнего жилища казахов — кереге. Так называлось сборно-раздвижное основание юрты, состоящее из отдельных секций решеток, соединенных между собой. Такое архитектурное решение создает эффект соединения традиций прошлого и современных технологий настоящего.
				<br/>
				Дворец является площадкой для проведения официальных государственных мероприятий, форумов, встреч, съездов. Техническое оснащение сооружения позволяет также организовывать концерты, выставки и праздничные события.
				<br/>
				Здесь проходят многие знаковые события, в том числе саммиты международного уровня. Дворец занимает важное место не только в политической, но и в культурной жизни страны. Здесь организуются многие передвижные выставки из других стран. Иногда Дворец Независимости в Астане называют культурным центром.
				</p>
			</div>
			<div className="palace-image">
				<div class="wrapper-9-2">
					<input type="radio" name="point" id="slide1-9-2" checked/>
					<input type="radio" name="point" id="slide2-9-2" checked/>
					<input type="radio" name="point" id="slide3-9-2" checked/>
					<input type="radio" name="point" id="slide4-9-2" checked/>
					<input type="radio" name="point" id="slide5-9-2" checked/>
					<div class="slider-9-2">
						<div class="slides-9-2 slide1-9-2"></div>
						<div class="slides-9-2 slide2-9-2"></div>
						<div class="slides-9-2 slide3-9-2"></div>
						<div class="slides-9-2 slide4-9-2"></div>
						<div class="slides-9-2 slide5-9-2"></div>
					</div>	
					<div class="controls-9-2">
						<label for="slide1-9-2"/>
						<label for="slide2-9-2"/>
						<label for="slide3-9-2"/>
						<label for="slide4-9-2"/>
						<label for="slide5-9-2"/>
					</div>
				</div>
			</div>
		</div>
	)
  }
  
  export default Palace3