import './cathedral-of-chirst.css';
import { useState } from "react";
import Cathedra1 from './cathedral1';
import Cathedra2 from './cathedral2';
import Cathedra3 from './cathedral3';

function Cathedralofchirst() {
	const [step, setStep] = useState(0);

	const FormTitles = ["cathedral1", "cathedral2", "cathedral3"];

	const StepDisplay = () =>{
		if (step === 0){
			return <Cathedra1/>
		} else if (step === 1){
			return <Cathedra2/>
		} else{
			return <Cathedra3/>
		}
	}
	return (
		<div className="chirst-container">
			<div className="chirst-container-all">{StepDisplay()}</div>
			<button className={step === 0 ? "chirst-button-hidden" : step === 1 ? "chirst-button-1"  : "chirst-button-1" }
			disabled={step === 0}
			onClick={() => {
				setStep((currStep) => currStep - 1);
			}}>
				{step === 0 ? "" : step === 1 ? "Храм христа спасителя" : "Церковь в Павлодаре"}
			</button>
			<button className={step === 0 ? "chirst-button-2"  : step === 1 ? "chirst-button-2"  : "chirst-button-hidden"}
			disabled={step === FormTitles.length - 1}
			onClick={() => {
				setStep((currStep) => currStep + 1);
			}}> {step === 0 ? "Церковь в Павлодаре" : step === 1 ? "Храм Василия Блаженного" : ""}
			</button>
		</div>
	)
  }
  
  export default Cathedralofchirst