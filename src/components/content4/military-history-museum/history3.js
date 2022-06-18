import './history-museum.css';

function History3() {
	return (
		<div className="museum1-container">
			<div className="museum-text">
				<h1>Центральный государственный музей Республики Казахстан</h1>
				<p>
				Центральный государственный музей Республики Казахстан, открытый в 1931 году, является одним из самых значительных музеев Центральной Азии. Его коллекция имеет более 200 тысяч экспонатов.
				<br/>
				Собрание музея, в организации которого участвовал языковед Владимир Даль, берет свое начало в первой половине 19 столетия. Изначально музей располагался в здании Кафедрального собора и только в 1985 году переехал в настоящее здание, которое считается одной из красивейших построек Алма-Аты.
				<br/>
				В четырех экспозиционных залах и выставочных галереях музея раскрывается история Казахстана с доисторических времен до сегодняшнего дня. Среди экспонатов музея встречаются окаменелости деревьев, отпечатки различных насекомых и рыб, возраст которых измеряется миллионами лет, а также древние погребальные сооружения, драгоценности и много других интересных экспонатов.
				</p>
			</div>
			<div className="museum-image">
				<div class="wrapper-11-2">
					<input type="radio" name="point" id="slide1-11-2" checked/>
					<input type="radio" name="point" id="slide2-11-2" checked/>
					<input type="radio" name="point" id="slide3-11-2" checked/>
					<input type="radio" name="point" id="slide4-11-2" checked/>
					<input type="radio" name="point" id="slide5-11-2" checked/>
					<div class="slider-11-2">
						<div class="slides-11-2 slide1-11-2"></div>
						<div class="slides-11-2 slide2-11-2"></div>
						<div class="slides-11-2 slide3-11-2"></div>
						<div class="slides-11-2 slide4-11-2"></div>
						<div class="slides-11-2 slide5-11-2"></div>
					</div>	
					<div class="controls-11-2">
						<label for="slide1-11-2"/>
						<label for="slide2-11-2"/>
						<label for="slide3-11-2"/>
						<label for="slide4-11-2"/>
						<label for="slide5-11-2"/>
					</div>
				</div>
			</div>
		</div>
	)
  }
  
  export default History3