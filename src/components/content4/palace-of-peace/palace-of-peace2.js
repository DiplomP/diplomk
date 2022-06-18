import './palace-of-peace.css';

function Palace2() {


	return (
		<div className="palace1-container">
				<div className="palace-text">
				<h1>Дворец бракосочетания</h1>
				<p>
				Дворец бракосочетания – уникальный дворец, не имеющий аналогов во всей стране. Здание в национальном стиле построено в единственном экземпляре на деньги Карачагаканского консорциума, ведущего добычу нефти и газа на территории ЗКО. Торжественно открылся дворец в День независимости Казахстана.
				<br/>
				Здание состоит из двух залов для торжественной регистрации, а в одном из них даже можно проводить различные конференции и презентации. В здании дворца работает ресторан на 300 мест, поэтому здесь можно не только официально зарегистрировать свой брак, но и торжественно отметить это радостное событие. Рядом со зданием есть парковка на несколько десятков автомобилей.
				<br/>
				Дворец построен из мрамора и гранита – из самых дорогостоящих материалов.
				</p>
			</div>
			<div className="palace-image">
				<div class="wrapper-9-1">
					<input type="radio" name="point" id="slide1-9-1" checked/>
					<input type="radio" name="point" id="slide2-9-1" checked/>
					<input type="radio" name="point" id="slide3-9-1" checked/>
					<input type="radio" name="point" id="slide4-9-1" checked/>
					<input type="radio" name="point" id="slide5-9-1" checked/>
					<div class="slider-9-1">
						<div class="slides-9-1 slide1-9-1"></div>
						<div class="slides-9-1 slide2-9-1"></div>
						<div class="slides-9-1 slide3-9-1"></div>
						<div class="slides-9-1 slide4-9-1"></div>
						<div class="slides-9-1 slide5-9-1"></div>
					</div>	
					<div class="controls-9-1">
						<label for="slide1-9-1"/>
						<label for="slide2-9-1"/>
						<label for="slide3-9-1"/>
						<label for="slide4-9-1"/>
						<label for="slide5-9-1"/>
					</div>
				</div>
			</div>
		</div>
	)
  }
  
  export default Palace2