import './sight-almaty.css';

function Sightcontent1() {
	return (
		<div className="sight1-container">
			<div className="sight-text">
				<h1>Чарынский каньон</h1>
				<p> Чарынский каньон - уникальный природный памятник, расположенный в Казахстане, примерно в двухстах километрах восточнее города Алматы. Каньон входит в состав Чарынского национального парка и пользуется большой популярностью среди туристов.
				<br/>
				Чарынский каньон - весьма впечатляющее место. Имея длину более 150 километров, глубина каньона в некоторых местах достигает 300 метров. Возраст каньона - более двенадцати миллионов лет. Это по-настоящему древнее и почтенное место, где до сих пор сохранилась настоящая реликтовая флора. В частности, здесь можно найти уникальную ясеневую рощу, которая пережила ледниковый период и ныне официально признана памятником природы.
				<br/>
				Кроме того, Чарынский каньон - одно из красивейших мест Казахстана, словно магнит притягивающее путешественников и эко-туристов. Ландшафт здесь очень переменчивый, что порождает огромное биологическое разнообразие. Одних только птиц здесь гнездится более ста разновидностей, а число растений доходит до полутора тысяч видов. Чарынский каньон - это настоящий рай для поклонников пешего туризма и всех любителей дикой природы.
				</p>
			</div>
			<div className="sight-image">
				<div class="wrapper-7">
					<input type="radio" name="point" id="slide1-7" checked/>
					<input type="radio" name="point" id="slide2-7" checked/>
					<input type="radio" name="point" id="slide3-7" checked/>
					<input type="radio" name="point" id="slide4-7" checked/>
					<input type="radio" name="point" id="slide5-7" checked/>
					<div class="slider-7">
						<div class="slides-7 slide1-7"></div>
						<div class="slides-7 slide2-7"></div>
						<div class="slides-7 slide3-7"></div>
						<div class="slides-7 slide4-7"></div>
						<div class="slides-7 slide5-7"></div>
					</div>	
					<div class="controls-7">
						<label for="slide1-7"/>
						<label for="slide2-7"/>
						<label for="slide3-7"/>
						<label for="slide4-7"/>
						<label for="slide5-7"/>
					</div>
				</div>
			</div>
		</div>
	)
  }
  
  export default Sightcontent1