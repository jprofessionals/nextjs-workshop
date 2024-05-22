import {SubmitButton} from "@/app/oppgave3/submit-button";


export default function Oppgave3() {

    return (
        <main>
            <form>
                <input type={'number'} name={'album'}/>
                <SubmitButton>Submit</SubmitButton>
            </form>
        </main>
    );
}