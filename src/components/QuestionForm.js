import { useState } from 'react'

function QuestionForm() {
    const [inputValue, setInputValue] = useState(`Pour toutes questions, c'est ici !`)
    return (
        <div>
            <textarea
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button onClick={() => alert(inputValue)}>Alertez moi 🚨</button>
        </div>
    )
}

export default QuestionForm 