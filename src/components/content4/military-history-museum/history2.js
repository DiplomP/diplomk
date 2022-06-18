import './history-museum.css';

function History2() {
	return (
		<div className="museum1-container">
			<div className="museum-text">
				<h1>Археологический Музей Академии наук Казахстана</h1>
				<p>
				Археологический Музей Национальной Академии наук Казахстана был открыт в 1973 году, и расположен в городе Алматы. Выставочные экспозиции музея показывают историю развития Казахстана, начиная с древних времен и до Средних веков. Посетители здесь могут ознакомиться с традициями и культурным наследием жителей Казахстана.
				<br/>
				Археологический Музей проводит постоянные выставки, на которых посетители знакомятся с культурой и традициями казахского народа. Также Археологический музей наук Казахстана проводит выездные международные выставки, которые открывают миру многовековую историю Казахстана. В музее хранится уникальная коллекция артефактов.
				<br/>
				Возле музея туристы смогут увидеть бронзовый памятник известному казахскому поэту - Жамбылу Жабаеву, который расположен перед зданием музея.
				</p>
			</div>
			<div className="museum-image">
				<div class="wrapper-11-1">
					<input type="radio" name="point" id="slide1-11-1" checked/>
					<input type="radio" name="point" id="slide2-11-1" checked/>
					<input type="radio" name="point" id="slide3-11-1" checked/>
					<input type="radio" name="point" id="slide4-11-1" checked/>
					<input type="radio" name="point" id="slide5-11-1" checked/>
					<div class="slider-11-1">
						<div class="slides-11-1 slide1-11-1"></div>
						<div class="slides-11-1 slide2-11-1"></div>
						<div class="slides-11-1 slide3-11-1"></div>
						<div class="slides-11-1 slide4-11-1"></div>
						<div class="slides-11-1 slide5-11-1"></div>
					</div>	
					<div class="controls-11-1">
						<label for="slide1-11-1"/>
						<label for="slide2-11-1"/>
						<label for="slide3-11-1"/>
						<label for="slide4-11-1"/>
						<label for="slide5-11-1"/>
					</div>
				</div>
			</div>
		</div>
	)
  }
  
  export default History2