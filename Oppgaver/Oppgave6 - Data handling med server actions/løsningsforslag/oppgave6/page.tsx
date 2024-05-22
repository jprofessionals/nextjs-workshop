import {SubmitButton} from "./submit-button";


export default function Oppgave6() {

    const handleSubmit = async (fromData: FormData) => {
        'use server'
        console.log('Album ID: ', fromData.get('album'))
    }

    return (
        <main>
            <form>
                <input type={'number'} name={'album'}/>
                <SubmitButton formAction={handleSubmit}>Submit</SubmitButton>
            </form>
        </main>
    );
}