import './sight-borovoye.css';
import { useState } from 'react';
import Sightcontent21 from './sight-borovoye1';
import Sightcontent22 from './sight-borovoye2';
import Sightcontent23 from './sight-borovoye3';

function Sightcontent2() {
	const [step, setStep] = useState(0);

	const FormTitles = ["sight-borovoye1", "sight-borovoye2", "sight-borovoye3"];

	const StepDisplay = () =>{
		if (step === 0){
			return <Sightcontent21/>
		} else if (step === 1){
			return <Sightcontent22/>
		} else{
			return <Sightcontent23/>
		}
	}
	return (
		<div className="sight-container">
			<div className="sight-container-all">{StepDisplay()}</div>
			<button className={step === 0 ? "sight-button-hidden" : step === 1 ? "sight-borovoye-button-1"     : "sight-borovoye-button-1"    }
			disabled={step === 0}
			onClick={() => {
				setStep((currStep) => currStep - 1);
			}}>
				{step === 0 ? "" : step === 1 ? "Курорт Борового" : "Пляжный отдых и рыбалка"}
			</button>
			<button className={step === 0 ? "sight-borovoye-button-2" : step === 1 ? "sight-borovoye-button-2"   : "sight-button-hidden" }
			disabled={step === FormTitles.length - 1}
			onClick={() => {
				setStep((currStep) => currStep + 1);
			}}> {step === 0 ? "Пляжный отдых и рыбалка" : step === 1 ? "Лечение в Боровом" : ""}
			</button>
		</div>
	)
  }
  
  export default Sightcontent2